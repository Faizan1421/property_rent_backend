import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
  {
    message: { type: String },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    conversation: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
  },
  { timestamps: true }
);

export const Chat = mongoose.model("Chat", chatSchema);
