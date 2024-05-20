
import mongoose from 'mongoose';

const boatBookingSchema = new mongoose.Schema({
    boatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boat',
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
    // Add any other relevant fields here
});

export default mongoose.model('BoatBooking', boatBookingSchema);
