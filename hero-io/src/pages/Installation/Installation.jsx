import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import EmptyState from '../../components/EmptyState/EmptyState';
import { formatNumber } from '../../utils/formatNumber';
import { getInstalledApps, removeInstalledApp } from '../../utils/localStorage';

const Installation = () => {
  const [apps, setApps] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    setApps(getInstalledApps());
  }, []);

  const handleUninstall = (app) => {
    removeInstalledApp(app.id);
    setApps((prev) => prev.filter((a) => a.id !== app.id));
    toast.success(`${app.title} uninstalled.`);
  };

  const sorted = [...apps].sort((a, b) => {
    if (sort === 'high-low') return b.downloads - a.downloads;
    if (sort === 'low-high') return a.downloads - b.downloads;
    return 0;
  });

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Your Installed Apps</h1>
          <p className="text-gray-400 text-sm mt-2">Manage apps you've installed</p>
        </div>

        {apps.length === 0 ? (
          <EmptyState
            title="No Installed Apps"
            message="You haven't installed any apps yet. Browse the store and install your favorites."
            actionLabel="Browse Apps"
            actionTo="/apps"
          />
        ) : (
          <>
            {/* Sort row */}
            <div className="flex justify-end mb-5">
              <SortDropdown value={sort} onChange={setSort} />
            </div>

            {/* List */}
            <div className="flex flex-col gap-3">
              {sorted.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-9 h-9 object-contain"
                      onError={(e) => { e.target.src = 'https://placehold.co/36x36/f3f4f6/9ca3af?text=App'; }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm truncate">{app.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      ⬇ {formatNumber(app.downloads)} &nbsp;·&nbsp; ⭐ {app.ratingAvg}
                    </p>
                  </div>

                  <button
                    onClick={() => handleUninstall(app)}
                    className="shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Uninstall
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Installation;
