import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema({
  voucherName: {
    type: String,
    required: true
  },
  totalDiscount: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  boatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boat',
  },
});

export default mongoose.model('Voucher', voucherSchema);
