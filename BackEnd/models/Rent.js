import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
    boat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boat',
        required: true
    },
    boatModel: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    minPrice: {
        type: Number,
        required: true
    },
    duration: {
        type: String, 
        required: true
    }
});

export default mongoose.model('Rent', rentalSchema);
