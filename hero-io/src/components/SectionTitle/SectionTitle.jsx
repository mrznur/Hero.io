const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-gray-400 mt-2 text-sm max-w-lg mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
