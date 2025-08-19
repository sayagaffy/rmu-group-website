// src/data/comprehensive-team.ts

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  company: string;
  description: string;
  expertise?: string[];
  education?: string;
  experience?: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

export interface CompanyStructure {
  companyId: string;
  companyName: string;
  leadership: TeamMember[];
  departments?: {
    [key: string]: TeamMember[];
  };
}

// RMU Group Board & Leadership
export const groupLeadership: TeamMember[] = [
  {
    id: "ibih-tg-hassan",
    name: "IBIH TG HASSAN",
    position: "President Commissioner",
    company: "RMU Group",
    description:
      "Strategic leadership and corporate governance oversight for RMU Group's diversified portfolio. Provides strategic direction and ensures alignment across all business units including mining technology, maritime services, manufacturing, marine operations, and construction.",
    expertise: [
      "Corporate Governance",
      "Strategic Planning",
      "Business Development",
      "Risk Management",
    ],
    experience: "25+ Years",
    image: "/images/team/ibih-tg-hassan.jpg",
  },
  {
    id: "djoni-rosadi",
    name: "H. IR. DJONI ROSADI",
    position: "President Director",
    company: "RMU Group",
    description:
      "Operational leadership and strategic direction for RMU Group's integrated business portfolio. Oversees day-to-day operations and ensures synergy between mining technology, maritime services, manufacturing, and construction divisions.",
    expertise: [
      "Operations Management",
      "Engineering",
      "Business Strategy",
      "Technology Integration",
    ],
    education: "Ir. (Engineering)",
    experience: "20+ Years",
    image: "/images/team/djoni-rosadi.jpg",
  },
  {
    id: "iwan-abdurrachman",
    name: "IWAN ABDURRACHMAN, IR.",
    position: "Commissioner",
    company: "RMU Group",
    description:
      "Provides strategic oversight and governance guidance for RMU Group's business operations and development initiatives.",
    education: "Ir. (Engineering)",
    expertise: [
      "Engineering Management",
      "Strategic Oversight",
      "Corporate Governance",
    ],
    experience: "18+ Years",
    image: "/images/team/iwan-abdurrachman.jpg",
  },
  {
    id: "mulyo-widodo",
    name: "MULYO WIDODO, PROF. DR. IR.",
    position: "Commissioner & Founder",
    company: "RMU Group",
    description:
      "Founding member and strategic advisor, providing academic and technical expertise to guide RMU Group's technology development and innovation strategy.",
    education: "Prof. Dr. Ir. (Professor, Doctorate in Engineering)",
    expertise: [
      "Academic Leadership",
      "Technology Innovation",
      "Research & Development",
      "Strategic Advisory",
    ],
    experience: "30+ Years",
    image: "/images/team/mulyo-widodo.jpg",
  },
  {
    id: "zaki-mubarok",
    name: "MUHAMMAD ZAKI MUBAROK, PROF. DR. IR.",
    position: "Commissioner",
    company: "RMU Group",
    description:
      "Lead researcher and founder of MPAL technology. Professor and expert in hydrometallurgical processes with decades of experience in mineral processing innovation.",
    education: "Prof. Dr. Ir. (Professor, Doctorate in Engineering)",
    expertise: [
      "Hydrometallurgy",
      "MPAL Technology",
      "Mineral Processing",
      "Research & Development",
    ],
    experience: "35+ Years",
    image: "/images/team/zaki-mubarok.jpg",
  },
];

// PT Rekayasa Mineral Utama Structure
export const rmuStructure: CompanyStructure = {
  companyId: "rmu",
  companyName: "PT Rekayasa Mineral Utama",
  leadership: [
    {
      id: "zaki-mubarok-rmu",
      name: "MUHAMMAD ZAKI MUBAROK, PROF. DR. IR.",
      position: "Expert Staff & Founder",
      company: "PT Rekayasa Mineral Utama",
      description:
        "Chief Technology Officer and founder, leading MPAL technology development and research initiatives.",
      education: "Prof. Dr. Ir.",
      expertise: [
        "MPAL Technology",
        "Hydrometallurgy",
        "Process Engineering",
        "Innovation Management",
      ],
      experience: "35+ Years",
    },
  ],
};

// PT Bahana Nusa Pasifik Structure
export const bnpStructure: CompanyStructure = {
  companyId: "pt-bnp",
  companyName: "PT Bahana Nusa Pasifik",
  leadership: [
    {
      id: "tino-rilantino",
      name: "R. TINO RILANTINO PRAWIRAKUSUMAH",
      position: "Managing Director",
      company: "PT Bahana Nusa Pasifik",
      description:
        "Overall leadership and strategic direction for maritime transportation operations, fleet management and business development.",
      expertise: [
        "Maritime Operations",
        "Strategic Management",
        "Business Development",
        "Fleet Operations",
      ],
      experience: "15+ Years",
    },
    {
      id: "achmad-hilmy",
      name: "R. ACHMAD HILMY AL RASYID",
      position: "Operations Director",
      company: "PT Bahana Nusa Pasifik",
      description:
        "Operational excellence and safety compliance for maritime transportation services, ensuring efficient cargo operations.",
      expertise: [
        "Operations Management",
        "Maritime Safety",
        "Logistics",
        "Process Optimization",
      ],
      experience: "12+ Years",
    },
    {
      id: "fahmi-rachmat",
      name: "M. FAHMI RACHMAT",
      position: "General Manager",
      company: "PT Bahana Nusa Pasifik",
      description:
        "Day-to-day operations management and coordination between departments for seamless service delivery.",
      expertise: [
        "General Management",
        "Operations Coordination",
        "Team Leadership",
      ],
      experience: "10+ Years",
    },
  ],
  departments: {
    "Site Management": [
      {
        id: "agus-renaldi",
        name: "AGUS RENALDI",
        position: "Site Manager",
        company: "PT Bahana Nusa Pasifik",
        description:
          "On-site operations management and coordination of field activities.",
        expertise: [
          "Site Management",
          "Field Operations",
          "Safety Coordination",
        ],
      },
    ],
    "Shipping Division": [
      {
        id: "fathan-salman",
        name: "R. FATHAN SALMAN",
        position: "Head of Shipping Division",
        company: "PT Bahana Nusa Pasifik",
        description:
          "Maritime shipping operations and vessel management oversight.",
        expertise: [
          "Shipping Operations",
          "Vessel Management",
          "Maritime Logistics",
        ],
      },
      {
        id: "ridwan-ops",
        name: "RIDWAN",
        position: "Staff Operational",
        company: "PT Bahana Nusa Pasifik",
        description:
          "Operational support for shipping and logistics activities.",
        expertise: ["Operational Support", "Logistics Coordination"],
      },
    ],
    Administration: [
      {
        id: "isa-panji",
        name: "ISA PANJI ISMAYA",
        position: "Head of Administration Division",
        company: "PT Bahana Nusa Pasifik",
        description:
          "Administrative operations and corporate support functions.",
        expertise: ["Administration", "Corporate Affairs", "Documentation"],
      },
    ],
    "Field Operations": [
      {
        id: "hendra-foreman",
        name: "HENDRA",
        position: "Foreman",
        company: "PT Bahana Nusa Pasifik",
        description: "Field operations supervision and crew management.",
        expertise: [
          "Field Supervision",
          "Crew Management",
          "Operations Safety",
        ],
      },
      {
        id: "subari-operator",
        name: "SUBARI",
        position: "Operator Excavator",
        company: "PT Bahana Nusa Pasifik",
        description: "Heavy equipment operation and maintenance.",
        expertise: ["Heavy Equipment Operation", "Equipment Maintenance"],
      },
      {
        id: "aril-logistics",
        name: "ARIL",
        position: "Logistics Coordinator",
        company: "PT Bahana Nusa Pasifik",
        description: "Logistics coordination and material handling.",
        expertise: ["Logistics Management", "Material Handling"],
      },
      {
        id: "robi-ground",
        name: "ROBI",
        position: "Ground Staff",
        company: "PT Bahana Nusa Pasifik",
        description: "Ground operations support and general assistance.",
        expertise: ["Ground Operations", "General Support"],
      },
    ],
    "Safety & Equipment": [
      {
        id: "ruslan-safety",
        name: "RUSLAN",
        position: "Head of Work Safety",
        company: "PT Bahana Nusa Pasifik",
        description: "Workplace safety management and compliance oversight.",
        expertise: ["Safety Management", "Compliance", "Risk Assessment"],
      },
    ],
  },
};

// PT Perkakas Rekadaya Nusantara Structure
export const prnStructure: CompanyStructure = {
  companyId: "pt-prn",
  companyName: "PT Perkakas Rekadaya Nusantara",
  leadership: [
    {
      id: "prn-managing-director",
      name: "Managing Director",
      position: "Managing Director",
      company: "PT Perkakas Rekadaya Nusantara",
      description:
        "Strategic leadership for manufacturing operations and business development in automotive and industrial sectors.",
      expertise: [
        "Manufacturing Strategy",
        "Business Development",
        "Automotive Industry",
        "Operations Management",
      ],
      experience: "20+ Years",
    },
    {
      id: "prn-technical-director",
      name: "Technical Director",
      position: "Technical Director",
      company: "PT Perkakas Rekadaya Nusantara",
      description:
        "Technical leadership for advanced manufacturing processes, quality control, and engineering excellence.",
      expertise: [
        "Manufacturing Engineering",
        "Quality Management",
        "Technical Leadership",
        "Process Innovation",
      ],
      experience: "18+ Years",
    },
    {
      id: "prn-operations-manager",
      name: "Operations Manager",
      position: "Operations Manager",
      company: "PT Perkakas Rekadaya Nusantara",
      description:
        "Daily operations management across 6 production plants with 419+ workforce coordination.",
      expertise: [
        "Operations Management",
        "Production Planning",
        "Workforce Management",
        "Plant Operations",
      ],
      experience: "15+ Years",
    },
  ],
  departments: {
    Engineering: [
      {
        id: "prn-design-eng",
        name: "Design Engineering Team",
        position: "Design Engineering (2 people)",
        company: "PT Perkakas Rekadaya Nusantara",
        description:
          "Product design and engineering development for automotive components and special purpose machines.",
        expertise: ["Product Design", "CAD/CAM", "Engineering Development"],
      },
      {
        id: "prn-mfg-eng",
        name: "Manufacturing Engineering Team",
        position: "Manufacturing Engineering (3 people)",
        company: "PT Perkakas Rekadaya Nusantara",
        description:
          "Manufacturing process optimization and production engineering solutions.",
        expertise: [
          "Process Engineering",
          "Manufacturing Optimization",
          "Production Systems",
        ],
      },
      {
        id: "prn-maintenance-eng",
        name: "Maintenance Engineering Team",
        position: "Maintenance Engineering (3 people)",
        company: "PT Perkakas Rekadaya Nusantara",
        description:
          "Equipment maintenance, facility management, and technical support services.",
        expertise: [
          "Equipment Maintenance",
          "Facility Management",
          "Technical Support",
        ],
      },
    ],
    Manufacturing: [
      {
        id: "prn-machining-team",
        name: "Machining Department",
        position: "Machining Operations (103 units)",
        company: "PT Perkakas Rekadaya Nusantara",
        description:
          "CNC and conventional machining operations for precision automotive components.",
        expertise: ["CNC Operations", "Precision Machining", "Quality Control"],
      },
      {
        id: "prn-welding-team",
        name: "Welding & Sheet Metal Department",
        position: "Welding & Sheet Metal (44 units)",
        company: "PT Perkakas Rekadaya Nusantara",
        description:
          "Welding and sheet metal fabrication for automotive and industrial applications.",
        expertise: [
          "Welding Operations",
          "Sheet Metal Fabrication",
          "Metal Processing",
        ],
      },
      {
        id: "prn-assembly-team",
        name: "Assembly Department",
        position: "Assembly Operations",
        company: "PT Perkakas Rekadaya Nusantara",
        description:
          "Product assembly and final testing for automotive components and special machines.",
        expertise: [
          "Assembly Operations",
          "Product Testing",
          "Quality Assurance",
        ],
      },
    ],
    "Quality Assurance": [
      {
        id: "prn-quality-team",
        name: "Quality Control Team",
        position: "Quality Control (30 people)",
        company: "PT Perkakas Rekadaya Nusantara",
        description:
          "Comprehensive quality control using advanced inspection equipment including CMM and testing systems.",
        expertise: [
          "Quality Control",
          "Inspection Systems",
          "ISO Compliance",
          "Testing Procedures",
        ],
      },
    ],
  },
};

// PT Gemilang Kharisma Structure
export const gemilangStructure: CompanyStructure = {
  companyId: "gemilang",
  companyName: "PT Gemilang Kharisma",
  leadership: [
    {
      id: "gemilang-managing-director",
      name: "Managing Director",
      position: "Managing Director",
      company: "PT Gemilang Kharisma",
      description:
        "Strategic leadership for marine sand mining operations in Batam waters with focus on sustainable practices.",
      expertise: [
        "Marine Operations",
        "Mining Operations",
        "Environmental Compliance",
        "Strategic Management",
      ],
      experience: "15+ Years",
    },
    {
      id: "gemilang-operations-manager",
      name: "Operations Manager",
      position: "Operations Manager",
      company: "PT Gemilang Kharisma",
      description:
        "Daily operations management for marine mining activities and equipment coordination.",
      expertise: [
        "Marine Mining",
        "Equipment Management",
        "Operations Coordination",
        "Safety Management",
      ],
      experience: "12+ Years",
    },
  ],
  departments: {
    "Marine Operations": [
      {
        id: "gemilang-marine-ops",
        name: "Marine Operations Team",
        position: "Marine Operations Specialists",
        company: "PT Gemilang Kharisma",
        description:
          "Specialized team for marine sand extraction and coastal water operations.",
        expertise: [
          "Marine Extraction",
          "Coastal Operations",
          "Environmental Monitoring",
        ],
      },
    ],
    "Environmental Compliance": [
      {
        id: "gemilang-env-team",
        name: "Environmental Team",
        position: "Environmental Specialists",
        company: "PT Gemilang Kharisma",
        description:
          "Environmental monitoring and compliance for sustainable marine operations.",
        expertise: [
          "Environmental Monitoring",
          "Compliance Management",
          "Sustainability Practices",
        ],
      },
    ],
  },
};

// PT Kembar Jaya Abadi Structure
export const kembarStructure: CompanyStructure = {
  companyId: "kembar",
  companyName: "PT Kembar Jaya Abadi",
  leadership: [
    {
      id: "syarifudin-nurdiansyah",
      name: "SYARIFUDIN NURDIANSYAH",
      position: "PJBU (Penanggung Jawab Badan Usaha)",
      company: "PT Kembar Jaya Abadi",
      description:
        "Legal representative and business operations oversight for construction projects and corporate compliance.",
      expertise: [
        "Business Operations",
        "Legal Compliance",
        "Project Management",
        "Corporate Affairs",
      ],
      experience: "15+ Years",
    },
    {
      id: "oliansyah-oesnawi",
      name: "IR. OLIANSYAH OESNAWI",
      position: "PJTBU (Penanggung Jawab Teknik Badan Usaha)",
      company: "PT Kembar Jaya Abadi",
      description:
        "Technical leadership for construction projects, engineering solutions, and quality assurance.",
      education: "Ir. (Engineering)",
      expertise: [
        "Construction Engineering",
        "Technical Management",
        "Project Design",
        "Quality Control",
      ],
      experience: "20+ Years",
    },
    {
      id: "marcekal-hilyan",
      name: "MARCEKAL HILYAN BERNAI",
      position: "PJSKBU (Penanggung Jawab Sub Klasifikasi Badan Usaha)",
      company: "PT Kembar Jaya Abadi",
      description:
        "Specialized oversight for building construction classification and compliance standards.",
      expertise: [
        "Construction Classification",
        "Building Standards",
        "Compliance Management",
        "Quality Assurance",
      ],
      experience: "12+ Years",
    },
  ],
  departments: {
    "Project Management": [
      {
        id: "kembar-project-team",
        name: "Project Management Team",
        position: "Project Managers & Coordinators",
        company: "PT Kembar Jaya Abadi",
        description:
          "Comprehensive project management for building construction and infrastructure development.",
        expertise: [
          "Project Planning",
          "Construction Management",
          "Resource Coordination",
        ],
      },
    ],
    Engineering: [
      {
        id: "kembar-engineering-team",
        name: "Engineering Department",
        position: "Civil & Structural Engineers",
        company: "PT Kembar Jaya Abadi",
        description:
          "Engineering design and technical solutions for construction and infrastructure projects.",
        expertise: [
          "Civil Engineering",
          "Structural Design",
          "Technical Analysis",
        ],
      },
    ],
    "Construction Operations": [
      {
        id: "kembar-construction-team",
        name: "Construction Team",
        position: "Site Supervisors & Workers",
        company: "PT Kembar Jaya Abadi",
        description:
          "On-site construction execution and quality control for building projects.",
        expertise: [
          "Construction Execution",
          "Site Management",
          "Quality Control",
        ],
      },
    ],
  },
};

export const allCompanyStructures: CompanyStructure[] = [
  rmuStructure,
  bnpStructure,
  prnStructure,
  gemilangStructure,
  kembarStructure,
];

export const getTotalEmployeeCount = (): number => {
  let total = 0;

  // Add group leadership
  total += groupLeadership.length;

  // Add all company structures
  allCompanyStructures.forEach((company) => {
    total += company.leadership.length;
    if (company.departments) {
      Object.values(company.departments).forEach((dept) => {
        total += dept.length;
      });
    }
  });

  // Add estimated workforce for PT PRN (419 people)
  total += 419;

  return total;
};
