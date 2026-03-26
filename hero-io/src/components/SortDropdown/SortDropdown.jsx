const SortDropdown = ({ value, onChange }) => {
  return (
    <select
      className="select select-bordered w-full max-w-xs"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Sort by Downloads</option>
      <option value="high-low">High → Low</option>
      <option value="low-high">Low → High</option>
    </select>
  );
};

export default SortDropdown;
