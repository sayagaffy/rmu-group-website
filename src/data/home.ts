// src/data/home.ts
// Static content for Home page

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
}

export interface HomeContent {
  hero: {
    slides: HeroSlide[];
    autoplay: boolean;
    interval: number;
  };
  mission: {
    text: string;
    background: string;
    isParallax: boolean;
  };
  evMarketData: {
    sales: {
      title: string;
      period: string;
      from: string;
      to: string;
      cagr: string;
      description: string;
      source: string;
    };
    battery: {
      title: string;
      current: { year: number; value: string };
      projected: { year: number; value: string };
      cagr: string;
      source: string;
    };
    batteryDemand: {
      title: string;
      description: string;
      source: string;
    };
    chemistry: {
      title: string;
      nca: {
        name: string;
        description: string;
        growth: string;
        source: string;
      };
    };
  };
  nickelProcessing: {
    title: string;
    steps: Array<{
      number: number;
      title: string;
      description: string;
    }>;
    endProducts: string[];
  };
  indonesiaResources: {
    title: string;
    description: string;
    reserves: Array<{
      country: string;
      amount: string;
      percentage: number;
      color: string;
    }>;
    source: string;
  };
  technology: {
    title: string;
    features: Array<{
      number: number;
      title: string;
      color: string;
    }>;
  };
}

export const homeContent: HomeContent = {
  hero: {
    slides: [
      {
        id: 1,
        image: '/images/home/hero-1.jpg',
        title: 'We Empower World Sustainable Energy',
        subtitle: 'with End-to-End Nickel Sovereignty Platform',
        cta: {
          text: 'Learn More',
          link: '/company'
        }
      },
      {
        id: 2,
        image: '/images/home/hero-2.jpg',
        title: 'Advanced Mining Technology',
        subtitle: 'Innovative MPAL Processing for EV Batteries',
        cta: {
          text: 'Our Technology',
          link: '/processing'
        }
      },
      {
        id: 3,
        image: '/images/home/hero-3.jpg',
        title: 'ESG Compliance & Carbon Credit',
        subtitle: 'Building a Sustainable Future',
        cta: {
          text: 'Sustainability',
          link: '/esg-carbon'
        }
      }
    ],
    autoplay: true,
    interval: 5000
  },

  mission: {
    text: "Our mission is to transform raw energy into lasting power, delivering batteries that don't just drive cars — they drive progress, sustainability, and a new era of human potential.",
    background: '/images/home/mission-bg.jpg',
    isParallax: true
  },

  evMarketData: {
    sales: {
      title: 'Global EV Sales Growth',
      period: '2020-2030',
      from: '3.2M units',
      to: '39M units',
      cagr: '28%',
      description: 'Electric vehicle sales are projected to grow at 28% CAGR from 2020 to 2030',
      source: 'BloombergNEF, 2023'
    },
    battery: {
      title: 'EV Battery Market Size',
      current: { year: 2023, value: '$60B' },
      projected: { year: 2030, value: '$360B' },
      cagr: '27%',
      source: 'McKinsey & Company, 2023'
    },
    batteryDemand: {
      title: 'Battery Demand by Region',
      description: 'China and Europe lead global EV battery demand',
      source: 'IEA Global EV Outlook 2023'
    },
    chemistry: {
      title: 'Battery Chemistry Evolution',
      nca: {
        name: 'NCA (Nickel Cobalt Aluminum)',
        description: 'High energy density chemistry preferred for premium EVs',
        growth: 'Expected to grow 35% annually through 2030',
        source: 'Benchmark Mineral Intelligence, 2023'
      }
    }
  },

  nickelProcessing: {
    title: 'Nickel Processing Technology',
    steps: [
      {
        number: 1,
        title: 'Mining',
        description: 'Sustainable extraction of nickel ore from strategically located mines'
      },
      {
        number: 2,
        title: 'Processing',
        description: 'Advanced MPAL technology converting ore to battery-grade materials'
      },
      {
        number: 3,
        title: 'Refining',
        description: 'Production of high-purity nickel sulfate for EV batteries'
      }
    ],
    endProducts: [
      'Nickel Matte',
      'Mixed Hydroxide Precipitate (MHP)',
      'Nickel Sulfate',
      'Battery Cathode Materials'
    ]
  },

  indonesiaResources: {
    title: 'Indonesia: Global Nickel Leader',
    description: 'Indonesia holds the world\'s largest nickel reserves, positioning it as a critical player in the EV supply chain',
    reserves: [
      {
        country: 'Indonesia',
        amount: '21M tonnes',
        percentage: 22,
        color: '#DC2626'
      },
      {
        country: 'Australia',
        amount: '20M tonnes',
        percentage: 21,
        color: '#EA580C'
      },
      {
        country: 'Brazil',
        amount: '16M tonnes',
        percentage: 17,
        color: '#D97706'
      },
      {
        country: 'Russia',
        amount: '7.5M tonnes',
        percentage: 8,
        color: '#65A30D'
      },
      {
        country: 'Others',
        amount: '30.5M tonnes',
        percentage: 32,
        color: '#64748B'
      }
    ],
    source: 'USGS Mineral Commodity Summaries 2023'
  },

  technology: {
    title: 'Our Technology Advantages',
    features: [
      {
        number: 1,
        title: 'Proven Technology, Modified',
        color: 'green'
      },
      {
        number: 2,
        title: 'Low Capex',
        color: 'teal'
      },
      {
        number: 3,
        title: 'Low Opex',
        color: 'cyan'
      },
      {
        number: 4,
        title: 'ESG Compliance',
        color: 'blue'
      }
    ]
  }
};