import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { cookiesOptions } from "../constants.js";
import { config } from "../config.js";
import { sendEmail } from "../utils/sendEmail.js";
import mongoose from "mongoose";
import { Listing } from "../models/listing.model.js";

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
  //* 5-Create User Object by User Model - Create Entry in DB
  //* 6-Upload to Cloudinary - Avatar/Image
  //* 7-Remove Password and Refresh Token from Response
  //* 8-Check for User Creation
  //* 9-return Response

  // * 1-Get User Details from Frontend
  const { username, email, fullName, gender, password, phone } = req.body;

  try {
    //* 2-Validation - Not Empty
    /* This code snippet is performing validation to ensure that all the required fields (username,
  email, fullName, gender, password, phone) are not empty.Javascript some method is used to return boolean value.
  Here's a breakdown of what it does: */

    // if (
    //   [username, email, fullName, gender, password, phone].some(
    //     (field) => field?.trim() === undefined || ""
    //   )
    // ) {
    //   throw new ApiError(400, "All Fields are Required");
    // }

    //* 3-Check If User Already Exists: username,email

    const existedUser = await User.findOne({
      $or: [{ username: username?.replace(/ /g, "") }, { email }],
    });
    // (existedUser)

    if (existedUser) {
      throw new ApiError(
        400,
        "User with Given Email or Username Already Exists"
      );
    }

    //* 4-Check For Avatar/Image

    // (req.file);
    const avatarLocalPath = req.file?.path;
    // (avatarLocalPath);

    //* 5-Create User Object by User Model - Create Entry in DB

    const user = await User.create({
      username: username?.replace(/ /g, ""), // replace method will remove spaces from inside string.
      email,
      fullName,
      gender,
      password,
      phone,
    });
    user;
    if (!user) {
      throw new ApiError(error.statusCode, error.message);
    }

    //* 6-Upload to Cloudinary - Avatar/Image --IMP use it here because it doesnot delete image on cloudinary if there is an validation error
    if (avatarLocalPath) {
      const avatar = await uploadOnCloudinary(avatarLocalPath);
      user.avatar = avatar?.url || "";
      await user.save({ validateBeforeSave: true });
    }

    //* 7-Remove Password and Refresh Token from Response

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken -resetPasswordToken -resetPasswordExpires -passwordResetAttempts -passwordResetLockUntil"
    );

    //* 8-Check for User Creation

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while creating a User");
    }

    //* 9-return Response

    return res
      .status(200)
      .json(new ApiResponse(200, createdUser, "User Registered Successfully"));
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

//TODO: User Login

const loginUser = asyncHandler(async (req, res, next) => {
  //TODO:
  //* 1-req body -> data
  //* 2-set username or email in data variable
  //* 3-find the user
  //* 4-password check
  //* 5-access and referesh token
  //* 6-send cookie

  //* 1-req body -> data

  const { email, username, password } = req.body;
  try {
    //* 2-set username or email in data variable
    let data = email || username;
    if (!data) {
      throw new ApiError(400, "Username or email is Required");
    }

    //* 3-find the user

    const user = await User.findOne({
      $or: [{ username: data }, { email: data }],
    });
    if (!user) {
      throw new ApiError(404, "User doesnot Exist");
    }

    //* 4-password check

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid User Credentials");
    }
    //!Imp if i have configured middleware of lockout on forgot password
    // Reset forgot password attempts if any
    user.passwordResetAttempts = 0;
    user.passwordResetLockUntil = null;
    await user.save({ validateBeforeSave: false, new: true });

    //* 5-access and referesh token

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id
    );
    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken -resetPasswordToken -resetPasswordExpires -passwordResetAttempts -passwordResetLockUntil"
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
  } catch (error) {
    // next(error);
    throw new ApiError(error.statusCode, error.message);
  }
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

  try {
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
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
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
    // ("user refresh token database", user.refreshToken);
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
    throw new ApiError(error.statusCode, error.message);
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

  try {
    //* 2- get user details from database by user _id comming from verifyJWT middleware
    const user = await User.findById(req.user?._id);

    //* 3- Match Old password provided by user to password saved in database of that user
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isPasswordCorrect) {
      throw new ApiError(400, "invalid Old Password");
    }
    //* 4- set New User password and save doc in DB

    user.password = newPassword;
    await user.save({ validateBeforeSave: true });

    //* 5- Send Response

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Password changed successfully"));
  } catch (error) {
    //Best way to handle builtin validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      const errorMessages = Object.keys(error.errors).map(
        (field) => error.errors[field].message
      );
      throw new ApiError(400, errorMessages[0]);
    } else {
      throw new ApiError(error.statusCode, error.message);
    }
  }
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
  const { email, username, ...rest } = req.body;
  // (rest);
  try {
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
      "passwordResetAttempts",
      "passwordResetLockUntil",
    ];
    // this find method will return first key found from an restricted keys Array
    //if no restricted key found than it will return undefined value.
    // find Method returns only first value if found in array.

    const checkRestrictedKeys = restrictedKeys.find((key) => {
      // The in operator returns true if the specified property is in the specified object.
      // when true it will stop loop and return that key which is found in rest object.
      return key in rest;
    });

    // (checkRestrictedKeys);
    // if any restricted key is found from find method we will throw an error.

    if (checkRestrictedKeys) {
      throw new ApiError(400, "You are Not Authorized to change secure data");
    }

    if (email || username) {
      const checkDuplicate = await User.findOne({
        $or: [{ username }, { email }],
      });
      if (checkDuplicate) {
        throw new ApiError(400, "Email or Username already exists");
      }
    }
    //* 3- Updating user data in DB

    const user = await User.findByIdAndUpdate(
      req.user?._id,
      {
        $set: {
          email: email || req.user.email,
          username: username || req.user.username,
          ...rest,
        },
      },
      { new: true, runValidators: true } //new:true will send updated state od doc, runvalidators:true will triger vilidator set on models before updating.
    ).select(
      "-password -refreshToken -resetPasswordToken -resetPasswordExpires -passwordResetAttempts -passwordResetLockUntil"
    );
    //runValidators runs the validators on the document and throws a ValidationError if any of the validation rules are not met,
    //while validateBeforeSave allows you to validate the document and modify it before it is saved.
    //* 4- send Response
    return res
      .status(200)
      .json(new ApiResponse(200, user, "Account details updated successfully"));
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
  try {
    // we will fetch avatar from user doc after destructuring. because we are receive id and avatar in obj
    const { avatar } = await User.findOne({ _id }, "avatar");
    // (avatar);

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
    ).select(
      "-password -refreshToken -resetPasswordToken -resetPasswordExpires -passwordResetAttempts -passwordResetLockUntil"
    );

    //* 6- Send Response

    return res
      .status(200)
      .json(new ApiResponse(200, user, "Avatar Updated Successfully"));
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

//TODO: Forget Password Recovery- For sending password reset email to user registered email.

const forgotPassword = asyncHandler(async (req, res) => {
  //TODO:
  //* 1-Get User from req.user which we had set in middleware lockout
  //* 2-Generate -Reset Password token and reset password Expiry- By using setResetPasswordToken method we created in model.
  //* 3-Send email of password recovery with reset url by using nodemailer utility named sendEmail.js
  //* 4-call sendEmail function - Nodemailer Utility and set options and store response in variable
  //* 5-Send Response

  //- Get Email from req.body

  //! we have implemented in middleware-dont need here.
  // const { email } = req.body;
  // if (!email) {
  //   throw new ApiError(400, "email is required for password Recovery");
  // }
  //* 1-Get User from req.user which we had set in middleware lockout
  const user = req.user;

  try {
    //- find user from DB by using Email
    //! we have implemented in middleware-dont need here.
    // const user = await User.findOne({ email }); /
    // if (!user) {
    //   throw new ApiError(400, "User Not Found");
    // }

    //* 2- Generate -Reset Password token and reset password Expiry- By using setResetPasswordToken method we created in model.
    // we are receiving resetToken from setResetPasswordToken, because we are returning resetToken from that method calling.
    const resetToken = await user.setResetPasswordToken();

    //* 3- Send email of password recovery with reset url by using nodemailer utility named sendEmail.js

    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    // const protocol ="https"; // we are hardcoding it for now.

    const host = config.BASE_URL || req.headers.host;

    // const resetUrl = `${protocol}://${host}/api/v1/users/reset-password/${resetToken}`;
    const resetUrl = `${protocol}://${host}/reset-password/${resetToken}`;

    const message = `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
      Please click on the following link, or paste this into your browser to complete the process:\n\n
      ${resetUrl}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`;

    // *4- call sendEmail function - Nodemailer Utility and set options and store response in variable

    await sendEmail({
      to: user.email,
      subject: "Password Reset Request",
      message,
    });

    //* 5-Send Response
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          {},
          "Password Recovery Email sent. kindly check Your Inbox"
        )
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

// TODO: Reset password- Get Request to Verify reset token and send response back

const resetPassword = asyncHandler(async (req, res) => {
  //TODO:

  //* 1- get Token from req.params
  //* 2- find user that matches resetpasswordtoken with token comming in params and resetpasswordexpiry check
  //* 3-Throw an Error if Token is not matched in any User Doc
  //* 4-Send Response

  try {
    //* 1- get Token from req.params

    const token = req.params.token;

    //* 2- find user that matches resetpasswordtoken with token comming in params and resetpasswordexpiry check

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    //* 3-Throw an Error if Token is not matched in any User Doc

    if (!user) {
      throw new ApiError(415, "Password reset token is invalid or has expired");
    }

    //* 4-Send Response

    return res.status(200).json(new ApiResponse(200, {}, "Token is Valid"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

// TODO: Reset password- POST Request to Verify reset token and update User Password.User will send new password in body along token in params

const resetPasswordNew = asyncHandler(async (req, res) => {
  //TODO:
  //* 1- Get reset Token from req.params
  //* 2- Get password from req.body
  //* 3- find user that matches resetpasswordtoken with token comming in params and resetpasswordexpiry check.
  //* 4-Throw an Error if Token is not matched in any User Doc
  //* 5-Set New password
  //* 6- Set resetPasswordToken and resetpasswordexpiry to undefined and Reset attempts on successful password reset.
  //* 7- Send Response

  //* 1- Get reset Token from req.params
  const token = req.params.token;

  //* 2- Get password from req.body
  const { password: newPassword } = req.body;

  try {
    //* 3- find user that matches resetpasswordtoken with token comming in params and resetpasswordexpiry check.

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    //* 4-Throw an Error if Token is not matched in any User Doc
    if (!user) {
      throw new ApiError(415, "Password reset token is invalid or has expired");
    }

    //* 5-Set New password
    user.password = newPassword;

    //* 6- Set resetPasswordToken and resetpasswordexpiry to undefined and Reset attempts on successful password reset.
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    //!Imp Reset passwordResetAttempts and passwordResetLockUntil if i have configured middleware of lockout on forgot password.
    user.passwordResetAttempts = 0;
    user.passwordResetLockUntil = null;
    await user.save({ validateBeforeSave: true });

    //* 7- Send Response
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Your password has been updated"));
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

// TODO: Become A seller for users only
const becomeSeller = asyncHandler(async (req, res) => {
  //TODO:
  //* 1-Get _id from req.user which was set by verifyJWT middleware in req
  //* 2- find user by an _id and change role to seller, and must set runvalidators true for updating field and new to true for getting latest data.
  //* 3- Return Response

  //* 1-Get _id from req.user which was set by verifyJWT middleware in req. in become-a-seller route.
  const { _id } = req.user;

  try {
    //* 2- find user by an _id and change role to seller, and must set runvalidators true for updating field and new to true for getting latest data.

    const user = await User.findByIdAndUpdate(
      _id,
      {
        $set: {
          role: "seller",
        },
      },
      { runValidators: true, new: true } //new:true will send updated state od doc, runvalidators:true will triger vilidator set on models before updating.
    ).select(
      "-password -refreshToken -resetPasswordToken -resetPasswordExpires -passwordResetAttempts -passwordResetLockUntil"
    );

    //* 3- Return Response
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          user,
          "Congratulation !!! you have Successfully created Seller Account"
        )
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: implement viewing other seller/user public profile - /api/v1/users/u/:id -> GET request

const getUserProfile = asyncHandler(async (req, res) => {
  const { username } = req.params;

  //* 3- find user that matches resetpasswordtoken with token comming in params and resetpasswordexpiry check.

  const user = await User.findOne({ username });

  //* 4-Throw an Error if Token is not matched in any User Doc
  if (!user) {
    throw new ApiError(404, "User Not found");
  }

  try {
    const userAggregate = await User.aggregate([
      {
        $match: {
          username,
        },
      },
      {
        $lookup: {
          from: "listings",
          localField: "_id",
          foreignField: "owner",
          as: "listings",
          pipeline: [
            {
              $match: {
                isPublished: true,
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
              $project: {
                _id: 1,
                title: 1,
                description: 1,
                price: 1,
                rooms: 1,
                categories: 1,
                amenities: 1,
                isSold: 1,
                images: 1,
                location: 1,
                createdAt: 1,
              },
            },
            {
              $sort: {
                createdAt: -1,
              },
            },
          ],
        },
      },
      {
        $project: {
          _id: 1,
          username: 1,
          email: 1,
          fullame: 1,
          gender: 1,
          role: 1,
          isVerified: 1,
          phone: 1,
          avatar: 1,
          listings: 1,
          createdAt: 1,
        },
      },
    ]);

    return res
      .status(200)
      .json(
        new ApiResponse(200, userAggregate[0], "User fetched successfully")
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: View All Sellers - /api/v1/users/sellers -> GET request
//! used in admin dashboard also
const getAllSellers = asyncHandler(async (req, res) => {
  const isAdmin = req.user && req.user.role === "admin";
  try {
    const users = await User.aggregate([
      {
        $match: {
          role: isAdmin ? { $in: ["seller", "user"] } : "seller",
        },
      },
      {
        $project: {
          _id: 1,
          username: 1,
          email: 1,
          fullame: 1,
          gender: 1,
          role: 1,
          isVerified: 1,
          phone: 1,
          avatar: 1,
          createdAt: 1,
        },
      },
    ]);
    if (users.length === 0) {
      throw new ApiError(200, "No sellers found, Become a seller?");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, users, "Sellers fetched successfully"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

//TODO: IMP: ONLY ADMIN-Dashboard ControllersTODO:

//TODO: Verify or Unverify Sellers - /api/v1/dashboard/sellers/:id/verification -> GET request

const verification = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const isAlreadyVerified = user?.isVerified;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          isVerified: isAlreadyVerified ? false : true,
        },
      },
      { new: true }
    );
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedUser,
          isAlreadyVerified
            ? "User verified successfully"
            : "User unverified successfully"
        )
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
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
  resetPassword,
  resetPasswordNew,
  becomeSeller,
  getUserProfile,
  getAllSellers,
  verification,
};
