import mongoose from 'mongoose';
const { Schema } = mongoose;

const rateSchema = new Schema({
    boatId: {
        type: Schema.Types.ObjectId,
        ref: 'Boat', // Reference to the Boat model
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    dates: [Date], // Array of dates within the range
    normalDayRates: {
        halfDayMorning: {
            type: Number,
            required: true
        },
        halfDayEvening: {
            type: Number,
            required: true
        },
        fullDay: {
            type: Number,
            required: true
        }
    },
    weekendRates: {
        halfDayMorning: {
            type: Number,
            required: true
        },
        halfDayEvening: {
            type: Number,
            required: true
        },
        fullDay: {
            type: Number,
            required: true
        }
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

export default mongoose.model('Rate', rateSchema);