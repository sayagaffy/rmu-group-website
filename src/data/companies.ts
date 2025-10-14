// src/data/companies.ts

/**
 * Company data structure for RMU Group portfolio companies
 * Includes comprehensive information about each subsidiary company
 */

export interface CompanyStats {
  employees?: string;
  productionCapacity?: string;
  annualRevenue?: string;
  landArea?: string;
  assets?: string;
  certifications?: string[];
}

export interface CompanyData {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  logo?: string; // Path to logo image
  industry: string;
  foundedYear: number;
  shortDescription: string;
  fullDescription: string[];
  keyServices: string[];
  location: {
    city: string;
    province: string;
    country: string;
  };
  contact: {
    website?: string;
    email?: string;
    phone?: string;
  };
  stats: CompanyStats;
  highlights: string[];
  businessSegments?: string[];
}

/**
 * Portfolio Companies Data
 * 8 specialized companies under RMU Group
 */
export const companiesData: CompanyData[] = [
  {
    id: 'bls',
    name: 'PT Bumi Lintas Sejahtera',
    slug: 'bumi-lintas-sejahtera',
    shortName: 'BLS',
    logo: '/images/companies/bls-logo.png',
    industry: 'Coal Mining',
    foundedYear: 2018,
    shortDescription: 'Leading coal mining operations focused on sustainable extraction and environmental responsibility.',
    fullDescription: [
      'PT Bumi Lintas Sejahtera (BLS) is a prominent coal mining company committed to sustainable resource extraction and environmental stewardship. With modern mining equipment and experienced personnel, BLS operates strategically located coal concessions to meet domestic and international energy demands.',
      'The company employs advanced mining techniques to maximize resource recovery while minimizing environmental impact. BLS maintains strict safety protocols and environmental compliance standards, ensuring responsible mining operations that benefit local communities.',
      'Through strategic partnerships and continuous investment in technology, BLS has positioned itself as a reliable coal supplier, contributing to Indonesia\'s energy security and economic development.'
    ],
    keyServices: [
      'Coal Mining Operations',
      'Resource Extraction & Processing',
      'Environmental Management',
      'Mine Site Rehabilitation',
      'Coal Quality Assurance',
      'Logistics & Distribution'
    ],
    location: {
      city: 'South Sumatra',
      province: 'South Sumatra',
      country: 'Indonesia'
    },
    contact: {
      email: 'info@bumilintas.co.id',
      phone: '+62 711 [Contact for Details]'
    },
    stats: {
      employees: '150+ employees',
      productionCapacity: 'TBD MT/year',
      certifications: ['Mining License (IUP)', 'Environmental Compliance']
    },
    highlights: [
      'Strategic Coal Concession Location',
      'Modern Mining Equipment',
      'Environmental Compliance',
      'Experienced Mining Team'
    ],
    businessSegments: ['Coal Mining', 'Resource Management', 'Environmental Services']
  },
  {
    id: 'pog',
    name: 'PT Putra Ogan Gemilang',
    slug: 'putra-ogan-gemilang',
    shortName: 'POG',
    logo: '/images/companies/pog-logo.png',
    industry: 'Coal Mining',
    foundedYear: 2016,
    shortDescription: 'Efficient coal mining operations in Ogan region with focus on productivity and safety.',
    fullDescription: [
      'PT Putra Ogan Gemilang (POG) operates coal mining concessions in the resource-rich Ogan region of South Sumatra. The company has built a reputation for operational efficiency, safety excellence, and consistent production quality.',
      'POG implements best practices in mining operations, from exploration and extraction to processing and transportation. The company\'s commitment to safety and environmental management has earned recognition from industry regulators and local communities.',
      'With a skilled workforce and modern mining infrastructure, POG continues to expand its production capacity while maintaining the highest standards of operational integrity and environmental responsibility.'
    ],
    keyServices: [
      'Open Pit Coal Mining',
      'Mine Planning & Development',
      'Coal Processing & Handling',
      'Transportation Logistics',
      'Safety & Environmental Management',
      'Community Development Programs'
    ],
    location: {
      city: 'Ogan Komering Ilir',
      province: 'South Sumatra',
      country: 'Indonesia'
    },
    contact: {
      email: 'info@putraogan.co.id',
      phone: '+62 711 [Contact for Details]'
    },
    stats: {
      employees: '200+ employees',
      productionCapacity: 'TBD MT/year',
      certifications: ['IUP Mining License', 'ISO 14001 (Environmental)', 'SMK3 (Safety Management)']
    },
    highlights: [
      'Strategic Ogan Region Location',
      'High Production Efficiency',
      'Strong Safety Record',
      'Community Partnership Programs'
    ],
    businessSegments: ['Coal Mining', 'Mine Development', 'Logistics Management']
  },
  {
    id: 'spk',
    name: 'PT Sriwijaya Perkasa Kencana',
    slug: 'sriwijaya-perkasa-kencana',
    shortName: 'SPK',
    logo: '/images/companies/spk-logo.png',
    industry: 'Coal Mining',
    foundedYear: 2017,
    shortDescription: 'Premium coal mining operations delivering high-quality coal products for energy and industrial sectors.',
    fullDescription: [
      'PT Sriwijaya Perkasa Kencana (SPK) is a leading coal mining company operating in South Sumatra, specializing in the extraction and processing of high-quality coal for domestic and export markets. The company leverages advanced mining technologies and experienced personnel to ensure optimal resource recovery and product quality.',
      'SPK maintains a strong focus on operational excellence, implementing rigorous quality control measures throughout the mining and processing chain. The company\'s commitment to sustainable practices includes comprehensive environmental management, mine rehabilitation programs, and community development initiatives.',
      'Through strategic investments in infrastructure and technology, SPK has established itself as a reliable supplier of premium coal products, serving power generation, cement, and industrial manufacturing sectors with consistent quality and timely delivery.'
    ],
    keyServices: [
      'Premium Coal Mining',
      'Coal Quality Control & Testing',
      'Mine Infrastructure Development',
      'Environmental Reclamation',
      'Supply Chain Management',
      'Technical Consulting Services'
    ],
    location: {
      city: 'Palembang',
      province: 'South Sumatra',
      country: 'Indonesia'
    },
    contact: {
      email: 'info@sriwijayaperkasa.co.id',
      phone: '+62 711 [Contact for Details]'
    },
    stats: {
      employees: '180+ employees',
      productionCapacity: 'TBD MT/year',
      certifications: ['IUP Mining Permit', 'Environmental Compliance Certificate', 'Quality Management System']
    },
    highlights: [
      'High-Quality Coal Production',
      'Advanced Mining Technology',
      'Environmental Excellence',
      'Diverse Client Portfolio'
    ],
    businessSegments: ['Coal Mining', 'Quality Assurance', 'Export Trading']
  },
  {
    id: 'gsj',
    name: 'PT Gerbang Sumber Jaya',
    slug: 'gerbang-sumber-jaya',
    shortName: 'GSJ',
    logo: '/images/companies/gsj-logo.png',
    industry: 'Coal Mining',
    foundedYear: 2019,
    shortDescription: 'Innovative coal mining solutions with emphasis on efficiency and environmental sustainability.',
    fullDescription: [
      'PT Gerbang Sumber Jaya (GSJ) represents the next generation of coal mining operations in Indonesia, combining traditional mining expertise with innovative technologies to maximize efficiency and minimize environmental impact. The company operates strategically positioned coal concessions with proven reserves and excellent logistics access.',
      'GSJ has invested heavily in modern mining equipment and digital technologies for mine planning, operations monitoring, and environmental management. This technology-driven approach enables the company to optimize production, reduce costs, and maintain the highest safety and environmental standards.',
      'As a newer entrant in the coal mining sector, GSJ brings fresh perspectives and innovative solutions to industry challenges, focusing on sustainable growth, operational excellence, and positive community relations.'
    ],
    keyServices: [
      'Sustainable Coal Mining',
      'Digital Mine Management',
      'Environmental Monitoring',
      'Mine Closure Planning',
      'Coal Blending & Processing',
      'CSR & Community Programs'
    ],
    location: {
      city: 'Muara Enim',
      province: 'South Sumatra',
      country: 'Indonesia'
    },
    contact: {
      email: 'info@gerbangsumber.co.id',
      phone: '+62 734 [Contact for Details]'
    },
    stats: {
      employees: '120+ employees',
      productionCapacity: 'Growing capacity',
      certifications: ['Mining License (IUP)', 'Environmental Permit (AMDAL)', 'Safety Certification']
    },
    highlights: [
      'Technology-Driven Operations',
      'Strong Environmental Focus',
      'Modern Mining Equipment',
      'Community Engagement Excellence'
    ],
    businessSegments: ['Coal Mining', 'Technology Integration', 'Sustainability Services']
  },
  {
    id: 'ptk',
    name: 'PT Ponco Teguh Kencana',
    slug: 'ponco-teguh-kencana',
    shortName: 'PTK',
    logo: '/images/companies/ptk-logo.png',
    industry: 'Coal Processing & Trading',
    foundedYear: 2015,
    shortDescription: 'Leading coal processing and trading company providing comprehensive supply chain solutions.',
    fullDescription: [
      'PT Ponco Teguh Kencana (PTK) is a specialized coal processing and trading company that serves as a critical link in the coal supply chain, connecting producers with domestic and international buyers. The company operates advanced coal processing facilities that enhance product value through washing, sizing, and blending operations.',
      'PTK has established a robust trading network with strong relationships across the coal industry, from mining companies to end users in power generation, cement manufacturing, and other industrial sectors. The company\'s expertise in coal quality management and logistics optimization ensures reliable supply and consistent product specifications.',
      'Through strategic stockpiling facilities and efficient transportation networks, PTK provides flexible supply solutions that meet diverse customer requirements. The company\'s commitment to quality, reliability, and customer service has made it a trusted partner in Indonesia\'s coal trading sector.'
    ],
    keyServices: [
      'Coal Processing & Washing',
      'Coal Blending Services',
      'Domestic & Export Trading',
      'Quality Testing & Certification',
      'Stockpile Management',
      'Logistics Coordination',
      'Supply Chain Optimization',
      'Market Intelligence'
    ],
    location: {
      city: 'Jakarta',
      province: 'DKI Jakarta',
      country: 'Indonesia'
    },
    contact: {
      website: 'www.poncoteguh.co.id',
      email: 'info@poncoteguh.co.id',
      phone: '+62 21 [Contact for Details]'
    },
    stats: {
      employees: '80+ employees',
      productionCapacity: 'TBD MT/year processing',
      certifications: ['Trading License', 'Quality Management System', 'Export Certification']
    },
    highlights: [
      'Advanced Processing Facilities',
      'Extensive Trading Network',
      'Quality Assurance Expertise',
      'Flexible Supply Solutions'
    ],
    businessSegments: ['Coal Processing', 'Trading & Marketing', 'Logistics Management']
  },
  {
    id: 'rrr',
    name: 'PT Riau Raya Resources',
    slug: 'riau-raya-resources',
    shortName: 'RRR',
    logo: '/images/companies/rrr-logo.png',
    industry: 'Coal Mining',
    foundedYear: 2016,
    shortDescription: 'Strategic coal mining operations in Riau province focused on responsible resource development.',
    fullDescription: [
      'PT Riau Raya Resources (RRR) operates coal mining concessions in Riau province, bringing modern mining practices to one of Indonesia\'s strategic resource regions. The company combines experienced management with innovative mining techniques to ensure efficient and responsible resource extraction.',
      'RRR has developed comprehensive environmental and social management programs that go beyond regulatory compliance, demonstrating leadership in sustainable mining practices. The company works closely with local communities to ensure mining operations generate lasting benefits through employment, local business development, and infrastructure improvements.',
      'With a long-term vision for sustainable growth, RRR continues to invest in exploration, technology, and human resources development. The company is committed to being a responsible corporate citizen while delivering consistent value to shareholders and stakeholders.'
    ],
    keyServices: [
      'Coal Mining Operations',
      'Exploration & Resource Development',
      'Mine Site Management',
      'Environmental Rehabilitation',
      'Community Development',
      'Coal Transportation Services'
    ],
    location: {
      city: 'Riau',
      province: 'Riau',
      country: 'Indonesia'
    },
    contact: {
      email: 'info@riauraya.co.id',
      phone: '+62 761 [Contact for Details]'
    },
    stats: {
      employees: '140+ employees',
      productionCapacity: 'TBD MT/year',
      certifications: ['IUP Mining License', 'Environmental Management Certification', 'K3 Safety Certification']
    },
    highlights: [
      'Strategic Riau Location',
      'Sustainable Mining Practices',
      'Strong Community Relations',
      'Long-term Resource Base'
    ],
    businessSegments: ['Coal Mining', 'Resource Development', 'Community Programs']
  },
  {
    id: 'rfd',
    name: 'PT Rafindo',
    slug: 'rafindo',
    shortName: 'RFD',
    logo: '/images/companies/rfd-logo.png',
    industry: 'Coal & Mineral Processing',
    foundedYear: 2017,
    shortDescription: 'Advanced processing solutions for coal and mineral products with focus on value addition.',
    fullDescription: [
      'PT Rafindo (RFD) is a specialized processing company that provides value-added services for coal and mineral products. The company operates modern processing facilities equipped with advanced technologies for crushing, screening, washing, and upgrading raw materials into market-ready products.',
      'RFD serves mining companies and traders who require professional processing services to meet specific quality requirements. The company\'s expertise in coal and mineral processing, combined with sophisticated quality control systems, ensures consistent product specifications and customer satisfaction.',
      'Through continuous investment in processing technology and technical expertise, RFD has positioned itself as a trusted processing partner in Indonesia\'s mining sector. The company is committed to operational excellence, environmental responsibility, and delivering value to customers through quality processing services.'
    ],
    keyServices: [
      'Coal Processing & Upgrading',
      'Mineral Processing Services',
      'Crushing & Screening',
      'Washing & Beneficiation',
      'Quality Testing Laboratory',
      'Product Customization',
      'Technical Consulting',
      'Process Optimization'
    ],
    location: {
      city: 'Samarinda',
      province: 'East Kalimantan',
      country: 'Indonesia'
    },
    contact: {
      email: 'info@rafindo.co.id',
      phone: '+62 541 [Contact for Details]'
    },
    stats: {
      employees: '90+ employees',
      productionCapacity: 'TBD MT/year processing',
      certifications: ['Processing License', 'Environmental Permit', 'Quality Management System']
    },
    highlights: [
      'Advanced Processing Technology',
      'Quality Control Excellence',
      'Flexible Service Options',
      'Technical Expertise'
    ],
    businessSegments: ['Coal Processing', 'Mineral Processing', 'Technical Services']
  },
  {
    id: 'yosin',
    name: 'PT Yosin Mineral',
    slug: 'yosin-mineral',
    shortName: 'Yosin',
    logo: '/images/companies/yosin-logo.png',
    industry: 'Mineral Processing & Trading',
    foundedYear: 2018,
    shortDescription: 'Innovative mineral processing and trading solutions supporting Indonesia\'s mining industry development.',
    fullDescription: [
      'PT Yosin Mineral is a forward-thinking mineral processing and trading company specializing in nickel, iron ore, and other strategic minerals. The company leverages RMU Group\'s technological expertise to provide innovative processing solutions that maximize mineral value while minimizing environmental impact.',
      'Yosin Mineral operates modern processing facilities and maintains strategic partnerships with mining companies across Indonesia. The company\'s technical team brings deep expertise in mineral processing, quality control, and market dynamics, enabling customers to optimize their product value and market access.',
      'As Indonesia continues to develop its downstream mineral processing capabilities, Yosin Mineral is positioned to play a key role in this industrial transformation. The company is committed to supporting Indonesia\'s mineral processing industry through technology adoption, skills development, and sustainable practices.'
    ],
    keyServices: [
      'Nickel Ore Processing',
      'Iron Ore Beneficiation',
      'Mineral Trading & Marketing',
      'Quality Analysis & Certification',
      'Processing Technology Consulting',
      'Supply Chain Management',
      'Market Intelligence Services',
      'Technical Support'
    ],
    location: {
      city: 'Jakarta',
      province: 'DKI Jakarta',
      country: 'Indonesia'
    },
    contact: {
      website: 'www.yosinmineral.co.id',
      email: 'info@yosinmineral.co.id',
      phone: '+62 21 [Contact for Details]'
    },
    stats: {
      employees: '70+ employees',
      productionCapacity: 'TBD MT/year',
      certifications: ['Trading License', 'Processing Permit', 'Export License']
    },
    highlights: [
      'Mineral Processing Innovation',
      'Strategic Mineral Focus',
      'Technical Excellence',
      'Market Access Expertise'
    ],
    businessSegments: ['Mineral Processing', 'Trading & Export', 'Technical Consulting']
  }
];

/**
 * Utility Functions
 */

// Get company by ID
export const getCompanyById = (id: string): CompanyData | undefined => {
  return companiesData.find(company => company.id === id);
};

// Get company by slug
export const getCompanyBySlug = (slug: string): CompanyData | undefined => {
  return companiesData.find(company => company.slug === slug);
};

// Get companies by industry
export const getCompaniesByIndustry = (industry: string): CompanyData[] => {
  return companiesData.filter(company =>
    company.industry.toLowerCase().includes(industry.toLowerCase())
  );
};

// Get all company names
export const getAllCompanyNames = (): string[] => {
  return companiesData.map(company => company.name);
};

// Get all industries
export const getAllIndustries = (): string[] => {
  const industries = companiesData.map(company => company.industry);
  return Array.from(new Set(industries));
};

// Get total employee count across all companies
export const getTotalEmployees = (): string => {
  // This is an estimate - actual numbers would need to be calculated
  return '1000+ employees';
};

// Get companies count by industry
export const getCompanyCountByIndustry = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  companiesData.forEach(company => {
    counts[company.industry] = (counts[company.industry] || 0) + 1;
  });
  return counts;
};

/**
 * Industry Categories
 */
export const industryCategories = {
  mining: 'Coal Mining',
  processing: 'Processing',
  trading: 'Trading',
  mineral: 'Mineral Processing'
} as const;

/**
 * Export default
 */
export default companiesData;
