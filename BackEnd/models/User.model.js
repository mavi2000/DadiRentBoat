import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    roles: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    dob: {
      type: String,
      required: false,
    },
    language: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    nationality: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    zip: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
