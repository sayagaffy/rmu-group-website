'use client';

import { CheckCircle2 } from 'lucide-react';

interface MiningIntroProps {
  title: string;
  description: string;
  highlights: string[];
}

export default function MiningIntro({ title, description, highlights }: MiningIntroProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
