import express from 'express';
const router = express.Router();
// import { createDamageDeposit } from '../controllers/DemageDepositsController.js';
import { createEquipment } from '../controllers/EquipmentController.js';


router.post("/Add-Equipment",createEquipment)

export default router;