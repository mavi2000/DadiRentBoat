import express from 'express';
const router = express.Router();
import { createLocation } from '../controllers/LocationController.js';

router.post("/add-location",createLocation)

export default router;