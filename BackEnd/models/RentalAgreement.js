import mongoose from "mongoose";
const agreementSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  birthCity: {
    type: String,
    required: true,
  },
  birthProvince: {
    type: String,
    required: true,
  },
  taxId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  docFront: {
    type: String,
    required: false,
  },
  docBack: {
    type: String,
    required: false,
  },
  zip: {
    type: String,
    required: true,
  },
  members: {
    type: Number,
    required: true,
  },
  leaseStart: {
    type: String,
    required: true,
  },
  leaseEnd: {
    type: String,
    required: true,
  },
  leasePrice: {
    type: Number,
    required: true,
  },
  faithPlace: {
    type: String,
    required: true,
  },
  faithDate: {
    type: String,
    required: true,
  },
});
const Agreement = mongoose.model("agreement", agreementSchema);
export default Agreement;
