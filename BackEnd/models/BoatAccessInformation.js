import mongoose from 'mongoose';

const { Schema } = mongoose;

const boatAccessSchema = new Schema({
  boatId: {
    type: Schema.Types.ObjectId,
    ref: 'Boat',
    required: true
  },
  accessDetails: [{
    description: {
      type: String
    },
    documentName: {
      type: String
    },
    uploadDocument: {
      type: String  
    },
    documentLink: {
      type: String
    },
    documentDescription: { // New field for document description
      type: String
    }
  }]
});

export default mongoose.model('BoatAccessInformation', boatAccessSchema);
