/**
 * The asyncHandler function is a higher-order function that wraps an asynchronous request handler and
 * ensures any errors are passed to the next middleware.
 * @param requestHandler - The `requestHandler` parameter is a function that handles incoming HTTP
 * requests. It takes three parameters: `req` (the request object), `res` (the response object), and
 * `next` (the next middleware function in the stack). The `requestHandler` function is expected to
 * process the
 * @returns The `asyncHandler` function is being returned.
 */

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// Note: Another Method to write aync handler function is written Bellow.

//This is a Breakdown of Bellow function, and how it works.

//const asyncHandler = () => {}
//const asyncHandler = (func) => () => {}
//const asyncHandler = (func) => async () => {}

// Note: Starts Here:

//  const asyncHandler = (fn) => async (req, res, next) => {
//      try {
//          await fn(req, res, next)
//      } catch (error) {
//          res.status(err.code || 500).json({
//              success: false,
//              message: err.message
//          })
//  }
//      }
