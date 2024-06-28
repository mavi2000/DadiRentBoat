import twilio from "twilio";
const sID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNo = process.env.TWILIO_PHONE_NUMBER;
const client = new twilio(sID, authToken);
import rentalOTP from "../models/rentalOTP.js";
export const generateOTP = async (req, res) => {
  try {
    const { userId, phone } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
    const message = await client.messages.create({
      body: `Your OTP code is ${otp}`,
      from: phoneNo,
      to: phone,
    });

    const thisOTP = new rentalOTP({
      userId: userId,
      otp: otp,
      isValid: true,
    });

    await thisOTP.save();
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
export const verifyOTP = async (req, res) => {
  try {
    const { otp } = req.body;
    const validOtp = await rentalOTP.findOne({ otp });
    if (validOtp.isValid) {
      await rentalOTP.findOneAndUpdate({ otp }, { isValid: false });
      return res.status(200).json({ message: "OTP verified successfully" });
    }
    return res.status(200).json({ message: "OTP does not match" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
