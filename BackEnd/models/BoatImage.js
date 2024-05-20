import mongoose from "mongoose";

const boatImageSchema = new mongoose.Schema({
    boatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boat',
    },
    avatar: {
        type: String,
        required: true
    }
});


export default mongoose.model('BoatImage', boatImageSchema);
