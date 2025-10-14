'use client';

import { Mountain, Flame, Package, ChevronRight, Gem, Droplets, Hexagon, Battery } from 'lucide-react';

interface ProcessingStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessingFlowProps {
  data: {
    title: string;
    steps: ProcessingStep[];
    endProducts: string[];
  };
}

const stepIcons = {
  1: Mountain,
  2: Flame,
  3: Package,
};

const productIcons: { [key: string]: any } = {
  'Nickel Ore': Gem,
  'Nickel Matte': Droplets,
  'Mixed Hydroxide Precipitate (MHP)': Hexagon,
  'Nickel Sulfate': Gem,
  'Battery Cathode Materials': Battery,
  'EV Batteries': Battery,
};

export default function ProcessingFlow({ data }: ProcessingFlowProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          {data.title}
        </h2>

        {/* Processing Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {data.steps.map((step, index) => {
            const Icon = stepIcons[step.number as keyof typeof stepIcons];
            return (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center relative">
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <Icon className="w-16 h-16 mx-auto mb-4 text-primary-500" />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow (Desktop only, not after last step) */}
                {index < data.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 text-gray-400" />
                )}
              </div>
            );
          })}
        </div>

        {/* End Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            End Products
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.endProducts.map((product) => {
              const Icon = productIcons[product] || Hexagon;
              return (
                <div
                  key={product}
                  className="bg-white border-2 border-primary-200 rounded-lg p-6 text-center hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <Icon className="w-12 h-12 mx-auto mb-3 text-primary-500" />
                  <p className="text-sm font-semibold text-gray-900">{product}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
