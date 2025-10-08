'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { batteryDemandData } from '@/data/charts';

export default function BatteryDemandChart() {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart
        data={batteryDemandData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="year" />
        <YAxis
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
          label={{ value: 'Share (%)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          formatter={(value: number) => `${value.toFixed(1)}%`}
          contentStyle={{
            backgroundColor: '#1F2937',
            border: 'none',
            borderRadius: '8px',
            color: '#fff'
          }}
        />
        <Legend />

        {/* Stacked Bars */}
        <Bar dataKey="china" stackId="a" fill="#DC2626" name="China" />
        <Bar dataKey="eu" stackId="a" fill="#2563EB" name="Europe" />
        <Bar dataKey="us" stackId="a" fill="#059669" name="United States" />
        <Bar dataKey="otherEMDEs" stackId="a" fill="#F59E0B" name="Other EMDEs" />
        <Bar dataKey="otherAEs" stackId="a" fill="#6B7280" name="Other AEs" />
      </BarChart>
    </ResponsiveContainer>
  );
}
