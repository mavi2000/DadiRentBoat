
import express from "express";
const router = express.Router();
import { checkout ,getPayment} from "../controllers/StripeController.js";
import {auth} from "../middlewares/auth.js"




router.post("/payment", checkout);
router.get("/getPayment",getPayment)

export default router;