import ChatBox from "../components/ChatBox";
import { fonts, colors } from "../styles/tokens";

export default function ChatPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "100px 24px 40px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <div style={{ width: 64, height: 64, background: "linear-gradient(135deg, rgba(245,158,11,0.3), rgba(239,68,68,0.2))", border: `1px solid rgba(245,158,11,0.3)`, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 20px" }}>✈</div>
          <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3rem)", color: colors.text, margin: "0 0 8px" }}>AI Travel Assistant</h1>
          <p style={{ color: colors.textDim, fontFamily: fonts.body, margin: 0 }}>
            Your personal travel concierge — ask anything about destinations, tips, and planning.
          </p>
        </div>

        {/* Chat */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${colors.border}`, borderRadius: 24, overflow: "hidden" }}>
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
