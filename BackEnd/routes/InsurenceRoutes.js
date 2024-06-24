import express from "express";
const router = express.Router();
import {
  addInsurance,
  getInsurance,
  updateInsurance,
} from "../controllers/InsurenceController.js";

router.post("/add-Insurence", addInsurance);
router.get("/get-insurance/:id", getInsurance);
router.patch("/update-insurance/:id", updateInsurance);
export default router;
