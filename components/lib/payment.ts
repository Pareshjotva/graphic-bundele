import { createHmac, timingSafeEqual } from "node:crypto";

export const PRESET_PACK_AMOUNT = 29900;

export class RazorpayConfigurationError extends Error {}

function getRazorpayCredentials() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new RazorpayConfigurationError("Razorpay credentials are not configured.");
  }

  return { keyId, keySecret };
}

export async function createRazorpayOrder(name: string, email: string) {
  const { keyId, keySecret } = getRazorpayCredentials();
  const response = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: PRESET_PACK_AMOUNT,
      currency: "INR",
      receipt: `preset_${Date.now()}`,
      notes: { customer_name: name, customer_email: email },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Razorpay could not create the order.");
  }

  const order: unknown = await response.json();
  if (
    !order ||
    typeof order !== "object" ||
    !("id" in order) ||
    typeof order.id !== "string" ||
    !("amount" in order) ||
    typeof order.amount !== "number" ||
    !("currency" in order) ||
    typeof order.currency !== "string"
  ) {
    throw new Error("Razorpay returned an invalid order.");
  }

  return { ...order, keyId };
}

export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string,
) {
  const { keySecret } = getRazorpayCredentials();
  const expected = createHmac("sha256", keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest();

  if (!/^[a-f\d]{64}$/i.test(signature)) {
    return false;
  }

  const received = Buffer.from(signature, "hex");
  return received.length === expected.length && timingSafeEqual(received, expected);
}
