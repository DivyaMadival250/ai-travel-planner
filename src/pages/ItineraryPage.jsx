import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItineraryCard from "../components/ItineraryCard";
import BudgetChart from "../components/BudgetChart";
import { saveTrip } from "../services/api";
import { useTripContext } from "../context/TripContext";
import { fonts, colors } from "../styles/tokens";

export default function ItineraryPage() {
  const navigate = useNavigate();
  const { currentItinerary, setSavedTrips } = useTripContext();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved]   = useState(false);

  if (!currentItinerary) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: colors.textDim, fontFamily: fonts.body, marginBottom: 24 }}>No itinerary generated yet.</p>
          <button onClick={() => navigate("/plan")} style={{ background: "linear-gradient(135deg, #F59E0B, #F97316)", border: "none", borderRadius: 10, padding: "12px 28px", color: colors.bg, fontFamily: fonts.body, fontWeight: 700, cursor: "pointer" }}>
            Plan a Trip
          </button>
        </div>
      </div>
    );
  }

  const handleSave = async () => {
    setSaving(true);
    const trip = await saveTrip({ ...currentItinerary, id: Date.now() });
    setSavedTrips((t) => [trip, ...t]);
    setSaved(true);
    setSaving(false);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 20 }}>
          <div>
            <button onClick={() => navigate("/plan")} style={{ background: "none", border: "none", color: colors.textDim, cursor: "pointer", fontFamily: fonts.body, fontSize: "0.9rem", marginBottom: 8, display: "block" }}>← Back</button>
            <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3rem)", color: colors.text, margin: "0 0 8px" }}>
              {currentItinerary.destination}
            </h1>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <span style={{ color: colors.textDim, fontFamily: fonts.body, fontSize: "0.9rem" }}>📅 {currentItinerary.startDate} – {currentItinerary.endDate}</span>
              <span style={{ color: colors.amber, fontFamily: fonts.body, fontSize: "0.9rem", fontWeight: 600 }}>💰 ${currentItinerary.budget?.toLocaleString()} budget</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button onClick={handleSave} disabled={saved || saving} style={{ background: saved ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.06)", border: saved ? "1px solid rgba(16,185,129,0.4)" : `1px solid ${colors.border}`, borderRadius: 10, padding: "10px 18px", color: saved ? "#10B981" : "#CBD5E1", cursor: saved ? "default" : "pointer", fontFamily: fonts.body, fontWeight: 600, fontSize: "0.85rem" }}>
              {saving ? "Saving..." : saved ? "✓ Saved" : "💾 Save Trip"}
            </button>
            <button onClick={() => navigate("/chat")} style={{ background: "linear-gradient(135deg, #F59E0B, #F97316)", border: "none", borderRadius: 10, padding: "10px 18px", color: colors.bg, cursor: "pointer", fontFamily: fonts.body, fontWeight: 700, fontSize: "0.85rem" }}>
              🤖 Ask AI
            </button>
          </div>
        </div>

        {/* Interest tags */}
        {currentItinerary.interests?.length > 0 && (
          <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
            {currentItinerary.interests.map((i) => (
              <span key={i} style={{ background: colors.amberDim, border: `1px solid rgba(245,158,11,0.2)`, borderRadius: 50, padding: "4px 14px", color: colors.amber, fontFamily: fonts.body, fontSize: "0.8rem", fontWeight: 500 }}>{i}</span>
            ))}
          </div>
        )}

        {/* Day cards */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: fonts.display, fontSize: "1.8rem", color: colors.text, marginBottom: 24 }}>Your Itinerary</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {currentItinerary.days?.map((day) => <ItineraryCard key={day.day} day={day} />)}
          </div>
        </div>

        {/* Budget breakdown */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${colors.border}`, borderRadius: 20, padding: 32, marginBottom: 32 }}>
          <h2 style={{ fontFamily: fonts.display, fontSize: "1.8rem", color: colors.text, margin: "0 0 24px" }}>Budget Breakdown</h2>
          <BudgetChart data={currentItinerary.budgetBreakdown || []} />
        </div>

        {/* Map placeholder */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "2px dashed rgba(255,255,255,0.1)", borderRadius: 20, padding: "60px 24px", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🗺</div>
          <h3 style={{ fontFamily: fonts.display, color: colors.text, margin: "0 0 8px" }}>Interactive Map</h3>
          <p style={{ color: "#475569", fontFamily: fonts.body, fontSize: "0.9rem", margin: 0 }}>Map integration coming soon — will show all your locations pinned on an interactive map.</p>
        </div>
      </div>
    </div>
  );
}
