import mongoose from 'mongoose';
const { Schema } = mongoose;

const insuranceSchema = new Schema({
    currentInsurer: {
        type: String,
        required: true
    },
    amountDeductible: {
        type: Number,
        required: true
    },
    insuredValueOfBoat: {
        type: Number,
        required: true
    },
    boatRegistration: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model('Insurance', insuranceSchema);