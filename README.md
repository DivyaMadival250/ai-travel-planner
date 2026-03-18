# WandrAI — AI Travel Planner

A modern, production-ready React frontend for an AI-powered travel planning app.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed top navigation with scroll effect
│   ├── Footer.jsx          # Site footer with links
│   ├── TripForm.jsx        # Plan trip form (destination, dates, budget, interests)
│   ├── ItineraryCard.jsx   # Expandable day-by-day card
│   ├── BudgetChart.jsx     # Recharts bar chart for budget breakdown
│   ├── TripCard.jsx        # Saved trip summary card
│   ├── ChatBox.jsx         # Chat UI with typing indicator
│   └── LoadingSpinner.jsx  # Animated loading state
├── pages/
│   ├── HomePage.jsx        # Hero, stats, features, CTA
│   ├── PlanTripPage.jsx    # Trip planning form page
│   ├── ItineraryPage.jsx   # Day cards + budget chart + map placeholder
│   ├── SavedTripsPage.jsx  # Grid of saved trip cards
│   └── ChatPage.jsx        # AI chat assistant page
├── services/
│   └── api.js              # API layer (swap mocks for real axios calls)
├── context/
│   └── TripContext.jsx     # Global state: currentItinerary + savedTrips
├── styles/
│   └── tokens.js           # Design tokens (colors, fonts, shared styles)
├── App.jsx                 # Router + layout shell
└── main.jsx                # React entry point
```

## Connecting to a Real Backend

Open `src/services/api.js` and replace each mock function:

```js
// Before (mock):
export async function generateItinerary(data) {
  await new Promise(r => setTimeout(r, 2200));
  return { ...DUMMY_ITINERARY, ...data };
}

// After (real):
export async function generateItinerary(data) {
  const res = await client.post("/api/generate-itinerary", data);
  return res.data;
}
```

The `client` axios instance already reads `VITE_API_URL` from your `.env`:

```
VITE_API_URL=https://your-backend.com
```

## Expected API Shape

### POST /api/generate-itinerary
**Request:**
```json
{ "destination": "Kyoto", "startDate": "2025-04-01", "endDate": "2025-04-07", "budget": 3000, "interests": ["food","history"] }
```
**Response:**
```json
{
  "destination": "Kyoto, Japan",
  "days": [{ "day": 1, "title": "...", "places": [], "activities": [], "food": [] }],
  "budgetBreakdown": [{ "category": "Accommodation", "amount": 800, "color": "#F59E0B" }]
}
```

### GET /api/trips → array of saved trips
### POST /api/trips → save a trip
### POST /api/chat → `{ "message": "..." }` → `{ "reply": "..." }`

## Tech Stack
- React 18 + Vite
- React Router v6
- Recharts
- Axios
- Inline styles with shared design tokens (no CSS framework required)
