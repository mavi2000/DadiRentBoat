import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
    boatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boat',
        required: false
    },

    BoatName:{
            type: String,
            required: true
    },
    Port: {
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
