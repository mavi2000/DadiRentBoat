import mongoose from "mongoose";
const { Schema } = mongoose;

const reminderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sendImmediately: {
    type: Boolean,
    required: true,
  },
  specificTime: {
    type: String,
    default: null,
  },
  specificDate: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  scheduledFor: {
    type: Date,
    default: null,
  },
  status: {
    type: String,
    default: 'scheduled',
    enum: ['scheduled', 'completed'],
  },
});

export default mongoose.model('Reminder', reminderSchema);
