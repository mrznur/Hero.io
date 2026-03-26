const LoadingSpinner = ({ fullPage = false }) => {
  if (fullPage) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-purple-200 border-t-[#7C3AED] rounded-full animate-spin" />
      </div>
    );
  }
  return (
    <div className="w-8 h-8 border-4 border-purple-200 border-t-[#7C3AED] rounded-full animate-spin" />
  );
};

export default LoadingSpinner;
