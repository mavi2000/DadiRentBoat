import express from 'express';
const router = express.Router();
import { createBoatDescription } from '../controllers/BoatDescriptionController.js';


router.post("/add-Description",createBoatDescription)

export default router;