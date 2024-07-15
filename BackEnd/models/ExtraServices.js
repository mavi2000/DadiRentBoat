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
  priceUnit: {
    type: String,
    enum: ['per rental', 'per day', 'per week', '% rental'],
    default: 'per rental'
  },
  minDuration: {
    type: Number,
    default: null
  },
  maxDuration: {
    type: Number,
    default: null
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

export default mongoose.model('ExtraServices', extraServiceSchema);
