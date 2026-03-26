const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-base-content">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base-content/60 text-base max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
