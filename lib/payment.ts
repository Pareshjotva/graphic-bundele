// Payment utility — connect Razorpay here
// Install: npm install razorpay
// import Razorpay from "razorpay";

export interface OrderPayload {
  amount: number; // in INR
  currency?: string;
  receipt?: string;
}

export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
}

// Initialize Razorpay (server-side only)
// export function getRazorpay() {
//   return new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID!,
//     key_secret: process.env.RAZORPAY_KEY_SECRET!,
//   });
// }

// export async function createOrder(payload: OrderPayload): Promise<RazorpayOrder> {
//   const razorpay = getRazorpay();
//   return razorpay.orders.create({
//     amount: payload.amount * 100,
//     currency: payload.currency || "INR",
//     receipt: payload.receipt || `receipt_${Date.now()}`,
//   });
// }
