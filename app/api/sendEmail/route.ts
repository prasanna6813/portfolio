import nodemailer from "nodemailer";
import { NextRequest } from "next/server";
import isValidEmail from "@/app/utils/isEmailValid";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  const EMAIL_TO = process.env.EMAIL_TO;
  const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

  // Validation
  if (!email || !isValidEmail(email)) {
    Response.error();
    return Response.json("Please send valid email");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_TO,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: EMAIL_TO,
    subject: `Message from ${name} - ${email}`,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return Response.json("Email sent successfully!");
  } catch (error) {
    console.error(error);
    Response.error();
    return Response.json("Error sending email");
  }
}