'use client';

import { Mountain, TrendingUp, Users, Award, Gem, Calendar } from 'lucide-react';

interface Metric {
  value: string;
  label: string;
  icon: string;
}

interface MiningStatsProps {
  title: string;
  metrics: Metric[];
}

const iconMap: { [key: string]: any } = {
  mountain: Mountain,
  trending: TrendingUp,
  users: Users,
  award: Award,
  gem: Gem,
  calendar: Calendar,
};

export default function MiningStats({ title, metrics }: MiningStatsProps) {
  return (
    <section className="py-20 bg-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon] || Mountain;
            return (
              <div key={index} className="text-center text-white">
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {metric.value}
                </div>
                <div className="text-lg">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
