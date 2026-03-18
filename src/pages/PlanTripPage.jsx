import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm";
import LoadingSpinner from "../components/LoadingSpinner";
import { generateItinerary } from "../services/api";
import { useTripContext } from "../context/TripContext";
import { fonts, colors } from "../styles/tokens";

export default function PlanTripPage() {
  const navigate = useNavigate();
  const { setCurrentItinerary } = useTripContext();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    const itinerary = await generateItinerary(formData);
    setCurrentItinerary(itinerary);
    setLoading(false);
    navigate("/itinerary");
  };

  return (
    <div style={{ minHeight: "100vh", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,158,11,0.1)", border: `1px solid ${colors.amberBorder}`, borderRadius: 50, padding: "5px 16px", marginBottom: 20 }}>
            <span style={{ color: colors.amber, fontSize: "0.8rem", fontFamily: fonts.body, fontWeight: 600, letterSpacing: "0.1em" }}>PLAN YOUR TRIP</span>
          </div>
          <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3rem)", color: colors.text, margin: "0 0 12px" }}>
            Where are you headed?
          </h1>
          <p style={{ color: colors.textDim, fontFamily: fonts.body, fontSize: "1rem", margin: 0, lineHeight: 1.6 }}>
            Tell us your destination, dates, and interests — we'll build the perfect itinerary in seconds.
          </p>
        </div>

        {/* Card */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${colors.border}`, borderRadius: 24, padding: 40 }}>
          {loading
            ? <LoadingSpinner text="Crafting your perfect journey..." />
            : <TripForm onSubmit={handleSubmit} loading={loading} />}
        </div>
      </div>
    </div>
  );
}
