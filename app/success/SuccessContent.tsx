"use client";
import { useSearchParams } from "next/navigation";
import { Download, CheckCircle } from "lucide-react";

export default function SuccessContent() {
  const params = useSearchParams();
  const email = params.get("email") || "your email";

  return (
    <div style={{ minHeight: "100vh", background: "#08090D", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
        <div style={{ background: "#10121A", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 24, padding: "48px 36px" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <CheckCircle size={36} color="#22C55E" />
          </div>

          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Payment Successful 🎉</h1>
          <p style={{ color: "#A5A7B2", fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}>
            Your One Click Presets Pack is ready.
          </p>

          <a href="#" className="btn-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "16px", fontSize: 15, textDecoration: "none", borderRadius: 12, marginBottom: 20 }}>
            <Download size={18} /> Download Presets
          </a>

          <div style={{ background: "#151821", border: "1px solid #1E2130", borderRadius: 10, padding: "14px 16px", fontSize: 13, color: "#A5A7B2" }}>
            📩 Your download details have been sent to <strong style={{ color: "white" }}>{email}</strong>
          </div>

          <a href="/" style={{ display: "block", marginTop: 24, color: "#A5A7B2", fontSize: 13, textDecoration: "none" }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
