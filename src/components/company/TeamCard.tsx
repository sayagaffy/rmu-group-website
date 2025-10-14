'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TeamMemberData } from '@/data/team';
import { Linkedin, Mail, Phone, User, ChevronDown, ChevronUp } from 'lucide-react';

interface TeamCardProps {
  member: TeamMemberData;
  index?: number;
  showExtendedBio?: boolean; // Option to always show extended bio
}

/**
 * TeamCard Component
 * Displays individual team member information with professional styling
 *
 * Features:
 * - Circular photo with gradient placeholder
 * - Name and position
 * - Brief bio with expandable extended bio
 * - Social/contact icons
 * - Hover effects and animations
 */
export default function TeamCard({ member, index = 0, showExtendedBio = false }: TeamCardProps) {
  const [isExpanded, setIsExpanded] = useState(showExtendedBio);
  const [isHovered, setIsHovered] = useState(false);

  const hasExtendedBio = member.bioExtended && member.bioExtended.length > 0;
  const hasContactInfo = member.email || member.linkedin || member.phone;

  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200 group"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Content */}
      <div className="p-6 text-center">
        {/* Photo - Circular */}
        <div className="mb-4 flex justify-center">
          <div className="relative">
            {member.image ? (
              <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary-100 group-hover:ring-blue-300 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ) : (
              // Gradient Placeholder
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center ring-4 ring-primary-100 group-hover:ring-blue-300 transition-all duration-300 shadow-lg">
                <User className="w-16 h-16 text-white" />
              </div>
            )}

            {/* Online/Active Badge (optional) */}
            {isHovered && (
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="font-heading font-bold text-gray-900 text-xl mb-1 leading-tight">
          {member.name}
        </h3>

        {/* Position/Title */}
        <p className="text-primary-500 font-semibold text-sm mb-1">
          {member.position}
        </p>

        {/* Department (if available) */}
        {member.department && (
          <p className="text-gray-500 text-xs mb-3">
            {member.department}
          </p>
        )}

        {/* Experience/Education Badge */}
        <div className="flex justify-center gap-2 mb-4">
          {member.experience && (
            <span className="inline-block bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-medium">
              {member.experience}
            </span>
          )}
          {member.education && (
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              {member.education}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-600 rounded-full mx-auto mb-4" />

        {/* Brief Bio */}
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {member.bio}
        </p>

        {/* Extended Bio - Expandable */}
        {hasExtendedBio && (
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-96 opacity-100 mb-3' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-gray-600 text-sm leading-relaxed pt-2 border-t border-gray-100">
              {member.bioExtended}
            </p>
          </div>
        )}

        {/* Read More Button */}
        {hasExtendedBio && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary-500 hover:text-primary-600 font-medium text-sm flex items-center gap-1 mx-auto mb-4 transition-colors group/btn"
          >
            <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform group-hover/btn:translate-y-0.5" />
            )}
          </button>
        )}

        {/* Expertise Tags */}
        {member.expertise && member.expertise.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap justify-center gap-2">
              {member.expertise.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-50 text-gray-700 px-2 py-1 rounded text-xs border border-gray-200"
                >
                  {skill}
                </span>
              ))}
              {member.expertise.length > 3 && (
                <span className="inline-block bg-primary-50 text-primary-500 px-2 py-1 rounded text-xs font-medium">
                  +{member.expertise.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Contact Icons */}
        {hasContactInfo && (
          <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary-50 hover:bg-primary-100 rounded-full flex items-center justify-center text-primary-500 hover:text-primary-600 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-700 transition-all hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-700 transition-all hover:scale-110"
                aria-label="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Bottom Stats/Info Bar (Optional) */}
      {(member.joinedYear || member.achievements) && (
        <div className="bg-gradient-to-r from-primary-50 to-cyan-50 px-6 py-3 border-t border-gray-100">
          <div className="text-center">
            {member.joinedYear && (
              <p className="text-gray-600 text-xs">
                <span className="font-medium text-gray-700">Joined:</span> {member.joinedYear}
                {' • '}
                <span className="font-medium text-primary-500">
                  {new Date().getFullYear() - member.joinedYear}+ years with RMU
                </span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
