import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

//!  Implement the lockout logic in your forgot password route:

const lockOut = asyncHandler(async (req, _, next) => {
  //TODO:
  //* 1-Get Email from req.body
  //* 2-find user from db by using email
  //* 3-Check if lock time has expired and reset attempts if so
  //* 4-Check if account is locked
  //* 5-Increment attempt counter
  //* 6-Check if max attempts reached

  //* 1-Get Email from req.body
  const { email } = req.body;
  if (!email) {
    throw new ApiError(400, "email is required for password Recovery");
  }
  try {
    //* 2-find user from db by using email

    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(400, "User Not Found");
    }

    //* 3-Check if lock time has expired and reset attempts if so
    if (
      user.passwordResetLockUntil &&
      user.passwordResetLockUntil <= Date.now()
    ) {
      user.passwordResetAttempts = 0;
      user.passwordResetLockUntil = null;
    }
    //* 4-Check if account is locked
    if (
      user.passwordResetLockUntil &&
      user.passwordResetLockUntil > Date.now()
    ) {
      throw new ApiError(
        403,
        "Too Many Attempts.Account is locked. Try again later"
      );
    }

    //* 5-Increment attempt counter
    user.passwordResetAttempts += 1;

    //* 6-Check if max attempts reached
    if (user.passwordResetAttempts >= 3) {
      user.passwordResetLockUntil = Date.now() + 600000; // Lock for 10 Minutes
      await user.save({ validateBeforeSave: false, new: true });
      throw new ApiError(
        403,
        "Too many attempts. Account locked for 10 Minutes"
      );
    }

    await user.save({ validateBeforeSave: false, new: true });
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});
export { lockOut };
