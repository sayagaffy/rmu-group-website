'use client';

import { Leaf, Droplets, Users } from 'lucide-react';

interface Initiative {
  title: string;
  description: string;
  image: string;
}

interface SustainabilityInitiativesProps {
  title: string;
  description: string;
  initiatives: Initiative[];
}

const iconMap: { [key: string]: any } = {
  'Land Rehabilitation': Leaf,
  'Water Management': Droplets,
  'Community Development': Users,
};

export default function SustainabilityInitiatives({ title, description, initiatives }: SustainabilityInitiativesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => {
            const Icon = iconMap[initiative.title] || Leaf;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
