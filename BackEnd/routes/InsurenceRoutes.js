import express from 'express';
const router = express.Router();
import { addInsurance } from '../controllers/InsurenceController.js';

router.post("/add-Insurence",addInsurance)

export default router;