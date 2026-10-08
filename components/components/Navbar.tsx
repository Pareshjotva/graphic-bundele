"use client";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "What's Inside", href: "#whats-inside" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ onBuyClick }: { onBuyClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(8,9,13,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#7C3AED,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={16} color="white" fill="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: 16, color: "white", letterSpacing: "-0.3px" }}>One Click Presets</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: "#A5A7B2", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#A5A7B2")}>
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button onClick={onBuyClick} className="btn-primary" style={{ padding: "10px 20px", fontSize: 14, border: "none", cursor: "pointer" }} id="nav-cta">
          Get Presets – ₹299
        </button>

        {/* Mobile menu btn */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: "white", cursor: "pointer" }} id="mobile-menu-btn">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#10121A", borderTop: "1px solid #1E2130", padding: "16px 24px 24px" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", color: "#A5A7B2", textDecoration: "none", fontSize: 16, fontWeight: 500, padding: "12px 0", borderBottom: "1px solid #1E2130" }}>
              {l.label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); onBuyClick(); }} className="btn-primary" style={{ display: "block", width: "100%", textAlign: "center", padding: "14px", marginTop: 16, fontSize: 15, border: "none", cursor: "pointer" }}>
            Get Presets – ₹299
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          #nav-cta { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
