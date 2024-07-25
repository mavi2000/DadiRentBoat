import express from "express";
const router = express.Router();
import {
  checkout,
  getPayment,
  calculateBoatRevenue,
  getUserPayment,
  getSinglePayment,
  getDashboardMetrics,
  getStatistics,
  getUpcomingBookings,
  cancelBooking
} from "../controllers/StripeController.js";
import { auth } from "../middlewares/auth.js";

router.post("/payment", checkout);
router.get("/getPayment", getPayment);
router.get("/calculateBoatRevenue", calculateBoatRevenue);
router.get("/getUserPayments/:id", getUserPayment);

router.get("/getSinglePayment/:id", getSinglePayment);
router.get("/getDashboardMetrics", getDashboardMetrics);
router.get("/getStatistics",getStatistics);
router.get("/getUpcomingBookings",getUpcomingBookings);
router.post("/cancelBooking",cancelBooking);
export default router;
