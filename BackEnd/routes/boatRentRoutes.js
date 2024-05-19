import express from 'express';
const router = express.Router();
import { RentBoat } from '../controllers/RentController.js';


router.post("/RentBoat",RentBoat)

export default router;