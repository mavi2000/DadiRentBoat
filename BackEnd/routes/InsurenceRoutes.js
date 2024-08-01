import express from "express";
import multer from "multer";
const router = express.Router();
import {
  addInsurance,
  getInsurance,
  updateInsurance,
} from "../controllers/InsurenceController.js";

const storage = multer.memoryStorage();

const upload = multer({ dest: 'uploads/' }).array('insuranceDocuments', 10);


router.post('/add-Insurence', upload, addInsurance);
router.get("/get-insurance/:id", getInsurance);
router.patch("/update-insurance/:id", updateInsurance);
export default router;
