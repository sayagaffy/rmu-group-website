"use client";

import React from "react";
import {
  Building,
  Ship,
  Cog,
  Waves,
  Construction,
  MapPin,
  Calendar,
  DollarSign,
  ArrowRight,
  Users,
  Award,
  Globe,
  Phone,
  Mail,
  Factory,
} from "lucide-react";

// TypeScript interfaces
interface Company {
  id: string;
  name: string;
  tagline: string;
  type: string;
  description: string;
  services: string[];
  icon: React.ReactNode;
  location: string;
  website?: string; // Optional karena tidak semua company punya website
  email: string;
  phone: string;
  established: string;
  highlights: string[];
  gradient: string;
  totalEmployees?: string;
  assets?: string;
  landArea?: string;
  certifications?: string[];
  majorClients?: string[];
  fax?: string;
}

interface Subsidiary {
  name: string;
  description: string;
  type: string;
}

const Companies: React.FC = () => {
  // Helper function with proper TypeScript typing
  const formatWebsiteURL = (website: string | undefined): string | null => {
    if (!website) return null;
    
    // Remove common prefixes and ensure proper format
    let cleanUrl = website.replace(/^(https?:\/\/)?(www\.)?/, '');
    
    // Add https:// protocol
    return `https://${cleanUrl}`;
  };

  const companies: Company[] = [
    {
      id: "rmu",
      name: "PT Rekayasa Mineral Utama",
      tagline: "Advanced MPAL Technology for Sustainable Mining",
      type: "Mining Technology",
      description:
        "Leading provider of Modular Pressure Acid Leaching (MPAL) technology for sustainable mineral processing. Our patented spiral tube reactor system enables scalable, cost-effective processing of nickel laterite ore with significantly lower environmental impact compared to traditional methods.",
      services: [
        "MPAL Technology Development",
        "Mining Process Plant Design",
        "Hydrometallurgical Solutions",
        "Mine Mouth Plant Setup",
        "Green Tailings Processing",
        "ESG Compliance Solutions",
      ],
      icon: <Cog className="w-12 h-12" />,
      location: "Jakarta & Bandung",
      website: "www.rekayasamineralutama.com",
      email: "info@rekayasamineralutama.com",
      phone: "+62 21 22761331",
      established: "2006",
      highlights: [
        "19 Years Innovation",
        "Patented MPAL Technology",
        "ESG-Based Solutions",
        "Energy Transition Metals",
      ],
      gradient: "from-blue-600 to-blue-800",
    },
    {
      id: "pt-bnp",
      name: "PT Bahana Nusa Pasifik",
      tagline: "Trusted Maritime Transportation & Logistics Solutions",
      type: "Maritime Services",
      description:
        "PT Bahana Nusa Pasifik adalah perusahaan penyedia jasa transportasi angkutan barang khusus dengan kapal tongkang yang telah beroperasi sejak tahun 2020. Dengan pengalaman dan kompetensi, kami menyediakan solusi transportasi laut yang efisien, handal dan aman bagi seluruh pelanggan/mitra kami.",
      services: [
        "Barge Transportation Services",
        "Marine Logistics Solutions",
        "Cargo Handling Services",
        "Port Operations",
        "Maritime Consulting",
        "Fleet Management",
      ],
      icon: <Ship className="w-12 h-12" />,
      location: "Multiple Ports Indonesia",
      // website: undefined, // No website available - commented out to make it optional
      email: "info@bahanausapasifik.com",
      phone: "+62 21 22761332",
      established: "2020",
      highlights: [
        "5 Years Experience",
        "Reliable Fleet",
        "Nationwide Coverage",
        "Safety First",
      ],
      gradient: "from-cyan-600 to-blue-700",
    },
    {
      id: "kembar-jaya",
      name: "PT Kembar Jaya Abadi",
      tagline: "Excellence in Construction & Infrastructure Development",
      type: "Construction Services",
      description:
        "Tersertifikasi ISO 9001:2015, ISO 14001:2015, dan ISO 45001:2018.",
      services: [
        "Building Construction",
        "Civil Engineering",
        "Infrastructure Development",
        "Foundation & Piling Works",
        "Steel Structure Installation",
        "Project Management",
      ],
      icon: <Building className="w-12 h-12" />,
      location: "Samarinda, East Kalimantan",
      website: "www.ptkembarjayaabadi.com",
      email: "kembarjaya_abadi@yahoo.co.id",
      phone: "+62 541 271044",
      established: "1994",
      highlights: [
        "31 Years Experience",
        "ISO Certified",
        "Infrastructure Specialist",
        "East Kalimantan Leader",
      ],
      gradient: "from-orange-600 to-red-700",
    },
  ];

  const subsidiaries: Subsidiary[] = [
    {
      name: "Specialized Cargo Transportation",
      description:
        "Barge vessel transportation services operating commercially since 2020, supporting maritime logistics across Indonesian waters",
      type: "Transportation",
    },
    {
      name: "Marine Sediment Solutions",
      description:
        "Specializing in marine sediment cleaning, treatment, transport, and utilization for environmental restoration projects",
      type: "Environmental",
    },
  ];

  return (
    <section id="companies" className="bg-white section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 mb-4 px-4 py-2 rounded-full font-medium text-blue-800 text-sm">
            <Building className="w-4 h-4" />
            Our Companies
          </div>
          <h2 className="mb-6 font-heading font-bold text-gray-900 text-4xl md:text-5xl">
            Integrated Portfolio of{" "}
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 text-gradient text-transparent">
              Excellence
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            Five specialized companies working together to deliver comprehensive
            solutions across mining technology, maritime transportation,
            advanced manufacturing, marine operations, and construction services
          </p>
        </div>

        {/* Main Companies Grid */}
        <div className="space-y-16 mb-20">
          {companies.map((company: Company, index: number) => (
            <div
              key={company.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Company Info */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`bg-gradient-to-br ${company.gradient} text-white p-4 rounded-2xl shadow-lg`}
                  >
                    {company.icon}
                  </div>
                  <div className="flex-1">
                    <div
                      className={`inline-block bg-gradient-to-r ${company.gradient} text-white px-3 py-1 rounded-full text-sm font-medium mb-2`}
                    >
                      {company.type}
                    </div>
                    <h3 className="mb-2 font-heading font-bold text-gray-900 text-2xl lg:text-3xl">
                      {company.name}
                    </h3>
                    <p className="font-medium text-gray-600 text-lg">
                      {company.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {company.description}
                </p>

                {/* Key Information Grid */}
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">{company.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Est. {company.established}</span>
                  </div>
                  {company.totalEmployees && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-sm">{company.totalEmployees}</span>
                    </div>
                  )}
                  {company.assets && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                      <span className="text-sm">{company.assets}</span>
                    </div>
                  )}
                  {company.landArea && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <span className="text-sm">{company.landArea}</span>
                    </div>
                  )}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {company.highlights.map((highlight: string, highlightIndex: number) => (
                    <span
                      key={highlightIndex}
                      className="bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-700 text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Certifications (if available) */}
                {company.certifications && (
                  <div className="bg-green-50 p-4 rounded-xl">
                    <h4 className="flex items-center gap-2 mb-2 font-semibold text-green-800">
                      <Award className="w-4 h-4" />
                      Certifications
                    </h4>
                    <div className="space-y-1">
                      {company.certifications.map((cert: string, certIndex: number) => (
                        <div key={certIndex} className="text-green-700 text-sm">
                          • {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Major Clients (if available) */}
                {company.majorClients && (
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h4 className="mb-2 font-semibold text-blue-800">
                      Major Clients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {company.majorClients.map((client: string, clientIndex: number) => (
                        <span
                          key={clientIndex}
                          className="bg-blue-100 px-2 py-1 rounded font-medium text-blue-700 text-xs"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="mb-3 font-semibold text-gray-900">
                    Contact Information
                  </h4>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{company.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{company.email}</span>
                    </div>
                    {company.website && (
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>{company.website}</span>
                      </div>
                    )}
                    {company.fax && (
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 text-xs text-center">📠</span>
                        <span>Fax: {company.fax}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg p-8 rounded-3xl">
                  <h4 className="mb-6 font-heading font-bold text-gray-900 text-2xl">
                    Our Services
                  </h4>
                  <div className="gap-4 grid">
                    {company.services.map((service: string, serviceIndex: number) => (
                      <div
                        key={serviceIndex}
                        className="group flex items-center gap-3 bg-white hover:shadow-md p-4 rounded-lg transition-all duration-300"
                      >
                        <div
                          className={`w-3 h-3 bg-gradient-to-r ${company.gradient} rounded-full flex-shrink-0`}
                        ></div>
                        <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button - Only show if website exists */}
                  {company.website && (
                    <button
                      onClick={() => {
                        const websiteUrl = formatWebsiteURL(company.website);
                        if (websiteUrl) {
                          window.open(websiteUrl, "_blank", "noopener,noreferrer");
                        }
                      }}
                      className={`mt-6 w-full bg-gradient-to-r ${company.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group`}
                    >
                      <span>Visit Website</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subsidiaries Section */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 lg:p-12 rounded-3xl">
          <div className="mb-8 text-center">
            <h3 className="mb-4 font-heading font-bold text-gray-900 text-3xl">
              Additional Subsidiaries
            </h3>
            <p className="text-gray-600 text-lg">
              Expanding our capabilities through strategic subsidiary companies
            </p>
          </div>

          <div className="gap-6 grid md:grid-cols-2">
            {subsidiaries.map((subsidiary: Subsidiary, index: number) => (
              <div
                key={index}
                className="bg-white hover:shadow-lg p-6 rounded-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 px-3 py-1 rounded-full font-medium text-blue-600 text-sm">
                    {subsidiary.type}
                  </div>
                </div>
                <h4 className="mt-4 mb-2 font-semibold text-gray-900 text-xl">
                  {subsidiary.name}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {subsidiary.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Statistics */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 mt-16 p-8 lg:p-12 rounded-3xl text-white">
          <div className="gap-8 grid lg:grid-cols-4 text-center">
            <div>
              <div className="mb-2 font-bold text-4xl">19+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-4xl">500+</div>
              <div className="text-blue-200">Employees</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-4xl">100+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-4xl">5</div>
              <div className="text-blue-200">Company Portfolio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;