'use client';

import { CheckCircle2, DollarSign, TrendingDown, Leaf } from 'lucide-react';

interface TechnologyFeature {
  number: number;
  title: string;
  color: string;
}

interface TechnologyFeaturesProps {
  data: {
    title: string;
    features: TechnologyFeature[];
  };
}

const colorClasses: { [key: string]: string } = {
  green: 'bg-gradient-to-br from-green-500 to-green-600',
  teal: 'bg-gradient-to-br from-teal-500 to-teal-600',
  cyan: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
  blue: 'bg-gradient-to-br from-primary-400 to-primary-500',
};

const featureIcons = {
  1: CheckCircle2,
  2: DollarSign,
  3: TrendingDown,
  4: Leaf,
};

export default function TechnologyFeatures({ data }: TechnologyFeaturesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          {data.title}
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.features.map((feature) => {
            const Icon = featureIcons[feature.number as keyof typeof featureIcons];
            return (
              <div
                key={feature.number}
                className="p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Optional Icon */}
                <Icon className="w-12 h-12 mx-auto mb-4 text-gray-400" />

                {/* Circular Badge */}
                <div
                  className={`w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 rounded-full border-4 border-white shadow-xl flex items-center justify-center ${
                    colorClasses[feature.color] || colorClasses.blue
                  }`}
                >
                  <span className="text-4xl md:text-5xl font-black text-white">
                    {feature.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
