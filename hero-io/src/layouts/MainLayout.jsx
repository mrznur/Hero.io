import { Outlet, useNavigation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  const navigation = useNavigation();
  const isNavigating = navigation.state === 'loading';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page navigation loading bar */}
      {isNavigating && (
        <div className="fixed top-16 left-0 w-full z-40 h-0.5 bg-purple-100">
          <div className="h-full bg-[#7C3AED] animate-pulse w-3/4" />
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
