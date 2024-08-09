import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

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

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //Upload the File on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      // public_id: "profileImg", // Important!!!  Added this for Optimizing images later
      resource_type: "auto",
    });
    //File has Uploaded Successfully
    //console.log("file is uploaded on cloudinary ", response.url)
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
