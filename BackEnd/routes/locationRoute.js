import express from "express";
const router = express.Router();
import {
  createLocation,
  getLocation,
  updateLocation,
} from "../controllers/LocationController.js";

router.post("/add-location", createLocation);
router.get("/get-location/:id", getLocation);
router.patch("/update-location/:id", updateLocation);

export default router;
