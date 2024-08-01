import mongoose from 'mongoose'

const boatDocumentsSchema = new mongoose.Schema({
    boatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Boat',
    },
    vesselDocument: [{
      type: String,
    }],
    boatManual: [{
      type: String,
    }],
    engineDocument: [{
      type: String,
    }],
    motorInsurance: [{
      type: String,
    }],
    portAuthorityPermit: [{
      type: String,
    }],
    meloriaShoalsDocuments: [{
      type: String,
    }]
  }, { timestamps: true });
  
  export default mongoose.model('BoatDocuments', boatDocumentsSchema);