import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import { sendReminder } from "../controllers/ReminderController.js";




router.post('/send-reminder', upload.array('attachments', 10), sendReminder);
// router.post("/get-Rates", getAllRates);
// router.get("/get-rate/:id", getRateById);
// router.patch("/update-rate/:id", updateRate);
export default router;
