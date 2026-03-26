import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../utils/formatNumber';

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/apps/${app.id}`)}
      className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
    >
      <div className="card-body items-center text-center p-5 gap-3">
        <img
          src={app.image}
          alt={app.title}
          className="w-16 h-16 object-contain rounded-2xl"
          onError={(e) => { e.target.src = 'https://placehold.co/64x64?text=App'; }}
        />
        <h3 className="font-semibold text-base text-base-content line-clamp-1">{app.title}</h3>
        <div className="flex items-center gap-3 text-sm text-base-content/60">
          <span className="flex items-center gap-1">
            ⬇️ {formatNumber(app.downloads)}
          </span>
          <span className="flex items-center gap-1">
            ⭐ {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
