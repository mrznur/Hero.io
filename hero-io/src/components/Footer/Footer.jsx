import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="Hero IO" className="h-7 w-auto" />
              <span className="font-bold text-[#7C3AED] text-base">
                Hero IO
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop destination for discovering and managing the best
              mobile apps.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-400 text-sm mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#7C3AED] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="hover:text-[#7C3AED] transition-colors"
                >
                  All Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="hover:text-[#7C3AED] transition-colors"
                >
                  My Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Stores */}
          <div>
            <h4 className="font-semibold text-gray-400 text-sm mb-3">
              Download
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#7C3AED] transition-colors"
              >
                App Store
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#7C3AED] transition-colors"
              >
                Play Store
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Hero IO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
