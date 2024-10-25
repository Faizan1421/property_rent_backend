import { Chat } from "../models/chat.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";
import { Conversation } from "../models/conversation.model.js";

//TODO: Create Message

const createMessage = asyncHandler(async (req, res) => {
  const { message } = req.body;
  const sender = req.user?._id;
  const conversation = req.params?.conversationId;

  try {
    if (!message) {
      throw new ApiError(400, "Please add a message");
    }

    const existedConversation = await Conversation.findOne({
      _id: conversation,
    });
    if (!existedConversation) {
      throw new ApiError(404, "Conversation not found");
    }
    const createMessage = new Chat({
      message,
      sender,
      conversation,
    });
    await createMessage.save();

    if (!createMessage) {
      throw new ApiError(500, "Failed to send message");
    }
    return res
      .status(201)
      .json(new ApiResponse(201, createMessage, "Message sent successfully"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: delete Message
const deleteMessage = asyncHandler(async (req, res) => {
  const { conversationId, messageId } = req.params;
  const userId = req.user._id;
  try {
    if (!conversationId || !messageId) {
      throw new ApiError(400, "Please provide conversationId and messageId");
    }
    const message = await Chat.findById(messageId);
    if (!message) {
      throw new ApiError(404, "Message Already Deleted or not found");
    }
    if (message.sender.toString() !== userId.toString()) {
      throw new ApiError(403, "You are not authorized to delete this message");
    }
    const deletedMessage = await Chat.findByIdAndDelete(messageId);

    if (deletedMessage.count === 0) {
      throw new ApiError(500, "Failed to delete message");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Message deleted successfully"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export { createMessage, deleteMessage };
