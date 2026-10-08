"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import { X, Lock } from "lucide-react";

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

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PaymentModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setForm({ name: "", email: "", phone: "" });
      setError("");
      setLoading(false);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) {
      setError("Enter a valid 10-digit phone number.");
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

      if (!window.Razorpay) throw new Error("Secure payment could not load. Please refresh and try again.");

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
            if (!verification.ok || !result.success) throw new Error(result.error || "Payment verification failed.");
            window.location.assign("https://drive.google.com/drive/folders/1RdRE_uLDTKH8ZnD4htdkMKPtKtITWao_?usp=drive_link");
          } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Payment verification failed.");
            setLoading(false);
          }
        },
        modal: { ondismiss: () => setLoading(false) },
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
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onLoad={() => setRazorpayLoaded(true)}
      />
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 999, backdropFilter: "blur(4px)" }}
      />
      {/* Modal */}
      <div style={{
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        zIndex: 1000, width: "100%", maxWidth: 460, padding: "0 16px",
      }}>
        <div style={{ background: "#10121A", border: "1px solid #1E2130", borderRadius: 20, padding: "36px 32px", position: "relative" }}>
          {/* Close */}
          <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", color: "#A5A7B2", cursor: "pointer", padding: 4 }}>
            <X size={20} />
          </button>

          {/* Order summary */}
          <div style={{ marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid #1E2130" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#A5A7B2", letterSpacing: "0.08em", marginBottom: 10 }}>ORDER SUMMARY</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>One Click Presets Pack</div>
                <div style={{ color: "#A5A7B2", fontSize: 12, marginTop: 2 }}>Premiere Pro Presets · Instant Access</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, color: "#A5A7B2", textDecoration: "line-through" }}>₹499</div>
                <div style={{ fontSize: 22, fontWeight: 900, background: "linear-gradient(135deg,#7C3AED,#2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>₹299</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#A5A7B2", marginBottom: 6 }}>Full Name</label>
              <input
                type="text" placeholder="Your full name" value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "#7C3AED")}
                onBlur={e => (e.target.style.borderColor = "#1E2130")}
              />
            </div>
            <div style={{ marginBottom: 14 }}>
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

            {error && (
              <div style={{ color: "#F87171", fontSize: 13, marginBottom: 16, padding: "10px 14px", background: "rgba(239,68,68,0.08)", borderRadius: 8 }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !razorpayLoaded}
              className="btn-primary"
              style={{ width: "100%", padding: "16px", fontSize: 16 }}
            >
              {loading ? "Processing..." : razorpayLoaded ? "Pay ₹299 Securely" : "Loading..."}
            </button>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 14, color: "#A5A7B2", fontSize: 12 }}>
              <Lock size={12} /> Secure Payment · Powered by Razorpay
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
