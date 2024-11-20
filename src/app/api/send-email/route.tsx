import { NextResponse } from "next/server";
import { Resend } from "resend";
import { StackOverflowTipsEmail } from "@/emails/HelloEmail";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
export async function POST(req: Request) {
  // get the data from the request
  const data = await req.json();
  if (!data.email) {
    throw new Error("Email is required");
  } else {
    // send the email
    const resend = new Resend(RESEND_API_KEY);
    await resend.emails.send({
      from: "mailer@vectornotion.com",
      to: data.email,
      subject: "hello world",
      react: <StackOverflowTipsEmail />,
    });
    console.log("Sending email to", data.email);
  }
  return NextResponse.json({ hello: "Next.js" });
}
