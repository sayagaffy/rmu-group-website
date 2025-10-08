// src/data/mining.ts
// Static content for Mining page

export interface MiningContent {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  introduction: {
    title: string;
    description: string;
    highlights: string[];
  };
  strategic: {
    title: string;
    description: string;
    regions: Array<{
      name: string;
      location: string;
      status: string;
    }>;
    mapImage: string;
  };
  stats: {
    title: string;
    metrics: Array<{
      value: string;
      label: string;
      icon: string;
    }>;
  };
  sustainability: {
    title: string;
    description: string;
    initiatives: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
}

export const miningContent: MiningContent = {
  hero: {
    title: 'Sustainable Nickel Mining',
    subtitle: 'Powering the global EV revolution with responsible resource extraction',
    image: '/images/mining/mining-hero.jpg'
  },

  introduction: {
    title: 'Strategic Mining Operations',
    description: 'RMU Group operates strategic nickel mining sites across Indonesia, leveraging the country\'s position as the world\'s largest nickel reserve holder. Our mining operations are designed with sustainability and efficiency at the core.',
    highlights: [
      'Access to world-class nickel deposits',
      'Strategic locations near processing facilities',
      'Environmentally responsible mining practices',
      'Community engagement and local employment',
      'Advanced geological surveying and extraction techniques'
    ]
  },

  strategic: {
    title: 'Strategic Mining Locations',
    description: 'Our mining operations are strategically located across key nickel-rich regions in Indonesia',
    regions: [
      {
        name: 'Central Sulawesi',
        location: 'Morowali Regency',
        status: 'Active Operations'
      },
      {
        name: 'Southeast Sulawesi',
        location: 'Kolaka & North Konawe',
        status: 'Active Operations'
      },
      {
        name: 'Maluku',
        location: 'Halmahera Islands',
        status: 'Development Phase'
      }
    ],
    mapImage: '/images/mining/indonesia-map.png'
  },

  stats: {
    title: 'Mining Operations by Numbers',
    metrics: [
      {
        value: '500K+',
        label: 'Tonnes Annual Capacity',
        icon: 'mountain'
      },
      {
        value: '1.8%',
        label: 'Average Nickel Grade',
        icon: 'gem'
      },
      {
        value: '15+',
        label: 'Years Reserve Life',
        icon: 'calendar'
      },
      {
        value: '2,000+',
        label: 'Local Jobs Created',
        icon: 'users'
      }
    ]
  },

  sustainability: {
    title: 'Sustainable Mining Practices',
    description: 'We are committed to minimizing environmental impact while maximizing social and economic benefits for local communities',
    initiatives: [
      {
        title: 'Land Rehabilitation',
        description: 'Progressive rehabilitation of mined areas with native vegetation, ensuring biodiversity restoration',
        image: '/images/mining/sustainable-mine.jpg'
      },
      {
        title: 'Water Management',
        description: 'Advanced water recycling systems and sediment control to protect local water sources',
        image: '/images/mining/water-management.jpg'
      },
      {
        title: 'Community Development',
        description: 'Investment in local infrastructure, education, and healthcare facilities',
        image: '/images/mining/community.jpg'
      }
    ]
  }
};