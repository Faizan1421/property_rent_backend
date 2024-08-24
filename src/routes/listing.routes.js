import { Router } from "express";
import { createListing } from "../controllers/listing.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
router
  .route("/create-listing")
  .post(upload.array("listingImages", 5), createListing);
export default router;
