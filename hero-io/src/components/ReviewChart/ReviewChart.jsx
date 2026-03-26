import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#6366f1'];

const ReviewChart = ({ ratings }) => {
  return (
    <div className="bg-base-100 rounded-2xl border border-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4 text-base-content">Rating Breakdown</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={ratings} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(var(--b2))" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(v) => (v >= 1000000 ? `${(v / 1000000).toFixed(1)}M` : v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v)} tick={{ fontSize: 11 }} />
          <Tooltip
            formatter={(value) =>
              value >= 1000000
                ? `${(value / 1000000).toFixed(2)}M`
                : value >= 1000
                ? `${(value / 1000).toFixed(1)}K`
                : value
            }
          />
          <Bar dataKey="count" radius={[6, 6, 0, 0]}>
            {ratings.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReviewChart;
