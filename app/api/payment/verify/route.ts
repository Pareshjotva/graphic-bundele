import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: "Missing payment details" }, { status: 400 });
    }

    // TODO: Verify signature using Razorpay
    // const crypto = require("crypto");
    // const body = razorpay_order_id + "|" + razorpay_payment_id;
    // const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!).update(body).digest("hex");
    // if (expectedSignature !== razorpay_signature) return NextResponse.json({ error: "Invalid signature" }, { status: 400 });

    // TODO: Send confirmation email and deliver download link

    return NextResponse.json({ success: true, message: "Payment verified successfully" });
  } catch {
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
