'use client';

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { evSalesData } from '@/data/charts';

export default function GlobalEVSalesChart() {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <ComposedChart
        data={evSalesData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="year" />
        <YAxis label={{ value: 'Units (Millions)', angle: -90, position: 'insideLeft' }} />
        <Tooltip
          formatter={(value: number) => `${value.toFixed(2)}M units`}
          contentStyle={{
            backgroundColor: '#1F2937',
            border: 'none',
            borderRadius: '8px',
            color: '#fff'
          }}
        />
        <Legend />

        {/* Stacked Bars */}
        <Bar dataKey="restWorldPHEV" stackId="a" fill="#FCD34D" name="Rest of World PHEV" />
        <Bar dataKey="restWorldBEV" stackId="a" fill="#F59E0B" name="Rest of World BEV" />
        <Bar dataKey="usPHEV" stackId="a" fill="#10B981" name="US PHEV" />
        <Bar dataKey="usBEV" stackId="a" fill="#059669" name="US BEV" />
        <Bar dataKey="europePHEV" stackId="a" fill="#3B82F6" name="Europe PHEV" />
        <Bar dataKey="europeBEV" stackId="a" fill="#2563EB" name="Europe BEV" />
        <Bar dataKey="chinaPHEV" stackId="a" fill="#EF4444" name="China PHEV" />
        <Bar dataKey="chinaBEV" stackId="a" fill="#DC2626" name="China BEV" />

        {/* Trend Line */}
        <Line
          type="monotone"
          dataKey="total"
          stroke="#DC2626"
          strokeWidth={3}
          dot={false}
          name="Total Sales"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
