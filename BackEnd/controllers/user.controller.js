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

  console.log("req.body",req.body)
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
    if (req.file) {
      let imageUrl = await uploadImages(req.file);
      user.image = imageUrl.secure_url;
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { ...req.body, image: user.image || "" },
      {
        new: true,
        runValidators: true,
      }
    );
    return res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.log(error);
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
// get user by id
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { password: pass, ...rest } = user._doc;
    return res.status(200).json({ user: rest });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// update user password controller
export const updatePassword = async (req, res) => {
  try {
    const { userId, oldPass, newPass } = req.body;
    const checkUser = await User.findById(userId);
    if (!checkUser) {
      return res.status(404).json({ message: "User does not exists" });
    }
    const { password } = checkUser;
    const isPasswordValid = await validatePassword(oldPass, password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }
    const salt = await generateSalt();
    const hashPassword = await generatePassword(newPass, salt);
    const updateUser = await User.findByIdAndUpdate(
      userId,
      {
        password: hashPassword,
      },
      { new: true, runValidators: true }
    );
    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};





// export const handleGoogleCallback = async (req, res, next) => {
//   try {
//       const token = jwt.sign({ ...userDataProperties(req.user) }, jwtKey, { expiresIn: '30d' });
//       const user = req.user;

//       // Set or update googleId field
//       user.googleId = req.user.id;

//       await user.save();

//       // return res.cookie("accessToken", token, cookieOptions()).redirect( `${AUTH_REDIRECT}`);
//       const authResponse = {
//           success: true,
//           message: "Login Successful",
//           userData: req.user,
//           token,
//       };

//       // return res.cookie("accessToken", token, cookieOptions()).redirect( `${AUTH_REDIRECT}`);
//       return res.cookie("accessToken", token, cookieOptions()).redirect(`${AUTH_REDIRECT}?userData=${encodeURIComponent(JSON.stringify(authResponse))}`);
//   } catch (err) {
//       next(err);
//   }
// };