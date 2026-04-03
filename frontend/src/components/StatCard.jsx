export default function StatCard({ value, label, accent = '' }) {
  return (
    <div className={`card stat-card ${accent}`}>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
