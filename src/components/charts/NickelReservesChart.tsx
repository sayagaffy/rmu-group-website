'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { nickelReservesData } from '@/data/charts';

export default function NickelReservesChart() {
  const renderCustomLabel = (entry: any) => {
    return `${entry.percentage}%`;
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={nickelReservesData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={150}
            dataKey="amount"
          >
            {nickelReservesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number, name: string, props: any) => [
              `${value} MT (${props.payload.percentage}%)`,
              props.payload.country
            ]}
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-6 text-center space-y-2">
        <p className="text-gray-700">
          <strong>Indonesia</strong> has the largest nickel ore reserve,
          <strong className="text-red-600"> 42% of world reserve</strong>.
        </p>
        <p className="text-gray-600 text-sm">
          Top 5 nickel ore reserves control 73% of total world reserve.
        </p>
      </div>
    </div>
  );
}
