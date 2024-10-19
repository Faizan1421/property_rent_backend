import { Conversation } from "../models/conversation.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

//TODO: Create Conversation

const createConversation = asyncHandler(async (req, res) => {
  const sender = req.user?._id;
  const receiver = req.body?.receiverId;
  try {
    if (sender === receiver) {
      throw new ApiError(400, "You cannot create Conversation with yourself");
    }

    const existedConversation = await Conversation.findOne({
      participants: { $all: [sender, receiver] },
    }).populate("participants", "username fullName avatar");

    let conversation = null;
    if (!existedConversation) {
      conversation = await Conversation.create({
        participants: [sender, receiver],
      }).then((result) => {
        return Conversation.populate(result, [
          {
            path: "participants",
            select: "username fullName avatar",
          },
        ]);
      });
    }
    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          conversation || existedConversation,
          "Conversation created successfully"
        )
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: Retreive Single Conversation with other Participant

const getSingleConversation = asyncHandler(async (req, res) => {
  const sender = req.user?._id;
  const { conversationId } = req.params;
  try {
    const conversations = await Conversation.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(conversationId),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "participants",
          foreignField: "_id",
          as: "participants",
          pipeline: [
            { $project: { _id: 1, username: 1, fullName: 1, avatar: 1 } },
          ],
        },
      },
      {
        $lookup: {
          from: "chats",
          localField: "_id",
          foreignField: "conversation",
          as: "chats",
          pipeline: [
            {
              $lookup: {
                from: "users",
                localField: "sender",
                foreignField: "_id",
                as: "sender",
                pipeline: [
                  { $project: { _id: 1, username: 1, fullName: 1, avatar: 1 } },
                ],
              },
            },
            {
              $sort: { createdAt: -1 },
            },
          ],
        },
      },

      {
        $project: {
          _id: 1,
          participants: 1,
          chats: 1,
          createdAt: 1,
        },
      },
    ]);
    return res
      .status(200)
      .json(
        new ApiResponse(200, conversations, "Conversation fetched successfully")
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: Get All Conversations

const getAllConversations = asyncHandler(async (req, res) => {
  const sender = req.user?._id;
  try {
    const conversations = await Conversation.aggregate([
      {
        $match: {
          participants: { $all: [sender] },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "participants",
          foreignField: "_id",
          as: "participants",
          pipeline: [
            { $project: { _id: 1, username: 1, fullName: 1, avatar: 1 } },
          ],
        },
      },
      {
        $lookup: {
          from: "chats",
          localField: "_id",
          foreignField: "conversation",
          as: "chats",
          pipeline: [
            {
              $lookup: {
                from: "users",
                localField: "sender",
                foreignField: "_id",
                as: "sender",
                pipeline: [
                  { $project: { _id: 1, username: 1, fullName: 1, avatar: 1 } },
                ],
              },
            },
            {
              $sort: { updatedAt: -1 },
            },
          ],
        },
      },
    ]);
    return res
      .status(200)
      .json(
        new ApiResponse(200, conversations, "Conversation fetched successfully")
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export { createConversation, getSingleConversation, getAllConversations };
