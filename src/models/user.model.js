import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      lowercase: true,
      trim: true,
      // index: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
      lowercase: true,
    },
    gender: {
      type: String,
      lowercase: true,
      enum: ["male", "female", "other"],
      // required: [true, "Gender is required"],
    },
    avatar: {
      type: String, //cloudinary url
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: ["user", "seller", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      validate: {
        validator: function (v) {
          return /^\+92\d{10}$/.test(v); // Pakistani phone number format validation
        },
        message: (props) =>
          `${props.value} is not a valid Pakistani phone number!`,
      },
    },
    refreshToken: {
      type: String,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    passwordResetAttempts: {
      type: Number,
      default: 0,
    },
    passwordResetLockUntil: {
      type: Date,
    },
  },
  { timestamps: true }
);

//TODO: create hook for hashing password before saving password to User Doc
//* Used Function named method because this keyword is not accessible from fat arrow function

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//TODO: create a Method to User Schema for matching password from req and saved password in User doc
/* The `userSchema.methods.isPasswordCorrect` function is a custom method added to the user schema in
Mongoose. This method is used to compare a given password with the hashed password stored in the
database for a user. */

//* Note: Use Function Method instead of fat Arrow method to use this keyword.

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//TODO: Reset password Token Method. It will set reset password token and reset password token expiry in user DB

userSchema.methods.setResetPasswordToken = async function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = resetToken;
  this.resetPasswordExpires = Date.now() + 300000; //5 minutes expiry
  await this.save({ validateBeforeSave: false });
  return resetToken;
};

//TODO: Generate Access Token
/* This `userSchema.methods.generateAccessToken` function is a custom method added to the user schema in
Mongoose, used to generate a JSON Web Token (JWT)
access token for a user. */

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

//TODO: Generate Refresh Token

/* The `userSchema.methods.generateRefreshToken` function is a custom method added to the user schema
in Mongoose. This method is used to generate a JSON Web Token (JWT) refresh token for a user. */

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

/* `export const User = mongoose.model("User", userSchema);` is exporting a Mongoose model named "User"
based on the userSchema defined earlier. This line of code allows other parts of the application to
import and use the "User" model to interact with the MongoDB database using Mongoose. The model will
have the structure defined in the userSchema, enabling operations such as creating, reading,
updating, and deleting user documents in the database. */

export const User = mongoose.model("User", userSchema);
