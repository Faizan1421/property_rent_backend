import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

//!  Implement the lockout logic in your forgot password route:

const lockOut = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    throw new ApiError(400, "email is required for password Recovery");
  }
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(400, "User Not Found");
    }
    //* 3-Check if account is locked
    if (
      user.passwordResetLockUntil &&
      user.passwordResetLockUntil > Date.now()
    ) {
      throw new ApiError(
        403,
        "Too Many Attempts.Account is locked. Try again later"
      );
    }

    //* 4-Increment attempt counter
    user.passwordResetAttempts += 1;

    //* 5-Check if max attempts reached
    if (user.passwordResetAttempts >= 5) {
      user.passwordResetLockUntil = Date.now() + 600000; // Lock for 10 Minutes
      await user.save({ validateBeforeSave: false });
      throw new ApiError(
        403,
        "Too many attempts. Account locked for 10 Minutes"
      );
    }
    await user.save({ validateBeforeSave: false });
    next();
    //! lockout logic completed here.
  } catch (error) {
    throw new ApiError(error.status, error.message);
  }
});
export { lockOut };
