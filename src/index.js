import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running at Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB Connection Failed !!!", err);
  });
