import { useNavigate } from "react-router-dom";
import { fonts, colors } from "../styles/tokens";

const LINKS = [
  { path: "/",      label: "Home" },
  { path: "/plan",  label: "Plan Trip" },
  { path: "/saved", label: "Saved Trips" },
  { path: "/chat",  label: "AI Assistant" },
];

const FEATURES = ["Smart Itineraries", "Budget Planning", "Hotel Picks", "Food Guide", "AI Chat"];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{ background: colors.bgDeep, borderTop: `1px solid ${colors.amberBorder}`, padding: "48px 24px 32px", marginTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: fonts.display, fontSize: "1.4rem", color: colors.text, marginBottom: 12 }}>
              Wandr<span style={{ color: colors.amber }}>AI</span>
            </div>
            <p style={{ color: colors.textDim, fontSize: "0.9rem", lineHeight: 1.7, fontFamily: fonts.body }}>
              AI-powered travel planning that turns your dream destinations into perfect itineraries.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ color: colors.amber, fontFamily: fonts.body, fontWeight: 600, marginBottom: 16, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Navigate</h4>
            {LINKS.map((l) => (
              <button
                key={l.path}
                onClick={() => navigate(l.path)}
                style={{ display: "block", background: "none", border: "none", color: colors.textDim, cursor: "pointer", padding: "4px 0", fontFamily: fonts.body, fontSize: "0.9rem", transition: "color 0.2s" }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Features */}
          <div>
            <h4 style={{ color: colors.amber, fontFamily: fonts.body, fontWeight: 600, marginBottom: 16, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Features</h4>
            {FEATURES.map((f) => (
              <p key={f} style={{ color: colors.textDim, fontSize: "0.9rem", padding: "4px 0", fontFamily: fonts.body }}>{f}</p>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: colors.textDeep, fontSize: "0.85rem", fontFamily: fonts.body }}>© 2025 WandrAI. Crafted with ✈ and intelligence.</p>
          <p style={{ color: colors.textDeep, fontSize: "0.85rem", fontFamily: fonts.body }}>Powered by Claude AI</p>
        </div>
      </div>
    </footer>
  );
}
