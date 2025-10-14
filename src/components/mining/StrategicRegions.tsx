'use client';

import { MapPin } from 'lucide-react';

interface Region {
  name: string;
  location: string;
  status: string;
}

interface StrategicRegionsProps {
  title: string;
  description: string;
  regions: Region[];
}

export default function StrategicRegions({ title, description, regions }: StrategicRegionsProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <MapPin className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{region.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{region.location}</p>
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                {region.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
