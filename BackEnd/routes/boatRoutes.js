import express from 'express';
import {CreateBoat,getAllDetail,deleteBoat,getBoatDetailById} from   "../controllers/BoatController.js"
const router = express.Router();


router.post("/CreateBoat",CreateBoat)

router.get("/get-boat",getAllDetail)

router.delete("/delete-boat",deleteBoat)
router.get("/get-Sigle-boat/:id",getBoatDetailById)
export default router;