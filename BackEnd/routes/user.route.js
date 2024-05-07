import express from 'express';
import multer from 'multer';
import { auth } from '../middlewares/auth.js';
import { login, signup, updateUser } from '../controllers/user.controller.js';
import {
  forgetPasswordStepOne,
  forgetPasswordStepTwo,
  resetPassword,
} from '../controllers/otp.controller.js';

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgetPasswordStepOne);
router.post('/forgot-password/verify-otp', forgetPasswordStepTwo);
router.post('/forgot-password/reset-password', resetPassword);
router.post('/update-user', auth, upload.single('avatar'), updateUser);

export default router;
