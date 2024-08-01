import express from "express";
import multer from "multer";
const router = express.Router();
import { uploadBoatDocuments } from "../controllers/boatdocumentsController.js";

const upload = multer().fields([
    { name: 'vesselDocument', maxCount: 10 },
    { name: 'boatManual', maxCount: 10 },
    { name: 'engineDocument', maxCount: 10 },
    { name: 'motorInsurance', maxCount: 10 },
    { name: 'portAuthorityPermit', maxCount: 10 },
    { name: 'meloriaShoalsDocuments', maxCount: 10 },
  ]);
  
  router.post('/boats-documents', upload, uploadBoatDocuments)

export default router;
