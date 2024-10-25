import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const { ObjectId } = mongoose.Schema;
const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minlength: [5, "Title must be at least 5 characters"],
      maxlength: [100, "Title must be at most 100 characters"],
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
    location: {
      address: {
        type: String,
        required: [true, " address is required"],
        lowercase: true,
        trim: true,
        minlength: [5, "Address must be at least 5 characters"],
        maxlength: [100, "Address must be at most 100 characters"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
        lowercase: true,
        trim: true,
        // enum: [
        //   "daultala",
        //   "rawalpindi",
        //   "bewal",
        //   "jehlum",
        //   "rawat",
        //   "gujar khan",
        //   "mandra",
        // ],
        validate: {
          validator: (value) => {
            if (
              ![
                "daultala",
                "rawalpindi",
                "bewal",
                "jehlum",
                "rawat",
                "gujar khan",
                "mandra",
              ].includes(value)
            ) {
              return false;
            }
            return true;
          },
          message: "You cannot use City {VALUE}",
        },
      },
      state: {
        type: String,
        required: [true, "State is required"],
        lowercase: true,
        trim: true,
        // enum: [
        //   "punjab",
        //   "sindh",
        //   "kp",
        //   "balouchistan",
        //   "islamabad",
        //   "kashmir",
        //   "gb",
        // ],
        validate: {
          validator: (value) => {
            if (
              ![
                "punjab",
                "sindh",
                "kp",
                "balouchistan",
                "islamabad",
                "kashmir",
                "gb",
              ].includes(value)
            ) {
              return false;
            }
            return true;
          },
          message: "You cannot use state {VALUE}",
        },
      },
      zipCode: {
        type: String,
        required: [true, "Zip code is required"],
        minlength: [5, "Zip code must be Valid"],
        maxlength: [5, "Zip code must be Valid"],
      },
      country: {
        type: String,
        required: [true, "Country is required"],
        lowercase: true,
        // enum: ["pakistan"],
        validate: {
          validator: (value) => {
            if (!["pakistan"].includes(value)) {
              return false;
            }
            return true;
          },
          message: "You cannot use country {VALUE}",
        },
      },
    },
  },
  { timestamps: true }
);

listingSchema.plugin(mongooseAggregatePaginate);
export const Listing = mongoose.model("Listing", listingSchema);
