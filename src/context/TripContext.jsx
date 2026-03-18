import { createContext, useContext, useState } from "react";
import { DUMMY_SAVED_TRIPS } from "../services/api";

const TripContext = createContext(null);

export function TripProvider({ children }) {
  const [currentItinerary, setCurrentItinerary] = useState(null);
  const [savedTrips, setSavedTrips] = useState(DUMMY_SAVED_TRIPS);

  return (
    <TripContext.Provider
      value={{ currentItinerary, setCurrentItinerary, savedTrips, setSavedTrips }}
    >
      {children}
    </TripContext.Provider>
  );
}

export function useTripContext() {
  const ctx = useContext(TripContext);
  if (!ctx) throw new Error("useTripContext must be used within TripProvider");
  return ctx;
}
