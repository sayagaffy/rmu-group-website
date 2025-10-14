'use client';

import React from 'react';
import CompanyCard from './CompanyCard';
import { CompanyData, companiesData } from '@/data/companies';
import { Building2, Filter } from 'lucide-react';

interface CompanyGridProps {
  companies?: CompanyData[];
  showFilters?: boolean;
  columns?: 3 | 4;
  title?: string;
  subtitle?: string;
}

/**
 * CompanyGrid Component
 * Container component that displays a responsive grid of company cards
 *
 * Responsive Breakpoints:
 * - Mobile: 1 column (full width)
 * - Tablet: 2 columns (md:)
 * - Desktop: 3 columns (lg:) or 4 columns (xl:) based on props
 */
export default function CompanyGrid({
  companies = companiesData,
  showFilters = false,
  columns = 3,
  title,
  subtitle,
}: CompanyGridProps) {
  const [filteredCompanies, setFilteredCompanies] = React.useState<CompanyData[]>(companies);
  const [selectedIndustry, setSelectedIndustry] = React.useState<string>('all');

  // Get unique industries from companies
  const industries = React.useMemo(() => {
    const uniqueIndustries = Array.from(
      new Set(companies.map((company) => company.industry))
    );
    return ['all', ...uniqueIndustries];
  }, [companies]);

  // Filter companies by industry
  React.useEffect(() => {
    if (selectedIndustry === 'all') {
      setFilteredCompanies(companies);
    } else {
      setFilteredCompanies(
        companies.filter((company) =>
          company.industry.toLowerCase().includes(selectedIndustry.toLowerCase())
        )
      );
    }
  }, [selectedIndustry, companies]);

  // Grid column classes based on columns prop
  const gridColsClass =
    columns === 4
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="w-full">
      {/* Section Header */}
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && (
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-primary-100 mb-4 px-4 py-2 rounded-full text-primary-700 text-sm font-medium">
                <Building2 className="w-4 h-4" />
                Portfolio Companies
              </div>
              <h2 className="font-heading font-bold text-gray-900 text-4xl md:text-5xl mb-4">
                {title}
              </h2>
            </div>
          )}
          {subtitle && (
            <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Filters */}
      {showFilters && industries.length > 2 && (
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter by Industry:</span>
            </div>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry === 'all' ? 'All Companies' : industry}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredCompanies.length}</span>{' '}
            {filteredCompanies.length === 1 ? 'company' : 'companies'}
          </div>
        </div>
      )}

      {/* Companies Grid */}
      {filteredCompanies.length > 0 ? (
        <div className={`grid ${gridColsClass} gap-8`}>
          {filteredCompanies.map((company, index) => (
            <CompanyCard key={company.id} company={company} index={index} />
          ))}
        </div>
      ) : (
        // Empty State
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
            <Building2 className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="font-heading font-bold text-gray-900 text-2xl mb-2">
            No Companies Found
          </h3>
          <p className="text-gray-600 mb-6">
            No companies match the selected filter criteria.
          </p>
          <button
            onClick={() => setSelectedIndustry('all')}
            className="btn-primary"
          >
            View All Companies
          </button>
        </div>
      )}

      {/* Statistics Summary */}
      {filteredCompanies.length > 0 && !showFilters && (
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-cyan-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-bold text-4xl text-primary-500 mb-2">
                {filteredCompanies.length}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Portfolio Companies
              </div>
            </div>
            <div>
              <div className="font-bold text-4xl text-primary-500 mb-2">
                {industries.length - 1}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Industries
              </div>
            </div>
            <div>
              <div className="font-bold text-4xl text-primary-500 mb-2">
                1000+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Total Employees
              </div>
            </div>
            <div>
              <div className="font-bold text-4xl text-primary-500 mb-2">
                {new Date().getFullYear() - 2015}+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Years of Excellence
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Example Usage:
 *
 * // Default - shows all companies in 3 columns
 * <CompanyGrid />
 *
 * // With filters enabled
 * <CompanyGrid showFilters={true} />
 *
 * // Custom subset of companies in 4 columns
 * <CompanyGrid
 *   companies={miningCompanies}
 *   columns={4}
 *   title="Mining Operations"
 *   subtitle="Our coal mining portfolio"
 * />
 *
 * // With custom title and subtitle
 * <CompanyGrid
 *   title="Our Portfolio"
 *   subtitle="Eight specialized companies driving industrial excellence"
 * />
 */
