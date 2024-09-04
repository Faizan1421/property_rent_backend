import { Router } from "express";
import {
  createListing,
  deleteListing,
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
export default router;
