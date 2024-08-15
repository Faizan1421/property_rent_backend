import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import fs from "fs";
import { cookiesOptions } from "../constants.js";

//TODO: Generate Access and Refresh Tokens

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

//TODO: User Registration

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

//TODO: User Login

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

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookiesOptions)
    .cookie("refreshToken", refreshToken, cookiesOptions)
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

// TODO: Logout User

const LogoutUser = asyncHandler(async (req, res) => {
  //TODO:
  //* 1-Get user Id from req (given by jwtVerify Middleware)
  //* 2-Delete Refresh Token from User Database.
  //* 3-Send Response

  //!Important:
  // we will get user from req, because in jwtVerify middleware we had set that user to req (req.user).
  // we will get an _id from that user and setting _id name as id after destructuring.

  //* 1-Get user Id from req (given by jwtVerify Middleware)

  const { _id: id } = req.user;

  //!Important:
  /*  when logging out user,it is necessary to remove refresh token from that user's database because if we donot remove
      refresh token, anyone from that old refresh token can generate new accesstoken- 
      for security purpose its must to delete 
      refresh token from database */

  //* 2-Delete Refresh Token from User Database.

  await User.findByIdAndUpdate(
    id,
    {
      $unset: {
        refreshToken: 1, //This Removes Field from Document
      },
    },
    {
      new: true,
    }
  );

  //* 3-Send Response

  return res
    .status(200)
    .clearCookie("accessToken", cookiesOptions)
    .clearCookie("refreshToken", cookiesOptions)
    .json(new ApiResponse(200, {}, "User Logged out Successfully"));
});

// TODO: Generate new Access token & Refresh Token upon request from frontend side.

const refreshAccessToken = asyncHandler(async (req, res) => {
  //TODO:
  //* 1-Get Refresh Token from Cookies||Body
  //* 2-check validation if Refresh token is comming or not
  //* 3-decode/ Get id from refresh token(which we had set earlier in refresh token)
  //* 4- verify if that user id exist in database or not
  //* 5-Match if Incomming Refresh Token is Equal to user's refresh Token saved already in database
  //* 6-Generate New Access and Refresh Token
  //* 7-send Response

  //* 1-Get Refresh Token from Cookies||Body

  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  //* 2-check validation if Refresh token is comming or not.

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  //* 3-decode/ Get id from refresh token(which we had set earlier in refresh token)

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    //* 4- verify if that user id exist in database or not

    const user = await User.findById(decodedToken?._id);
    console.log("user refresh token database", user.refreshToken);
    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    //* 5-Match if Incomming Refresh Token is Equal to user's refresh Token saved already in database

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh Token is Expired or Used");
    }

    //* 6-Generate New Access and Refresh Token

    const { accessToken, refreshToken: newRefreshToken } =
      await generateAccessAndRefereshTokens(user._id);

    //* 7-send Response

    return res
      .status(200)
      .cookie("accessToken", accessToken, cookiesOptions)
      .cookie("refreshToken", newRefreshToken, cookiesOptions)
      .json(
        new ApiResponse(
          200,
          {
            accessToken,
            refreshToken: newRefreshToken,
          },
          "Access Token Refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

export { registerUser, loginUser, LogoutUser, refreshAccessToken };
