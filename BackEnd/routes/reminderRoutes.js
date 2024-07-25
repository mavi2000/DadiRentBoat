import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import { sendReminder ,getAllReminders,deleteReminder} from "../controllers/ReminderController.js";




router.post('/send-reminder', sendReminder);
router.get('/getAllReminders', getAllReminders);
router.delete('/deleteReminder/:id', deleteReminder);

// router.post("/get-Rates", getAllRates);
// router.get("/get-rate/:id", getRateById);
// router.patch("/update-rate/:id", updateRate);
export default router;
