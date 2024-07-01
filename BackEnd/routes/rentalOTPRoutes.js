import express from "express";
import { generateOTP, verifyOTP } from "../controllers/RentalOTPControllers.js";
const router = express.Router();
router.post("/generate-otp", generateOTP);
router.patch("/verify-otp", verifyOTP);
export default router;
