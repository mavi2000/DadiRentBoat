import mongoose from 'mongoose';
const { Schema } = mongoose;

const locationSchema = new Schema({
    boatId: {
      type: Schema.Types.ObjectId,
      ref: 'Boat',
      required: true
    },
    place: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    exactLocation: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    }
}, {
    timestamps: true
});

export default mongoose.model('Location', locationSchema);
