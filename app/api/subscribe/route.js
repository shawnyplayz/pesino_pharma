import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request) {
  try {
    const email = await request.json();

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
      subject: "Subscription",
      html: `
        <h1>Hello,</h1>
         <h2>${email} has subscribed to your news letter<h2>
        `,
    };
    await transporter.sendMail(mailOpttion);
    return NextResponse.json(
      { message: "Subscribed Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
