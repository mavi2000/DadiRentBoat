// models/Payment.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const PaymentSchema = new Schema({
//   userId: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  countryOfBirth: {
    type: String,
    required: true
  },
  cityOfBirth: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  stripeDetails: {
    type: Object,
    required: true
  }
}, { timestamps: true });

const Payment = mongoose.model('Payment', PaymentSchema);
export default Payment;
