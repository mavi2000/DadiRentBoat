import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });



import {
upDateBoatImages,
uploadBoatImages,
  getBoatImages,
  deleteImage
} from "../controllers/BoatImageController.js";

router.post("/uploadBoatImages", upload.fields([
  { name: 'images', maxCount: 10 },
  { name: 'videos', maxCount: 10 }
]), uploadBoatImages);


router.get("/getBoatImages/:id",getBoatImages)
router.delete("/deleteImage",deleteImage)


router.patch("/update-image/:id",upload.fields([
  { name: 'images', maxCount: 10 },
  { name: 'videos', maxCount: 10 }
]), upDateBoatImages);

export default router;
