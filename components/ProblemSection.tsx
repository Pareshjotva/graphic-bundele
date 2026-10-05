const without = ["Rebuild effects from scratch", "Adjust keyframes manually", "Repeat the same process", "Waste valuable editing time"];
const withPresets = ["Choose your preset", "Apply with one click", "Customize to your style", "Keep creating"];

export default function ProblemSection() {
  return (
    <section style={{ padding: "80px 24px", background: "#10121A" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: 16 }}>
            Still Creating The Same Effects<br />Again and Again?
          </h2>
          <p style={{ color: "#A5A7B2", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Rebuilding animations, text effects, transitions and motion effects manually can take valuable time. Use ready-to-use presets and focus on the creative part.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 24, alignItems: "center" }} className="compare-grid">
          {/* Without */}
          <div style={{ background: "#151821", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 16, padding: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF4444" }} />
              <span style={{ fontWeight: 800, fontSize: 13, color: "#EF4444", letterSpacing: "0.06em" }}>WITHOUT PRESETS</span>
            </div>
            {without.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid #1E2130" }}>
                <span style={{ color: "#EF4444", fontSize: 16, flexShrink: 0 }}>✕</span>
                <span style={{ color: "#A5A7B2", fontSize: 14 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#7C3AED,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>→</div>
          </div>

          {/* With */}
          <div style={{ background: "#151821", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 16, padding: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ fontWeight: 800, fontSize: 13, color: "#22C55E", letterSpacing: "0.06em" }}>WITH ONE CLICK PRESETS</span>
            </div>
            {withPresets.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid #1E2130" }}>
                <span style={{ color: "#22C55E", fontSize: 16, flexShrink: 0 }}>✓</span>
                <span style={{ color: "white", fontSize: 14, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.compare-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
