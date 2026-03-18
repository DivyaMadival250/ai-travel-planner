import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fonts, colors } from "../styles/tokens";

const NAV_ITEMS = [
  { path: "/",       label: "Home" },
  { path: "/plan",   label: "Plan Trip" },
  { path: "/saved",  label: "Saved Trips" },
  { path: "/chat",   label: "AI Assistant" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (path) => { navigate(path); setMenuOpen(false); };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,14,30,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${colors.amberBorder}` : "none",
        transition: "all 0.3s ease",
        padding: "0 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <button onClick={() => go("/")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #F59E0B, #EF4444)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>✈</div>
          <span style={{ fontFamily: fonts.display, fontSize: "1.3rem", color: colors.text, letterSpacing: "0.02em" }}>
            Wandr<span style={{ color: colors.amber }}>AI</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              onClick={() => go(item.path)}
              style={{
                background: pathname === item.path ? colors.amberDim : "none",
                border: "none",
                color: pathname === item.path ? colors.amber : colors.textMuted,
                padding: "8px 16px", borderRadius: 8, cursor: "pointer",
                fontFamily: fonts.body, fontSize: "0.9rem", fontWeight: 500,
                transition: "all 0.2s", letterSpacing: "0.02em",
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => go("/plan")}
            style={{
              background: "linear-gradient(135deg, #F59E0B, #F97316)",
              border: "none", color: colors.bg, padding: "9px 20px", borderRadius: 8,
              cursor: "pointer", fontFamily: fonts.body, fontWeight: 700,
              fontSize: "0.9rem", marginLeft: 8, transition: "all 0.2s",
            }}
          >
            Plan Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="mobile-menu-btn"
          style={{ display: "none", background: "none", border: "none", color: colors.text, fontSize: 24, cursor: "pointer" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{ background: "rgba(10,14,30,0.98)", borderTop: `1px solid ${colors.amberBorder}`, padding: "16px 24px 20px" }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              onClick={() => go(item.path)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                background: "none", border: "none",
                color: pathname === item.path ? colors.amber : "#CBD5E1",
                padding: "12px 0", cursor: "pointer",
                fontFamily: fonts.body, fontSize: "1rem", fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
