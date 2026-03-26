import { useState, useEffect } from 'react';
import AppCard from '../../components/AppCard/AppCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import useApps from '../../hooks/useApps';

const Apps = () => {
  const { apps, loading } = useApps();
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!apps.length) return;
    setSearching(true);
    const t = setTimeout(() => {
      setFiltered(apps.filter((a) => a.title.toLowerCase().includes(query.toLowerCase())));
      setSearching(false);
    }, 300);
    return () => clearTimeout(t);
  }, [query, apps]);

  const display = query ? filtered : apps;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Our All Applications</h1>
          <p className="text-gray-400 text-sm mt-2">Browse our full collection of top-rated apps</p>
        </div>

        {/* Search & count row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <p className="text-sm text-gray-500">
            Total Apps Found:{' '}
            <span className="font-bold text-[#7C3AED]">{display.length}</span>
          </p>
          <SearchBar value={query} onChange={setQuery} placeholder="Search by title..." />
        </div>

        {/* Grid */}
        {loading || searching ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : display.length === 0 ? (
          <div className="flex flex-col items-center py-24 gap-3 text-center">
            <div className="text-6xl">🔍</div>
            <p className="text-lg font-semibold text-gray-700">No App Found</p>
            <p className="text-gray-400 text-sm">Try a different search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {display.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Apps;
