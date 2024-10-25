import { Router } from "express";
import {
  registerUser,
  loginUser,
  LogoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  forgotPassword,
  resetPassword,
  resetPasswordNew,
  becomeSeller,
  getUserProfile,
  getAllSellers,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { lockOut } from "../middlewares/lockout.middleware.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";
const router = Router();

router.route("/register").post(upload.single("avatar"), registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, LogoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);
router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router.route("/forgot-password").post(lockOut, forgotPassword);
router
  .route("/reset-password/:token")
  .get(resetPassword)
  .post(resetPasswordNew);

router
  .route("/become-a-seller")
  .post(verifyJWT, checkRole("user"), becomeSeller);
router.route("/u/:username").get(getUserProfile);
export default router;
router.route("/sellers").get(getAllSellers);
