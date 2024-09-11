import { Router } from "express";
import {
  addListingImages,
  createListing,
  deleteListing,
  deleteListingImages,
  getAllListings,
  getListingById,
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
router.route("/:category?").get(getAllListings);
export default router;

//!NOTE: we receive images from frontend with name like "listingImages" set in multer middleware
