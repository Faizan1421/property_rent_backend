import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Schema;
const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    highlight: {
      type: String,
      lowercase: true,
      trim: true,
      default: "",
    },
    highlightDesc: {
      type: String,
      lowercase: true,
      trim: true,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      set: (v) => parseInt(v),
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        public_id: {
          type: String,
          required: true,
        },
      },
    ],
    rooms: {
      type: Number,
      required: true,
      min: 1,
      set: (v) => parseInt(v),
    },
    categories: [
      {
        type: ObjectId,
        ref: "Category",
        required: [true, "Category is required"],
      },
    ],
    amenities: [{ type: String, required: true, maxlength: 60 }],
    isPublished: {
      type: Boolean, // seller will not be able to make it false, only admin will do it for deleting it later
      default: true,
    },
    isSold: {
      type: Boolean, // we will allow only one time to make it true
      default: false,
    },
    owner: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Listing = mongoose.model("Listing", listingSchema);
