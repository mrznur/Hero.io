const StatCard = ({ value, label, sublabel }) => {
  return (
    <div className="text-center">
      <p className="text-purple-200 text-xs font-medium uppercase tracking-wider mb-2">{label}</p>
      <p className="text-4xl sm:text-5xl font-extrabold text-white">{value}</p>
      {sublabel && <p className="text-purple-300 text-xs mt-2">{sublabel}</p>}
    </div>
  );
};

export default StatCard;
