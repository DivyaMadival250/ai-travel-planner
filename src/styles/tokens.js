// ─── Design tokens shared across components ───────────────────

export const colors = {
  bg:        "#0A0E1E",
  bgDeep:    "#070A18",
  surface:   "rgba(255,255,255,0.03)",
  border:    "rgba(255,255,255,0.08)",
  amber:     "#F59E0B",
  amberDim:  "rgba(245,158,11,0.15)",
  amberBorder: "rgba(245,158,11,0.25)",
  text:      "#F1F5F9",
  textMuted: "#94A3B8",
  textDim:   "#64748B",
  textDeep:  "#334155",
  green:     "#10B981",
  indigo:    "#6366F1",
  pink:      "#EC4899",
  orange:    "#F97316",
};

export const fonts = {
  display: "'DM Serif Display', serif",
  body:    "'Outfit', sans-serif",
};

export const radius = {
  sm:  8,
  md:  12,
  lg:  16,
  xl:  20,
  xxl: 24,
};

export const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: `1px solid ${colors.border}`,
  borderRadius: radius.md,
  padding: "14px 16px",
  color: colors.text,
  fontFamily: fonts.body,
  fontSize: "0.95rem",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
  colorScheme: "dark",
};

export const labelStyle = {
  display: "block",
  color: colors.textMuted,
  fontSize: "0.85rem",
  fontWeight: 500,
  marginBottom: 8,
  fontFamily: fonts.body,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
};

export const cardStyle = {
  background: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: radius.xl,
  padding: 24,
  transition: "all 0.3s",
};

export const btnPrimary = {
  background: "linear-gradient(135deg, #F59E0B, #F97316)",
  border: "none",
  borderRadius: radius.md,
  color: colors.bg,
  fontFamily: fonts.body,
  fontWeight: 700,
  cursor: "pointer",
  transition: "all 0.2s",
  letterSpacing: "0.02em",
};

export const btnGhost = {
  background: "rgba(255,255,255,0.05)",
  border: `1px solid ${colors.border}`,
  borderRadius: radius.md,
  color: colors.text,
  fontFamily: fonts.body,
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s",
};
