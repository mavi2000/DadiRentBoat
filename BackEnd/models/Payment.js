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
      enum: [
        "halfDayMorning",
        "halfDayEvening",
        "fullDay",
        "weekendHalfDayMorning",
        "weekendHalfDayEvening",
        "weekendFullDay",
      ],
      required: true,
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
    availableDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
