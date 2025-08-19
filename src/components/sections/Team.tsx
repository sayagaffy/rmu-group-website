"use client";

import React, { useState } from "react";
import {
  Users,
  Star,
  Award,
  Building,
  GraduationCap,
  Clock,
  ChevronDown,
  ChevronUp,
  Mail,
  Linkedin,
  Factory,
  Ship,
  Cog,
  Waves,
  Construction,
  Crown,
  Shield,
  Target,
  Globe,
} from "lucide-react";

// Team Data
interface TeamMember {
  id: string;
  name: string;
  position: string;
  company: string;
  description: string;
  expertise?: string[];
  education?: string;
  experience?: string;
  image?: string;
}

interface CompanyTeam {
  companyId: string;
  companyName: string;
  companyType: string;
  icon: JSX.Element;
  gradient: string;
  leadership: TeamMember[];
  keyStats?: {
    label: string;
    value: string;
    icon: JSX.Element;
  }[];
}

// Group Leadership
const groupLeadership: TeamMember[] = [
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
  },
  {
    id: "djoni-rosadi",
    name: "H. IR. DJONI ROSADI",
    position: "President Director",
    company: "RMU Group",
    description:
      "Operational leadership and strategic direction for RMU Group's integrated business portfolio. Oversees day-to-day operations and ensures synergy between all business divisions.",
    expertise: [
      "Operations Management",
      "Engineering",
      "Business Strategy",
      "Technology Integration",
    ],
    education: "Ir. (Engineering)",
    experience: "20+ Years",
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
  },
];

// Company Teams
const companyTeams: CompanyTeam[] = [
  {
    companyId: "rmu",
    companyName: "PT Rekayasa Mineral Utama",
    companyType: "Mining Technology",
    icon: <Cog className="w-8 h-8" />,
    gradient: "from-blue-600 to-blue-800",
    leadership: [
      {
        id: "zaki-mubarok-rmu",
        name: "MUHAMMAD ZAKI MUBAROK, PROF. DR. IR.",
        position: "Expert Staff & Founder",
        company: "PT Rekayasa Mineral Utama",
        description:
          "Chief Technology Officer and founder, leading MPAL technology development and research initiatives. Drives innovation in sustainable mineral processing technology.",
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
    keyStats: [
      {
        label: "Years Innovation",
        value: "19+",
        icon: <Award className="w-5 h-5" />,
      },
      {
        label: "MPAL Technology",
        value: "Patented",
        icon: <Star className="w-5 h-5" />,
      },
      {
        label: "ESG Compliance",
        value: "100%",
        icon: <Shield className="w-5 h-5" />,
      },
    ],
  },
  {
    companyId: "pt-bnp",
    companyName: "PT Bahana Nusa Pasifik",
    companyType: "Maritime Services",
    icon: <Ship className="w-8 h-8" />,
    gradient: "from-blue-600 to-cyan-700",
    leadership: [
      {
        id: "tino-rilantino",
        name: "R. TINO RILANTINO PRAWIRAKUSUMAH",
        position: "Managing Director",
        company: "PT Bahana Nusa Pasifik",
        description:
          "Overall leadership and strategic direction for maritime transportation operations, fleet management and business development. Ensures operational excellence in specialized cargo transportation.",
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
          "Operational excellence and safety compliance for maritime transportation services, ensuring efficient and secure cargo operations across Indonesian waters.",
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
          "Day-to-day operations management and coordination between departments for seamless service delivery and customer satisfaction.",
        expertise: [
          "General Management",
          "Operations Coordination",
          "Team Leadership",
        ],
        experience: "10+ Years",
      },
    ],
    keyStats: [
      {
        label: "Fleet Capacity",
        value: "230-300ft",
        icon: <Ship className="w-5 h-5" />,
      },
      {
        label: "Safety Record",
        value: "100%",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        label: "Experience",
        value: "5+ Years",
        icon: <Clock className="w-5 h-5" />,
      },
    ],
  },
  {
    companyId: "pt-prn",
    companyName: "PT Perkakas Rekadaya Nusantara",
    companyType: "Manufacturing",
    icon: <Factory className="w-8 h-8" />,
    gradient: "from-gray-600 to-gray-800",
    leadership: [
      {
        id: "prn-managing-director",
        name: "Managing Director",
        position: "Managing Director",
        company: "PT Perkakas Rekadaya Nusantara",
        description:
          "Strategic leadership for manufacturing operations across 6 production plants with 419+ workforce. Oversees automotive components production and special purpose machines manufacturing.",
        expertise: [
          "Manufacturing Strategy",
          "Operations Management",
          "Automotive Industry",
          "Quality Management",
        ],
        experience: "20+ Years",
      },
      {
        id: "prn-technical-director",
        name: "Technical Director",
        position: "Technical Director",
        company: "PT Perkakas Rekadaya Nusantara",
        description:
          "Technical leadership for advanced manufacturing processes, quality control, and engineering excellence. Ensures ISO compliance and continuous improvement.",
        expertise: [
          "Manufacturing Engineering",
          "Quality Management",
          "Technical Leadership",
          "Process Innovation",
        ],
        experience: "18+ Years",
      },
    ],
    keyStats: [
      {
        label: "Workforce",
        value: "419+",
        icon: <Users className="w-5 h-5" />,
      },
      {
        label: "Machining Units",
        value: "103",
        icon: <Factory className="w-5 h-5" />,
      },
      {
        label: "Land Area",
        value: "50 Hectares",
        icon: <Globe className="w-5 h-5" />,
      },
      {
        label: "ISO Certified",
        value: "2008",
        icon: <Award className="w-5 h-5" />,
      },
    ],
  },
  {
    companyId: "gemilang",
    companyName: "PT Gemilang Kharisma",
    companyType: "Marine Operations",
    icon: <Waves className="w-8 h-8" />,
    gradient: "from-cyan-600 to-blue-700",
    leadership: [
      {
        id: "gemilang-managing-director",
        name: "Managing Director",
        position: "Managing Director",
        company: "PT Gemilang Kharisma",
        description:
          "Strategic leadership for marine sand mining operations in Batam waters with focus on sustainable practices and environmental compliance.",
        expertise: [
          "Marine Operations",
          "Environmental Compliance",
          "Strategic Management",
          "Sustainable Mining",
        ],
        experience: "15+ Years",
      },
      {
        id: "gemilang-operations-manager",
        name: "Operations Manager",
        position: "Operations Manager",
        company: "PT Gemilang Kharisma",
        description:
          "Daily operations management for marine mining activities, equipment coordination, and environmental monitoring to ensure sustainable extraction practices.",
        expertise: [
          "Marine Mining",
          "Equipment Management",
          "Operations Coordination",
          "Safety Management",
        ],
        experience: "12+ Years",
      },
    ],
    keyStats: [
      {
        label: "Land Assets",
        value: "33,200 m²",
        icon: <Globe className="w-5 h-5" />,
      },
      {
        label: "Asset Value",
        value: "400B IDR",
        icon: <Star className="w-5 h-5" />,
      },
      {
        label: "Location",
        value: "Batam Waters",
        icon: <Waves className="w-5 h-5" />,
      },
    ],
  },
  {
    companyId: "kembar",
    companyName: "PT Kembar Jaya Abadi",
    companyType: "Construction",
    icon: <Construction className="w-8 h-8" />,
    gradient: "from-orange-600 to-red-700",
    leadership: [
      {
        id: "syarifudin-nurdiansyah",
        name: "SYARIFUDIN NURDIANSYAH",
        position: "PJBU (Penanggung Jawab Badan Usaha)",
        company: "PT Kembar Jaya Abadi",
        description:
          "Legal representative and business operations oversight for construction projects and corporate compliance. Ensures regulatory compliance and business excellence.",
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
          "Technical leadership for construction projects, engineering solutions, and quality assurance. Oversees technical aspects of building and infrastructure development.",
        education: "Ir. (Engineering)",
        expertise: [
          "Construction Engineering",
          "Technical Management",
          "Project Design",
          "Quality Control",
        ],
        experience: "20+ Years",
      },
    ],
    keyStats: [
      {
        label: "Experience",
        value: "31 Years",
        icon: <Clock className="w-5 h-5" />,
      },
      {
        label: "ISO Certified",
        value: "2015",
        icon: <Award className="w-5 h-5" />,
      },
      {
        label: "Location",
        value: "East Kalimantan",
        icon: <Globe className="w-5 h-5" />,
      },
    ],
  },
];

const Team = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleMemberExpansion = (memberId: string) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  const renderTeamMember = (member: TeamMember) => (
    <div
      key={member.id}
      className="bg-white hover:shadow-xl p-6 border border-gray-100 rounded-2xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="flex justify-center items-center bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full w-16 h-16">
            <span className="font-bold text-white text-lg">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </span>
          </div>
        </div>

        {/* Member Info */}
        <div className="flex-1 min-w-0">
          <h3 className="mb-1 font-heading font-bold text-gray-900 text-lg">
            {member.name}
          </h3>
          <p className="mb-1 font-semibold text-blue-600 text-sm">
            {member.position}
          </p>
          <p className="mb-3 text-gray-600 text-xs">{member.company}</p>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-3 mb-3">
            {member.education && (
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <GraduationCap className="w-3 h-3" />
                <span>{member.education}</span>
              </div>
            )}
            {member.experience && (
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <Clock className="w-3 h-3" />
                <span>{member.experience}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="mb-3 text-gray-700 text-sm leading-relaxed">
            {expandedMember === member.id
              ? member.description
              : `${member.description.slice(0, 120)}${
                  member.description.length > 120 ? "..." : ""
                }`}
          </p>

          {/* Expertise Tags */}
          {member.expertise && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {member.expertise
                  .slice(0, expandedMember === member.id ? undefined : 2)
                  .map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 px-2 py-1 rounded-full font-medium text-blue-700 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                {!expandedMember && member.expertise.length > 2 && (
                  <span className="text-blue-600 text-xs">
                    +{member.expertise.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Expand Button */}
          {member.description.length > 120 && (
            <button
              onClick={() => toggleMemberExpansion(member.id)}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs transition-colors"
            >
              <span>
                {expandedMember === member.id ? "Show Less" : "Learn More"}
              </span>
              {expandedMember === member.id ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="team"
      className="bg-gradient-to-br from-gray-50 to-blue-50 section-padding"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 mb-4 px-4 py-2 rounded-full font-medium text-blue-800 text-sm">
            <Users className="w-4 h-4" />
            Our Leadership Structure
          </div>
          <h2 className="mb-6 font-heading font-bold text-gray-900 text-4xl md:text-5xl">
            Expert Leadership for{" "}
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 text-gradient text-transparent">
              Innovation
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            Our leadership team combines decades of industry expertise across
            mining technology, maritime operations, manufacturing, and
            construction to drive sustainable growth and innovation
          </p>
        </div>

        {/* Overall Statistics */}
        <div className="bg-white shadow-xl mb-16 p-8 rounded-3xl">
          <div className="gap-8 grid grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 font-bold text-blue-600 text-3xl">500+</div>
              <div className="text-gray-600 text-sm">Total Team Members</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-blue-600 text-3xl">5</div>
              <div className="text-gray-600 text-sm">Operating Companies</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-blue-600 text-3xl">25+</div>
              <div className="text-gray-600 text-sm">Leadership Positions</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-blue-600 text-3xl">100%</div>
              <div className="text-gray-600 text-sm">
                Commitment to Excellence
              </div>
            </div>
          </div>
        </div>

        {/* Group Leadership Section */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl text-white">
                <Crown className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-900 text-3xl">
                  RMU Group Leadership
                </h3>
                <p className="text-gray-600">
                  Board of Directors & Commissioners
                </p>
              </div>
            </div>
          </div>

          <div className="gap-6 grid lg:grid-cols-2">
            {groupLeadership.map((member) => renderTeamMember(member))}
          </div>
        </div>

        {/* Company Teams Sections */}
        {companyTeams.map((company, index) => (
          <div key={company.companyId} className="mb-20">
            {/* Company Header */}
            <div className="mb-12 text-center">
              <div className="flex justify-center items-center gap-3 mb-6">
                <div
                  className={`bg-gradient-to-br ${company.gradient} text-white p-4 rounded-2xl`}
                >
                  {company.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-gray-900 text-3xl">
                    {company.companyName}
                  </h3>
                  <p className="text-gray-600">{company.companyType}</p>
                </div>
              </div>

              {/* Company Stats */}
              {company.keyStats && (
                <div
                  className={`bg-gradient-to-r ${company.gradient} text-white p-6 rounded-2xl inline-block`}
                >
                  <div className="flex gap-8">
                    {company.keyStats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="flex justify-center items-center mb-1">
                          {stat.icon}
                        </div>
                        <div className="font-bold text-lg">{stat.value}</div>
                        <div className="opacity-90 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Leadership */}
            <div className="gap-6 grid lg:grid-cols-2">
              {company.leadership.map((member) => renderTeamMember(member))}
            </div>
          </div>
        ))}

        {/* Leadership Philosophy */}
        <div className="bg-gradient-to-r from-blue-900 to-gray-900 p-8 lg:p-12 rounded-3xl text-white">
          <div className="text-center">
            <h3 className="mb-6 font-heading font-bold text-3xl">
              Our Leadership Philosophy
            </h3>
            <div className="gap-8 grid lg:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center items-center bg-white/10 backdrop-blur-sm mx-auto mb-4 rounded-full w-16 h-16">
                  <Star className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="mb-2 font-semibold text-xl">Excellence</h4>
                <p className="text-blue-100 text-sm">
                  Striving for the highest standards across all our business
                  units, from technology innovation to operational excellence
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center bg-white/10 backdrop-blur-sm mx-auto mb-4 rounded-full w-16 h-16">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="mb-2 font-semibold text-xl">Innovation</h4>
                <p className="text-blue-100 text-sm">
                  Leading technological advancement in mining, maritime,
                  manufacturing, and construction industries
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center bg-white/10 backdrop-blur-sm mx-auto mb-4 rounded-full w-16 h-16">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="mb-2 font-semibold text-xl">Collaboration</h4>
                <p className="text-blue-100 text-sm">
                  Building strong partnerships across industries to create
                  sustainable value for all stakeholders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
