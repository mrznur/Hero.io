import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../utils/formatNumber';

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/apps/${app.id}`)}
      className="bg-gray-200 border border-gray-100 rounded-2xl p-4 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
    >
      {/* App image */}
      <div className="w-full aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden flex items-center justify-center">
        <img
          src={app.image}
          alt={app.title}
          className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-200"
          onError={(e) => { e.target.src = 'https://placehold.co/64x64/f3f4f6/9ca3af?text=App'; }}
        />
      </div>

      {/* Info */}
      <h3 className="font-semibold text-gray-900 text-sm truncate mb-1">{app.title}</h3>
      <p className="text-xs text-gray-400 truncate mb-2">{app.companyName}</p>

      <StarRating rating={app.ratingAvg} />

      <p className="text-xs text-gray-400 mt-1.5">
        ⬇ {formatNumber(app.downloads)} downloads
      </p>
    </div>
  );
};

export default AppCard;
