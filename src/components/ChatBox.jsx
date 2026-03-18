import { useState, useRef, useEffect } from "react";
import { sendChatMessage } from "../services/api";
import { fonts, colors } from "../styles/tokens";

const QUICK_PROMPTS = [
  "Best time to visit Japan?",
  "Budget tips for Europe",
  "Hidden gems in South America",
  "Packing for tropical trips",
];

const INITIAL_MESSAGES = [
  {
    role: "assistant",
    content: "Hello, traveler! 🌍 I'm your AI travel companion. Ask me anything about destinations, itineraries, budget tips, or travel hacks!",
    ts: new Date().toLocaleTimeString(),
  },
];

export default function ChatBox() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput]       = useState("");
  const [loading, setLoading]   = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input, ts: new Date().toLocaleTimeString() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    const reply = await sendChatMessage(input);
    setMessages((m) => [...m, { role: "assistant", content: reply, ts: new Date().toLocaleTimeString() }]);
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "65vh" }}>
      {/* Message list */}
      <div style={{ flex: 1, overflowY: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{ maxWidth: "72%", display: "flex", flexDirection: msg.role === "user" ? "row-reverse" : "row", gap: 12, alignItems: "flex-start" }}>
              {/* Avatar */}
              <div style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, background: msg.role === "user" ? "rgba(99,102,241,0.3)" : "rgba(245,158,11,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                {msg.role === "user" ? "👤" : "✈"}
              </div>
              <div>
                <div style={{
                  background: msg.role === "user" ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.05)",
                  border: msg.role === "user" ? "1px solid rgba(99,102,241,0.3)" : `1px solid ${colors.border}`,
                  borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  padding: "12px 16px", color: "#E2E8F0",
                  fontFamily: fonts.body, fontSize: "0.92rem", lineHeight: 1.6,
                }}>
                  {msg.content}
                </div>
                <div style={{ color: colors.textDeep, fontSize: "0.75rem", fontFamily: fonts.body, marginTop: 4, textAlign: msg.role === "user" ? "right" : "left" }}>
                  {msg.ts}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(245,158,11,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>✈</div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${colors.border}`, borderRadius: "18px 18px 18px 4px", padding: "12px 20px" }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: colors.amber, animation: `bounce 1s ease-in-out ${i * 0.2}s infinite` }} />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick prompts (only shown at start) */}
      {messages.length === 1 && (
        <div style={{ padding: "0 24px 16px", display: "flex", flexWrap: "wrap", gap: 8 }}>
          {QUICK_PROMPTS.map((p) => (
            <button key={p} onClick={() => setInput(p)} style={{ background: colors.amberDim, border: `1px solid rgba(245,158,11,0.2)`, borderRadius: 20, padding: "6px 14px", color: colors.amber, cursor: "pointer", fontFamily: fonts.body, fontSize: "0.82rem", transition: "all 0.2s" }}>
              {p}
            </button>
          ))}
        </div>
      )}

      {/* Input bar */}
      <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 12 }}>
        <input
          value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask anything about your travels..."
          style={{ flex: 1, background: "rgba(255,255,255,0.04)", border: `1px solid ${colors.border}`, borderRadius: 12, padding: "13px 18px", color: colors.text, fontFamily: fonts.body, fontSize: "0.95rem", outline: "none" }}
        />
        <button
          onClick={send} disabled={!input.trim() || loading}
          style={{ background: input.trim() ? "linear-gradient(135deg, #F59E0B, #F97316)" : "rgba(255,255,255,0.06)", border: "none", borderRadius: 12, padding: "0 20px", cursor: input.trim() ? "pointer" : "not-allowed", color: input.trim() ? colors.bg : colors.textDeep, fontWeight: 700, fontSize: "1.1rem", transition: "all 0.2s", flexShrink: 0 }}
        >
          ↑
        </button>
      </div>

      <style>{`@keyframes bounce { 0%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-8px); } }`}</style>
    </div>
  );
}
