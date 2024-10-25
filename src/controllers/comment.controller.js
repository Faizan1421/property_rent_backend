import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const addComment = asyncHandler(async (req, res) => {
  // TODO: add a comment to a video
  //* 1-first get Listing id from the params
  //* 2-Get the user id
  //* 3-now get the comment content from the req.body
  //* 4-create a new mongo db comment doc and store the required information

  const { listingId } = req.params;
  const { content } = req.body;
  const userId = req.user._id;
  try {
    if (!content) {
      throw new ApiError(400, "Please add a comment");
    }

    const comment = await Comment.create({
      content,
      listing: listingId,
      owner: userId,
    }).then((result) => {
      return Comment.populate(result, {
        path: "owner",
        select: " username fullName avatar ",
      });
    });
    if (!comment) {
      throw new ApiError(500, "Failed to add comment");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, comment, "comment added successfully"));
  } catch (error) {
    //Best way to handle builtin validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      const errorMessages = Object.keys(error.errors).map(
        (field) => error.errors[field].message
      );
      throw new ApiError(400, errorMessages[errorMessages.length - 1]);
    } else {
      "Other error:", error.message;
      throw new ApiError(error.statusCode, error.message);
    }
  }
});
//TODO: get all comments of a Listing
const getComments = asyncHandler(async (req, res) => {
  const { listingId } = req.params;

  try {
    const commentsAggregated = await Comment.aggregate([
      { $match: { listing: new mongoose.Types.ObjectId(listingId) } },
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "_id",
          as: "owner",
          pipeline: [
            {
              $project: {
                _id: 1,
                username: 1,
                fullName: 1,
                avatar: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: "$owner",
      },

      {
        $project: {
          content: 1,
          owner: 1,
          createdAt: 1,
        },
      },
      { $sort: { createdAt: -1 } }, // Sort by createdAt in descending order
    ]);
    if (!commentsAggregated) {
      throw new ApiError(500, "Failed to fetch comments");
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          commentsAggregated,
          "comments fetched successfully"
        )
      );
  } catch (error) {
    //Best way to handle builtin validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      const errorMessages = Object.keys(error.errors).map(
        (field) => error.errors[field].message
      );
      throw new ApiError(400, errorMessages[0]);
    } else {
      "Other error:", error.message;
      throw new ApiError(error.statusCode, error.message);
    }
  }
});

//TODO: delete Comment by id

const deleteComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const userId = req.user._id;

  try {
    if (!commentId) {
      throw new ApiError(400, "Please provide commentId ");
    }

    const comment = await Comment.findById(commentId);
    if (!comment) {
      throw new ApiError(404, "Comment not found");
    }

    if (comment.owner.toString() !== userId.toString()) {
      throw new ApiError(403, "You are not authorized to delete this comment");
    }
    // Use deleteOne() to delete the comment
    const result = await Comment.deleteOne({ _id: commentId });
    result;
    if (result.deletedCount === 0) {
      throw new ApiError(500, "Failed to delete comment");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, null, "Comment deleted successfully"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export { addComment, getComments, deleteComment };
