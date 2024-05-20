import express from 'express';
const router = express.Router();
import  {addCondition} from "../controllers/TermAndConditionControoler.js"


router.post("/Term-condition",addCondition)

export default router;