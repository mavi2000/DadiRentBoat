import mongoose from 'mongoose';
const { Schema } = mongoose;

const rateSchema = new Schema({
    // boatId: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Boat',
    //   required: true
    // },
    date: {
        type: Date,
        required: true
    },
    normalDayRates: {
        morning: {
            type: Number,
            required: true
        },
        evening: {
            type: Number,
            required: true
        },
        fullDay: {
            type: Number,
            required: true
        }
    },
    weekendRates: {
        morning: {
            type: Number,
            required: true
        },
        evening: {
            type: Number,
            required: true
        },
        fullDay: {
            type: Number,
            required: true
        }
    }
});

export default mongoose.model('Rate', rateSchema);