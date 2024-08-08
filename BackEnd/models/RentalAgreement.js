import mongoose from "mongoose";

const agreementSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dob: {
    type: String,
  },
  birthCity: {
    type: String,
  },
  birthProvince: {
    type: String,
  },
  taxId: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
  country: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  docFront: {
    type: String,
  },
  docBack: {
    type: String,
  },
  members: {
    type: Number,
  },
  leaseStart: {
    type: String,
  },
  leaseEnd: {
    type: String,
  },
  leasePrice: {
    type: Number,
  },
  faithPlace: {
    type: String,
  },
  faithDate: {
    type: String,
  },
  signature: { // Field for signature
    type: String, // Assuming the signature will be stored as a URL or base64 string
  },
});

const Agreement = mongoose.model("Agreement", agreementSchema);
export default Agreement;
