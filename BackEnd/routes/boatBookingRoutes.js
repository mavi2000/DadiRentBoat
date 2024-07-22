

import express from 'express';
const router = express.Router();

import { createBooking ,editBoatBooking,deleteBoatBooking,updateboatCalender,getBookingsByBoatId} from '../controllers/BoatBookingsController.js';

router.post("/Book-boat",createBooking)
router.put("/editBoatBooking", editBoatBooking);
router.delete("/deleteBoatBooking", deleteBoatBooking);
router.put("/updateboatCalender/:id", updateboatCalender);
router.get("/getBookingsByBoatId/:id", getBookingsByBoatId);

export default router;