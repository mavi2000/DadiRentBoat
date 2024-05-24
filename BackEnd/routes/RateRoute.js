import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import { addRate, getAllRates } from "../controllers/RateController.js";

router.post("/add-Rates", addRate);
router.post("/get-Rates", getAllRates);

export default router;
