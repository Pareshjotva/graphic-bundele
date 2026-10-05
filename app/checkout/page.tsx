"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) { setError("Please fill in all fields."); return; }
    setLoading(true);
    setError("");
    try {
      // Create order via API
      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, amount: 299 }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create order");

      // TODO: Initialize Razorpay with data.orderId
      // For now, simulate success
      router.push(`/success?email=${encodeURIComponent(form.email)}`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#08090D", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ width: "100%", maxWidth: 480 }}>
        <button onClick={() => router.back()} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", color: "#A5A7B2", cursor: "pointer", fontSize: 14, marginBottom: 32, padding: 0 }}>
          <ArrowLeft size={16} /> Back
        </button>

        <div style={{ background: "#10121A", border: "1px solid #1E2130", borderRadius: 20, padding: "36px 32px" }}>
          {/* Order summary */}
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

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#A5A7B2", marginBottom: 6 }}>Full Name</label>
              <input
                type="text" placeholder="Your full name" value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={{ width: "100%", background: "#151821", border: "1px solid #1E2130", borderRadius: 10, padding: "12px 14px", color: "white", fontSize: 14, outline: "none", transition: "border-color 0.2s" }}
                onFocus={e => (e.target.style.borderColor = "#7C3AED")}
                onBlur={e => (e.target.style.borderColor = "#1E2130")}
              />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#A5A7B2", marginBottom: 6 }}>Email Address</label>
              <input
                type="email" placeholder="your@email.com" value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={{ width: "100%", background: "#151821", border: "1px solid #1E2130", borderRadius: 10, padding: "12px 14px", color: "white", fontSize: 14, outline: "none", transition: "border-color 0.2s" }}
                onFocus={e => (e.target.style.borderColor = "#7C3AED")}
                onBlur={e => (e.target.style.borderColor = "#1E2130")}
              />
            </div>

            {error && <div style={{ color: "#F87171", fontSize: 13, marginBottom: 16, padding: "10px 14px", background: "rgba(239,68,68,0.08)", borderRadius: 8 }}>{error}</div>}

            <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", padding: "16px", fontSize: 16 }}>
              {loading ? "Processing..." : "Pay ₹299"}
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
