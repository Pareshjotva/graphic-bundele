import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  RazorpayConfigurationError,
  verifyRazorpaySignature,
} from "@/lib/payment";

async function sendOrderEmail(name: string, email: string, phone: string, paymentId: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"One Click Presets" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: `New Order – ₹299 | ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;background:#10121A;color:#fff;border-radius:12px;padding:32px;border:1px solid #1E2130">
        <h2 style="color:#A78BFA;margin-top:0">🎉 New Order Received!</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#A5A7B2;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#A5A7B2">Email</td><td style="padding:8px 0;font-weight:600">${email}</td></tr>
          <tr><td style="padding:8px 0;color:#A5A7B2">Phone</td><td style="padding:8px 0;font-weight:600">${phone}</td></tr>
          <tr><td style="padding:8px 0;color:#A5A7B2">Amount</td><td style="padding:8px 0;font-weight:600;color:#22C55E">₹299</td></tr>
          <tr><td style="padding:8px 0;color:#A5A7B2">Payment ID</td><td style="padding:8px 0;font-size:12px;color:#A5A7B2">${paymentId}</td></tr>
        </table>
      </div>
    `,
  });
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, name, email, phone } =
    body as Record<string, unknown>;

  if (
    typeof razorpay_order_id !== "string" ||
    typeof razorpay_payment_id !== "string" ||
    typeof razorpay_signature !== "string"
  ) {
    return NextResponse.json({ error: "Missing payment details." }, { status: 400 });
  }

  try {
    if (!verifyRazorpaySignature(razorpay_order_id, razorpay_payment_id, razorpay_signature)) {
      return NextResponse.json({ error: "Payment verification failed." }, { status: 400 });
    }

    // Send email (non-blocking — don't fail payment if email fails)
    sendOrderEmail(
      typeof name === "string" ? name : "N/A",
      typeof email === "string" ? email : "N/A",
      typeof phone === "string" ? phone : "N/A",
      razorpay_payment_id,
    ).catch(err => console.error("Order email failed:", err));

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof RazorpayConfigurationError) {
      return NextResponse.json({ error: "Online payment is not configured yet." }, { status: 503 });
    }

    console.error("Razorpay signature verification failed.", error);
    return NextResponse.json({ error: "Could not verify payment." }, { status: 500 });
  }
}
