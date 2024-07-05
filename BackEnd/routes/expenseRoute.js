import express from "express";
const router = express.Router();
import { ExpenseManager,GetExpenses } from "../controllers/ExpenseController.js";
// import { createDamageDeposit } from '../controllers/DemageDepositsController.js';



router.post("/ExpenseManager",ExpenseManager)
router.get("/GetExpenses",GetExpenses)

export default router;
