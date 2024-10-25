import multer from "multer";

/* This code snippet is setting up a configuration for file uploads using the `multer` middleware in a
Node.js application. Here's a breakdown of what each part does: */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 10000000, //10MB
  },
});
