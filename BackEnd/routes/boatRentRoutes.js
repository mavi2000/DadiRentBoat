import express from "express";
const router = express.Router();
import {
  RentBoat,
  getBoatRent,
  updateBoatRent,
} from "../controllers/RentController.js";

router.post("/RentBoat", RentBoat);
router.get("/get-boat-rent/:id", getBoatRent);
router.patch("/update-boat-rent/:id", updateBoatRent);
export default router;
