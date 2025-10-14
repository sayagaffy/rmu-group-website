'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb Component
 * Displays navigation breadcrumb trail with Home icon and separators
 *
 * Usage:
 * <Breadcrumb items={[
 *   { label: 'Home', href: '/', icon: <Home /> },
 *   { label: 'Company' }
 * ]} />
 */
export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-2 text-sm ${className}`}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {/* Breadcrumb Item */}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 text-gray-600 hover:text-primary-500 transition-colors group"
                >
                  {item.icon && (
                    <span className="flex items-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ) : (
                <span
                  className={`flex items-center gap-1.5 ${
                    isLast
                      ? 'text-gray-900 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  {item.icon && <span className="flex items-center">{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              )}

              {/* Separator */}
              {!isLast && (
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Breadcrumb with default Home icon
 * Convenience component that automatically adds Home as first item
 */
interface BreadcrumbWithHomeProps {
  currentPage: string;
  className?: string;
}

export function BreadcrumbWithHome({ currentPage, className }: BreadcrumbWithHomeProps) {
  return (
    <Breadcrumb
      items={[
        { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
        { label: currentPage },
      ]}
      className={className}
    />
  );
}
