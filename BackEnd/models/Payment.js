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
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },
    boatName: {
      type: String,
    },
    boatId: {
      type: String,
    },
    boatImage: {
      type: [String],
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
    },
    endTime: {
      type: String,
    },
    isChecked: {
      type: Boolean,
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
    }],
    platformAmount: {
      type: Number,
    },
    rentalType: {
      type: String,
    },
    identityDocument: {
      type: String,
    },
    address: {
      type: String,
    },
    taxCode: {
      type: String,
    },
    peopleOnBoard: {
      type: String,
    },
    skipperName: {
      type: String,
    },
    skipperPhone: {
      type: String,
    },
    departurePoint: {
      type: String,
    },
    arrivalPoint: {
      type: String,
    },
    accessories: {
      type: [String],
    },
    customerNotes: {
      type: String,
    },
    petrolPrepaid: {
      type: Boolean,
    },
    contract: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
