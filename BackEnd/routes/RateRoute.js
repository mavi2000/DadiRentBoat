import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import {
  addRate,
  getAllRates,
  getRateById,
  updateRate,

} from "../controllers/RateController.js";

router.post("/add-Rates", addRate);
router.post("/get-Rates", getAllRates);
router.get("/get-rate/:id", getRateById);
router.patch("/update-rate/:id", updateRate);

export default router;
