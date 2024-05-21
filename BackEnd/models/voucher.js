import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  totalDiscountPercentage: {
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
  // boatId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Boat',
  // },
});

export default mongoose.model('Voucher', voucherSchema);
