"use client";
import { ArrowRight, Play, Download, Sparkles } from "lucide-react";

function MockEditor() {
  const presets = ["Smooth Zoom", "Pop Text", "Slide In", "Motion Blur", "Character Bounce", "Text Reveal"];
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 480 }}>
      {/* Main editor card */}
      <div className="float-anim" style={{ background: "#10121A", border: "1px solid #1E2130", borderRadius: 16, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
        {/* Editor top bar */}
        <div style={{ background: "#0D0F17", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #1E2130" }}>
          <div style={{ display: "flex", gap: 6 }}>
            {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
          </div>
          <span style={{ color: "#A5A7B2", fontSize: 11, marginLeft: 8, fontWeight: 500 }}>Premiere Pro — One Click Presets</span>
        </div>

        {/* Timeline area */}
        <div style={{ padding: 16 }}>
          <div style={{ background: "#0D0F17", borderRadius: 8, padding: 12, marginBottom: 12 }}>
            <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
              {[80,120,60,100,90,70].map((w,i) => (
                <div key={i} style={{ height: 20, width: w, borderRadius: 4, background: i === 2 ? "linear-gradient(90deg,#7C3AED,#2563EB)" : "#1E2130", flexShrink: 0 }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {[60,90,110,80,70,100].map((w,i) => (
                <div key={i} style={{ height: 14, width: w, borderRadius: 4, background: i === 1 ? "rgba(124,58,237,0.4)" : "#151821", flexShrink: 0 }} />
              ))}
            </div>
          </div>

          {/* Preset grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {presets.map((name, i) => (
              <div key={name} style={{
                background: i === 0 ? "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(37,99,235,0.3))" : "#151821",
                border: `1px solid ${i === 0 ? "rgba(124,58,237,0.5)" : "#1E2130"}`,
                borderRadius: 8, padding: "8px 6px", textAlign: "center", cursor: "pointer",
                transition: "all 0.2s"
              }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg,#7C3AED,#2563EB)", margin: "0 auto 4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sparkles size={12} color="white" />
                </div>
                <span style={{ fontSize: 9, color: i === 0 ? "white" : "#A5A7B2", fontWeight: 600, lineHeight: 1.2 }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating price badge */}
      <div className="float-anim2 pulse-glow" style={{
        position: "absolute", top: -16, right: -16,
        background: "linear-gradient(135deg,#7C3AED,#2563EB)",
        borderRadius: 12, padding: "10px 16px", textAlign: "center",
        boxShadow: "0 8px 32px rgba(124,58,237,0.5)"
      }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", fontWeight: 600, textDecoration: "line-through" }}>₹499</div>
        <div style={{ fontSize: 22, fontWeight: 900, color: "white", lineHeight: 1 }}>₹299</div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>LAUNCH PRICE</div>
      </div>

      {/* Instant download badge */}
      <div style={{
        position: "absolute", bottom: -16, left: -16,
        background: "#10121A", border: "1px solid #22C55E",
        borderRadius: 10, padding: "8px 14px", display: "flex", alignItems: "center", gap: 6
      }}>
        <Download size={14} color="#22C55E" />
        <span style={{ fontSize: 12, color: "#22C55E", fontWeight: 700 }}>Instant Download</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 24px 80px", position: "relative", overflow: "hidden" }}>
      {/* Background glow */}
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
        {/* Left */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7C3AED" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#A78BFA", letterSpacing: "0.08em" }}>PREMIERE PRO EDITING PACK</span>
          </div>

          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 20 }}>
            Edit Faster.<br />
            Create Better.<br />
            <span className="gradient-text">Make Every Cut<br />Stand Out.</span>
          </h1>

          <p style={{ fontSize: 17, color: "#A5A7B2", lineHeight: 1.7, marginBottom: 32, maxWidth: 460 }}>
            Stop wasting hours creating the same effects again and again. Choose a preset, apply it, customize it, and keep creating.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#pricing" className="btn-primary" style={{ padding: "16px 28px", fontSize: 15, textDecoration: "none" }}>
              Get the Preset Pack – ₹299 <ArrowRight size={16} />
            </a>
            <a href="#whats-inside" className="btn-secondary" style={{ padding: "16px 24px", fontSize: 15, textDecoration: "none" }}>
              <Play size={15} /> Explore What's Inside
            </a>
          </div>

          <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
            {[["50+", "Presets"], ["5", "Categories"], ["1-Click", "Apply"]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>{val}</div>
                <div style={{ fontSize: 12, color: "#A5A7B2", fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 32, paddingBottom: 32 }}>
          <MockEditor />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
