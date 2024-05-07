import bcrypt from 'bcryptjs';
import { sendEmail } from '../utils/sendEmail.js';
import User from '../models/User.model.js';
import OTP from '../models/Otp.model.js';
import Joi from 'joi';
import jwt from 'jsonwebtoken';

const jwtKey = process.env.JWT_KEY;

export const sendOTP = async (email, subject, generatedOTP, duration = 24) => {
  try {
    if (!email || !subject || !generatedOTP) {
      throw new Error('Please fill all the sendEmail credentials');
    }
    // clear any old record
    await OTP.deleteOne({ email });
    const html = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Email</title>
</head>

<body style="font-family: Arial, sans-serif; background-color: #1B1B1B; color: white !important; padding:1.3rem;">
  <div style="text-align: center; margin:auto;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <h1 style="color: #a240be; text-align: center;">Reset Your Account Password</h1>
    <p style="text-align: left;">You've received this message because a password reset request has been
      initiated for your account associated with this email address. Please enter the code below to reset your password:
    </p>
    <h2
      style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-style:normal;font-weight:bold;color:#313030;">
      Your One-Time Verification PIN - Valid For ${
        duration * 60
      } Seconds Is</h2>
    <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; text-align: center;">
      <h1
        style="Margin:0;line-height:55px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-style:normal;font-weight:bold;color:#0ce244">
        <strong>${generatedOTP}</strong>
      </h1>
    </div>
    <p style="text-align: left;">If you did not initiate this request, please disregard this email.</p>
  </div>
<br>
<br>
  <p style="text-align: center; color: gray;">
    ISA Consulting © 2024. All Rights Reserved.</p>
  <p style="text-align: center; color: gray;">
    ISA Consulting Group 400 North Ashley Drive Suite 2600 Tampa, FL 33602</p>
</body>
</html>
`;
    await sendEmail(email, subject, html);
  } catch (error) {
    throw new Error(`An error occurred in OTP sending: ${error.message}`);
  }
};

export const forgetPasswordStepOne = async (req, res, next) => {
  const value = Joi.object({
    email: Joi.string().email().required(),
  }).validate(req.body);
  if (value.error) {
    // return res.status(400).json({ success: false, error: value.error.details[0].message })
    next(createError(400, value.error.details[0].message));
  }
  console.log(jwtKey);
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const otp = Math.floor(100000 + Math.random() * 900000);
      const token = jwt.sign(
        {
          id: user._id,
          otp,
          isVerified: false,
        },
        jwtKey,
        { expiresIn: '30m' }
      );

      await sendOTP(req.body.email, 'Forgot Password', otp);
      return res
        .status(200)
        .json({ success: true, message: 'OTP sent to your email', token });
    } else {
      next(createError(400, 'Email not found!'));
    }
  } catch (err) {
    next(err);
  }
};

export const forgetPasswordStepTwo = async (req, res, next) => {
  // save token in local storag or any other way and send it in body
  const value = Joi.object({
    token: Joi.string(),
    otp: Joi.number().required(),
  }).validate(req.body);

  if (value.error) {
    next(createError(400, value.error.details[0].message));
  }

  try {
    const { otp, token } = req.body;
    const decoded = jwt.verify(token, jwtKey);
    // type of decoded.otp is?

    console.log(typeof decoded.otp + ' ' + typeof otp);
    if (String(decoded.otp) === String(otp)) {
      const newToken = jwt.sign(
        {
          id: decoded.id,
          isVerified: true,
        },
        jwtKey,
        { expiresIn: '30d' }
      );
      return res
        .status(200)
        .json({ success: true, message: 'OTP verified', token: newToken });
    } else {
      next(createError(400, 'Wrong OTP'));
    }
  } catch (err) {
    next(err);
  }
};

const createError = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

export const resetPassword = async (req, res, next) => {
  const value = Joi.object({
    token: Joi.string(),
    password: Joi.string().min(3).required(),
  }).validate(req.body);

  if (value.error) {
    next(createError(400, value.error.details[0].message));
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const { password, token } = req.body;
    const hash = bcrypt.hashSync(password, salt);
    // const decoded = jwt.verify(req.headers.authorization, jwtKey)
    // decode the token
    const decoded = jwt.verify(token, jwtKey);
    console.log(decoded);

    if (!decoded.isVerified) {
      next(createError(400, 'Please verify your email with OTP first'));
      return;
    }
    const user = await User.findOneAndUpdate(
      { _id: decoded.id },
      { password: hash },
      { new: true }
    );
    if (user) {
      return res
        .status(200)
        .json({ success: true, message: 'Password reset successfully' });
    } else {
      next(createError(400, 'User not found'));
    }
  } catch (err) {
    next(err);
  }
};
