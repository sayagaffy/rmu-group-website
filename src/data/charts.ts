// src/data/charts.ts
// Chart data for visualizations

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