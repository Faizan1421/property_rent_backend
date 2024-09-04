import { Router } from "express";
import {
  addListingImages,
  createListing,
  deleteListing,
  deleteListingImages,
  updateListing,
} from "../controllers/listing.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";
const router = Router();
router
  .route("/create-listing")
  .post(
    verifyJWT,
    checkRole("seller"),
    upload.array("listingImages", 5),
    createListing
  );
router
  .route("/delete-listing/:id")
  .delete(verifyJWT, checkRole("seller"), deleteListing);

router
  .route("/update-listing/:id")
  .patch(verifyJWT, checkRole("seller"), updateListing);

router
  .route("/update-listing/:id/images")
  .patch(
    verifyJWT,
    checkRole("seller"),
    upload.array("listingImages", 1),
    addListingImages
  );

router
  .route("/update-listing/:id/images/:publicId")
  .delete(verifyJWT, checkRole("seller"), deleteListingImages);
export default router;

//!NOTE: we receive images from frontend with name like "listingImages" set in multer middleware
