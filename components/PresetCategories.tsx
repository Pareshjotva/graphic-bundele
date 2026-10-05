"use client";
import { User, Type, ArrowRightLeft, Move, Sparkles } from "lucide-react";

const categories = [
  { num: "01", icon: User, title: "Character Animation Presets", desc: "Create smooth and engaging character movements that bring your subjects to life.", color: "#7C3AED", preview: ["Walk In", "Bounce", "Slide Up", "Fade"] },
  { num: "02", icon: Type, title: "Subtitle & Text Effects", desc: "Give your captions and text a more dynamic and professional look.", color: "#2563EB", preview: ["Pop In", "Typewrite", "Glow", "Slide"] },
  { num: "03", icon: ArrowRightLeft, title: "Smooth Transitions", desc: "Make your cuts flow naturally from one scene to another.", color: "#0EA5E9", preview: ["Wipe", "Zoom", "Spin", "Blur"] },
  { num: "04", icon: Move, title: "Motion Effects", desc: "Add movement and energy to your videos with dynamic motion presets.", color: "#8B5CF6", preview: ["Shake", "Drift", "Push", "Pull"] },
  { num: "05", icon: Sparkles, title: "Professional Editing Presets", desc: "Speed up your everyday editing workflow with ready-to-use effects.", color: "#06B6D4", preview: ["Color", "Grade", "Vibe", "Clean"] },
];

export default function PresetCategories() {
  return (
    <section id="whats-inside" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: 14 }}>
            Everything You Need To<br /><span className="gradient-text">Speed Up Your Editing</span>
          </h2>
          <p style={{ color: "#A5A7B2", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
            A carefully organized collection of ready-to-use presets covering common editing needs.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="cats-grid">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <div key={cat.num} className="card-bg" style={{ borderRadius: 16, padding: 28, transition: "all 0.25s", cursor: "default" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-6px)"; el.style.borderColor = cat.color + "55"; el.style.boxShadow = `0 16px 48px ${cat.color}22`; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.borderColor = "#1E2130"; el.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: cat.color, letterSpacing: "0.06em" }}>{cat.num}</span>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: cat.color + "22", border: `1px solid ${cat.color}44`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={18} color={cat.color} />
                  </div>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 16, marginBottom: 8, lineHeight: 1.3 }}>{cat.title}</h3>
                <p style={{ color: "#A5A7B2", fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{cat.desc}</p>
                {/* Preview chips */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {cat.preview.map(p => (
                    <span key={p} style={{ fontSize: 11, fontWeight: 600, color: cat.color, background: cat.color + "15", border: `1px solid ${cat.color}30`, borderRadius: 6, padding: "3px 8px" }}>{p}</span>
                  ))}
                </div>
              </div>
            );
          })}
          {/* Last card spans 2 cols on desktop */}
          <div style={{ gridColumn: "span 1" }} />
        </div>
      </div>
      <style>{`@media(max-width:900px){.cats-grid{grid-template-columns:1fr 1fr !important;}} @media(max-width:600px){.cats-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
