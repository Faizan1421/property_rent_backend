import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
import { ApiError } from "./ApiError.js";

dotenv.config();
// Configuration

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * The function `uploadOnCloudinary` uploads a file to Cloudinary and deletes the local file afterwards
 * in case of success or failure.
 * @param localFilePath - The `localFilePath` parameter in the `uploadOnCloudinary` function represents
 * the path to the file that you want to upload to Cloudinary. It is the local file path on your server
 * or local machine that you want to transfer to Cloudinary's cloud storage.
 * @returns The `uploadOnCloudinary` function returns either the response object from Cloudinary if the
 * file was successfully uploaded, or `null` if there was an error during the upload process.
 */

const uploadOnCloudinary = async (
  localFilePath,
  publicIdOfOldAvatar = null
) => {
  try {
    if (!localFilePath) return null;
    //Upload the File on Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      transformation: [
        {
          fetch_format: "auto",
          width: 1000,
          crop: "scale",
          quality: "auto",
          fetch_format: "auto",
        },
      ],
    });
    // console.log(publicIdOfOldAvatar);
    //File has Uploaded Successfully
    fs.unlinkSync(localFilePath);
    // console.log(cloudinaryResponse);

    //! we are receiving public id if we want to delete old avatar.
    if (publicIdOfOldAvatar) {
      await cloudinary.uploader.destroy(publicIdOfOldAvatar);
    }
    // console.log(cloudinaryResponse);
    return cloudinaryResponse;
  } catch (error) {
    console.log("Error While Uploading to Cloudinary", error);

    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

const bulkUploadOnCloudinary = async ({
  localImagesPath,
  publicIds = null,
}) => {
  try {
    if (localImagesPath) {
      let cloudinaryResponse = [];

      for (const imagepath of localImagesPath) {
        const response = await cloudinary.uploader.upload(imagepath, {
          resource_type: "auto",
          transformation: [
            {
              fetch_format: "auto",
              width: 1000,
              crop: "scale",
              quality: "auto",
              fetch_format: "auto",
            },
          ],
        });

        cloudinaryResponse.push({
          url: response.url,
          public_id: response.public_id,
        });
      }
      //File has Uploaded Successfully
      localImagesPath?.map((res) => {
        fs.unlinkSync(res);
      });
      return cloudinaryResponse;
    } else if (publicIds) {
      //! we are receiving public id if we want to delete old avatar.
      let result = [];
      publicIds.map(async (res) => {
        const del = await cloudinary.uploader.destroy(res);
        result.push(del);
      });
      return result;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error While Uploading to Cloudinary", error);

    // remove the locally saved temporary file as the upload operation got failed
    localImagesPath.map((res) => {
      fs.unlinkSync(res);
    });
    return null;
  }
};
export { uploadOnCloudinary, bulkUploadOnCloudinary };
