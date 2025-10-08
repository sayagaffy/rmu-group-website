// src/data/esg.ts
// Static content for ESG & Carbon Credit page

export interface ESGContent {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  pillars: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      initiatives: string[];
      image: string;
    }>;
  };
  carbonCredit: {
    title: string;
    description: string;
    opportunities: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
  vision: {
    title: string;
    description: string;
    image: string;
    roadmap: string[];
  };
}

export const esgContent: ESGContent = {
  hero: {
    title: 'ESG & Carbon Credit Leadership',
    subtitle: 'Building a sustainable future through responsible mining and carbon management',
    image: '/images/esg/esg-hero.jpg'
  },

  pillars: {
    title: 'Our ESG Commitment',
    items: [
      {
        title: 'Environmental',
        description: 'Minimizing our environmental footprint through innovation and responsible practices',
        initiatives: [
          'Progressive land rehabilitation and reforestation',
          'Water recycling and watershed protection',
          'Biodiversity conservation programs',
          'Transition to renewable energy sources',
          'Carbon footprint measurement and reduction'
        ],
        image: '/images/esg/environment.jpg'
      },
      {
        title: 'Social',
        description: 'Creating positive impact for employees, communities, and stakeholders',
        initiatives: [
          'Local employment and skills development',
          'Community health and education programs',
          'Indigenous rights and cultural heritage protection',
          'Safe working conditions and employee welfare',
          'Stakeholder engagement and transparency'
        ],
        image: '/images/esg/community.jpg'
      },
      {
        title: 'Governance',
        description: 'Maintaining the highest standards of corporate governance and ethical conduct',
        initiatives: [
          'Board independence and diversity',
          'Anti-corruption and ethics policies',
          'Transparent financial reporting',
          'Risk management framework',
          'Regulatory compliance and best practices'
        ],
        image: '/images/esg/governance.jpg'
      }
    ]
  },

  carbonCredit: {
    title: 'Carbon Credit Opportunities',
    description: 'RMU Group is uniquely positioned to generate carbon credits through multiple pathways, contributing to global climate goals while creating additional value',
    opportunities: [
      {
        title: 'Renewable Energy Integration',
        description: 'Transitioning mining and processing operations to solar, hydro, and other renewable sources can generate Renewable Energy Certificates (RECs) and carbon offsets',
        image: '/images/esg/renewable-energy.jpg'
      },
      {
        title: 'Carbon Capture in Processing',
        description: 'Advanced carbon capture technologies in our MPAL processing facilities can sequester CO2, creating verified carbon credits',
        image: '/images/esg/carbon-capture.jpg'
      },
      {
        title: 'Reforestation and Land Rehabilitation',
        description: 'Post-mining land restoration and afforestation initiatives can sequester carbon, producing verified nature-based carbon offsets',
        image: '/images/esg/reforestation.jpg'
      },
      {
        title: 'Energy Efficiency and Waste Heat Recovery',
        description: 'Technological upgrades in smelting and refining processes contribute measurable emission savings',
        image: '/images/esg/energy-efficiency.jpg'
      }
    ]
  },

  vision: {
    title: 'Long-Term Sustainability Vision',
    description: 'Looking ahead, our company intends to evolve from a low-carbon mining operator into a climate innovation hub — integrating resource development, renewable power generation, carbon management, and advanced material processing.',
    image: '/images/esg/sustainability-vision.jpg',
    roadmap: [
      'Net-zero mining operations through full electrification and renewable integration',
      'Nickel sulfate refining for EV batteries with verified carbon intensity below industry benchmarks',
      'Circular economy initiatives, including nickel recycling and byproduct utilization',
      'Nature-based carbon projects in local communities, promoting biodiversity and social resilience'
    ]
  }
};