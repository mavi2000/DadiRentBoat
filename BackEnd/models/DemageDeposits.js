import mongoose from "mongoose";
const { Schema } = mongoose;

const damageDepositSchema = new Schema({
  boatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boat',
  },
  type: {
    type: [String], // To store multiple types
    default: [],
  },
  amount: {
    type: String,
    default: ""
  },
  withSkipper: {
    type: String,
    default: ""
  },
  withoutSkipper: {
    type: String,
    default: ""
  },
  guaranteeAmount: {
    type: String,
    default: ""
  },
  manageDeposit: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("DemageDeposits", damageDepositSchema);
