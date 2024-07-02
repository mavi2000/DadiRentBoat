import express from "express";
import multer from "multer";
import { auth } from "../middlewares/auth.js";
import {
  login,
  signup,
  updateUser,
  logout,
  authController,
  getUser,
  updatePassword,
} from "../controllers/user.controller.js";
import {
  forgetPasswordStepOne,
  forgetPasswordStepTwo,
  resetPassword,
} from "../controllers/otp.controller.js";

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgetPasswordStepOne);
router.post("/forgot-password/verify-otp", forgetPasswordStepTwo);
router.post("/forgot-password/reset-password", resetPassword);
// router.post('/update-user', auth, upload.single('avatar'), updateUser);
// router.patch("/update-user", auth, upload.single("image"), updateUser);
// removing the image uploader middleware
// router.patch("/update-user", auth, updateUser);
router.post("/logout", logout);
router.get("/get-user/:id", getUser);
router.get("/checkAuth", auth, authController);
router.patch("/update-password", updatePassword);



// router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/auth/google/callback', passport.authenticate('google', { session: false, failureRedirect: `${AUTH_REDIRECT}/login` }), handleGoogleCallback);
export default router;
