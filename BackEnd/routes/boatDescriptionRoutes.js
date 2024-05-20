import express from 'express';
const router = express.Router();
import { createBoatDescription } from '../controllers/BoatDescriptionController.js';


router.post("/createBoatDescription",createBoatDescription)

export default router;