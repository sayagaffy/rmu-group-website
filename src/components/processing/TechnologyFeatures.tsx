'use client';

import { CheckCircle, TrendingDown, DollarSign, Leaf, Zap, Shield } from 'lucide-react';

interface Feature {
  number: number;
  title: string;
  description: string;
  icon: string;
}

interface TechnologyFeaturesProps {
  title: string;
  items: Feature[];
}

const iconMap: { [key: string]: any } = {
  'check-circle': CheckCircle,
  'trending-down': TrendingDown,
  'dollar-sign': DollarSign,
  'leaf': Leaf,
  'zap': Zap,
  'shield': Shield,
};

export default function TechnologyFeatures({ title, items }: TechnologyFeaturesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => {
            const Icon = iconMap[item.icon] || CheckCircle;
            return (
              <div
                key={item.number}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-12 h-12 text-primary-500" />
                  <span className="text-4xl font-bold text-gray-200">{item.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
