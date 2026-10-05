import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section style={{ padding: "80px 24px", background: "#10121A" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ position: "relative", background: "#151821", border: "1px solid #1E2130", borderRadius: 24, padding: "60px 40px", overflow: "hidden" }}>
          {/* Glow */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 200, background: "radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 16, position: "relative" }}>
            Stop Rebuilding.<br /><span className="gradient-text">Start Creating.</span>
          </h2>
          <p style={{ color: "#A5A7B2", fontSize: 16, lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px", position: "relative" }}>
            Turn repetitive editing tasks into a faster workflow. Instead of creating the same effect again and again, simply apply the preset and keep creating.
          </p>
          <a href="/checkout" className="btn-primary" style={{ padding: "18px 36px", fontSize: 16, textDecoration: "none", position: "relative" }}>
            GET ONE CLICK PRESETS — ₹299 <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
