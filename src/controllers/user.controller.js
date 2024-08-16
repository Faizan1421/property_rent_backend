import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import fs from "fs";
import crypto from "crypto";
import { cookiesOptions } from "../constants.js";
import { config } from "../config.js";
import { sendEmail } from "../utils/sendEmail.js";

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
    "-password -refreshToken -resetPasswordToken -resetPasswordExpires"
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
    "-password -refreshToken -resetPasswordToken -resetPasswordExpires"
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
    // console.log("user refresh token database", user.refreshToken);
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
    throw new ApiError(401, "Invalid refresh token");
  }
});

// TODO: Change Current Password

const changeCurrentPassword = asyncHandler(async (req, res) => {
  //TODO:
  //* 1- Get Old and New Password from req.body
  //* 2- get user details from database by user _id comming from verifyJWT middleware
  //* 3- Match Old password provided by user to password saved in database of that user
  //* 4- set New User password and save doc in DB
  //* 5- Send Response

  //* 1- Get Old and New Password from req.body

  const { oldPassword, newPassword } = req.body;

  //* 2- get user details from database by user _id comming from verifyJWT middleware

  const user = await User.findById(req.user?._id);

  //* 3- Match Old password provided by user to password saved in database of that user

  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "invalid Old Password");
  }
  //* 4- set New User password and save doc in DB

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  //* 5- Send Response

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

//TODO: Get Current User Details

const getCurrentUser = asyncHandler(async (req, res) => {
  //* Send User details of Loggedin user.This will be accessible only if user is logged in.
  //* Middleware verifyJWT is providing user.

  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "User fetched successfully"));
});

//TODO: Update Account Details

const updateAccountDetails = asyncHandler(async (req, res) => {
  //TODO::
  //* 1- Get Data from req.body
  //* 2- check if req.body has keys to update secure data like password, refreshtoken,role etc than throw Error.
  //* 3- Updating user data in DB
  //* 4- send Response

  //* 1- Get Data from req.body
  // ...rest will give us an object containing all/any keys in req.body
  const { ...rest } = req.body;
  // console.log(rest);
  //! Important:
  //* 2- check if req has keys to update secure data like password, refreshtoken,role etc than throw Error.
  const restrictedKeys = [
    "_id",
    "role",
    "refreshToken",
    "password",
    "avatar",
    "isVerified",
    "createdAt",
    "updatedAt",
    "resetPasswordToken",
    "resetPasswordExpires",
  ];
  // this find method will return first key found from an restricted keys Array
  //if no restricted key found than it will return undefined value.
  // find Method returns only first value if found in array.

  const checkRestrictedKeys = restrictedKeys.find((key) => {
    // The in operator returns true if the specified property is in the specified object.
    // when true it will stop loop and return that key which is found in rest object.
    return key in rest;
  });

  // console.log(checkRestrictedKeys);
  // if any restricted key is found from find method we will throw an error.

  if (checkRestrictedKeys) {
    throw new ApiError(400, "You are Not Authorized to change secure data");
  }

  //* 3- Updating user data in DB

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        ...rest,
      },
    },
    { new: true, runValidators: true } //new:true will send updated state od doc, runvalidators:true will triger vilidator set on models before updating.
  ).select("-password -refreshToken -resetPasswordToken -resetPasswordExpires");

  //* 4- send Response
  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"));
});

//TODO: Update User Avatar

const updateUserAvatar = asyncHandler(async (req, res) => {
  //TODO:
  //* 1- Get local file path from req.file
  //* 2- Get user and user avatar link from database
  //* 3- split url and get public id from url
  //* 4- call uploadoncloudinary method and send args with avatar local path and public id of old avatar if any.
  //* 5- save new avatar url to User Doc
  //* 6- Send Response

  //* 1- Get local file path from req.file

  const avatarLocalPath = req.file?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar File is Missing");
  }

  //* 2- Get user and user avatar link from database

  // destructure req.user and get _id
  const { _id } = req.user;
  // we will fetch avatar from user doc after destructuring. because we are receive id and avatar in obj
  const { avatar } = await User.findOne({ _id }, "avatar");
  // console.log(avatar);

  //* 3- split url and get public id from url

  const publicIdOfOldAvatar = await avatar?.split("/").pop().split(".")[0];

  //* 4- call uploadoncloudinary method and send args with avatar local path and public id of old avatar if any.

  const newAvatar = await uploadOnCloudinary(
    avatarLocalPath,
    publicIdOfOldAvatar
  );
  const newAvatarUrl = newAvatar?.url;
  if (!newAvatarUrl) {
    throw new ApiError(400, "Error while uploading on avatar");
  }

  //* 5- save new avatar url to User Doc and set New to true for updated data to be sent in response

  const user = await User.findByIdAndUpdate(
    _id,
    {
      $set: {
        avatar: newAvatarUrl,
      },
    },
    { new: true }
  ).select("-password -refreshToken -resetPasswordToken -resetPasswordExpires");

  //* 6- Send Response

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar Updated Successfully"));
});

//TODO: Forget Password Recovery

//FIXME:

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new ApiError(400, "email is required for password Recovery");
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(400, "User Not Found");
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; //1 hour expiry
    await user.save({ validateBeforeSave: false });

    // Send email
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const host = config.BASE_URL || req.headers.host;
    const resetUrl = `${protocol}://${host}/api/v1/users/reset-password/${resetToken}`;
    const message = `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
      Please click on the following link, or paste this into your browser to complete the process:\n\n
      ${resetUrl}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`;

    await sendEmail({
      to: user.email,
      subject: "Password Reset Request",
      message,
    });
  } catch (error) {
    throw new ApiError(error.status, error.message);
  }
});

export {
  registerUser,
  loginUser,
  LogoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  forgotPassword,
};
