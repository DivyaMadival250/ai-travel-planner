import { fonts, colors } from "../styles/tokens";

const FLAG_MAP = {
  "Kyoto, Japan":      "🇯🇵",
  "Santorini, Greece": "🇬🇷",
  "Patagonia, Chile":  "🇨🇱",
};

export default function TripCard({ trip, onView }) {
  const days =
    trip.startDate && trip.endDate
      ? Math.round((new Date(trip.endDate) - new Date(trip.startDate)) / 86_400_000)
      : "?";

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${colors.border}`,
        borderRadius: 20, padding: 24,
        transition: "all 0.3s", cursor: "default",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.transform = "none"; }}
    >
      <div style={{ fontSize: 40, marginBottom: 16 }}>{FLAG_MAP[trip.destination] || "✈"}</div>

      <h3 style={{ fontFamily: fonts.display, fontSize: "1.4rem", color: colors.text, margin: "0 0 8px" }}>
        {trip.destination}
      </h3>

      <div style={{ display: "flex", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
        <span style={{ color: colors.textDim, fontFamily: fonts.body, fontSize: "0.85rem" }}>📅 {trip.startDate} → {trip.endDate}</span>
        <span style={{ color: colors.textDim, fontFamily: fonts.body, fontSize: "0.85rem" }}>⏱ {days} days</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ background: colors.amberDim, border: `1px solid rgba(245,158,11,0.2)`, borderRadius: 8, padding: "6px 14px" }}>
          <span style={{ color: colors.amber, fontFamily: fonts.body, fontWeight: 700, fontSize: "1rem" }}>
            ${trip.budget?.toLocaleString()}
          </span>
        </div>
        <button
          onClick={() => onView(trip)}
          style={{
            background: "none", border: `1px solid rgba(245,158,11,0.4)`,
            borderRadius: 8, color: colors.amber, padding: "8px 16px", cursor: "pointer",
            fontFamily: fonts.body, fontWeight: 600, fontSize: "0.85rem", transition: "all 0.2s",
          }}
        >
          View Trip →
        </button>
      </div>
    </div>
  );
}
