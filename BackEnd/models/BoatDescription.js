import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const boatDescriptionSchema = new mongoose.Schema({
  boatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boat',
    required: true
  },
  boatType: {
    type: String,
    required: true
  },
  rentalType: {
    bareBoat: { type: Boolean, default: false },
    withoutSkipper: { type: Boolean, default: false },
    noLicenseRequired: { type: Boolean, default: false },
    withOwnerOnBoard: { type: Boolean, default: false }
  },
  details: {
    modelOrName: { type: String, required: true },
    descriptionItalian: { type: String, required: true },
    descriptionOtherLanguages: [descriptionSchema]
  },
  capacity: {
    boardingCapacity: { type: Number, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    geographicArea: { type: String, required: true },
    berth: { type: String },
    showerRoom: { type: Number },
    wc: { type: String },
    cabin: { type: Number }
  },
  motorization: {
    numberOfEngines: { type: Number, required: true },
    enginePowerHP: { type: Number, required: true },
    engineMake: { type: String, required: true },
    engineBrand: { type: String, required: true },
    model: { type: String, required: true },
    parkingPort: { type: String, required: true }
  },
  fuel: {
    unleaded: { type: Boolean, default: false },
    electric: { type: Boolean, default: false },
    diesel: { type: Boolean, default: false },
    ethanol: { type: Boolean, default: false }
  },
  fuelCapacityLiters: { type: Number },
  engineType: {
    twoStroke: { type: Boolean, default: false },
    fourStroke: { type: Boolean, default: false }
  },
  draftMeters: { type: Number, required: true },
  widthMeters: { type: Number, required: true },
  lengthMeters: { type: Number, required: true },
  draftFeet: { type: Number },
  widthFeet: { type: Number },
  lengthFeet: { type: Number },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true }
});

export default mongoose.model('BoatDescription', boatDescriptionSchema);
