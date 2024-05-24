import mongoose from 'mongoose';
const { Schema } = mongoose;

const equipmentSchema = new Schema({
    // boatId: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Boat',
    //   required: true
    // },
    comfort: {
        type: [String],
        required: true
    },
    navigation: {
        type: [String],
        required: true
    },
    services: {
        type: [String],
        required: true
    },
    energy: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Equipment', equipmentSchema);