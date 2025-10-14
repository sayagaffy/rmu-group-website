'use client';

import React from 'react';
import TeamCard from './TeamCard';
import { TeamMemberData, allTeamMembers, teamCategories, TeamCategory } from '@/data/team';
import { Users, Filter } from 'lucide-react';

interface TeamGridProps {
  members?: TeamMemberData[];
  categories?: TeamCategory[];
  showFilters?: boolean;
  columns?: 3 | 4;
  title?: string;
  subtitle?: string;
  showByCategory?: boolean; // Group by categories
}

/**
 * TeamGrid Component
 * Container component that displays a responsive grid of team member cards
 *
 * Responsive Breakpoints:
 * - Mobile: 1 column (full width)
 * - Tablet: 2 columns (md:)
 * - Desktop: 3 columns (lg:) or 4 columns (xl:) based on props
 */
export default function TeamGrid({
  members = allTeamMembers,
  categories = teamCategories,
  showFilters = false,
  columns = 3,
  title,
  subtitle,
  showByCategory = false,
}: TeamGridProps) {
  const [filteredMembers, setFilteredMembers] = React.useState<TeamMemberData[]>(members);
  const [selectedDepartment, setSelectedDepartment] = React.useState<string>('all');

  // Get unique departments from members
  const departments = React.useMemo(() => {
    const uniqueDepartments = Array.from(
      new Set(
        members
          .map((member) => member.department)
          .filter((dept): dept is string => dept !== undefined)
      )
    );
    return ['all', ...uniqueDepartments];
  }, [members]);

  // Filter members by department
  React.useEffect(() => {
    if (selectedDepartment === 'all') {
      setFilteredMembers(members);
    } else {
      setFilteredMembers(
        members.filter((member) =>
          member.department?.toLowerCase().includes(selectedDepartment.toLowerCase())
        )
      );
    }
  }, [selectedDepartment, members]);

  // Grid column classes based on columns prop
  const gridColsClass =
    columns === 4
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  // Render by categories
  if (showByCategory) {
    return (
      <div className="w-full space-y-16">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-primary-100 mb-4 px-4 py-2 rounded-full text-primary-700 text-sm font-medium">
                  <Users className="w-4 h-4" />
                  Leadership Team
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

        {/* Categories */}
        {categories.map((category) => (
          <div key={category.id}>
            {/* Category Header */}
            <div className="mb-8">
              <h3 className="font-heading font-bold text-gray-900 text-3xl mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 text-lg">
                {category.description}
              </p>
            </div>

            {/* Category Members Grid */}
            <div className={`grid ${gridColsClass} gap-8`}>
              {category.members.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Standard grid view
  return (
    <div className="w-full">
      {/* Section Header */}
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && (
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-primary-100 mb-4 px-4 py-2 rounded-full text-primary-700 text-sm font-medium">
                <Users className="w-4 h-4" />
                Leadership Team
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
      {showFilters && departments.length > 2 && (
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter by Department:</span>
            </div>
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedDepartment === department
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {department === 'all' ? 'All Team Members' : department}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredMembers.length}</span>{' '}
            {filteredMembers.length === 1 ? 'team member' : 'team members'}
          </div>
        </div>
      )}

      {/* Team Members Grid */}
      {filteredMembers.length > 0 ? (
        <div className={`grid ${gridColsClass} gap-8`}>
          {filteredMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      ) : (
        // Empty State
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
            <Users className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="font-heading font-bold text-gray-900 text-2xl mb-2">
            No Team Members Found
          </h3>
          <p className="text-gray-600 mb-6">
            No team members match the selected filter criteria.
          </p>
          <button
            onClick={() => setSelectedDepartment('all')}
            className="btn-primary"
          >
            View All Team Members
          </button>
        </div>
      )}

      {/* Statistics Summary */}
      {filteredMembers.length > 0 && !showFilters && (
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-cyan-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-bold text-4xl text-primary-500 mb-2">
                {filteredMembers.length}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Leadership Team
              </div>
            </div>
            <div>
              <div className="font-bold text-4xl text-primary-500 mb-2">
                {departments.length - 1}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Departments
              </div>
            </div>
            <div>
              <div className="font-bold text-4xl text-primary-500 mb-2">
                {Math.round(
                  filteredMembers.reduce((sum, m) => {
                    const exp = m.experience?.match(/\d+/);
                    return sum + (exp ? parseInt(exp[0]) : 0);
                  }, 0) / filteredMembers.length
                )}+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Avg. Years Experience
              </div>
            </div>
            <div>
              <div className="font-bold text-4xl text-primary-500 mb-2">
                100%
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Industry Experts
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
 * // Default - shows all team members in 3 columns
 * <TeamGrid />
 *
 * // Grouped by categories (Executive + Senior Management)
 * <TeamGrid showByCategory={true} />
 *
 * // With filters enabled
 * <TeamGrid showFilters={true} />
 *
 * // Custom subset of members in 4 columns
 * <TeamGrid
 *   members={executiveTeam}
 *   columns={4}
 *   title="Executive Leadership"
 *   subtitle="Our board and executive management team"
 * />
 *
 * // Complete example with all options
 * <TeamGrid
 *   title="Our Leadership Team"
 *   subtitle="Experienced professionals driving RMU Group&apos;s success"
 *   showByCategory={true}
 *   columns={3}
 * />
 */
