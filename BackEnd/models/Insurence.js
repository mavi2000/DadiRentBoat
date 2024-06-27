import mongoose from 'mongoose';
const { Schema } = mongoose;

const InsuranceSchema = new Schema({
    boatId: {
        type: Schema.Types.ObjectId,
        ref: 'Boat', // Reference to the Boat model
        required: true
    },
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
export default mongoose.model('Insurance', InsuranceSchema);
