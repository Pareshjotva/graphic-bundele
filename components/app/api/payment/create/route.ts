import { NextRequest, NextResponse } from "next/server";
import {
  createRazorpayOrder,
  RazorpayConfigurationError,
} from "@/lib/payment";

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

  const { name, email } = body as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    name.trim().length === 0 ||
    name.length > 120 ||
    typeof email !== "string" ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ error: "Enter a valid name and email address." }, { status: 400 });
  }

  try {
    const order = await createRazorpayOrder(name.trim(), email.trim());
    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: order.keyId,
      customerName: name.trim(),
      customerEmail: email.trim(),
    });
  } catch (error) {
    if (error instanceof RazorpayConfigurationError) {
      return NextResponse.json({ error: "Online payment is not configured yet." }, { status: 503 });
    }

    console.error("Razorpay order creation failed.", error);
    return NextResponse.json({ error: "Could not start payment. Please try again." }, { status: 502 });
  }
}
