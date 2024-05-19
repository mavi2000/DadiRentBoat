import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });
import { uploadBoatImages } from '../controllers/BoatImageController.js';


router.post("/uploadBoatImages",upload.single("image"),uploadBoatImages)

export default router;