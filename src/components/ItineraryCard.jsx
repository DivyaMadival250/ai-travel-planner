import { useState } from "react";
import { fonts, colors } from "../styles/tokens";

function Section({ icon, title, items, color }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 16 }}>{icon}</span>
        <h4 style={{ color, fontFamily: fonts.body, fontWeight: 600, fontSize: "0.85rem", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>{title}</h4>
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item, i) => (
          <li key={i} style={{ color: "#CBD5E1", fontFamily: fonts.body, fontSize: "0.88rem", lineHeight: 1.5, paddingLeft: 12, borderLeft: `2px solid ${color}30` }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ItineraryCard({ day }) {
  const [expanded, setExpanded] = useState(day.day === 1);

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${expanded ? "rgba(245,158,11,0.3)" : colors.border}`,
        borderRadius: 16, overflow: "hidden", transition: "all 0.3s",
        borderLeft: `4px solid ${expanded ? colors.amber : "transparent"}`,
      }}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded((e) => !e)}
        style={{ width: "100%", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", color: colors.text }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 44, background: colors.amberDim, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.display, color: colors.amber, fontWeight: 600, fontSize: "1.1rem" }}>
            {day.day}
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontFamily: fonts.display, fontSize: "1.15rem", color: colors.text }}>Day {day.day}</div>
            <div style={{ fontFamily: fonts.body, fontSize: "0.85rem", color: colors.textDim, marginTop: 2 }}>{day.title}</div>
          </div>
        </div>
        <span style={{ color: colors.amber, fontSize: 20, transition: "transform 0.3s", transform: expanded ? "rotate(180deg)" : "rotate(0deg)", display: "block" }}>⌄</span>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div style={{ padding: "0 24px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          <Section icon="📍" title="Places"     items={day.places}     color="#6366F1" />
          <Section icon="🎯" title="Activities" items={day.activities} color="#10B981" />
          <Section icon="🍽" title="Food"       items={day.food}       color="#F59E0B" />
        </div>
      )}
    </div>
  );
}
