import express from 'express';
const router = express.Router();
import  {addCondition,editCondition,getAllConditions,deleteCondition } from "../controllers/TermAndConditionControoler.js"


router.post("/Term-condition",addCondition)
router.get("/get-condition",getAllConditions)
router.put("/edit-condition",editCondition)
router.delete("/delete-condition",deleteCondition)

export default router;