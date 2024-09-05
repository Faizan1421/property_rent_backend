import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Listing } from "../models/listing.model.js";
import { Category } from "../models/category.model.js";
import { bulkUploadOnCloudinary } from "../utils/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import fs from "fs";
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
  const { categories, isSold, ...rest } = req.body;

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

    if (categories) {
      updatedListing.categories = getCategories;
    }
    // check if user is trying to update isSold property.if listing is sold we will not allow to update it
    if (isSold && listing.isSold === false) {
      updatedListing.isSold = true;
    }
    await updatedListing.save({ new: true, validateBeforeSave: false });

    //* 6-send Response
    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedListing, "Listing updated successfully")
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
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
  const userId = req.user._id;
  const listingId = req.params.id;
  const publicId = req.params.publicId;
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
  const listingId = req.params.id;
  try {
    //* 1-check if listing id is valid/objectid  or not
    const checkID = mongoose.Types.ObjectId.isValid(listingId);
    if (!checkID) {
      throw new ApiError(400, "Invalid listing ID");
    }

    const listing = await Listing.findById(listingId)
      .populate("owner", "_id username fullName avatar")
      .populate("categories");
    if (!listing) {
      throw new ApiError(404, "Listing not found");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, listing, "Listing fetched successfully"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: Get all Listings
//agrigators
//send sellers with listing and more

//*!Note
//TODO: use aggregators for paginations and filteration

const getAllListings = asyncHandler(async (_, res) => {
  try {
    const listings = await Listing.find({ isPublished: true })
      .populate("owner", "_id username fullName avatar")
      .populate("categories");

    if (!listings) {
      throw new ApiError(404, "No listings found");
    }
    return res.status(200).json(new ApiResponse(200, listings, "success"));
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
};
