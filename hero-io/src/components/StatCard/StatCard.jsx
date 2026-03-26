const StatCard = ({ icon, label, value, desc }) => {
  return (
    <div className="stat bg-base-100 rounded-2xl border border-base-200 shadow-sm">
      <div className="stat-figure text-primary text-3xl">{icon}</div>
      <div className="stat-title text-base-content/60">{label}</div>
      <div className="stat-value text-primary">{value}</div>
      {desc && <div className="stat-desc text-base-content/50">{desc}</div>}
    </div>
  );
};

export default StatCard;
