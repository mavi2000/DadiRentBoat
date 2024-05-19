import mongoose from "mongoose"
const { Schema } = mongoose

const inviteLinkSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    expiry: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v
      },
    },
    timestamps: true,
  }
)

const InviteLink = mongoose.model("InviteLink", inviteLinkSchema)

export default InviteLink
