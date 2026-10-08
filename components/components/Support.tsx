import { MessageCircle } from "lucide-react";

export default function Support() {
  return (
    <section style={{ padding: "60px 24px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <div className="card-bg" style={{ borderRadius: 20, padding: "40px 32px" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <MessageCircle size={24} color="#7C3AED" />
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>Need Help?</h2>
          <p style={{ color: "#A5A7B2", fontSize: 15, lineHeight: 1.7, marginBottom: 8 }}>
            Having any issue with your purchase or download?
          </p>
          <p style={{ color: "#A5A7B2", fontSize: 15, marginBottom: 28 }}>
            Contact: <strong style={{ color: "white" }}>Jankilkhandala</strong>
          </p>
          <a href="#contact" className="btn-secondary" style={{ padding: "12px 28px", fontSize: 14, textDecoration: "none", display: "inline-flex" }}>
            Get Support
          </a>
        </div>
      </div>
    </section>
  );
}
