// src/data/charts.ts
// Chart data for visualizations

// Global EV Sales Data (2014-2024) - Regional breakdown by BEV/PHEV
export const evSalesData = [
  { year: '2014', chinaBEV: 0.04, chinaPHEV: 0.03, europeBEV: 0.04, europePHEV: 0.02, usBEV: 0.06, usPHEV: 0.01, restWorldBEV: 0.02, restWorldPHEV: 0.01, total: 0.23 },
  { year: '2015', chinaBEV: 0.12, chinaPHEV: 0.06, europeBEV: 0.08, europePHEV: 0.03, usBEV: 0.07, usPHEV: 0.02, restWorldBEV: 0.03, restWorldPHEV: 0.01, total: 0.42 },
  { year: '2016', chinaBEV: 0.25, chinaPHEV: 0.12, europeBEV: 0.10, europePHEV: 0.04, usBEV: 0.09, usPHEV: 0.03, restWorldBEV: 0.04, restWorldPHEV: 0.02, total: 0.69 },
  { year: '2017', chinaBEV: 0.42, chinaPHEV: 0.18, europeBEV: 0.13, europePHEV: 0.06, usBEV: 0.10, usPHEV: 0.04, restWorldBEV: 0.05, restWorldPHEV: 0.02, total: 1.00 },
  { year: '2018', chinaBEV: 0.70, chinaPHEV: 0.25, europeBEV: 0.18, europePHEV: 0.09, usBEV: 0.20, usPHEV: 0.06, restWorldBEV: 0.08, restWorldPHEV: 0.03, total: 1.59 },
  { year: '2019', chinaBEV: 0.82, chinaPHEV: 0.28, europeBEV: 0.32, europePHEV: 0.15, usBEV: 0.21, usPHEV: 0.08, restWorldBEV: 0.11, restWorldPHEV: 0.04, total: 2.01 },
  { year: '2020', chinaBEV: 0.95, chinaPHEV: 0.31, europeBEV: 0.55, europePHEV: 0.28, usBEV: 0.23, usPHEV: 0.09, restWorldBEV: 0.14, restWorldPHEV: 0.05, total: 2.60 },
  { year: '2021', chinaBEV: 2.10, chinaPHEV: 0.63, europeBEV: 1.20, europePHEV: 0.55, usBEV: 0.42, usPHEV: 0.15, restWorldBEV: 0.28, restWorldPHEV: 0.10, total: 5.43 },
  { year: '2022', chinaBEV: 4.20, chinaPHEV: 1.05, europeBEV: 1.50, europePHEV: 0.65, usBEV: 0.65, usPHEV: 0.20, restWorldBEV: 0.42, restWorldPHEV: 0.15, total: 8.82 },
  { year: '2023', chinaBEV: 5.50, chinaPHEV: 1.35, europeBEV: 1.80, europePHEV: 0.72, usBEV: 0.95, usPHEV: 0.28, restWorldBEV: 0.58, restWorldPHEV: 0.20, total: 11.38 },
  { year: '2024', chinaBEV: 6.80, chinaPHEV: 1.65, europeBEV: 2.10, europePHEV: 0.82, usBEV: 1.18, usPHEV: 0.35, restWorldBEV: 0.75, restWorldPHEV: 0.28, total: 13.93 },
];

// EV Battery Market Growth Data (2025-2034)
export const evBatteryMarketData = [
  { year: '2025', value: 63.2 },
  { year: '2026', value: 79.6 },
  { year: '2027', value: 100.2 },
  { year: '2028', value: 126.1 },
  { year: '2029', value: 158.8 },
  { year: '2030', value: 200.0 },
  { year: '2031', value: 251.8 },
  { year: '2032', value: 317.0 },
  { year: '2033', value: 399.2 },
  { year: '2034', value: 544.5 },
];

// Battery Demand by Region (2018-2024) - Percentage share
export const batteryDemandData = [
  { year: '2018', china: 58.5, eu: 15.2, us: 12.8, otherEMDEs: 8.3, otherAEs: 5.2 },
  { year: '2019', china: 57.2, eu: 16.5, us: 13.1, otherEMDEs: 8.0, otherAEs: 5.2 },
  { year: '2020', china: 55.8, eu: 18.2, us: 12.5, otherEMDEs: 8.5, otherAEs: 5.0 },
  { year: '2021', china: 54.3, eu: 20.1, us: 12.8, otherEMDEs: 8.2, otherAEs: 4.6 },
  { year: '2022', china: 52.7, eu: 21.8, us: 13.5, otherEMDEs: 7.8, otherAEs: 4.2 },
  { year: '2023', china: 51.2, eu: 23.4, us: 14.2, otherEMDEs: 7.5, otherAEs: 3.7 },
  { year: '2024', china: 49.8, eu: 24.8, us: 15.0, otherEMDEs: 7.2, otherAEs: 3.2 },
];

// Nickel Reserves by Country
export const nickelReservesData = [
  { country: 'Indonesia', amount: 21, percentage: 42, color: '#DC2626' },
  { country: 'Australia', amount: 5.9, percentage: 12, color: '#EA580C' },
  { country: 'Brazil', amount: 4.8, percentage: 10, color: '#D97706' },
  { country: 'Russia', amount: 3.2, percentage: 6, color: '#65A30D' },
  { country: 'Philippines', amount: 1.5, percentage: 3, color: '#0891B2' },
  { country: 'Others', amount: 13.6, percentage: 27, color: '#64748B' },
];

// Legacy exports for backward compatibility
export interface ChartData {
  evSalesGrowth: {
    title: string;
    data: Array<{
      year: number;
      sales: number;
    }>;
  };
  batteryMarket: {
    title: string;
    data: Array<{
      year: number;
      value: number;
    }>;
  };
  batteryDemandByRegion: {
    title: string;
    data: Array<{
      region: string;
      demand2024: number;
      demand2030: number;
    }>;
  };
  nickelReserves: {
    title: string;
    data: Array<{
      country: string;
      reserves: number;
      percentage: number;
    }>;
  };
}

export const chartData: ChartData = {
  evSalesGrowth: {
    title: 'Global EV Sales Growth (2020-2030)',
    data: [
      { year: 2020, sales: 3.2 },
      { year: 2021, sales: 6.6 },
      { year: 2022, sales: 10.5 },
      { year: 2023, sales: 14.0 },
      { year: 2024, sales: 17.5 },
      { year: 2025, sales: 21.5 },
      { year: 2026, sales: 26.0 },
      { year: 2027, sales: 30.5 },
      { year: 2028, sales: 34.5 },
      { year: 2029, sales: 37.0 },
      { year: 2030, sales: 39.0 }
    ]
  },

  batteryMarket: {
    title: 'EV Battery Market Size (Billion USD)',
    data: [
      { year: 2023, value: 60 },
      { year: 2024, value: 85 },
      { year: 2025, value: 115 },
      { year: 2026, value: 155 },
      { year: 2027, value: 205 },
      { year: 2028, value: 260 },
      { year: 2029, value: 310 },
      { year: 2030, value: 360 }
    ]
  },

  batteryDemandByRegion: {
    title: 'EV Battery Demand by Region (GWh)',
    data: [
      { region: 'China', demand2024: 450, demand2030: 1200 },
      { region: 'Europe', demand2024: 250, demand2030: 800 },
      { region: 'North America', demand2024: 180, demand2030: 650 },
      { region: 'Asia Pacific', demand2024: 120, demand2030: 450 },
      { region: 'Rest of World', demand2024: 50, demand2030: 200 }
    ]
  },

  nickelReserves: {
    title: 'Global Nickel Reserves by Country',
    data: [
      { country: 'Indonesia', reserves: 21, percentage: 22 },
      { country: 'Australia', reserves: 20, percentage: 21 },
      { country: 'Brazil', reserves: 16, percentage: 17 },
      { country: 'Russia', reserves: 7.5, percentage: 8 },
      { country: 'Philippines', reserves: 4.8, percentage: 5 },
      { country: 'Others', reserves: 25.7, percentage: 27 }
    ]
  }
};