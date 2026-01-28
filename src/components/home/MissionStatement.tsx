'use client';

import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface MissionStatementProps {
  text: string;
  background?: string;
}

export default function MissionStatement({
  text,
}: MissionStatementProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });
  
  // Split text into words for granular animation
  const words = text.split(' ');

  const keywords = [
    'transform',
    'raw energy',
    'lasting power',
    'batteries',
    'drive progress',
    'sustainability',
    'human potential',
  ];

  return (
    <section
      ref={containerRef}
      className="bg-white py-32 lg:py-48 relative overflow-hidden"
    >
      {/* Agency Grid Lines */}
      <div className="absolute inset-0 border-y border-slate-100 pointer-events-none" />
      <div className="absolute left-8 lg:left-12 inset-y-0 border-l border-slate-100 pointer-events-none" />
      <div className="absolute right-8 lg:right-12 inset-y-0 border-r border-slate-100 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Label / Meta */}
          <div className="lg:w-1/4">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="flex items-center gap-4"
             >
               <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                 01 — Our Mission
               </span>
               <div className="h-[1px] w-12 bg-slate-200" />
             </motion.div>
          </div>

          {/* Main Typography */}
          <div className="lg:w-3/4">
            <h2 className="font-heading font-bold text-slate-900 text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              {words.map((word, i) => {
                const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
                const highlight = keywords.some((k) => k.includes(cleanWord) || cleanWord.includes(k));

                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: i * 0.02, 
                      ease: [0.215, 0.61, 0.355, 1] 
                    }}
                    className={cn(
                      "inline-block mr-[0.25em] relative",
                      highlight 
                        ? "text-primary-600" 
                        : "text-slate-900"
                    )}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
