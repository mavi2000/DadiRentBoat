import express from "express";
const router = express.Router();
import multer from "multer";
import { createAgreement,getAgreementByUserId } from "../controllers/RentalAgreementControllers.js";
const multipleUpload = multer({ dest: "uploads/" }).fields([
  { name: "docFront", maxCount: 1 },
  { name: "docBack", maxCount: 1 },
]);
router.post("/create-agreement", multipleUpload, createAgreement);

router.get("/getAgreementByUserId/:userId", getAgreementByUserId);
export default router;
