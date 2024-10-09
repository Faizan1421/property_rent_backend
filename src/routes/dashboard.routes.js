import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";
import { getAllSellers, verification } from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(verifyJWT, checkRole("admin")); // dont send vales in array for checkRole, in middleware its already converting in array, so dont send array
router.route("/users").get(verifyJWT, checkRole("admin"), getAllSellers); // it will get all users and sellers
router
  .route("/users/:id/verification")
  .post(verifyJWT, checkRole("admin"), verification);

export default router;
