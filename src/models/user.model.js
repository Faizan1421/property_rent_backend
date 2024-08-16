import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      // index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    gender: {
      type: String,
      lowercase: true,
      enum: ["male", "female", "other"],
      required: true,
    },
    avatar: {
      type: String, //cloudinary url
    },
    password: {
      type: String,
      required: [true, "Password is required"],
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
      required: true,
      unique: true,
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
  },
  { timestamps: true }
);

//* Used Function named method because this keyword is not accessible from fat arrow function

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

/* The `userSchema.methods.isPasswordCorrect` function is a custom method added to the user schema in
Mongoose. This method is used to compare a given password with the hashed password stored in the
database for a user. */

//* Note: Use Function Method instead of fat Arrow method to use this keyword.

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

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
