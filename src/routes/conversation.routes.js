import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createConversation,
  getSingleConversation,
  getAllConversations,
} from "../controllers/conversation.controller.js";

const router = Router();

router.route("/").post(verifyJWT, createConversation);
router.route("/all").get(verifyJWT, getAllConversations);
router.route("/:conversationId").get(verifyJWT, getSingleConversation);

export default router;
