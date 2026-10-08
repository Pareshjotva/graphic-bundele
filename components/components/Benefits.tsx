"use client";
const benefits = [
  { icon: "⚡", title: "Instant Access", desc: "Get your presets after successful payment." },
  { icon: "🎬", title: "Ready to Use", desc: "Apply professional effects with minimal effort." },
  { icon: "⏱", title: "Save Hours", desc: "Reduce repetitive editing work." },
  { icon: "💻", title: "Built for Editors", desc: "Designed for modern video editing workflows." },
];

export default function Benefits() {
  return (
    <section style={{ padding: "0 24px 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="benefits-grid">
        {benefits.map(b => (
          <div key={b.title} className="card-bg" style={{ borderRadius: 14, padding: "24px 20px", transition: "transform 0.2s, border-color 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#1E2130"; }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>{b.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{b.title}</div>
            <div style={{ fontSize: 13, color: "#A5A7B2", lineHeight: 1.5 }}>{b.desc}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.benefits-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
