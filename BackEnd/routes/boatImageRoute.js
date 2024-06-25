import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import {
  upDateBoatImages,
  uploadBoatImages,
} from "../controllers/BoatImageController.js";

router.post("/uploadBoatImages", upload.single("image"), uploadBoatImages);
router.patch("/update-image/:id", upload.single("image"), upDateBoatImages);

export default router;
