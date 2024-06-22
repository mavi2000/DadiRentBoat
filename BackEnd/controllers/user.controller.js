import Joi from "joi";
import {
  generateSalt,
  generatePassword,
  validatePassword,
} from "../utils/password.util.js";
import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import { uploadImages } from "../utils/cloudinaryConfig.js";
export const signup = async (req, res, next) => {
  const validation = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    password: Joi.string().required(),
    roles: Joi.string().valid("user", "admin").default("user"),
  }).validate(req.body);

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message });
  }

  try {
    const { username, email, phoneNumber, password, roles } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser !== null) {
      return res
        .status(400)
        .json({ message: "user with this email already exists." });
    }

    const salt = await generateSalt();
    const hashPassword = await generatePassword(password, salt);
    const user = await User.create({
      username,
      email,
      phoneNumber,
      password: hashPassword,
      roles, // Include roles in the user creation
    });

    const token = jwt.sign({ _id: user._id, email }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });

    return res.status(200).json({ user, token, message: "signup successful" });
  } catch (error) {
    console.log("signup error: ", error);
    return res.status(500).json({ error: error });
  }
};
export const login = async (req, res, next) => {
  const validation = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required(),
  }).validate(req.body);

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message });
  }

  try {
    const { email, password } = req.body;
    let user = await User.findOne({
      $or: [{ email: email }, { username: email }, { phoneNumber: email }],
    });
    if (user === null) {
      return res.status(404).json({ message: "user not found." });
    }

    const isPasswordCorrect = validatePassword(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "wrong credentials" });
    }
    const token = jwt.sign({ _id: user._id, email }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });

    return res.status(200).json({ user, token, message: "login successfull" });
  } catch (error) {
    console.log("login error: ", error);
    return res.status(500).json({ error: error });
  }
};
// export const updateUser = async (req, res, next) => {
//   const validation = Joi.object({
//     username: Joi.string().required(),
//     phoneNumber: Joi.string().required(),
//     dateOfBirth: Joi.date().required(),
//     languages: Joi.array().items(Joi.string()).required(),
//     country: Joi.string().required(),
//     city: Joi.string().required(),
//     address: Joi.string().required(),
//     detailedDescription: Joi.string().required(),
//     gender: Joi.string().required(),
//     gstNumber: Joi.string().required(),
//     geoPreference: Joi.string().valid('specificRegion', 'globally').required(),
//     geoPreferenceCity: Joi.string().required(),
//   }).validate(req.body);

//   if (validation.error) {
//     return res
//       .status(400)
//       .json({ message: validation.error.details[0].message });
//   }

//   try {
//     const {
//       username,
//       phoneNumber,
//       dateOfBirth,
//       languages,
//       country,
//       city,
//       address,
//       detailedDescription,
//       gender,
//       gstNumber,
//       geoPreference,
//       geoPreferenceCity,
//     } = req.body;

//     const userId = req.user._id;
//     let avatar = null;

//     const user = await User.findOne({ _id: userId });
//     if (!user) {
//       return res.status(404).json({ message: 'user not found.' });
//     }

//     user.username = username;
//     user.phoneNumber = phoneNumber;
//     user.dateOfBirth = dateOfBirth;
//     user.languages = languages;
//     user.country = country;
//     user.city = city;
//     user.address = address;
//     user.detailedDescription = detailedDescription;
//     user.gender = gender;
//     user.gstNumber = gstNumber;
//     user.geoPreference = geoPreference;
//     user.geoPreferenceCity = geoPreferenceCity;

//     if (req.file) {
//       avatar = await uploadImages(req.file);
//       user.avatar = avatar;
//     }

//     await user.save();

//     return res.status(200).json({ message: 'User updated successfully', user });
//   } catch (error) {
//     console.log('error updating the user: ', error);
//     return res.status(500).json({ error });
//   }
// };
export const logout = async (req, res, next) => {
  res.clearCookie("accessToken", {
    sameSite: "none",
    secure: true,
  });

  res.status(200).send("User has been logged out.");
};
export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
      runValidators: true,
    });
    return res
      .status(200)
      .json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};
// auth controller
export const authController = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User does not exists" });
    }
    const { password: pass, ...rest } = user._doc;
    res.status(200).json({ user: rest });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
