
import express from 'express';
const router = express.Router();
import { uploadBoatAccess } from '../controllers/AccessController.js';



router.post("/Boat-Access",uploadBoatAccess)

export default router;