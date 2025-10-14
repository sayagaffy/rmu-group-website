'use client';

import Image from 'next/image';

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
      bgColor: "bg-white"
    },
    {
      title: evMarketData.battery.title,
      description: `The EV battery market is projected to grow from ${evMarketData.battery.current.value} in ${evMarketData.battery.current.year} to ${evMarketData.battery.projected.value} by ${evMarketData.battery.projected.year}, representing a CAGR of ${evMarketData.battery.cagr}.`,
      image: "/images/pdf-assets/home/chart-battery-market.png",
      alt: "EV Battery Market growth from $92.7B (2025) to $739.2B (2034)",
      source: evMarketData.battery.source,
      bgColor: "bg-gray-50"
    },
    {
      title: evMarketData.batteryDemand.title,
      description: evMarketData.batteryDemand.description,
      image: "/images/pdf-assets/home/chart-battery-demand.png",
      alt: "EV Battery demand distribution across regions 2018-2030 showing China and Europe dominance",
      source: evMarketData.batteryDemand.source,
      bgColor: "bg-white"
    },
    {
      title: indonesiaResources.title,
      description: indonesiaResources.description,
      image: "/images/pdf-assets/home/chart-nickel-reserves.png",
      alt: "Indonesia holds 42% of world's nickel reserves, followed by Australia, Brazil, Russia, and Cuba",
      source: indonesiaResources.source,
      bgColor: "bg-gray-50"
    }
  ];

  return (
    <div>
      {charts.map((chart, index) => (
        <section key={index} className={`py-16 ${chart.bgColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {chart.title}
            </h2>

            {/* Description */}
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              {chart.description}
            </p>

            {/* Chart Image from PDF */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full">
                <Image
                  src={chart.image}
                  alt={chart.alt}
                  width={1200}
                  height={700}
                  className="w-full h-auto rounded-md"
                  priority={index === 0}
                  quality={95}
                />
              </div>
            </div>

            {/* Source Citation */}
            <p className="text-sm text-gray-500 text-center mt-4 italic">
              Source: {chart.source}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
