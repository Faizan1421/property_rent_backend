import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const registerUser = asyncHandler((req, res) => {
  //Get User Details from Frontend
  //Validation - Not Empty
  //Check If User Already Exists: userName,email
  //Check For Avatar/Image
  //Upload to Cloudinary - Avatar/Image
  //Create User Object by User Model - Create Entry in DB
  //Remove Password and Refresh Token from Response
  //Check for User Creation
  //return Response

  const { userName, email, fullName, gender, password, phone } = req.body;
});

export { registerUser };
