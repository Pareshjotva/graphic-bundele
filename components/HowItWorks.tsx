const steps = [
  { num: "01", title: "Choose Your Preset", desc: "Find the effect you need from the organized collection." },
  { num: "02", title: "Apply To Your Project", desc: "Use the preset in your Premiere Pro project." },
  { num: "03", title: "Customize & Create", desc: "Adjust it to match your style and continue editing." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: 14 }}>
            One Click. <span className="gradient-text">Three Simple Steps.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 0, alignItems: "center" }} className="steps-grid">
          {/* Step 1 */}
          <div className="card-bg" style={{ borderRadius: 16, padding: 32, textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#7C3AED,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 20, fontWeight: 900 }}>01</div>
            <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 10 }}>Choose Your Preset</h3>
            <p style={{ color: "#A5A7B2", fontSize: 14, lineHeight: 1.6 }}>Find the effect you need from the organized collection.</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", padding: "0 16px" }} className="step-arrow">
            <div style={{ width: 40, height: 2, background: "linear-gradient(90deg,#7C3AED,#2563EB)", position: "relative" }}>
              <div style={{ position: "absolute", right: -6, top: -5, color: "#2563EB", fontSize: 14 }}>▶</div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="card-bg" style={{ borderRadius: 16, padding: 32, textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#7C3AED,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 20, fontWeight: 900 }}>02</div>
            <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 10 }}>Apply To Your Project</h3>
            <p style={{ color: "#A5A7B2", fontSize: 14, lineHeight: 1.6 }}>Use the preset in your Premiere Pro project.</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", padding: "0 16px" }} className="step-arrow">
            <div style={{ width: 40, height: 2, background: "linear-gradient(90deg,#7C3AED,#2563EB)", position: "relative" }}>
              <div style={{ position: "absolute", right: -6, top: -5, color: "#2563EB", fontSize: 14 }}>▶</div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="card-bg" style={{ borderRadius: 16, padding: 32, textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#7C3AED,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 20, fontWeight: 900 }}>03</div>
            <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 10 }}>Customize & Create</h3>
            <p style={{ color: "#A5A7B2", fontSize: 14, lineHeight: 1.6 }}>Adjust it to match your style and continue editing.</p>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .steps-grid{grid-template-columns:1fr !important;}
          .step-arrow{transform:rotate(90deg); padding:8px 0 !important;}
        }
      `}</style>
    </section>
  );
}
