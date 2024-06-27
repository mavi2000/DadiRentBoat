import express from "express";
import {
  CreateBoat,
  getAllDetail,
  deleteBoat,
  getBoatInfo,
  updateBoatInfo,
  getBoatDetailById
} from "../controllers/BoatController.js";
const router = express.Router();

router.post("/CreateBoat", CreateBoat);
router.get("/get-boat", getAllDetail);
router.get("/get-Sigle-boat/:id", getBoatDetailById);
router.delete("/delete-boat", deleteBoat);
router.get("/get-boat-info/:id", getBoatInfo);
router.patch("/update-boat/:id", updateBoatInfo);

export default router;
