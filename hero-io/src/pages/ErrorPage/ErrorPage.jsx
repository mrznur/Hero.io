import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../assets/error-404.png';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center gap-5">
      <img
        src={errorImg}
        alt="404"
        className="w-56 sm:w-72"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      <div>
        <h1 className="text-5xl font-extrabold text-[#7C3AED]">404</h1>
        <h2 className="text-xl font-bold text-gray-800 mt-2">Oops, page not found</h2>
        <p className="text-gray-400 text-sm mt-2 max-w-xs mx-auto">
          {error?.statusText || error?.message || "The page you're looking for doesn't exist."}
        </p>
      </div>
      <Link
        to="/"
        className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-8 py-2.5 rounded-xl transition-colors text-sm"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
