import mongoose from "mongoose";

const boatDescriptionSchema = new  mongoose.Schema({
    // boatId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Boat',
    //     required: true
    // },
    boatType: {
        type: String,
        required: true
    },
    rentalType: {
        bareBoat: { type: Boolean, default: false },
        withoutSkipper: { type: Boolean, default: false }
    },
    details: {
        modelOrName: { type: String, required: true },
        descriptionItalian: { type: String, required: true },
        descriptionEnglish: { type: String }
    },
    capacity: {
        boardingCapacity: { type: Number, required: true },
        brand: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: Number, required: true },
        geographicArea: { type: String, required: true }
    },
    motorization: {
        numberOfEngines: { type: Number, required: true },
        enginePowerHP: { type: Number, required: true }
    },
    fuel: {
        gas: { type: Boolean, default: false },
        electric: { type: Boolean, default: false },
        diesel: { type: Boolean, default: false },
        ethanol: { type: Boolean, default: false }
    },
    fuelCapacityLiters: { type: Number },
    draftMeters: { type: Number, required: true },
    widthMeters: { type: Number, required: true },
    lengthMeters: { type: Number, required: true }
});


export default mongoose.model('BoatDescription', boatDescriptionSchema);
