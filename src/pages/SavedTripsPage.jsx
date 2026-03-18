import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TripCard from "../components/TripCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { useTripContext } from "../context/TripContext";
import { DUMMY_ITINERARY } from "../services/api";
import { fonts, colors } from "../styles/tokens";

export default function SavedTripsPage() {
  const navigate = useNavigate();
  const { savedTrips, setCurrentItinerary } = useTripContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const handleView = (trip) => {
    setCurrentItinerary(
      trip.itinerary ?? {
        ...DUMMY_ITINERARY,
        destination: trip.destination,
        startDate: trip.startDate,
        endDate: trip.endDate,
        budget: trip.budget,
      }
    );
    navigate("/itinerary");
  };

  return (
    <div style={{ minHeight: "100vh", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3rem)", color: colors.text, margin: "0 0 8px" }}>Saved Trips</h1>
            <p style={{ color: colors.textDim, fontFamily: fonts.body, margin: 0 }}>{savedTrips.length} journeys in your collection</p>
          </div>
          <button onClick={() => navigate("/plan")} style={{ background: "linear-gradient(135deg, #F59E0B, #F97316)", border: "none", borderRadius: 10, padding: "12px 24px", color: colors.bg, fontFamily: fonts.body, fontWeight: 700, cursor: "pointer" }}>
            + Plan New Trip
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <LoadingSpinner text="Loading your adventures..." />
        ) : savedTrips.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>✈</div>
            <h2 style={{ fontFamily: fonts.display, color: colors.text, marginBottom: 12 }}>No saved trips yet</h2>
            <p style={{ color: colors.textDim, fontFamily: fonts.body, marginBottom: 32 }}>Plan your first trip and save it here!</p>
            <button onClick={() => navigate("/plan")} style={{ background: "linear-gradient(135deg, #F59E0B, #F97316)", border: "none", borderRadius: 12, padding: "14px 32px", color: colors.bg, fontFamily: fonts.body, fontWeight: 700, cursor: "pointer" }}>
              Start Planning
            </button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {savedTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} onView={handleView} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
