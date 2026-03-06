import mongoose from "mongoose";

const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    // Optional: conversation bound to a specific campground (owner <-> visitors)
    campground: {
      type: Schema.Types.ObjectId,
      ref: "Campground",
    },
    isGroup: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      trim: true,
    },
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    lastMessageAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;

