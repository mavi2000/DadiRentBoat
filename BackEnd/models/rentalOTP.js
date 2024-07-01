import mongoose from "mongoose";
const rentalOTPSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  isValid: {
    type: Boolean,
    required: true,
  },
});
const rentalOTP = mongoose.model("rentalotp", rentalOTPSchema);
export default rentalOTP;
