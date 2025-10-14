'use client';

import { Leaf, DollarSign, Cog } from 'lucide-react';

interface BenefitCategory {
  title: string;
  points: string[];
}

interface ProcessingBenefitsProps {
  title: string;
  environmental: BenefitCategory;
  economic: BenefitCategory;
  technical: BenefitCategory;
}

export default function ProcessingBenefits({ title, environmental, economic, technical }: ProcessingBenefitsProps) {
  const categories = [
    { ...environmental, icon: Leaf, color: 'green' },
    { ...economic, icon: DollarSign, color: 'blue' },
    { ...technical, icon: Cog, color: 'purple' },
  ];

  const colorMap: { [key: string]: string } = {
    green: 'text-green-600 bg-green-100',
    blue: 'text-primary-500 bg-primary-100',
    purple: 'text-purple-600 bg-purple-100',
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorMap[category.color];

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colors} rounded-full mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.title}
                </h3>

                <ul className="space-y-3">
                  {category.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className={`${colors.split(' ')[0]} mr-2 flex-shrink-0 mt-1`}>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
