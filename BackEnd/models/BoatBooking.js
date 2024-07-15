import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
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
  timeSlots: {
    type: [String],
    required: true
  },
  type: {
    type: String,
    enum: ['booking', 'winterization'],
    required: true
  },
  winterizationDetails: {
    isWinterization: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: ''
    }
  }
}, {
  timestamps: true
});

export default mongoose.model('Booking', bookingSchema);