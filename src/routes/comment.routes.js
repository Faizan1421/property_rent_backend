import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.controller.js";

const router = Router();

router.route("/:listingId").post(verifyJWT, addComment);
router.route("/:listingId").get(getComments);
router.route("/:listingId/:commentId").delete(verifyJWT, deleteComment);

export default router;
