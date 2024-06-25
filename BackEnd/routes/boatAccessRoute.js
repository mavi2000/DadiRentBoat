import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import {
  addBoatAccessInformation,
  getBoatAccessInformationById,
  updateBoatAccessInformation,
} from "../controllers/AccessController.js";

router.post(
  "/Boat-Access",
  upload.array("accessDetails[0][pdf]"),
  addBoatAccessInformation
);
router.get("/get-access-info/:id", getBoatAccessInformationById);
router.patch(
  "/update-access-info/:id",
  upload.array("accessDetails[0][pdf]"),
  updateBoatAccessInformation
);

export default router;
