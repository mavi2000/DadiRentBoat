import mongoose from "mongoose";

const { Schema } = mongoose;

const PaymentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    username: {
      type: String,
    },
    boatName: {
      type: String,
    },
    boatId: {
      type: String,
      required: false,
    },
    amount: {
      type: Number,
    },
    stripeDetails: {
      type: Object,
    },
    rateType: {
      type: String,
    },
    startTime: {
      type: String,
      required: false,
    },
    endTime: {
      type: String,
      required: false,
    },
    isChecked: {
      type: Boolean,
      required: false,
    },
    totalAmount: {
      type: Number,
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "partial", "unpaid"],
      default: "unpaid",
    },
    availableDates: {
      type: [Date],
    },
    bookingStatus: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    platformInvoice: [{
      type: String, // URL or identifier for the uploaded file
      required: false,
    }],
    platformAmount: {
      type: Number,
      required: false,
    },
    rentalType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
