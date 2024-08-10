import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const registerUser = asyncHandler(async (req, res) => {
  //1-Get User Details from Frontend
  //2-Validation - Not Empty
  //3-Check If User Already Exists: userName,email
  //4-Check For Avatar/Image
  //5-Upload to Cloudinary - Avatar/Image
  //6-Create User Object by User Model - Create Entry in DB
  //7-Remove Password and Refresh Token from Response
  //8-Check for User Creation
  //9-return Response

  //1-Get User Details from Frontend
  const { userName, email, fullName, gender, password, phone } = req.body;

  //2-Validation - Not Empty
  if (
    [userName, email, fullName, gender, password, phone].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All Fields are Required");
  }

  //3-Check If User Already Exists: userName,email
  const existedUser = await User.findOne({
    $or: [{ userName }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with Given Email or Username Already Exists");
  }

  //4-Check For Avatar/Image

  console.log(req.file);

  //Imp Notes:
  /* req.file
Purpose: Used when uploading a single file.
Type: An object containing information about the uploaded file.
Usage: req.file is available when you use upload.single('fieldName'), 
where 'fieldName' is the name of the input field in your form.*/

  /* req.files
Purpose: Used when uploading multiple files.
Type: An array of objects, where each object contains information about an individual uploaded file.
Usage: req.files is available when you use upload.array('fieldName', maxCount),
where 'fieldName' is the name of the input field in your form, 
and maxCount is the maximum number of files you want to allow. */
});

export { registerUser };
