const beforeSteps = ["Open Premiere Pro", "Create new sequence", "Build keyframes manually", "Adjust timing", "Tweak values", "Repeat for next clip"];
const afterSteps = ["Open preset panel", "Apply preset", "Customize & done ✓"];

export default function BeforeAfter() {
  return (
    <section style={{ padding: "80px 24px", background: "#10121A" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: 14 }}>
            From Manual Work To<br /><span className="gradient-text">One-Click Editing</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="ba-grid">
          {/* Before */}
          <div style={{ background: "#151821", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 16, padding: 28 }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: "#EF4444", marginBottom: 20, letterSpacing: "0.06em" }}>⏳ BUILD EVERYTHING FROM SCRATCH</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {beforeSteps.map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < beforeSteps.length - 1 ? "1px solid #1E2130" : "none" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#1E2130", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#A5A7B2", fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                  <span style={{ color: "#A5A7B2", fontSize: 14 }}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: "10px 14px", background: "rgba(239,68,68,0.08)", borderRadius: 8, fontSize: 13, color: "#EF4444", fontWeight: 600 }}>
              ⏱ Takes 30–60 minutes per effect
            </div>
          </div>

          {/* After */}
          <div style={{ background: "#151821", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 16, padding: 28 }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: "#22C55E", marginBottom: 20, letterSpacing: "0.06em" }}>⚡ APPLY. CUSTOMIZE. CREATE.</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {afterSteps.map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < afterSteps.length - 1 ? "1px solid #1E2130" : "none" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#7C3AED,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                  <span style={{ color: "white", fontSize: 14, fontWeight: 500 }}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: "10px 14px", background: "rgba(34,197,94,0.08)", borderRadius: 8, fontSize: 13, color: "#22C55E", fontWeight: 600 }}>
              ⚡ Done in seconds
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:700px){.ba-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
