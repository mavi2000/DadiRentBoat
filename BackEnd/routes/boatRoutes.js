import express from 'express';
import {CreateBoat,getAllDetail,deleteBoat} from   "../controllers/BoatController.js"
const router = express.Router();


router.post("/CreateBoat",CreateBoat)

router.get("/get-boat",getAllDetail)

router.delete("/delete-boat",deleteBoat)

export default router;