"use client";
import { Zap } from "lucide-react";

const links = ["Home", "What's Inside", "How It Works", "FAQ", "Contact"];

export default function Footer() {
  return (
    <footer style={{ background: "#08090D", borderTop: "1px solid #1E2130", padding: "48px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40, flexWrap: "wrap", gap: 32 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#7C3AED,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={16} color="white" fill="white" />
              </div>
              <span style={{ fontWeight: 800, fontSize: 16, color: "white" }}>One Click Presets Pack</span>
            </div>
            <p style={{ color: "#A5A7B2", fontSize: 13 }}>Your editing workflow, made faster.</p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-").replace("'", "")}`} style={{ color: "#A5A7B2", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#A5A7B2")}>
                {l}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1E2130", paddingTop: 24, textAlign: "center", color: "#A5A7B2", fontSize: 13 }}>
          © 2026 One Click Presets Pack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
