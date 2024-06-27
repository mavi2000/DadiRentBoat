import express from "express";
const router = express.Router();
import { createAgreement } from "../controllers/RentalAgreementControllers.js";
router.post("/create-agreement", createAgreement);
export default router;
