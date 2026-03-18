import { fonts, colors } from "../styles/tokens";

export default function LoadingSpinner({ text = "Crafting your journey..." }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 0",
        gap: 20,
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          border: "3px solid rgba(245,158,11,0.2)",
          borderTop: `3px solid ${colors.amber}`,
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <p
        style={{
          color: colors.textMuted,
          fontFamily: fonts.display,
          fontSize: "1.1rem",
          letterSpacing: "0.05em",
        }}
      >
        {text}
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
