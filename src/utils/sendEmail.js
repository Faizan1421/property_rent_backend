import nodemailer from "nodemailer";
import { ApiError } from "./ApiError.js";

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT || 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (options) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: options.to,
    subject: options.subject,
    text: options.message,
    html: options.html, // Use this if you want to send HTML emails
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    "Email sent: " + info.response;

    return info;
  } catch (error) {
    throw new ApiError(400, error.message);
  }
};

export { sendEmail };
