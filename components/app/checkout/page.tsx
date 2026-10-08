"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { ArrowLeft, Lock } from "lucide-react";

interface RazorpayPaymentResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  order_id: string;
  name: string;
  description: string;
  prefill: { name: string; email: string; contact: string };
  theme: { color: string };
  handler: (response: RazorpayPaymentResponse) => void;
  modal: { ondismiss: () => void };
}

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => { open: () => void };
  }
}

export default function CheckoutPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create order");

      if (!window.Razorpay) {
        throw new Error("Secure payment could not load. Please refresh and try again.");
      }

      const checkout = new window.Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        name: "One Click Presets Pack",
        description: "Premiere Pro Presets",
        prefill: { name: form.name, email: form.email, contact: form.phone },
        theme: { color: "#7C3AED" },
        handler: async (payment) => {
          try {
            const verification = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...payment, name: form.name, email: form.email, phone: form.phone }),
            });
            const result = await verification.json();
            if (!verification.ok || !result.success) {
              throw new Error(result.error || "Payment verification failed.");
            }
            window.location.assign("https://drive.google.com/drive/folders/1RdRE_uLDTKH8ZnD4htdkMKPtKtITWao_?usp=drive_link");
          } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Payment verification failed.");
            setLoading(false);
          }
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      });
      checkout.open();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "#151821", border: "1px solid #1E2130",
    borderRadius: 10, padding: "12px 14px", color: "white", fontSize: 14,
    outline: "none", boxSizing: "border-box",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#08090D", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onLoad={() => setRazorpayLoaded(true)}
        onError={() => setError("Secure payment could not load. Please refresh and try again.")}
      />
      <div style={{ width: "100%", maxWidth: 480 }}>
        <button onClick={() => router.back()} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", color: "#A5A7B2", cursor: "pointer", fontSize: 14, marginBottom: 32, padding: 0 }}>
          <ArrowLeft size={16} /> Back
        </button>

        <div style={{ background: "#10121A", border: "1px solid #1E2130", borderRadius: 20, padding: "36px 32px" }}>
          <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: "1px solid #1E2130" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#A5A7B2", letterSpacing: "0.08em", marginBottom: 12 }}>ORDER SUMMARY</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>One Click Presets Pack</div>
                <div style={{ color: "#A5A7B2", fontSize: 13, marginTop: 2 }}>Premiere Pro Presets · Instant Access</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, color: "#A5A7B2", textDecoration: "line-through" }}>₹499</div>
                <div style={{ fontSize: 22, fontWeight: 900, background: "linear-gradient(135deg,#7C3AED,#2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>₹299</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#A5A7B2", marginBottom: 6 }}>Full Name</label>
              <input
                type="text" placeholder="Your full name" value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "#7C3AED")}
                onBlur={e => (e.target.style.borderColor = "#1E2130")}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#A5A7B2", marginBottom: 6 }}>Email Address</label>
              <input
                type="email" placeholder="your@email.com" value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "#7C3AED")}
                onBlur={e => (e.target.style.borderColor = "#1E2130")}
              />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#A5A7B2", marginBottom: 6 }}>Phone Number</label>
              <input
                type="tel" placeholder="10-digit mobile number" value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "#7C3AED")}
                onBlur={e => (e.target.style.borderColor = "#1E2130")}
              />
            </div>

            {error && <div style={{ color: "#F87171", fontSize: 13, marginBottom: 16, padding: "10px 14px", background: "rgba(239,68,68,0.08)", borderRadius: 8 }}>{error}</div>}

            <button type="submit" disabled={loading || !razorpayLoaded} className="btn-primary" style={{ width: "100%", padding: "16px", fontSize: 16 }}>
              {loading ? "Processing..." : razorpayLoaded ? "Pay ₹299" : "Loading secure checkout..."}
            </button>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 16, color: "#A5A7B2", fontSize: 12 }}>
              <Lock size={12} /> Secure Payment · Powered by Razorpay
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
