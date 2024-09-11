import mongoose, { Schema } from "mongoose";
const categorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 20,
      unique: true,
      required: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
