import mongoose from "mongoose"

const boatSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    boardingCapacity: {
        type: Number,
        required: true
    },
    totalEnginePowerHP: {
        type: Number,
        required: true
    },
    lengthMeters: {
        type: Number,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    waterTankLiters: {
        type: Number,
        required: true
    },
    fuelTankLiters: {
        type: Number,
        required: true
    },
    droughtMeters: {
        type: Number,
        required: true
    }
});


export default mongoose.model('Boat', boatSchema);