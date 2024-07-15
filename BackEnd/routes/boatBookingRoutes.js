

import express from 'express';
const router = express.Router();

import { createBooking ,editBoatBooking,deleteBoatBooking} from '../controllers/BoatBookingsController.js';

router.post("/Book-boat",createBooking)
router.put("/editBoatBooking", editBoatBooking);
router.delete("/deleteBoatBooking", deleteBoatBooking);

export default router;