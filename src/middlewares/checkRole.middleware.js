import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

//* -This middleware assumes you've already implemented authentication and attached the user object to the request.
//* -It allows you to specify one or more allowed roles for each route. for eg checkRole("user") or checkRole("user","admin")

const checkRole = (...roles) => {
  return asyncHandler(async (req, _, next) => {
    // get user from req.user, which was set by verifyJWT in req
    const user = req.user;
    try {
      if (!user) {
        throw new ApiError(error.status, error.message);
      }

      // check if roles comming in paramasters include is one of role in req.user. do its opposite and if not includes then send error
      if (!roles.includes(req.user?.role)) {
        throw new ApiError(403, "Forbidden, You are not Allowed to do this");
      }
      //call Next() to go on next middleware if any or controller.
      next();
    } catch (error) {
      throw new ApiError(error.statusCode, error.message);
    }
  });
};

export { checkRole };
