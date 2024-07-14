import mongoose from 'mongoose';
const { Schema } = mongoose;

const locationSchema = new Schema({
//   boatId: {
//     type: Schema.Types.ObjectId,
//     ref: 'Boat',
//     required: true
//   },
 
  city: {
    type: String,
    required: true
  },
  locationType: {
    type: String,
    enum: ['mooring', 'other', 'port', 'trailer'],
    default: ''
  },
  portName: {
    type: String,
    default: ''
  },
  exactLocation: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  }
}, {
  timestamps: true
});

export default mongoose.model('Location', locationSchema);
