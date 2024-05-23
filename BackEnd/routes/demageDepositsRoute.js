import express from 'express';
const router = express.Router();
import { createDamageDeposit } from '../controllers/DemageDepositsController.js';


router.post("/Demage-Deposits",createDamageDeposit)

export default router;