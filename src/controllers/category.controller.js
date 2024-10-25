import { Category } from "../models/category.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      throw new ApiError(400, "Please add a Category name");
    }
    const category = await Category.create({ name });
    res
      .status(201)
      .json(new ApiResponse(201, category, "Category created successfully"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getAllCategories = asyncHandler(async (_, res) => {
  try {
    const categories = await Category.find();
    res
      .status(200)
      .json(
        new ApiResponse(200, categories, "Categories fetched successfully")
      );
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { id: categoryId } = req.params;
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      throw new ApiError(404, "Category not found");
    }
    const resultDeleted = await Category.deleteOne({ _id: categoryId });
    if (resultDeleted.deletedCount === 0) {
      throw new ApiError(500, "Error deleting category");
    }
    res
      .status(200)
      .json(new ApiResponse(200, {}, "Category deleted successfully"));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export { createCategory, getAllCategories, deleteCategory };
