
import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });
import { addBoatAccessInformation } from '../controllers/AccessController.js';


router.post("/Boat-Access",upload.array("accessDetails[0][pdf]"),addBoatAccessInformation)


export default router;