"use client";
const features = [
  { icon: "⚡", title: "Save Time", desc: "Spend less time creating effects manually and more time editing." },
  { icon: "🎯", title: "Easy To Use", desc: "Apply your preset and customize it according to your project." },
  { icon: "📁", title: "Organized Collection", desc: "Find the effect you need without searching through random files." },
  { icon: "🎬", title: "Built For Editors", desc: "Created from practical editing experience and real-world workflows." },
  { icon: "♻️", title: "Reusable", desc: "Use the presets across multiple projects without any restrictions." },
  { icon: "🔧", title: "Flexible", desc: "Customize timing, scale, position and other properties to fit your project." },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "80px 24px", background: "#10121A" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: 14 }}>
            Why Editors Choose<br /><span className="gradient-text">One Click Presets</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="feat-grid">
          {features.map(f => (
            <div key={f.title} className="card-bg" style={{ borderRadius: 14, padding: "28px 24px", transition: "all 0.2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.borderColor = "rgba(124,58,237,0.4)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.borderColor = "#1E2130"; }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ color: "#A5A7B2", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.feat-grid{grid-template-columns:1fr 1fr !important;}} @media(max-width:560px){.feat-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
