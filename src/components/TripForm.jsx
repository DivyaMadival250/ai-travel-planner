import { useState } from "react";
import { fonts, colors, inputStyle, labelStyle } from "../styles/tokens";

const INTEREST_OPTIONS = [
  { id: "beach",     icon: "🏖", label: "Beach" },
  { id: "food",      icon: "🍜", label: "Food" },
  { id: "history",   icon: "🏛", label: "History" },
  { id: "nightlife", icon: "🎉", label: "Nightlife" },
  { id: "adventure", icon: "🧗", label: "Adventure" },
  { id: "nature",    icon: "🌿", label: "Nature" },
  { id: "art",       icon: "🎨", label: "Art & Culture" },
  { id: "wellness",  icon: "🧘", label: "Wellness" },
];

const INITIAL_FORM = { destination: "", startDate: "", endDate: "", budget: "", interests: [] };

export default function TripForm({ onSubmit, loading }) {
  const [form, setForm] = useState(INITIAL_FORM);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const toggleInterest = (id) =>
    set("interests", form.interests.includes(id)
      ? form.interests.filter((i) => i !== id)
      : [...form.interests, id]);

  const handleSubmit = (e) => { e.preventDefault(); onSubmit(form); };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 24 }}>
        {/* Destination */}
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Destination</label>
          <input
            type="text" required placeholder="e.g. Kyoto, Japan"
            value={form.destination} onChange={(e) => set("destination", e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Dates */}
        <div>
          <label style={labelStyle}>Start Date</label>
          <input type="date" required value={form.startDate} onChange={(e) => set("startDate", e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>End Date</label>
          <input type="date" required value={form.endDate} onChange={(e) => set("endDate", e.target.value)} style={inputStyle} />
        </div>

        {/* Budget */}
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Total Budget (USD)</label>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: colors.amber, fontFamily: fonts.body, fontWeight: 600 }}>$</span>
            <input
              type="number" required placeholder="3000" min="100"
              value={form.budget} onChange={(e) => set("budget", e.target.value)}
              style={{ ...inputStyle, paddingLeft: 32 }}
            />
          </div>
        </div>
      </div>

      {/* Interests */}
      <div style={{ marginBottom: 36 }}>
        <label style={labelStyle}>Interests & Vibe</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {INTEREST_OPTIONS.map((opt) => {
            const active = form.interests.includes(opt.id);
            return (
              <button
                key={opt.id} type="button" onClick={() => toggleInterest(opt.id)}
                style={{
                  background: active ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.04)",
                  border: active ? "1px solid rgba(245,158,11,0.6)" : `1px solid ${colors.border}`,
                  borderRadius: 50, padding: "8px 18px", cursor: "pointer",
                  color: active ? colors.amber : colors.textMuted,
                  fontFamily: fonts.body, fontSize: "0.9rem", fontWeight: 500,
                  transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6,
                }}
              >
                <span>{opt.icon}</span> {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit" disabled={loading}
        style={{
          width: "100%", padding: "16px",
          background: loading ? "rgba(245,158,11,0.4)" : "linear-gradient(135deg, #F59E0B, #F97316)",
          border: "none", borderRadius: 12,
          color: loading ? colors.textMuted : colors.bg,
          fontFamily: fonts.body, fontWeight: 700, fontSize: "1rem",
          cursor: loading ? "not-allowed" : "pointer",
          letterSpacing: "0.05em", transition: "all 0.2s",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}
      >
        {loading ? "✈ Generating Your Journey..." : "✨ Generate My Itinerary"}
      </button>
    </form>
  );
}
