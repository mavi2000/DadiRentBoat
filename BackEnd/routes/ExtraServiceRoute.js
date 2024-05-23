
import express from 'express';
const router = express.Router();
import { createExtraService,updateExtraService,deleteExtraService } from '../controllers/ExtraServicesController.js';


router.post("/Extra-Service",createExtraService)
router.put("/Update-Service/:id",updateExtraService)
router.delete("/delete-Service/:id",deleteExtraService)
export default router;