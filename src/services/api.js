import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const client = axios.create({ baseURL: BASE_URL });

// ─── Dummy fallback data (used when backend is unavailable) ───
export const DUMMY_ITINERARY = {
  destination: "Kyoto, Japan",
  startDate: "2025-04-01",
  endDate: "2025-04-07",
  budget: 3000,
  interests: ["history", "food", "adventure"],
  days: [
    {
      day: 1, title: "Arrival & Fushimi Inari",
      places: ["Fushimi Inari Taisha", "Nishiki Market"],
      activities: ["Hike the 10,000 torii gates at dawn", "Street food tour through Nishiki"],
      food: ["Ramen at Ichiran", "Taiyaki from street stalls"],
    },
    {
      day: 2, title: "Arashiyama & Bamboo Grove",
      places: ["Arashiyama Bamboo Grove", "Tenryu-ji Temple", "Togetsukyo Bridge"],
      activities: ["Morning bamboo walk", "Boat ride on Oi River", "Rickshaw tour"],
      food: ["Matcha desserts at Nakamura-ya", "Tofu kaiseki dinner"],
    },
    {
      day: 3, title: "Geisha District & Temples",
      places: ["Gion District", "Kinkaku-ji (Golden Pavilion)", "Ryoan-ji"],
      activities: ["Gion walking tour at dusk", "Zen rock garden meditation", "Tea ceremony"],
      food: ["Kaiseki at Kikunoi", "Yudofu at Nanzen-ji"],
    },
    {
      day: 4, title: "Day Trip to Nara",
      places: ["Nara Park", "Todai-ji Temple", "Kasuga Taisha"],
      activities: ["Feed the sacred deer", "See the giant Buddha", "Forest shrine walk"],
      food: ["Kakinoha-zushi (persimmon leaf sushi)", "Mochi from Nakatanidou"],
    },
    {
      day: 5, title: "Hidden Gems & Departure Prep",
      places: ["Philosopher's Path", "Nanzen-ji", "Heian Shrine"],
      activities: ["Cherry blossom canal walk", "Aqueduct photography", "Sunset at Heian"],
      food: ["Breakfast at % Arabica Kyoto", "Farewell omakase dinner"],
    },
  ],
  budgetBreakdown: [
    { category: "Accommodation", amount: 800, color: "#F59E0B" },
    { category: "Food",          amount: 600, color: "#10B981" },
    { category: "Transport",     amount: 400, color: "#6366F1" },
    { category: "Activities",    amount: 700, color: "#EC4899" },
    { category: "Shopping",      amount: 300, color: "#14B8A6" },
    { category: "Misc",          amount: 200, color: "#F97316" },
  ],
};

export const DUMMY_SAVED_TRIPS = [
  { id: 1, destination: "Kyoto, Japan",      startDate: "2025-04-01", endDate: "2025-04-07", budget: 3000, itinerary: DUMMY_ITINERARY },
  { id: 2, destination: "Santorini, Greece", startDate: "2025-06-10", endDate: "2025-06-17", budget: 4500, itinerary: null },
  { id: 3, destination: "Patagonia, Chile",  startDate: "2025-11-05", endDate: "2025-11-15", budget: 5200, itinerary: null },
];

const CHAT_REPLIES = [
  "Great choice! Kyoto in spring is absolutely magical — the cherry blossoms peak around late March to early April. I'd recommend booking accommodation at least 3 months ahead.",
  "For budget travel, consider getting a JR Pass — it covers bullet trains and saves significantly on transport between cities.",
  "Don't miss the early morning hours at major temples. Fushimi Inari at 6am has dramatically fewer crowds than at noon.",
  "I can help you refine any part of your itinerary. What aspect would you like to explore more — food, accommodation, or activities?",
  "Absolutely! Let me suggest some hidden gems that most tourists miss on that route...",
];

// ─── API functions ───
// Replace the mock implementations below with real axios calls once your backend is ready.

export async function generateItinerary(data) {
  // Real: return (await client.post("/api/generate-itinerary", data)).data;
  await new Promise((r) => setTimeout(r, 2200));
  return { ...DUMMY_ITINERARY, ...data };
}

export async function getSavedTrips() {
  // Real: return (await client.get("/api/trips")).data;
  await new Promise((r) => setTimeout(r, 400));
  return DUMMY_SAVED_TRIPS;
}

export async function saveTrip(trip) {
  // Real: return (await client.post("/api/trips", trip)).data;
  await new Promise((r) => setTimeout(r, 500));
  return { ...trip, id: Date.now() };
}

export async function sendChatMessage(message) {
  // Real: return (await client.post("/api/chat", { message })).data.reply;
  await new Promise((r) => setTimeout(r, 1200));
  return CHAT_REPLIES[Math.floor(Math.random() * CHAT_REPLIES.length)];
}
