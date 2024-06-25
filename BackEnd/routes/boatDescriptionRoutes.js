import express from "express";
const router = express.Router();
import {
  createBoatDescription,
  getBoatDescription,
  updateBoatDescription,
} from "../controllers/BoatDescriptionController.js";

router.post("/add-Description", createBoatDescription);
router.get("/get-boat-description/:id", getBoatDescription);
router.patch("/update-boat-description/:id", updateBoatDescription);

export default router;
