import express from "express";
const router = express.Router();
import {
  checkout,
  getPayment,
  calculateBoatRevenue,
  getUserPayment,
} from "../controllers/StripeController.js";
import { auth } from "../middlewares/auth.js";

router.post("/payment", checkout);
router.get("/getPayment", getPayment);
router.get("/calculateBoatRevenue", calculateBoatRevenue);
router.get("/getUserPayments/:id", getUserPayment);
export default router;
