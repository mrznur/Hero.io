import { Link } from 'react-router-dom';

const EmptyState = ({ title, message, actionLabel, actionTo }) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <div className="text-7xl">📭</div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-400 text-sm max-w-xs">{message}</p>
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className="mt-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
