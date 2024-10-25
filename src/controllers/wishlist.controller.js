import { Wishlist } from "../models/wishlist.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";
import { Listing } from "../models/listing.model.js";

//TODO: Add to Wishlist

const addToWishlist = asyncHandler(async (req, res) => {
  const { listingId } = req.params;
  const userId = req.user?._id;
  try {
    const listing = await Listing.findById(listingId);
    if (!listing) {
      throw new ApiError(404, "Listing not found");
    }
    const checkWishlist = await Wishlist.findOne({
      listing: listingId,
      owner: userId,
    });
    if (checkWishlist) {
      throw new ApiError(400, "Already added to wishlist");
    }

    if (listing.owner.toString() === userId.toString()) {
      throw new ApiError(403, "You cannot add your own listing to wishlist");
    }

    const wishlistCreated = await Wishlist.create({
      listing: listingId,
      owner: userId,
    }).then((result) => {
      return Wishlist.populate(result, [
        {
          path: "owner",
          select: " username fullName avatar ",
        },
        {
          path: "listing",
          select: " title description price images ",
        },
      ]);
    });
    if (!wishlistCreated) {
      throw new ApiError(500, "Failed to add to wishlist");
    }
    return res
      .status(200)
      .json(
        new ApiResponse(200, wishlistCreated, "Added to wishlist successfully")
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: Delete from Wishlist

const deleteFromWishlist = asyncHandler(async (req, res) => {
  const { listingId } = req.params;
  const userId = req.user?._id;
  try {
    if (!listingId) {
      throw new ApiError(400, "Listing ID is required");
    }
    const wishlist = await Wishlist.findOneAndDelete({
      listing: listingId,
      owner: userId,
    });
    wishlist;
    if (!wishlist) {
      throw new ApiError(404, "Add First to delete from wishlist");
    }
    return res
      .status(200)
      .json(
        new ApiResponse(200, {}, "Listing Removed from wishlist successfully")
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: Get All from Wishlist

const getAllWishlists = asyncHandler(async (req, res) => {
  const userId = req.user?._id;
  if (!userId) {
    throw new ApiError(400, "User Id is required");
  }
  const wishlists = await Wishlist.find({ owner: userId }).then((result) => {
    return Wishlist.populate(result, [
      {
        path: "owner",
        select: " username fullName avatar ",
      },
      {
        path: "listing",
        select: " title description categories price images location ",
        populate: {
          path: "categories",
          select: "name", // or any other fields you want to fetch from the categories collection
        },
      },
    ]);
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        wishlists,
        wishlists.length > 0
          ? "Favourite Listings fetched successfully"
          : "No Favourite Listings found"
      )
    );
});

export { addToWishlist, deleteFromWishlist, getAllWishlists };
