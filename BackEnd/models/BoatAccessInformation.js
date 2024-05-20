import mongoose from 'mongoose';

const { Schema } = mongoose;

const boatAccessSchema = new Schema({
  boatId: {
    type: Schema.Types.ObjectId,
    ref: 'Boat',
    
  },
  accessDetails: [{
    description: {
      type: String,
      required: true
    },
    documentName: {
      type: String,
      required: true
    },
    uploadDocument: {
      type: String  
    },
    documentLink: {
      type: String
    }
  }]
});

export default mongoose.model('BoatAccessInformation', boatAccessSchema);
