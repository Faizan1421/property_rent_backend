import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Listing } from "../models/listing.model.js";
import { Category } from "../models/category.model.js";
import { bulkUploadOnCloudinary } from "../utils/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";

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

    //* 3- Create listing Object by Listing Model - Create Entry in DB
    const createdListing = await Listing.create({
      title,
      description,
      highlight,
      highlightDesc,
      price,
      rooms,
      categories: getCategories || [],
      amenities,
      owner: user._id,
    });
    //* 4-Upload Images on Cloudinary

    //!IMP create different bulk image uploader method in cloudinary utility
    const imageUploaded = await bulkUploadOnCloudinary({
      localImagesPath,
    });
    // console.log(imageUploaded);
    createdListing.images = imageUploaded;
    const data = await createdListing.save({ new: true });

    //* 5- Return Response

    return res
      .status(201)
      .json(new ApiResponse(201, data, "Product Added Successfully"));
    // Delete images on cloudinary
    // const publicIds = ["elzlgsuk7klhtzreyeqx", "sjh6neyiu9dncsdgfide"];
    //  const imageDeleted = await bulkUploadOnCloudinary({
    //   publicIds,
    // });
    // console.log(imageDeleted)
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: delete Listing

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
    //* 6-delete listing
    await Listing.deleteOne({ _id: listingId });

    //* 7-send response
    return res
      .status(200)
      .json(new ApiResponse(200, "Listing Deleted Successfully"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: Update Listing

export { createListing, deleteListing };
