const LoadingSpinner = ({ fullPage = false }) => {
  if (fullPage) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  return <span className="loading loading-spinner loading-md text-primary"></span>;
};

export default LoadingSpinner;
