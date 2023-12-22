import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request) {
  try {
    const { Fname, Lname, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "innocursor@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    const mailOpttion = {
      from: "innocursor@gmail.com",
      to: "pesino.group@gmail.com",
      subject: "Contact Us",
      html: `
        <h2>Hello, this is ${Fname} ${Lname}<h2>
        <li>Email: ${email}</li>
        <p>${message}</p>
        `,
    };
    await transporter.sendMail(mailOpttion);
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
