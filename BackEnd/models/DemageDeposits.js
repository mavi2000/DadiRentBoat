import mongoose from "mongoose";
const { Schema } = mongoose;

const damageDepositSchema = new Schema({
  boatId: {
    type: Schema.Types.ObjectId,
    ref: 'Boat',
    required: true
  },
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
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

export default mongoose.model("DamageDeposit", damageDepositSchema);
