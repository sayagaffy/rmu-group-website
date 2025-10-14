'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CompanyData } from '@/data/companies';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';

interface CompanyCardProps {
  company: CompanyData;
  index?: number;
}

/**
 * CompanyCard Component
 * Displays individual company information with hover effects and animations
 * Responsive design: Full width mobile → 2 columns tablet → 3-4 columns desktop
 */
export default function CompanyCard({ company, index = 0 }: CompanyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/company/${company.slug}`}
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col border-2 border-transparent hover:border-blue-300 card-hover"
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Logo Area */}
        <div className="relative h-48 bg-gradient-to-br from-primary-50 to-gray-50 flex items-center justify-center overflow-hidden">
          {/* Logo Placeholder */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            {company.logo ? (
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={144}
                height={144}
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              // Placeholder if no logo
              <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-16 h-16 text-white" />
              </div>
            )}
          </div>

          {/* Industry Badge - Top Right */}
          <div className="absolute top-4 right-4">
            <span className="inline-block bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              {company.industry}
            </span>
          </div>

          {/* Short Name Badge - Top Left */}
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-white/90 text-primary-500 px-3 py-1 rounded-full text-xs font-bold shadow-md">
              {company.shortName}
            </span>
          </div>

          {/* Gradient Overlay on Hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Company Name */}
          <h3 className="font-heading font-bold text-gray-900 text-lg mb-2 leading-tight group-hover:text-primary-500 transition-colors duration-300">
            {company.name}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>
              {company.location.city}, {company.location.province}
            </span>
          </div>

          {/* Short Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
            {company.shortDescription}
          </p>

          {/* Founded Year */}
          <div className="text-gray-500 text-xs mb-4">
            Founded: <span className="font-semibold text-gray-700">{company.foundedYear}</span>
          </div>

          {/* Highlights - Always Visible */}
          <div className="space-y-2 mb-4">
            {company.highlights.slice(0, 3).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-gray-600 text-xs leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>

          {/* View Details Button - Appears on Hover */}
          <div
            className={`transition-all duration-300 ${
              isHovered
                ? 'opacity-100 translate-y-0 max-h-12'
                : 'opacity-0 translate-y-2 max-h-0'
            } overflow-hidden`}
          >
            <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Learn More Link - Visible when button is hidden */}
          <div
            className={`transition-all duration-300 ${
              isHovered ? 'opacity-0 max-h-0' : 'opacity-100 max-h-8'
            } overflow-hidden`}
          >
            <div className="flex items-center gap-2 text-primary-500 font-semibold text-sm group-hover:gap-3 transition-all pt-2">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Building2 className="w-3 h-3" />
              <span>{company.stats.employees || 'N/A'}</span>
            </div>
            {company.stats.certifications && company.stats.certifications.length > 0 && (
              <div className="text-green-600 font-medium">
                ✓ {company.stats.certifications.length} Certification{company.stats.certifications.length > 1 ? 's' : ''}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
