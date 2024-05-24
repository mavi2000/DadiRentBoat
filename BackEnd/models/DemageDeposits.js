import mongoose from "mongoose";
const { Schema } = mongoose;

const damageDepositSchema = new Schema({
  // boatId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Boat',
  //   required: true
  // },
  type: {
    type: String,
    enum: ["cash", "check", "card preauthorization", "other"],
    required: true,
  },
  amount: {
    type: Number,
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
