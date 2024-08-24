import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Listing } from "../models/listing.model.js";

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

  console.log(req.body);
  console.log(req.files);
});

export { createListing };
