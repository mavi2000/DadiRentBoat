

import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });
import { addRate } from '../controllers/RateController.js';


router.post("/add-Rates",addRate)


export default router;

