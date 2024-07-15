import mongoose from "mongoose";
import { createError } from "../utils/createError.js";

const TermAndConditionSchema = new mongoose.Schema({
  boatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Boat", // Reference to the Boat model
    required: true
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  notice: {
    type: String,
    required: true,
  },
  rentalDisembarkMorning: {
    type: Boolean,
    required: true,
  },
  rentalEmbarkEvening: {
    type: Boolean,
    required: true,
  },
  selectedCancellationPolicy: {
    type: String,
    required: true,
  },
  allowPets: {
    type: Boolean,
    required: false,
  },
  applyToFleet: {
    type: Boolean,
    required: true,
  },
  preBookingMessage: {
    type: String,
    required: false,
  },
});

export default mongoose.model("TermsAndCondition", TermAndConditionSchema);
