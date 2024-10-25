import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
} from "../controllers/category.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";

const router = Router();

router
  .route("/")
  .get(getAllCategories)
  .post(verifyJWT, checkRole("admin"), createCategory);
router.route("/:id").delete(verifyJWT, checkRole("admin"), deleteCategory);

export default router;
