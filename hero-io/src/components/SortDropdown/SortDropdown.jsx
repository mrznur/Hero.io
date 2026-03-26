const SortDropdown = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white text-gray-700 cursor-pointer"
    >
      <option value="">Sort by Downloads</option>
      <option value="high-low">High → Low</option>
      <option value="low-high">Low → High</option>
    </select>
  );
};

export default SortDropdown;
