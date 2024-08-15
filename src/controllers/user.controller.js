import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import fs from "fs";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  //TODO:
  //* 1-Get User Details from Frontend
  //* 2-Validation - Not Empty
  //* 3-Check If User Already Exists: username,email
  //* 4-Check For Avatar/Image
  //* 5-Upload to Cloudinary - Avatar/Image
  //* 6-Create User Object by User Model - Create Entry in DB
  //* 7-Remove Password and Refresh Token from Response
  //* 8-Check for User Creation
  //* 9-return Response

  // * 1-Get User Details from Frontend
  const { username, email, fullName, gender, password, phone } = req.body;

  //* 2-Validation - Not Empty

  /* This code snippet is performing validation to ensure that all the required fields (username,
  email, fullName, gender, password, phone) are not empty.Javascript some method is used to return boolean value.
  Here's a breakdown of what it does: */

  if (
    [username, email, fullName, gender, password, phone].some(
      (field) => field?.trim() === undefined || ""
    )
  ) {
    throw new ApiError(400, "All Fields are Required");
  }

  //* 3-Check If User Already Exists: username,email
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with Given Email or Username Already Exists");
  }

  //* 4-Check For Avatar/Image
  // console.log(req.file);
  const avatarLocalPath = req.file?.path;
  // console.log(avatarLocalPath);

  //* 5-Upload to Cloudinary - Avatar/Image
  const avatar = await uploadOnCloudinary(avatarLocalPath);

  //* 6-Create User Object by User Model - Create Entry in DB
  const user = await User.create({
    username: username.replace(/ /g, ""), // replace method will remove spaces from inside string.
    email,
    fullName,
    gender,
    password,
    phone,
    avatar: avatar?.url || "",
  });

  //* 7-Remove Password and Refresh Token from Response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  //* 8-Check for User Creation
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while creating a User");
  }

  //* 9-return Response
  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "User Registered Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  //TODO:
  //* 1-req body -> data
  //* 2-username or email
  //* 3-find the user
  //* 4-password check
  //* 5-access and referesh token
  //* 6-send cookie

  //* 1-req body -> data
  const { username, email, password } = req.body;

  //* 2-username or email
  if (!(username || email)) {
    throw new ApiError(400, "Username or email is Required");
  }

  //* 3-find the user
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(404, "User doesnot Exist");
  }

  //* 4-password check
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid User Credentials");
  }

  //* 5-access and referesh token
  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  //* 6-send cookie

  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User LogedIn SUccessfully"
      )
    );
});

export { registerUser, loginUser };
