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
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Title */}
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-slate-900 mb-20 tracking-tight">
          {data.title}
        </h2>

        {/* Processing Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 relative">
          {data.steps.map((step, index) => {
            const Icon = stepIcons[step.number as keyof typeof stepIcons];
            return (
              <div key={step.number} className="relative group">
                {/* Step Card */}
                <div className="h-full bg-white rounded-3xl p-8 text-center relative border border-slate-100 shadow-soft hover:shadow-soft-xl transition-all duration-300 hover:-translate-y-2 z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-2xl rotate-45 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl -rotate-45">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6 relative">
                     <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300">
                        <Icon className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                     </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                </div>

                {/* Arrow (Desktop only, not after last step) */}
                {index < data.steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-0 justify-center w-8">
                     <ChevronRight className="w-8 h-8 text-slate-300 animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* End Products */}
        <div className="mt-24">
          <div className="text-center mb-10">
             <h3 className="text-2xl font-bold text-slate-900">End Products</h3>
             <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.endProducts.map((product) => {
              const Icon = productIcons[product] || Hexagon;
              return (
                <div
                  key={product}
                  className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:bg-white hover:border-primary/20 hover:shadow-soft-lg transition-all duration-300 cursor-default"
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-slate-400 group-hover:text-primary transition-colors duration-300" />
                  <p className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{product}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
