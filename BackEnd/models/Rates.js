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
    oneHourRate: {
        type: Number
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

// Middleware to add dates within the range
rateSchema.pre('save', function(next) {
    const rate = this;
    rate.dates = [];
    const currentDate = new Date(rate.startDate);
    while (currentDate <= rate.endDate) {
        rate.dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    next();
});

export default mongoose.model('Rate', rateSchema);
