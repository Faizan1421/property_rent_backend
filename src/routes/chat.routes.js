import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createMessage,
  deleteMessage,
} from "../controllers/chat.controller.js";

const router = Router();

router.route("/:conversationId").post(verifyJWT, createMessage);
router.route("/:conversationId/:messageId").delete(verifyJWT, deleteMessage);

export default router;
