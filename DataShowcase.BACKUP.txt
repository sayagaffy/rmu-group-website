'use client';

import GlobalEVSalesChart from '@/components/charts/GlobalEVSalesChart';
import EVBatteryMarketChart from '@/components/charts/EVBatteryMarketChart';
import BatteryDemandChart from '@/components/charts/BatteryDemandChart';
import NickelReservesChart from '@/components/charts/NickelReservesChart';

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

  return (
    <div>
      {/* Section 1: Global EV Sales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {evMarketData.sales.title}
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            {evMarketData.sales.description}
          </p>

          {/* Chart Container */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <GlobalEVSalesChart />
          </div>

          {/* Source */}
          <p className="text-sm text-gray-500 text-center mt-4">
            Source: {evMarketData.sales.source}
          </p>
        </div>
      </section>

      {/* Section 2: EV Battery Market */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {evMarketData.battery.title}
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            The EV battery market is projected to grow from {evMarketData.battery.current.value} in{' '}
            {evMarketData.battery.current.year} to {evMarketData.battery.projected.value} by{' '}
            {evMarketData.battery.projected.year}, representing a CAGR of {evMarketData.battery.cagr}.
          </p>

          {/* Chart Container */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <EVBatteryMarketChart />
          </div>

          {/* Source */}
          <p className="text-sm text-gray-500 text-center mt-4">
            Source: {evMarketData.battery.source}
          </p>
        </div>
      </section>

      {/* Section 3: Battery Demand by Region */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {evMarketData.batteryDemand.title}
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            {evMarketData.batteryDemand.description}
          </p>

          {/* Chart Container */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <BatteryDemandChart />
          </div>

          {/* Source */}
          <p className="text-sm text-gray-500 text-center mt-4">
            Source: {evMarketData.batteryDemand.source}
          </p>
        </div>
      </section>

      {/* Section 4: Indonesia Nickel Reserves */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {indonesiaResources.title}
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            {indonesiaResources.description}
          </p>

          {/* Chart Container */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <NickelReservesChart />
          </div>

          {/* Source */}
          <p className="text-sm text-gray-500 text-center mt-4">
            Source: {indonesiaResources.source}
          </p>
        </div>
      </section>
    </div>
  );
}
