import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, amount } = await req.json();

    if (!name || !email || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Initialize Razorpay and create order
    // const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
    // const order = await razorpay.orders.create({ amount: amount * 100, currency: "INR", receipt: `receipt_${Date.now()}` });

    // Placeholder response — replace with real Razorpay order
    const mockOrder = {
      orderId: `order_${Date.now()}`,
      amount: amount * 100,
      currency: "INR",
      customerName: name,
      customerEmail: email,
    };

    return NextResponse.json(mockOrder);
  } catch {
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
