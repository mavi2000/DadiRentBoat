import express from "express";
const router = express.Router();
// import { createDamageDeposit } from '../controllers/DemageDepositsController.js';
import {
  createEquipment,
  getBoatEquipments,
  updateEquipment,
} from "../controllers/EquipmentController.js";

router.post("/Add-Equipment", createEquipment);
router.get("/get-boat-equipments/:id", getBoatEquipments);
router.patch("/update-boat-equipments/:id", updateEquipment);
export default router;
