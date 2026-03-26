import Banner from '../../components/Banner/Banner';
import StatCard from '../../components/StatCard/StatCard';
import TopApps from '../../components/TopApps/TopApps';
import useApps from '../../hooks/useApps';
import { formatNumber } from '../../utils/formatNumber';

const Home = () => {
  const { apps, loading } = useApps();

  const totalDownloads = apps.reduce((sum, a) => sum + a.downloads, 0);
  const totalReviews = apps.reduce((sum, a) => sum + a.reviews, 0);

  return (
    <div className="bg-white">
      <Banner />

      {/* Stats band — purple gradient */}
      <section className="bg-gradient-to-r from-[#7C3AED] to-[#9333EA] pt-10 pb-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-3 gap-6 sm:gap-12">
            <StatCard
              label="Total Downloads"
              value={formatNumber(totalDownloads)}
              sublabel="21% More Than Last Month"
            />
            <StatCard
              label="Total Reviews"
              value={formatNumber(totalReviews)}
              sublabel="46% More Than Last Month"
            />
            <StatCard
              label="Active Apps"
              value={`${apps.length}+`}
              sublabel="31 More Will Launch"
            />
          </div>
        </div>
      </section>

      <TopApps apps={apps} loading={loading} />
    </div>
  );
};

export default Home;
