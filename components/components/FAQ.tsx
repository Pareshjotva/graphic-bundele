"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What software are these presets for?", a: "The presets are designed for Adobe Premiere Pro." },
  { q: "Are these presets easy to use?", a: "Yes. They are designed to make common editing tasks faster and easier." },
  { q: "Can I customize the presets?", a: "Yes. You can customize them according to your project and editing style." },
  { q: "Is this a one-time payment?", a: "Yes. The launch price is ₹299 as a one-time purchase." },
  { q: "How will I receive the presets?", a: "After successful payment, download/access details will be provided to your email." },
  { q: "Can I use these presets for multiple projects?", a: "Yes, the presets are designed for repeated use in your editing workflow." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "80px 24px", background: "#10121A" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: "-1px" }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div key={i} className="card-bg" style={{ borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s", borderColor: open === i ? "rgba(124,58,237,0.4)" : "#1E2130" }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "none", border: "none", color: "white", cursor: "pointer", textAlign: "left", gap: 12
              }}>
                <span style={{ fontWeight: 700, fontSize: 15 }}>{faq.q}</span>
                <ChevronDown size={18} color="#A5A7B2" style={{ flexShrink: 0, transform: open === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
              </button>
              {open === i && (
                <div style={{ padding: "0 20px 18px", color: "#A5A7B2", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
