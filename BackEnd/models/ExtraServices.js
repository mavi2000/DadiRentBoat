import mongoose from 'mongoose';
const { Schema } = mongoose;

const extraServiceSchema = new Schema({
    boatId: {
        type: Schema.Types.ObjectId,
        ref: 'Boat',
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    pricePerPerson: {
        type: Number,
        required: true
    },
    isObligatory: {
        type: Boolean,
        required: true,
        default: false
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

export default mongoose.model('ExtraService', extraServiceSchema);