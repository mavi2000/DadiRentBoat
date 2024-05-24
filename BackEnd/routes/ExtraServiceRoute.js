
import express from 'express';
const router = express.Router();
import { createExtraService,updateExtraService,deleteExtraService,getAllExtraServices } from '../controllers/ExtraServicesController.js';


router.post("/Extra-Service",createExtraService)
router.get("/Extra-Service",getAllExtraServices)
router.put("/Update-Service/:id",updateExtraService)
router.delete("/delete-Service/:id",deleteExtraService)
export default router;