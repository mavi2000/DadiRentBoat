import express from 'express';
import {CreateBoat} from   "../controllers/BoatController.js"
const router = express.Router();


router.post("/CreateBoat",CreateBoat)

export default router;