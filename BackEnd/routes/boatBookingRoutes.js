

import express from 'express';
const router = express.Router();

import { getUnavailableBoatDates ,editBoatBooking,deleteBoatBooking} from '../controllers/BoatBookingsController.js';

router.post("/Book-boat",getUnavailableBoatDates)
router.put("/editBoatBooking", editBoatBooking);
router.delete("/deleteBoatBooking", deleteBoatBooking);

export default router;