'use client';

import { Sun, Wind, TreePine, Zap } from 'lucide-react';

interface Opportunity {
  title: string;
  description: string;
  image: string;
}

interface CarbonCreditOpportunitiesProps {
  title: string;
  description: string;
  opportunities: Opportunity[];
}

const iconMap: { [key: string]: any } = {
  'Renewable Energy Integration': Sun,
  'Carbon Capture in Processing': Wind,
  'Reforestation and Land Rehabilitation': TreePine,
  'Energy Efficiency and Waste Heat Recovery': Zap,
};

export default function CarbonCreditOpportunities({ title, description, opportunities }: CarbonCreditOpportunitiesProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opp, index) => {
            const Icon = iconMap[opp.title] || Sun;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <Icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {opp.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {opp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
