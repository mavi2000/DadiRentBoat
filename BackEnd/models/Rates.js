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
    rateType: {
      type: String,
      required: true
    },
    fullDayRate: {
      type: Number,
      required: true
    },
    halfDayMorningRate: {
      type: Number,
      required: true
    },
    halfDayEveningRate: {
      type: Number,
      required: true
    }
  });

export default mongoose.model('Rate', rateSchema);
