// models/Payment.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const PaymentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
 
  stripeDetails: {
    type: Object,
    required: true
  }
}, { timestamps: true });

const Payment = mongoose.model('Payment', PaymentSchema);
export default Payment;
