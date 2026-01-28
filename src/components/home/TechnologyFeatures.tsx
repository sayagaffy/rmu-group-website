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
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Title */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {data.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.features.map((feature) => {
            const Icon = featureIcons[feature.number as keyof typeof featureIcons];
            return (
              <div
                key={feature.number}
                className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-soft hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                   <div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-8 h-8 text-slate-700 group-hover:text-primary transition-colors duration-300" />
                   </div>
                </div>

                {/* Circular Badge */}
                <div
                  className={`w-20 h-20 mx-auto mb-8 rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 ${
                    colorClasses[feature.color] || colorClasses.blue
                  }`}
                >
                  <span className="text-3xl font-black text-white">
                    {feature.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors duration-300">
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
