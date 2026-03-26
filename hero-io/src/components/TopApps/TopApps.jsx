import { Link } from 'react-router-dom';
import AppCard from '../AppCard/AppCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const TopApps = ({ apps, loading }) => {
  const topEight = apps.slice(0, 8);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Trending Apps</h2>
            <p className="text-gray-400 text-sm mt-1">Most downloaded apps this week</p>
          </div>
          <Link
            to="/apps"
            className="text-sm font-semibold text-[#7C3AED] hover:underline"
          >
            Show All →
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {topEight.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default TopApps;
