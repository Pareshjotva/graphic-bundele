"use client";
const creators = [
  { icon: "🎬", title: "Video Editors", desc: "Create polished edits faster." },
  { icon: "▶️", title: "YouTube Creators", desc: "Speed up your video production." },
  { icon: "📱", title: "Instagram Reel Creators", desc: "Create engaging short-form content." },
  { icon: "✨", title: "Content Creators", desc: "Spend more time creating, less time tweaking." },
  { icon: "💼", title: "Freelance Editors", desc: "Improve your editing workflow." },
  { icon: "🖥", title: "Premiere Pro Users", desc: "Get a ready-to-use collection of editing effects." },
];

export default function PerfectFor() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: 14 }}>
            Made For Creators Who Want To<br /><span className="gradient-text">Edit Faster</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="perf-grid">
          {creators.map(c => (
            <div key={c.title} className="card-bg" style={{ borderRadius: 14, padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 16, transition: "all 0.2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(124,58,237,0.4)"; el.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#1E2130"; el.style.transform = "translateY(0)"; }}>
              <div style={{ fontSize: 28, flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{c.title}</div>
                <div style={{ color: "#A5A7B2", fontSize: 13 }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.perf-grid{grid-template-columns:1fr 1fr !important;}} @media(max-width:560px){.perf-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
