import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TripProvider } from "./context/TripContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PlanTripPage from "./pages/PlanTripPage";
import ItineraryPage from "./pages/ItineraryPage";
import SavedTripsPage from "./pages/SavedTripsPage";
import ChatPage from "./pages/ChatPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <TripProvider>
      <div style={{ background: "#0A0E1E", minHeight: "100vh", color: "#F1F5F9" }}>
        {/* Google Fonts */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap');
          *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
          body { background: #0A0E1E; }
          input:focus, textarea:focus {
            border-color: rgba(245,158,11,0.5) !important;
            box-shadow: 0 0 0 3px rgba(245,158,11,0.1) !important;
          }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #0A0E1E; }
          ::-webkit-scrollbar-thumb { background: rgba(245,158,11,0.3); border-radius: 3px; }
        `}</style>

        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/"           element={<HomePage />} />
            <Route path="/plan"       element={<PlanTripPage />} />
            <Route path="/itinerary"  element={<ItineraryPage />} />
            <Route path="/saved"      element={<SavedTripsPage />} />
            <Route path="/chat"       element={<ChatPage />} />
            {/* Fallback */}
            <Route path="*"           element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </TripProvider>
  );
}
