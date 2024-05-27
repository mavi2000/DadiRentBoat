import mongoose from "mongoose";
import { createError } from "../utils/createError.js";

const TermAndConditionSchema = new mongoose.Schema({
  boatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Boat", // Reference to the Boat model
    // required: true
  },
  conditionName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("TermsAndCondition", TermAndConditionSchema);
