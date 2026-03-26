import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import ReviewChart from '../../components/ReviewChart/ReviewChart';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { formatNumber } from '../../utils/formatNumber';
import { isAppInstalled, saveInstalledApp } from '../../utils/localStorage';
import appErrorImg from '../../assets/App-Error.png';

const StatPill = ({ icon, label, value }) => (
  <div className="flex flex-col items-center bg-gray-50 rounded-xl px-4 py-3 min-w-[80px]">
    <span className="text-xl mb-1">{icon}</span>
    <span className="text-sm font-bold text-gray-800">{value}</span>
    <span className="text-xs text-gray-400 mt-0.5">{label}</span>
  </div>
);

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch('/apps.json');
        const data = await res.json();
        const found = data.find((a) => a.id === parseInt(id));
        if (!found) { setNotFound(true); return; }
        setApp(found);
        setInstalled(isAppInstalled(found.id));
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleInstall = () => {
    saveInstalledApp(app);
    setInstalled(true);
    toast.success(`${app.title} installed!`);
  };

  if (loading) return <LoadingSpinner fullPage />;

  if (notFound) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-5 px-4 text-center">
        <img src={appErrorImg} alt="App Not Found" className="w-52 opacity-90" />
        <h2 className="text-2xl font-bold text-gray-800">OPPS!! APP NOT FOUND</h2>
        <p className="text-gray-400 text-sm max-w-xs">
          The app you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          to="/apps"
          className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
        >
          Back to Apps
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* App info card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-6">

            {/* Image */}
            <div className="flex-shrink-0 flex items-start justify-center sm:justify-start">
              <div className="w-28 h-28 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 object-contain"
                  onError={(e) => { e.target.src = 'https://placehold.co/80x80/f3f4f6/9ca3af?text=App'; }}
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{app.title}</h1>
              <p className="text-gray-400 text-sm mt-1">{app.companyName}</p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mt-5">
                <StatPill icon="⭐" label="Rating" value={app.ratingAvg} />
                <StatPill icon="⬇️" label="Downloads" value={formatNumber(app.downloads)} />
                <StatPill icon="💬" label="Reviews" value={formatNumber(app.reviews)} />
                <StatPill icon="📦" label="Size" value={`${app.size}MB`} />
              </div>

              <button
                onClick={handleInstall}
                disabled={installed}
                className={`mt-6 px-8 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                  installed
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white'
                }`}
              >
                {installed ? '✓ Installed' : 'Install'}
              </button>
            </div>

          </div>
        </div>

        {/* Chart */}
        <div className="mb-6">
          <ReviewChart ratings={app.ratings} />
        </div>

        {/* Description */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 mb-3">Description</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{app.description}</p>
        </div>

      </div>
    </div>
  );
};

export default AppDetails;
