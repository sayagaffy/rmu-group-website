'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell
} from 'recharts';
import { evBatteryMarketData } from '@/data/charts';

export default function EVBatteryMarketChart() {
  const getBarColor = (index: number) => {
    if (index === 0) return '#EF4444'; // First bar: red
    if (index === evBatteryMarketData.length - 1) return '#10B981'; // Last bar: green
    return '#3B82F6'; // Middle bars: blue
  };

  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart
        data={evBatteryMarketData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="year" />
        <YAxis label={{ value: 'USD Billion', angle: -90, position: 'insideLeft' }} />
        <Tooltip
          formatter={(value: number) => `$${value.toFixed(1)}B`}
          contentStyle={{
            backgroundColor: '#1F2937',
            border: 'none',
            borderRadius: '8px',
            color: '#fff'
          }}
        />
        <Legend />

        <Bar dataKey="value" name="Market Size" radius={[8, 8, 0, 0]}>
          {evBatteryMarketData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getBarColor(index)} />
          ))}
        </Bar>

        {/* CAGR Line */}
        <ReferenceLine
          segment={[
            { x: '2025', y: 63.2 },
            { x: '2034', y: 544.5 }
          ]}
          stroke="#F59E0B"
          strokeWidth={2}
          strokeDasharray="5 5"
          label={{
            value: 'CAGR 25.9%',
            position: 'top',
            fill: '#F59E0B',
            fontSize: 14,
            fontWeight: 'bold'
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
