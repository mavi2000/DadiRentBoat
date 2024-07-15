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
    // normalDayRates: {
    //     halfDayMorning: {
    //         type: Number,
    //         required: true
    //     },
    //     halfDayEvening: {
    //         type: Number,
    //         required: true
    //     },
    //     fullDay: {
    //         type: Number,
    //         required: true
    //     }
    // },
    // weekendRates: {
    //     halfDayMorning: {
    //         type: Number,
    //         required: true
    //     },
    //     halfDayEvening: {
    //         type: Number,
    //         required: true
    //     },
    //     fullDay: {
    //         type: Number,
    //         required: true
    //     }
    // },
    applyRatesOfAnotherPeriod: {
        type: String
    },
    minimumRentalDuration: {
        type: String
    },
    maximumRentalDuration: {
        type: String
    },
    restrictDays: {
        allowedDaysToDepart: [String],
        allowedDaysToReturn: [String]
    },
    nameOfTheRate: {
        type: String
    },
    oneDayRate: {
        type: Number
    },
    oneWeekRate: {
        type: Number
    },
    advanceRates: {
        twoDays: Number,
        threeDays: Number,
        fiveDays: Number,
        sixDays: Number,
        twoWeeks: Number
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
