"use client";
import { useState } from "react";

const tabs = ["All", "Animation", "Text", "Transitions", "Motion"];

const presets = [
  { name: "Smooth Zoom", cat: "Motion", color: "#7C3AED", bars: [40,70,90,60,80] },
  { name: "Pop Text", cat: "Text", color: "#2563EB", bars: [60,90,50,80,70] },
  { name: "Dynamic Caption", cat: "Text", color: "#0EA5E9", bars: [80,50,70,90,60] },
  { name: "Slide Transition", cat: "Transitions", color: "#8B5CF6", bars: [50,80,60,70,90] },
  { name: "Character Bounce", cat: "Animation", color: "#06B6D4", bars: [70,60,90,50,80] },
  { name: "Motion Blur", cat: "Motion", color: "#7C3AED", bars: [90,70,50,80,60] },
  { name: "Quick Scale", cat: "Animation", color: "#2563EB", bars: [60,80,70,50,90] },
  { name: "Text Reveal", cat: "Text", color: "#0EA5E9", bars: [80,60,90,70,50] },
];

export default function PresetPreview() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? presets : presets.filter(p => p.cat === active);

  return (
    <section style={{ padding: "80px 24px", background: "#10121A" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: 14 }}>
            See The <span className="gradient-text">Difference</span>
          </h2>
          <p style={{ color: "#A5A7B2", fontSize: 16 }}>Browse the preset collection and see what's included.</p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActive(tab)} style={{
              padding: "8px 20px", borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
              background: active === tab ? "linear-gradient(135deg,#7C3AED,#2563EB)" : "transparent",
              color: active === tab ? "white" : "#A5A7B2",
              border: active === tab ? "none" : "1px solid #1E2130",
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="preview-grid">
          {filtered.map(preset => (
            <div key={preset.name} className="card-bg" style={{ borderRadius: 14, padding: 20, transition: "all 0.25s", cursor: "pointer" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.borderColor = preset.color + "55"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.borderColor = "#1E2130"; }}>
              {/* Mini waveform visual */}
              <div style={{ background: "#0D0F17", borderRadius: 8, padding: "12px 10px", marginBottom: 14, display: "flex", alignItems: "flex-end", gap: 4, height: 56 }}>
                {preset.bars.map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 3, background: `linear-gradient(180deg, ${preset.color}, ${preset.color}66)`, transition: "height 0.3s" }} />
                ))}
              </div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{preset.name}</div>
              <div style={{ fontSize: 11, color: preset.color, fontWeight: 600, background: preset.color + "15", borderRadius: 6, padding: "2px 8px", display: "inline-block" }}>{preset.cat}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.preview-grid{grid-template-columns:repeat(2,1fr) !important;}} @media(max-width:500px){.preview-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
