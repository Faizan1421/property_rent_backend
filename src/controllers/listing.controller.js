import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Listing } from "../models/listing.model.js";
import { Category } from "../models/category.model.js";
import {
  bulkUploadOnCloudinary,
  deleteBulkOnCloudinary,
} from "../utils/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import fs from "fs";
import jwt from "jsonwebtoken";

//TODO: Create Listing

const createListing = asyncHandler(async (req, res) => {
  //TODO:
  //* 1-Get data from req.body
  //* 2-Get Images from req.files
  //* 3- Create listing Object by Listing Model - Create Entry in DB
  //* 4-Upload Images on Cloudinary
  //* 5- Return Response

  try {
    //* 1-Get data from req.body
    const {
      title,
      description,
      highlight,
      highlightDesc,
      price,
      rooms,
      categories,
      amenities,
      location,
    } = req.body;

    //* 2-Get Images from req.files
    const images = req.files;
    const localImagesPath = [];
    for (const image of images) {
      const { path } = image;
      localImagesPath.push(path);
    }

    // get user from req.user which was set by verifyjwt middleware
    const user = req.user;
    //get categories from database because its a refernce to store in listing
    const getCategories = await Category.find({ name: { $in: categories } });
    getCategories;
    //* 3- Create listing Object by Listing Model - Create Entry in DB
    const createdListing = await Listing.create({
      title,
      description,
      highlight,
      highlightDesc,
      price,
      rooms,
      categories: getCategories || null,
      amenities,
      location,
      owner: user._id,
    });
    //* 4-Upload Images on Cloudinary

    //* created different bulk image uploader method in cloudinary utility
    const imageUploaded = await bulkUploadOnCloudinary({
      localImagesPath,
    });
    // (imageUploaded);
    createdListing.images = imageUploaded ? imageUploaded : [];
    await createdListing.save({ new: true });
    const data = await createdListing.populate({
      path: "owner",
      select: "username email fullName",
    });

    //* 5- Return Response

    return res
      .status(201)
      .json(new ApiResponse(201, data, "Listing Added Successfully"));
    // Delete images on cloudinary
    // const publicIds = ["elzlgsuk7klhtzreyeqx", "sjh6neyiu9dncsdgfide"];
    //  const imageDeleted = await bulkUploadOnCloudinary({
    //   publicIds,
    // });
    // (imageDeleted)
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

//TODO: delete Listing
//* 1-Get Id of listing from params
//* 2-Get userid from req set by middleware verifyjwt
//* 3-check if listing id is valid/objectid  or not
//* 4-find listing by id
//* 5-check/verify if user is authorized to delete this listing user cannot delete other's listings
//* 6-delete listing
//* 7-send response

const deleteListing = asyncHandler(async (req, res) => {
  //* 1-Get Id of listing from params
  const listingId = req.params.id;
  //* 2-Get userid from req set by middleware verifyjwt
  const userId = req.user._id; // assuming you're storing the user's ID in the request object

  try {
    //* 3-check if listing id is valid/objectid  or not
    const checkID = mongoose.Types.ObjectId.isValid(listingId);
    if (!checkID) {
      throw new ApiError(400, "Invalid listing ID");
    }

    //* 4-find listing by id
    const listing = await Listing.findById(listingId);

    if (!listing) {
      throw new ApiError(404, "Listing not found");
    }
    //* 5-check/verify if user is authorized to delete this listing user cannot delete other's listings
    if (listing.owner.toString() !== userId.toString()) {
      throw new ApiError(403, "You are not authorized to delete this listing");
    }
    if (listing.isSold) {
      throw new ApiError(403, "You cannot delete a sold listing");
    }
    //* 6-delete listing
    const resultDeleted = await Listing.deleteOne({ _id: listingId });
    // (resultDeleted)
    if (resultDeleted.deletedCount === 0) {
      throw new ApiError(500, "Error deleting listing");
    }
    //!Note : Delete images on cloudinary
    if (resultDeleted.deletedCount > 0 && listing.images.length > 0) {
      const publicIds = listing.images.map((image) => image.public_id);
      // one of the for loop for async operation while async doesnot work with map
      const result = await deleteBulkOnCloudinary(publicIds);
      if (!result) {
        throw new ApiError(500, "Error deleting images on cloudinary");
      }
    }

    //* 7-send response
    return res
      .status(200)
      .json(new ApiResponse(200, "Listing Deleted Successfully"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: Update Listing
//* 1-Get Id of listing from params
//* 2-Get userid from req set by middleware verifyjwt
//* 3-Get data from req.body
//* 4-find listing from DB
//* 5-Update DB Object
//* 6-send Response

const updateListing = asyncHandler(async (req, res) => {
  //* 1-Get Id of listing from params
  const listingId = req.params.id;
  //* 2-Get userid from req set by middleware verifyjwt
  const userId = req.user._id;
  //* 3-Get data from req.body
  const { location, categories, isSold, ...rest } = req.body;

  //get categories from database because its a refernce to store in listing
  const getCategories = await Category.find({ name: { $in: categories } });

  try {
    //* 4-find listing from DB

    const listing = await Listing.findById(listingId);
    if (!listing) {
      throw new ApiError(404, "Listing not found");
    }

    if (listing.owner.toString() !== userId.toString()) {
      throw new ApiError(403, "You are not authorized to update this listing");
    }

    if (listing.isSold) {
      throw new ApiError(403, "You cannot Update a sold listing");
    }

    //Check if seller is not updating secured data
    const restrictedKeys = ["_id", "owner"];
    const checkRestrictedKeys = restrictedKeys.find((key) => {
      // The in operator returns true if the specified property is in the specified object.
      // when true it will stop loop and return that key which is found in rest object.
      return key in rest;
    });
    // if any restricted key is found from find method we will throw an error.

    if (checkRestrictedKeys) {
      throw new ApiError(400, "You are Not Authorized to change secure data");
    }

    //* 5-Update DB Object

    const updatedListing = await Listing.findByIdAndUpdate(
      listingId,
      {
        $set: {
          ...rest,
        },
      },
      { new: true, runValidators: true }
    );
    //*!Note we have to take care of old data and new data in location object
    if (location) {
      const { ...remaining } = location;
      updatedListing.location = { ...updatedListing.location, ...remaining };
    }
    if (categories) {
      updatedListing.categories = getCategories;
    }
    // check if user is trying to update isSold property.if listing is sold we will not allow to update it
    if (isSold && listing.isSold === false) {
      updatedListing.isSold = true;
    }
    await updatedListing.save({ new: true, validateBeforeSave: true });

    //* 6-send Response
    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedListing, "Listing updated successfully")
      );
  } catch (error) {
    //Best way to handle builtin validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      const errorMessages = Object.keys(error.errors).map(
        (field) => error.errors[field].message
      );
      throw new ApiError(400, errorMessages[0]);
    } else {
      "other error:", error.message;
      throw new ApiError(error.statusCode, error.message);
    }
  }
});

//TODO: Add Listing Images
//* 1-Get Images from req.files
//* 2-get user from req.user which was set by verifyjwt middleware
//* 3-find listing by id
//* 4-Find local path of images
//* 5-Update DB Object
//* 6-Send response

const addListingImages = asyncHandler(async (req, res) => {
  //* 1-Get Images from req.files
  const images = req.files;
  if (!images) {
    throw new ApiError(400, "please Select a single Image");
  }

  //* 2-get user from req.user which was set by verifyjwt middleware
  const userId = req.user._id;
  const listingId = req.params.id;
  try {
    //* 3-find listing by id
    const listing = await Listing.findById(listingId);
    if (!listing) {
      throw new ApiError(404, "Listing not found");
    }

    if (listing.owner.toString() !== userId.toString()) {
      throw new ApiError(403, "You are not authorized to update this listing");
    }

    if (listing.isSold) {
      throw new ApiError(403, "You cannot Update a sold listing");
    }

    //* 4-Find local path of images
    const localImagesPath = [];
    for (const image of images) {
      const { path } = image;
      localImagesPath.push(path);
    }
    //add more image to listing less than 6
    if (listing.images.length >= 5) {
      //if images are more than 5 we will delete the image stored in temp folder
      fs.unlinkSync(localImagesPath[0]);
      throw new ApiError(400, "You cannot add more than 5 images");
    }
    //!IMP create different bulk image uploader method in cloudinary utility
    const imageUploaded = await bulkUploadOnCloudinary({
      localImagesPath,
    });

    //* 5-Update DB Object
    //findOneAndUpdate returns the updated document (if { new: true } is specified),
    // whereas updateOne only performs the update without returning the document.
    const updatedListing = await Listing.findOneAndUpdate(
      { _id: listingId },
      { $push: { images: imageUploaded } },
      { new: true, runValidators: true }
    );
    // send updated data to client

    //* 6-Send response

    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedListing, "Image uploaded successfully")
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: Delete Listing Images

const deleteListingImages = asyncHandler(async (req, res) => {
  const userId = req?.user?._id;
  const listingId = req?.params?.id;
  const publicId = req?.params?.publicId;
  try {
    const listing = await Listing.findById(listingId);
    if (!listing) {
      throw new ApiError(404, "Listing not found");
    }
    if (listing.owner.toString() !== userId.toString()) {
      throw new ApiError(403, "You are not authorized to update this listing");
    }
    if (listing.isSold) {
      throw new ApiError(403, "You cannot Update a sold listing");
    }
    if (listing.images.length < 1) {
      throw new ApiError(400, "There are no Images in this listing");
    }
    // find image from db by public id and delete it
    const updatedListing = await Listing.findOneAndUpdate(
      { _id: listingId },
      { $pull: { images: { public_id: publicId } } },
      { new: true, runValidators: true }
    );

    await cloudinary.uploader.destroy(publicId);
    return res
      .status(200)
      .json(new ApiResponse(200, updatedListing, "Image deleted Successfully"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: Get listing by id
const getListingById = asyncHandler(async (req, res) => {
  //get user id from access token or cookie for matching in aggregation query for wishlists or liked by in listing details page
  const incomingAccessToken =
    req?.cookies?.accessToken || req?.body?.accessToken;
  let decodedToken;
  if (incomingAccessToken) {
    decodedToken = jwt.verify(
      incomingAccessToken,
      process.env.ACCESS_TOKEN_SECRET
    );
  }
  const userId = decodedToken?._id;

  const listingId = req.params.id;

  try {
    //* 1-check if listing id is valid/objectid  or not
    const checkID = mongoose.Types.ObjectId.isValid(listingId);
    if (!checkID) {
      throw new ApiError(400, "Invalid listing ID");
    }

    const aggregateListing = await Listing.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(listingId),
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "categories",
          foreignField: "_id",
          as: "categories",
        },
      },

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
                createdAt: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: {
          path: "$owner",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "listing",
          as: "comments",
          pipeline: [
            {
              $project: {
                content: 1,
                owner: 1,
                createdAt: 1,
              },
            },

            {
              $unwind: {
                path: "$owner",
                preserveNullAndEmptyArrays: true,
              },
            },
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
              $project: {
                content: 1,
                owner: {
                  $arrayElemAt: ["$owner", 0],
                },
                createdAt: 1,
              },
            },

            {
              $sort: { createdAt: -1 },
            },
            {
              $limit: 4,
            },
          ],
        },
      },
      // is listing liked or add in wishlist by user
      {
        $lookup: {
          from: "wishlists",
          localField: "_id",
          foreignField: "listing",
          as: "likes",
        },
      },
      {
        $addFields: {
          likesCount: {
            $size: "$likes",
          },
          isLiked: {
            $reduce: {
              input: "$likes",
              initialValue: false,
              in: {
                $cond: {
                  if: {
                    $eq: ["$$this.owner", new mongoose.Types.ObjectId(userId)],
                  },
                  then: true,
                  else: "$$value",
                },
              },
            },
          },
        },
      },

      //  ends here
    ]);

    if (aggregateListing.length < 1) {
      throw new ApiError(404, "Listing not found");
    }
    return res
      .status(200)
      .json(
        new ApiResponse(200, aggregateListing, "Listing fetched successfully")
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: Get all Listings

//*!Note
//TODO: add location in listing create and also update model of listing----(working)
//TODO: create model of comments and refernce with listings
//TODO: use aggregators for paginations and filteration- implement rating and comments in get all listings
//TODO: send sellers profile  with listing uploaded by seller and more in get all listings

const getAllListings = asyncHandler(async (req, res) => {
  //get user id from access token or cookie for matching in aggregation query for wishlists or liked by in listing details page
  const incomingAccessToken =
    req?.cookies?.accessToken || req?.body?.accessToken;
  let decodedToken;
  if (incomingAccessToken) {
    decodedToken = jwt.verify(
      incomingAccessToken,
      process.env.ACCESS_TOKEN_SECRET
    );
  }
  const userId = decodedToken?._id;

  try {
    // Retrieve category name from route params
    const categoryName = req.params?.category?.toLowerCase() || "all";
    // If the category is not "all", fetch the category details
    if (categoryName !== "all") {
      const category = await Category.findOne({
        name: categoryName?.toString(),
      });
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
    }

    // Conditional match stage for category
    let categoryMatchStage = {};
    if (categoryName !== "all") {
      categoryMatchStage = { "categories.name": categoryName };
    }

    const aggregateListing = Listing.aggregate([
      { $match: { isPublished: true } }, // Match published items

      // Lookup categories
      {
        $lookup: {
          from: "categories",
          localField: "categories",
          foreignField: "_id",
          as: "categories",
        },
      },
      { $unwind: "$categories" }, // Unwind to treat each category as an object

      // Match category name if not "all"
      ...(categoryName !== "all" ? [{ $match: categoryMatchStage }] : []),

      // Lookup owner details
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "_id",
          as: "owner",
          pipeline: [
            { $project: { _id: 1, username: 1, fullName: 1, avatar: 1 } },
          ],
        },
      },
      { $unwind: { path: "$owner", preserveNullAndEmptyArrays: true } },

      // Group by product _id to ensure uniqueness
      {
        $group: {
          _id: "$_id",
          product: { $first: "$$ROOT" },
        },
      },
      { $replaceRoot: { newRoot: "$product" } },

      // is listing liked or add in wishlist by user
      {
        $lookup: {
          from: "wishlists",
          localField: "_id",
          foreignField: "listing",
          as: "likes",
        },
      },
      {
        $addFields: {
          likesCount: {
            $size: "$likes",
          },
          isLiked: {
            $reduce: {
              input: "$likes",
              initialValue: false,
              in: {
                $cond: {
                  if: {
                    $eq: ["$$this.owner", new mongoose.Types.ObjectId(userId)],
                  },
                  then: true,
                  else: "$$value",
                },
              },
            },
          },
        },
      },

      // Project the required fields
      {
        $project: {
          title: 1,
          description: 1,
          highlight: 1,
          highlightDesc: 1,
          price: 1,
          images: 1,
          rooms: 1,
          categories: 1,
          amenities: 1,
          isPublished: 1,
          isSold: 1,
          owner: 1,
          location: 1,
          createdAt: 1,
          likesCount: 1,
          isLiked: 1,
        },
      },
    ]);

    if (!aggregateListing) {
      throw new ApiError(500, "An Error Ocurred While Fetching Products");
    }

    // Pagination options from request query params
    const options = {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
      sortBy: { createdAt: -1 },
    };

    // Paginate the aggregation
    const result = await Listing.aggregatePaginate(aggregateListing, options);
    if (!result) {
      throw new ApiError(
        500,
        "An Error Ocurred While Fetching Products According to Pagination"
      );
    }

    return res
      .status(200)
      .json(new ApiResponse(200, result, "Listings Fetched Successfully"));
  } catch (error) {
    error;
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: Search Listings

const searchListings = asyncHandler(async (req, res) => {
  try {
    const { q: query } = req.query;

    query;
    const aggregateListing = Listing.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "categories",
          foreignField: "_id",
          as: "categories",
        },
      },
      { $unwind: "$categories" },
      {
        $match: {
          isPublished: true,
          $or: [
            { title: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
            { highlight: { $regex: query, $options: "i" } },
            { highlightDesc: { $regex: query, $options: "i" } },
            { "categories.name": { $regex: query, $options: "i" } },
            { "location.address": { $regex: query, $options: "i" } },
            { "location.city": { $regex: query, $options: "i" } },
            { "location.state": { $regex: query, $options: "i" } },
            { amenities: { $regex: query, $options: "i" } },
          ],
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "_id",
          as: "owner",
          pipeline: [
            { $project: { _id: 1, username: 1, fullName: 1, avatar: 1 } },
          ],
        },
      },
      { $unwind: { path: "$owner", preserveNullAndEmptyArrays: true } },
      {
        $group: {
          _id: "$_id",
          product: { $first: "$$ROOT" },
        },
      },
      { $replaceRoot: { newRoot: "$product" } },
      {
        $project: {
          title: 1,
          description: 1,
          highlight: 1,
          highlightDesc: 1,
          price: 1,
          images: 1,
          rooms: 1,
          categories: 1,
          amenities: 1,
          isPublished: 1,
          isSold: 1,
          owner: 2,
          location: 1,
          createdAt: 1,
        },
      },
    ]);

    // Pagination options from request query params
    const options = {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
      sortBy: { createdAt: -1 },
    };

    // Paginate the aggregation
    const searchResult = await Listing.aggregatePaginate(
      aggregateListing,
      options
    );
    if (!searchResult) {
      throw new ApiError(
        500,
        "An Error Ocurred While Fetching Products According to Pagination"
      );
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          searchResult,
          searchResult.length > 0
            ? "Listings Fetched Successfully"
            : "No  Listings Found with This Keyword, Try to find something else"
        )
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export {
  createListing,
  deleteListing,
  updateListing,
  addListingImages,
  deleteListingImages,
  getListingById,
  getAllListings,
  searchListings,
};
