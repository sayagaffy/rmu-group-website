'use client';

import { Leaf, Users, Shield } from 'lucide-react';

interface PillarItem {
  title: string;
  description: string;
  initiatives: string[];
  image: string;
}

interface ESGPillarsProps {
  title: string;
  items: PillarItem[];
}

const iconMap: { [key: string]: any } = {
  'Environmental': Leaf,
  'Social': Users,
  'Governance': Shield,
};

export default function ESGPillars({ title, items }: ESGPillarsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((pillar, index) => {
            const Icon = iconMap[pillar.title] || Leaf;
            return (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <Icon className="w-10 h-10 text-green-600" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Initiatives */}
                <ul className="text-left space-y-3">
                  {pillar.initiatives.map((initiative, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                      <span>{initiative}</span>
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
