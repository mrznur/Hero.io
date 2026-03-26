import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show bar on every route change
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Full page navigation spinner */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-[#7C3AED] rounded-full animate-spin" />
            <p className="text-sm text-[#7C3AED] font-medium">Loading...</p>
          </div>
        </div>
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default MainLayout;
