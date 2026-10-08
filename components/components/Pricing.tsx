const includes = [
  "Character Animation Presets",
  "Subtitle & Text Effects",
  "Smooth Transitions",
  "Motion Effects",
  "Professional Editing Presets",
  "Instant Digital Access",
];

export default function Pricing({ onBuyClick }: { onBuyClick: () => void }) {
  return (
    <section id="pricing" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#F87171" }}>🔥 SPECIAL LAUNCH OFFER</span>
        </div>

        <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: 40 }}>
          Get The Complete<br /><span className="gradient-text">One Click Presets Pack</span>
        </h2>

        {/* Pricing card */}
        <div style={{
          background: "#10121A",
          border: "1px solid rgba(124,58,237,0.4)",
          borderRadius: 24,
          padding: "40px 36px",
          boxShadow: "0 0 80px rgba(124,58,237,0.15)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Glow top */}
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 200, height: 2, background: "linear-gradient(90deg,transparent,#7C3AED,transparent)" }} />

          <div style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 18, color: "#A5A7B2", textDecoration: "line-through", fontWeight: 500 }}>₹499</span>
          </div>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1, marginBottom: 4 }}>
            <span className="gradient-text">₹299</span>
          </div>
          <div style={{ color: "#A5A7B2", fontSize: 14, fontWeight: 600, marginBottom: 32 }}>One-time payment · No subscription</div>

          {/* Includes */}
          <div style={{ textAlign: "left", marginBottom: 32 }}>
            {includes.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid #1E2130" }}>
                <span style={{ color: "#22C55E", fontSize: 16, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>

          <button onClick={onBuyClick} className="btn-primary" style={{ display: "block", width: "100%", padding: "18px", fontSize: 16, border: "none", cursor: "pointer", borderRadius: 14, textAlign: "center" }}>
            GET THE PRESET PACK — ₹299
          </button>

          <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 20, flexWrap: "wrap" }}>
            {[["🔒", "Secure Payment"], ["⚡", "Instant Access"], ["📩", "Sent To Email"]].map(([icon, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#A5A7B2", fontWeight: 500 }}>
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
