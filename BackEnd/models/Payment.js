import mongoose from "mongoose";

const { Schema } = mongoose;

const PaymentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    boatName: {
      type: String,
      required: true,
    },
    boatId: {
      type: String,
      required: false,
    },
    boatImage: {
      type: [String], // Array of strings
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    stripeDetails: {
      type: Object,
      required: true,
    },
    rateType: {
      type: String,
      required: true,
    },
    timeSlot: {
      type: String, // Add timeSlot field to handle selected time slot
      required: false,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "partial", "unpaid"],
      required: true,
      default: "unpaid",
    },
    availableDates: {
      type: [Date], // Array of dates
      required: true,
    },
    bookingStatus: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      required: true,
      default: "pending",
    }
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;