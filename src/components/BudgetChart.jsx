import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { fonts, colors } from "../styles/tokens";

function CustomTooltip({ active, payload, total }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{ background: colors.bg, border: `1px solid ${colors.amberBorder}`, borderRadius: 10, padding: "12px 16px" }}>
      <p style={{ color: d.color, fontFamily: fonts.body, fontWeight: 600, margin: "0 0 4px" }}>{d.category}</p>
      <p style={{ color: colors.text, fontFamily: fonts.body, margin: 0 }}>${d.amount}</p>
      <p style={{ color: colors.textDim, fontFamily: fonts.body, fontSize: "0.8rem", margin: "4px 0 0" }}>
        {((d.amount / total) * 100).toFixed(0)}% of budget
      </p>
    </div>
  );
}

export default function BudgetChart({ data }) {
  const total = data.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div>
      {/* Legend chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
        {data.map((d) => (
          <div key={d.category} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8, border: `1px solid ${d.color}30` }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: d.color, flexShrink: 0 }} />
            <span style={{ color: colors.textMuted, fontFamily: fonts.body, fontSize: "0.85rem" }}>{d.category}</span>
            <span style={{ color: d.color, fontFamily: fonts.body, fontWeight: 600, fontSize: "0.9rem" }}>${d.amount}</span>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} barSize={36}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="category" tick={{ fill: colors.textDim, fontSize: 12, fontFamily: fonts.body }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: colors.textDim, fontSize: 12, fontFamily: fonts.body }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip total={total} />} />
          <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
            {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
