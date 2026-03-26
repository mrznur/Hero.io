import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';

// Orange gradient bars like the reference design
const BAR_COLOR = '#F97316';

const fmt = (v) =>
  v >= 1_000_000 ? `${(v / 1_000_000).toFixed(1)}M`
  : v >= 1_000 ? `${(v / 1_000).toFixed(0)}K`
  : v;

const ReviewChart = ({ ratings }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 className="text-base font-semibold text-gray-800 mb-5">Ratings</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={ratings} layout="vertical" margin={{ top: 0, right: 16, left: 8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F3F4F6" />
          <XAxis type="number" tickFormatter={fmt} tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={false} tickLine={false} width={48} />
          <Tooltip formatter={(v) => [fmt(v), 'Reviews']} cursor={{ fill: '#FEF3C7' }} />
          <Bar dataKey="count" radius={[0, 6, 6, 0]} maxBarSize={22}>
            {ratings.map((_, i) => (
              <Cell key={i} fill={BAR_COLOR} fillOpacity={0.7 + i * 0.06} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReviewChart;
