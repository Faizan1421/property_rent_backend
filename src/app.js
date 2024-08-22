import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));

app.use(cookieParser());

// Import Routes
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

// Error Handling Middleware which send error in json.
//it must be put at the end of all routes and middlewares before export.
// if no parameter is being used you can set that as _ .if multipple params than you cannot use _ multiple times.instead use __
app.use(function (err, _, res, __) {
  const statusCode = err.statusCode || 500;
  const response = {
    statusCode,
    message: err.message || "Internal Server Error",
    success: false,
  };

  res.status(statusCode).json(response);
});

export { app };
