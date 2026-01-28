'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface DataShowcaseProps {
  data: {
    evMarketData: {
      sales: { title: string; description: string; source: string };
      battery: {
        title: string;
        current: { value: string; year: string };
        projected: { value: string; year: string };
        cagr: string;
        source: string;
      };
      batteryDemand: { title: string; description: string; source: string };
    };
    indonesiaResources: {
      title: string;
      description: string;
      source: string;
    };
  };
}

export default function DataShowcase({ data }: DataShowcaseProps) {
  const { evMarketData, indonesiaResources } = data;

  const charts = [
    {
      title: evMarketData.sales.title,
      description: evMarketData.sales.description,
      image: "/images/pdf-assets/home/chart-ev-sales.png",
      alt: "Global EV Sales 2014-2024 showing 49.5% CAGR growth with regional breakdown",
      source: evMarketData.sales.source,
    },
    {
      title: evMarketData.battery.title,
      description: `The EV battery market is projected to grow from ${evMarketData.battery.current.value} in ${evMarketData.battery.current.year} to ${evMarketData.battery.projected.value} by ${evMarketData.battery.projected.year}, representing a CAGR of ${evMarketData.battery.cagr}.`,
      image: "/images/pdf-assets/home/chart-battery-market.png",
      alt: "EV Battery Market growth from $92.7B (2025) to $739.2B (2034)",
      source: evMarketData.battery.source,
    },
    {
      title: evMarketData.batteryDemand.title,
      description: evMarketData.batteryDemand.description,
      image: "/images/pdf-assets/home/chart-battery-demand.png",
      alt: "EV Battery demand distribution across regions 2018-2030 showing China and Europe dominance",
      source: evMarketData.batteryDemand.source,
    },
    {
      title: indonesiaResources.title,
      description: indonesiaResources.description,
      image: "/images/pdf-assets/home/chart-nickel-reserves.png",
      alt: "Indonesia holds 42% of world's nickel reserves, followed by Australia, Brazil, Russia, and Cuba",
      source: indonesiaResources.source,
    }
  ];

  return (
    <section className="bg-slate-950 py-32 relative overflow-hidden">
        {/* Ambient Glows - Toned down for elegance */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Market <span className="font-light text-slate-400">Insights</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Global trends driving the demand for nickel and sustainable energy storage solutions.
            </p>
          </div>

          <div className="space-y-32">
            {charts.map((chart, index) => (
              <ChartCard key={index} chart={chart} index={index} />
            ))}
          </div>
        </div>
    </section>
  );
}

function ChartCard({ chart, index }: { chart: any; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "flex flex-col lg:items-center gap-12 lg:gap-20",
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Text Content */}
      <div className="flex-1 lg:max-w-md">
        <div className="flex items-center gap-3 mb-4">
           <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-primary-400 font-bold text-sm border border-slate-700">
             0{index + 1}
           </span>
           <div className="h-[1px] w-12 bg-slate-800" />
        </div>
        <h3 className="text-2xl lg:text-4xl font-bold text-white mb-6 leading-tight">
          {chart.title}
        </h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          {chart.description}
        </p>
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-500 text-sm font-medium">
           Source: {chart.source}
        </div>
      </div>

      {/* Chart Visual */}
      <div className="flex-1 w-full perspective-1000">
        <motion.div 
          whileHover={{ rotateY: isEven ? 2 : -2, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl bg-white p-2 shadow-2xl shadow-black/50 overflow-hidden group"
        >
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />

            <div className="rounded-2xl overflow-hidden bg-white relative">
              <Image
                src={chart.image}
                alt={chart.alt}
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                quality={95}
              />
            </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
