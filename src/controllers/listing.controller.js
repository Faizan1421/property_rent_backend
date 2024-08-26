import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Listing } from "../models/listing.model.js";
import { bulkUploadOnCloudinary } from "../utils/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";

//TODO: Create Listing

const createListing = asyncHandler(async (req, res) => {
  //TODO:
  //* 1-Get data from req.body
  //* 2-Get Images from req.files
  //* 3-Upload Images on Cloudinary
  //* 4- Create listing Object by Listing Model - Create Entry in DB
  //* 5- Return Response

  const {
    title,
    description,
    highlight,
    highlightDesc,
    price,
    rooms,
    Categories,
    amenities,
  } = req.body;

  const images = req.files;
  const localImagesPath = [];
  for (const image of images) {
    const { path } = image;
    localImagesPath.push(path);
  }
  //!imp create different bulk image uploader method in cloudinary utility
  // const imageUploaded = await bulkUploadOnCloudinary({
  //   localImagesPath,
  // });
  const publicIds = ["f4a1ov83hj5jnfbgmkt8", "xovbigpo1wjub2gda0ft"];
  publicIds.map(async (res) => {
    await cloudinary.uploader.destroy(res);
  });
  //   console.log(avatarLocalPath);
  //   console.log("Cloudinary uploaded" + imagesUploaded);
});

export { createListing };
