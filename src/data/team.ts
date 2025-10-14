// src/data/team.ts

/**
 * Team Member Data Structure
 * Real leadership team information for RMU Group
 * Updated: October 2025
 */

export interface TeamMemberData {
  id: string;
  name: string;
  position: string;
  title: string;
  department?: string;
  bio: string;
  bioExtended?: string;
  image?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  expertise?: string[];
  education?: string;
  experience?: string;
  achievements?: string[];
  joinedYear?: number;
  birthplace?: string;
  birthdate?: string;
}

export interface TeamCategory {
  id: string;
  name: string;
  description: string;
  members: TeamMemberData[];
}

/**
 * BOARD OF COMMISSIONERS (Dewan Komisaris)
 * 7 Members
 */
export const boardOfCommissioners: TeamMemberData[] = [
  {
    id: "ibih-tg-hassan",
    name: "IBIH T.G. HASSAN",
    position: "Komisaris Utama",
    title: "President Commissioner",
    department: "Board of Commissioners",
    bio: "Visionary leader with extensive experience in banking, finance, and corporate governance. Founder of Permodalan Nasional Madani (PNM).",
    bioExtended:
      "Former CEO of PT. Bank Pinaesaan (1993-1994), CEO of PT. Dani Prisma Mitra Holdings (1994-1996), and current CEO of IHA Corporation (1997-present). Founded Permodalan Nasional Madani (PNM), demonstrating commitment to national financial development. Recognized as Bank of the Year 1993 (Infobank) and Banker of the Year 1994 (SWA).",
    image: "/images/team/ibih-tg-hassan.jpg",
    email: "ibihhassan10@gmail.com",
    expertise: [
      "Banking & Finance",
      "Corporate Governance",
      "Strategic Leadership",
      "Investment Management",
      "Business Development",
    ],
    experience: "30+ Years",
    joinedYear: 2025,
    achievements: [
      "Bank of the Year 1993 (Infobank)",
      "Banker of the Year 1994 (SWA)",
      "Founder of Permodalan Nasional Madani (PNM)",
      "CEO IHA Corporation (1997-present)",
    ],
  },
  {
    id: "iwan-ridwan-armansyah",
    name: "IWAN RIDWAN ARMANSYAH AB",
    position: "Komisaris",
    title: "Commissioner",
    department: "Board of Commissioners",
    bio: "Accomplished musician, songwriter, and mountaineering pioneer. Former member of legendary band Bimbo and co-founder of Wanadri.",
    bioExtended:
      'Born in Sumedang, West Java (September 3, 1947). Former member of the iconic Bimbo musical group and composer of beloved Indonesian songs including "Melati Dari Jayagiri", "Burung Camar", and "Flamboyan". Co-founded Wanadri, one of Indonesia\'s pioneering mountaineering organizations. Alumni of Faculty of Agriculture, Universitas Padjadjaran (1965).',
    image: "/images/team/iwan-abdurrachman.jpg",
    birthplace: "Sumedang, Jawa Barat",
    birthdate: "3 September 1947",
    expertise: [
      "Arts & Culture",
      "Leadership",
      "Community Development",
      "Strategic Advisory",
      "Organizational Management",
    ],
    education: "Fakultas Pertanian, Universitas Padjadjaran (1965)",
    experience: "50+ Years",
    joinedYear: 2025,
    achievements: [
      "Former member of Bimbo musical group",
      "Composer of iconic Indonesian songs",
      "Co-founder of Wanadri mountaineering organization",
      "Cultural ambassador for Indonesia",
    ],
  },
  {
    id: "judiono-tosin",
    name: "JUDIONO TOSIN",
    position: "Komisaris",
    title: "Commissioner",
    department: "Board of Commissioners",
    bio: "Seasoned executive with deep expertise in infrastructure, manufacturing, and corporate leadership from the Salim Group.",
    bioExtended:
      "Direktur Utama PT Capital Turbines Indonesia and Komisaris Utama PT Primarindo Asia Infrastructure Tbk (since 2017). Previously served as Executive Director at PT Indocement Tunggal Prakarsa Tbk (1989-1993) and Senior Executive Director of Salim Group (1976-1993). Brings extensive experience in industrial operations, infrastructure development, and strategic management.",
    image: "/images/team/judiono-tosin.jpg",
    expertise: [
      "Infrastructure Development",
      "Manufacturing Operations",
      "Corporate Leadership",
      "Strategic Management",
      "Industrial Projects",
    ],
    education: "Bachelor's degree, Universitas Indonesia (1986)",
    experience: "45+ Years",
    joinedYear: 2025,
    achievements: [
      "Direktur Utama PT Capital Turbines Indonesia",
      "Komisaris Utama PT Primarindo Asia Infrastructure Tbk (2017-present)",
      "Former Executive Director Indocement (1989-1993)",
      "Former Senior Executive Director Salim Group (1976-1993)",
    ],
  },
  {
    id: "zaki-mubarok",
    name: "PROF. DR. IR. MOHAMMAD ZAKI MUBAROK, ST., MT.",
    position: "Komisaris",
    title: "Commissioner",
    department: "Board of Commissioners",
    bio: "Guru Besar (Professor) in Metallurgical Engineering at ITB, specializing in hydro-electrometallurgy and mineral processing.",
    bioExtended:
      "Professor at Program Studi Teknik Metalurgi ITB with specialization in hydro-electrometallurgy. Served as Vice Dean (2020-2025) and Acting Dean (Feb-May 2025) at ITB. Guest Professor (2022-present). Educational background includes ST in Mining Engineering ITB (1997), MT in Corrosion Engineering ITB (2001), and Dr. in Non-ferrous Metallurgy from University of Loeben Austria (2005). Has been a lecturer at ITB since 1999, achieving Professor status in 2019.",
    image: "/images/team/zaki-mubarok.jpg",
    email: "zaki.mubarok@itb.ac.id",
    expertise: [
      "Hydro-electrometallurgy",
      "Mineral Processing",
      "Corrosion Engineering",
      "Non-ferrous Metallurgy",
      "Academic Research",
    ],
    education: "Prof. Dr. Ir. MT. ST. - ITB & University of Loeben Austria",
    experience: "25+ Years",
    joinedYear: 2025,
    achievements: [
      "Professor (Guru Besar) ITB since 2019",
      "Vice Dean ITB (2020-2025)",
      "Acting Dean ITB (Feb-May 2025)",
      "Guest Professor (2022-present)",
      "Published extensive research in metallurgy",
    ],
  },
  {
    id: "mulyo-widodo",
    name: "PROF. DR. MULYO WIDODO",
    position: "Komisaris",
    title: "Commissioner",
    department: "Board of Commissioners",
    bio: "Distinguished professor and pioneer in unmanned systems, automation, and robotics at ITB with focus on underwater vehicle technology.",
    bioExtended:
      "Director of Center for Unmanned System Studies (CentrUMS) ITB (2007-2019) and Head of Automation & Robotics Laboratory ITB (1987-2007). Long-serving lecturer at Mechanical Engineering Department ITB (1979-2019), teaching Mechatronics, Engineering Measurement, Numerical Control & Robotics, and Automation. Research focus on ROV/AUV development and underwater vehicle surveillance systems.",
    image: "/images/team/mulyo-widodo.jpg",
    email: "mwkartidjo@gmail.com",
    expertise: [
      "Unmanned Systems",
      "Automation & Robotics",
      "Mechatronics",
      "Underwater Vehicles (ROV/AUV)",
      "Engineering Research",
    ],
    education: "Prof. Dr. - Institut Teknologi Bandung",
    experience: "45+ Years",
    joinedYear: 2025,
    achievements: [
      "Director CentrUMS ITB (2007-2019)",
      "Head of Automation & Robotics Lab ITB (1987-2007)",
      "Pioneer in underwater vehicle technology",
      "Extensive teaching career (1979-2019)",
    ],
  },
  {
    id: "fifi-hariani",
    name: "FIFI HARIANI",
    position: "Komisaris",
    title: "Commissioner",
    department: "Board of Commissioners",
    bio: "Multi-industry entrepreneur with expertise in mining, human resources, and digital branding. Director of multiple successful ventures.",
    bioExtended:
      "Holds Doctoral degree in Human Resources Management from University of Jakarta (2023, GPA 3.87), Magister in Theology and Philosophy from STT BASOM Batam (GPA 3.52), and Bachelor in Business Management from STIE GICI Depok (GPA 3.48). Currently serves as Director of PT. Gemilang Kharisma (Mining, 2007-present), PT. Kepri Mineral Sukses (Mining, 2016-present), and PT. Rumah Lebah Indonesia (Digital Branding, 2019-present).",
    image: "/images/team/fifi-hariani.jpg",
    email: "fifihariani88@gmail.com",
    expertise: [
      "Human Resources Management",
      "Mining Operations",
      "Digital Branding",
      "Business Management",
      "Strategic Leadership",
    ],
    education: "Doctoral in HR Management - University of Jakarta (2023)",
    experience: "15+ Years",
    joinedYear: 2025,
    achievements: [
      "Director PT. Gemilang Kharisma (Mining, 2007-present)",
      "Director PT. Kepri Mineral Sukses (2016-present)",
      "Director PT. Rumah Lebah Indonesia (2019-present)",
      "Doctoral degree with GPA 3.87",
    ],
  },
  {
    id: "indra-laksana",
    name: "INDRA LAKSANA",
    position: "Komisaris",
    title: "Commissioner",
    department: "Board of Commissioners",
    bio: "Business leader with comprehensive management experience and academic background from Universitas Sahid.",
    bioExtended:
      "Born in Jakarta (April 16, 1961). Brings extensive business management experience and strategic oversight capabilities to RMU Group's Board of Commissioners. Alumni of Universitas Sahid with strong foundation in business administration and corporate governance.",
    image: "/images/team/indra-laksana.jpg",
    email: "Indra.laksana.1961@gmail.com",
    birthplace: "Jakarta",
    birthdate: "16 April 1961",
    expertise: [
      "Business Management",
      "Corporate Governance",
      "Strategic Planning",
      "Business Development",
      "Executive Leadership",
    ],
    education: "Universitas Sahid",
    experience: "30+ Years",
    joinedYear: 2025,
    achievements: [
      "Extensive business management experience",
      "Strong corporate governance expertise",
      "Strategic advisory leadership",
    ],
  },
];

/**
 * BOARD OF DIRECTORS (Direksi)
 * 4 Members
 */
export const boardOfDirectors: TeamMemberData[] = [
  {
    id: "djoni-rosadi",
    name: "DJONI ROSADI",
    position: "Direktur Utama",
    title: "President Director",
    department: "Board of Directors",
    bio: "Seasoned executive with expertise in construction, automotive manufacturing, nickel mining, and transportation infrastructure.",
    bioExtended:
      "Born in Bandung (October 31, 1951). Mechanical Engineering graduate from Institut Teknologi Tekstil Bandung. Extensive experience as Direktur Utama of PT. Bandung Raya Utama Construction (1978-1995), PT. Perkakas Rekadaya Nusantara Automotive Parts (1998-2003), PT. Dharma Rosadi Internasional Nickel Mining (2003-present), and PT. Metro Putra Perkasa LRT Metro Kapsul (2015-present). Brings decades of leadership in diverse industrial sectors.",
    image: "/images/team/djoni-rosadi.jpg",
    birthplace: "Bandung",
    birthdate: "31 Oktober 1951",
    expertise: [
      "Construction Management",
      "Automotive Manufacturing",
      "Nickel Mining Operations",
      "Transportation Infrastructure",
      "Executive Leadership",
    ],
    education: "Sarjana Teknik Mesin, Institut Teknologi Tekstil Bandung",
    experience: "45+ Years",
    joinedYear: 2025,
    achievements: [
      "Direktur Utama PT. Bandung Raya Utama Construction (1978-1995)",
      "Direktur Utama PT. Perkakas Rekadaya Nusantara (1998-2003)",
      "Direktur Utama PT. Dharma Rosadi Internasional (2003-present)",
      "Direktur Utama PT. Metro Putra Perkasa LRT (2015-present)",
    ],
  },
  {
    id: "umar-nurul-anwar",
    name: "UMAR NURUL ANWAR",
    position: "Direktur",
    title: "Director",
    department: "Board of Directors",
    bio: "Entrepreneur and policy expert in cooperatives and SMEs development, with extensive property development experience.",
    bioExtended:
      "Born in Bandung (August 16, 1965). Direktur of PT. Modular Inti Konstrindo (1996-present). Former Business Development Manager for BPOD Jawa Barat (1996-1998) and Staff Ahli Business Development Service at Kementerian Koperasi dan UKM (2002-2003). Key initiator of Dana Penyehatan and Dana Penjaminan programs for cooperatives and SMEs. Successfully developed 1,500 housing units in Karang Pawitan and 1,496 units in Serang Banten.",
    image: "/images/team/umar-nurul-anwar.png",
    birthplace: "Bandung",
    birthdate: "16 Agustus 1965",
    expertise: [
      "Property Development",
      "Cooperatives & SMEs",
      "Business Development",
      "Construction Management",
      "Strategic Planning",
    ],
    experience: "30+ Years",
    joinedYear: 2025,
    achievements: [
      "Direktur PT. Modular Inti Konstrindo (1996-present)",
      "Developed 1,500 housing units in Karang Pawitan",
      "Developed 1,496 housing units in Serang Banten",
      "Key initiator of cooperative financing programs",
    ],
  },
  {
    id: "andi-ch-hassan",
    name: "ANDI CH HASSAN, SH",
    position: "Direktur",
    title: "Director",
    department: "Board of Directors",
    bio: "Legal expert and corporate lawyer with extensive experience in business law, property development, and corporate governance.",
    bioExtended:
      "Born in Bandung (October 25, 1962). Law graduate (Sarjana Hukum) from Universitas Parahyangan Bandung. Former Head Legal of BPOD Jawa Barat (1996-1998) and Chairman of Hutabarat, Hasan, Halim & Idrus Consulting Law (1994-1996). Currently leads Andi Hassan & Partners (2007-present) and serves as Direktur Utama PT. Nirwana Hassan Persada (2016-present). Brings deep expertise in corporate law and business development.",
    image: "/images/team/andi-ch-hassan.jpg",
    birthplace: "Bandung",
    birthdate: "25 Oktober 1962",
    expertise: [
      "Corporate Law",
      "Business Law",
      "Legal Consulting",
      "Property Development",
      "Contract Management",
    ],
    education: "Sarjana Hukum, Universitas Parahyangan Bandung",
    experience: "30+ Years",
    joinedYear: 2025,
    achievements: [
      "Head Legal BPOD Jawa Barat (1996-1998)",
      "Chairman Hutabarat, Hasan, Halim & Idrus (1994-1996)",
      "Pimpinan Andi Hassan & Partners (2007-present)",
      "Direktur Utama PT. Nirwana Hassan Persada (2016-present)",
    ],
  },
  {
    id: "sapto-adi-nugroho",
    name: "SAPTO ADI NUGROHO",
    position: "Direktur",
    title: "Director",
    department: "Board of Directors",
    bio: "Mechatronics expert specializing in underwater robotics, defense technology, and automation systems with extensive ITB and government experience.",
    bioExtended:
      "Born in Kediri (November 7, 1975). Mechanical Engineering graduate specializing in Production Engineering. Lecturer at ITB Automation & Robotics Lab (1999-2007) and Research Project Manager at CentrUMS ITB (2007-present). Adviser to PT. Bandung Mechatronic Center, Commissioner of PT. Robo Marine Indonesia, and former Staff Ahli at Kementrian Koordinator Bidang Kemaritiman RI (2018-2019). Expert in mechatronics, underwater robotics systems, and defense technology.",
    image: "/images/team/sapto-adi-nugroho.jpg",
    birthplace: "Kediri",
    birthdate: "7 November 1975",
    expertise: [
      "Mechatronics",
      "Underwater Robotics Systems",
      "Defense Technology",
      "Automation Engineering",
      "Research & Development",
    ],
    education: "Mechanical Engineering, Production Engineering (S1)",
    experience: "25+ Years",
    joinedYear: 2025,
    achievements: [
      "Lecturer ITB Automation & Robotics Lab (1999-2007)",
      "Research Project Manager CentrUMS ITB (2007-present)",
      "Commissioner PT. Robo Marine Indonesia",
      "Former Staff Ahli Kementrian Koordinator Bidang Kemaritiman RI (2018-2019)",
    ],
  },
];

/**
 * All Team Members Combined
 */
export const allTeamMembers: TeamMemberData[] = [
  ...boardOfCommissioners,
  ...boardOfDirectors,
];

/**
 * Team Categories for Organized Display
 */
export const teamCategories: TeamCategory[] = [
  {
    id: "commissioners",
    name: "Board of Commissioners",
    description:
      "Dewan Komisaris - Strategic oversight and corporate governance (7 members)",
    members: boardOfCommissioners,
  },
  {
    id: "directors",
    name: "Board of Directors",
    description:
      "Direksi - Executive management and operational leadership (4 members)",
    members: boardOfDirectors,
  },
];

/**
 * Utility Functions
 */

// Get team member by ID
export const getTeamMemberById = (id: string): TeamMemberData | undefined => {
  return allTeamMembers.find((member) => member.id === id);
};

// Get team members by department
export const getTeamMembersByDepartment = (
  department: string
): TeamMemberData[] => {
  return allTeamMembers.filter((member) =>
    member.department?.toLowerCase().includes(department.toLowerCase())
  );
};

// Get all departments
export const getAllDepartments = (): string[] => {
  const departments = allTeamMembers
    .map((member) => member.department)
    .filter((dept): dept is string => dept !== undefined);
  return Array.from(new Set(departments));
};

// Get Board of Commissioners
export const getBoardOfCommissioners = (): TeamMemberData[] => {
  return boardOfCommissioners;
};

// Get Board of Directors
export const getBoardOfDirectors = (): TeamMemberData[] => {
  return boardOfDirectors;
};

// Get total team count
export const getTotalTeamCount = (): number => {
  return allTeamMembers.length;
};

/**
 * Export default
 */
export default allTeamMembers;
