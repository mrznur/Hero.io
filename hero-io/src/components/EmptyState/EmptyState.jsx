import { Link } from 'react-router-dom';

const EmptyState = ({ title, message, actionLabel, actionTo }) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <div className="text-6xl">📭</div>
      <h3 className="text-2xl font-bold text-base-content">{title}</h3>
      <p className="text-base-content/60 max-w-sm">{message}</p>
      {actionLabel && actionTo && (
        <Link to={actionTo} className="btn btn-primary mt-2">
          {actionLabel}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
