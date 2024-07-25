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
      enum: [
        "halfDayMorning",
        "halfDayEvening",
        "fullDay",
        "weekendHalfDayMorning",
        "weekendHalfDayEvening",
        "weekendFullDay",
        "new rates",
        "1 day rate"
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
