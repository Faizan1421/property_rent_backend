import {
  addListingImages,
  createListing,
  deleteListing,
  deleteListingImages,
  getAllListings,
  getListingById,
  searchListings,
  updateListing,
} from "../controllers/listing.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";
import { Router } from "express";
const router = Router();
router
  .route("/create-listing")
  .post(
    verifyJWT,
    checkRole("seller", "admin"),
    upload.array("listingImages", 5),
    createListing
  );
router.route("/:id").delete(verifyJWT, checkRole("seller"), deleteListing);

router.route("/:id").patch(verifyJWT, checkRole("seller"), updateListing);

router
  .route("/:id/images")
  .patch(
    verifyJWT,
    checkRole("seller"),
    upload.array("listingImages", 1),
    addListingImages
  );

router
  .route("/:id/images/:publicId")
  .delete(verifyJWT, checkRole("seller"), deleteListingImages);

router.route("/single/:id").get(getListingById);
router.route("/c/:category?").get(getAllListings);
router.route("/search").get(searchListings);
export default router;

//!NOTE: we receive images from frontend with name like "listingImages" set in multer middleware
