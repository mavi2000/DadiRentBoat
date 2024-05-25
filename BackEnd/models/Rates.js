import mongoose from 'mongoose';
const { Schema } = mongoose;

const rateSchema = new Schema({
    // boatId: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Boat',
    //   required: true
    // },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    dates: {
        type: [Date],
        required: true
    },
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
    }
});

export default mongoose.model('Rate', rateSchema);
