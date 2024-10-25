import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config();

/* This code snippet is setting up a server using Node.js and Express.
Server will run only if Mongodb is Connected Successfully . 
Here's a breakdown of what it does: */

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      `Server is Running at Port ${PORT}`;
    });
  })
  .catch((err) => {
    "Mongo DB Connection Failed !!!", err;
  });
