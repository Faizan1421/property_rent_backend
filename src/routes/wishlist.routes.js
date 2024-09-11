import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  addToWishlist,
  deleteFromWishlist,
  getAllWishlists,
} from "../controllers/wishlist.controller.js";

const router = Router();

router.route("/:listingId").post(verifyJWT, addToWishlist);
router.route("/:listingId").delete(verifyJWT, deleteFromWishlist);
router.route("/").get(verifyJWT, getAllWishlists);

export default router;
