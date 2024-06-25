import express from "express";
const router = express.Router();
import {
  createDamageDeposit,
  getDamageDeposit,
  updateDamageDeposit,
} from "../controllers/DemageDepositsController.js";

router.post("/Demage-Deposits", createDamageDeposit);
router.get("/get-damage-deposit/:id", getDamageDeposit);
router.patch("/update-damage-deposit/:id", updateDamageDeposit);
export default router;
