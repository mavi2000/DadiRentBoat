
import express from "express";
const router = express.Router();
import { checkout } from "../controllers/StripeController.js";
import {auth} from "../middlewares/auth.js"




router.post("/payment", checkout);

export default router;