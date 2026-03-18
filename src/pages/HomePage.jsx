import { useNavigate } from "react-router-dom";
import { fonts, colors } from "../styles/tokens";

const FEATURES = [
  { icon: "🗺", title: "Smart Itineraries",   desc: "AI-curated day-by-day plans tailored to your interests, pace, and travel style." },
  { icon: "💰", title: "Budget Planning",      desc: "Transparent cost breakdowns with smart suggestions to stretch every dollar." },
  { icon: "🏨", title: "Hotel & Food Picks",   desc: "Handpicked recommendations from local gems to luxury stays." },
  { icon: "🤖", title: "AI Chat Assistant",    desc: "Ask anything, anytime. Your 24/7 travel concierge is always ready." },
];

const STATS = [
  { value: "50K+", label: "Trips Planned" },
  { value: "120+", label: "Countries" },
  { value: "4.9★", label: "Avg Rating" },
  { value: "30s",  label: "Plan Time" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "100px 24px 60px" }}>
        {/* Animated background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
          <div style={{ position: "absolute", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "pulse 6s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 1200, height: 1200, borderRadius: "50%", border: "1px solid rgba(245,158,11,0.05)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
          <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", border: "1px solid rgba(99,102,241,0.08)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{ position: "absolute", width: 3 + (i % 3), height: 3 + (i % 3), borderRadius: "50%", background: colors.amber, opacity: 0.3 + (i % 4) * 0.1, left: `${10 + (i * 7) % 80}%`, top: `${10 + (i * 11) % 80}%`, animation: `float ${3 + (i % 4)}s ease-in-out ${(i % 3)}s infinite alternate` }} />
          ))}
        </div>

        <div style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: 760 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,158,11,0.1)", border: `1px solid ${colors.amberBorder}`, borderRadius: 50, padding: "6px 18px", marginBottom: 32 }}>
            <span style={{ fontSize: 12, color: colors.amber, fontFamily: fonts.body, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>✨ AI-Powered Travel Planning</span>
          </div>

          <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(3rem, 8vw, 5.5rem)", color: colors.text, lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
            Plan Your<br />
            <span style={{ background: "linear-gradient(135deg, #F59E0B, #EF4444, #EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Perfect Trip</span><br />
            with AI
          </h1>

          <p style={{ color: colors.textDim, fontFamily: fonts.body, fontSize: "1.15rem", lineHeight: 1.7, margin: "0 auto 40px", maxWidth: 520 }}>
            Describe your dream destination and watch our AI craft a personalized itinerary in seconds — complete with day plans, budget breakdowns, and local tips.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => navigate("/plan")} style={{ background: "linear-gradient(135deg, #F59E0B, #F97316)", border: "none", borderRadius: 14, padding: "16px 36px", color: colors.bg, fontFamily: fonts.body, fontWeight: 700, fontSize: "1.05rem", cursor: "pointer", boxShadow: "0 8px 32px rgba(245,158,11,0.3)" }}>
              Start Planning ✈
            </button>
            <button onClick={() => navigate("/chat")} style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${colors.border}`, borderRadius: 14, padding: "16px 36px", color: colors.text, fontFamily: fonts.body, fontWeight: 600, fontSize: "1.05rem", cursor: "pointer" }}>
              Ask AI First →
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24 }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center", background: "rgba(255,255,255,0.03)", border: `1px solid ${colors.border}`, borderRadius: 16, padding: 24 }}>
              <div style={{ fontFamily: fonts.display, fontSize: "2.4rem", color: colors.amber, marginBottom: 6 }}>{s.value}</div>
              <div style={{ color: colors.textDim, fontFamily: fonts.body, fontSize: "0.85rem", letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3rem)", color: colors.text, margin: "0 0 16px" }}>
              Everything you need to travel <span style={{ color: colors.amber }}>smarter</span>
            </h2>
            <p style={{ color: colors.textDim, fontFamily: fonts.body, fontSize: "1rem", maxWidth: 480, margin: "0 auto" }}>One platform. Endless possibilities. Powered by advanced AI.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${colors.border}`, borderRadius: 20, padding: 32, transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontSize: 40, marginBottom: 20 }}>{f.icon}</div>
                <h3 style={{ fontFamily: fonts.display, fontSize: "1.3rem", color: colors.text, margin: "0 0 12px" }}>{f.title}</h3>
                <p style={{ color: colors.textDim, fontFamily: fonts.body, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))", border: `1px solid rgba(245,158,11,0.2)`, borderRadius: 24, padding: "60px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.1), transparent)" }} />
            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: colors.text, margin: "0 0 16px" }}>Your next adventure awaits</h2>
            <p style={{ color: colors.textMuted, fontFamily: fonts.body, fontSize: "1rem", margin: "0 0 32px" }}>Join 50,000+ travelers who plan smarter with WandrAI</p>
            <button onClick={() => navigate("/plan")} style={{ background: "linear-gradient(135deg, #F59E0B, #EF4444)", border: "none", borderRadius: 12, padding: "15px 40px", color: colors.bg, fontFamily: fonts.body, fontWeight: 700, fontSize: "1rem", cursor: "pointer", boxShadow: "0 8px 24px rgba(245,158,11,0.3)" }}>
              Start Planning — It's Free ✈
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity:.6; } 50% { transform: translate(-50%,-50%) scale(1.1); opacity:1; } }
        @keyframes float  { from { transform: translateY(0); }  to { transform: translateY(-20px); } }
      `}</style>
    </div>
  );
}
