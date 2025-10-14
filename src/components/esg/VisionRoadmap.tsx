'use client';

import { Target } from 'lucide-react';

interface VisionRoadmapProps {
  title: string;
  description: string;
  image: string;
  roadmap: string[];
}

export default function VisionRoadmap({ title, description, image, roadmap }: VisionRoadmapProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        {/* Roadmap */}
        <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <Target className="w-12 h-12 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              Our Roadmap to Net-Zero
            </h3>
          </div>

          <div className="space-y-6">
            {roadmap.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
