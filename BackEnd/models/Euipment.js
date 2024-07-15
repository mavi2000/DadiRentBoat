import mongoose from 'mongoose';
const { Schema } = mongoose;

const equipmentSchema = new Schema({
  boatId: {
    type: Schema.Types.ObjectId,
    ref: 'Boat',
    required: true
  },
  security: {
    type: String,
    required: true
  },
  mainUse: {
    type: [String],
    required: true
  },
  comfort: {
    type: [String],
    required: true
  },
  navigation: {
    type: [String],
    required: true
  },
  energy: {
    type: [String],
    required: true
  },
  kitchen: {
    type: [String],
    required: true
  },
  leisure: {
    type: [String],
    required: true
  },
  sanitary: {
    type: [String],
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Equipment', equipmentSchema);
