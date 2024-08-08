import express from "express";
const router = express.Router();
import multer from "multer";

import {
  checkout,
  getPayment,
  calculateBoatRevenue,
  getUserPayment,
  getSinglePayment,
  getDashboardMetrics,
  getStatistics,
  getUpcomingBookings,
  cancelBooking,
  unAvailableDates,
  createPayment,
  availableDates
} from "../controllers/StripeController.js";
import { auth } from "../middlewares/auth.js";

const upload = multer({ storage: multer.memoryStorage() });

router.post("/payment", checkout);
router.get("/getPayment", getPayment);
router.get("/calculateBoatRevenue", calculateBoatRevenue);
router.get("/getUserPayments/:id", getUserPayment);

router.get("/getSinglePayment/:id", getSinglePayment);
router.get("/getDashboardMetrics", getDashboardMetrics);
router.get("/getStatistics",getStatistics);
router.get("/getUpcomingBookings",getUpcomingBookings);
router.post("/cancelBooking",cancelBooking);
router.post("/unAvailableDates",unAvailableDates);
router.get("/availableDates",availableDates);
router.post('/create-payment', upload.single('platformInvoice'), createPayment);
export default router;
