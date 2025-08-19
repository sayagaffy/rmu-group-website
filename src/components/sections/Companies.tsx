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

const Companies = () => {
  const companies = [
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
        "Specialized Cargo Transportation (230-300 feet)",
        "Barge Vessel Operations",
        "Port Agency Relations",
        "Marine Logistics Management",
        "Cargo Handling & Storage",
        "Maritime Safety Compliance",
      ],
      icon: <Ship className="w-12 h-12" />,
      location: "Bandung, West Java",
      email: "office@bahananusapasifik.com",
      phone: "+62 22 [Contact for Details]",
      established: "2020",
      highlights: [
        "5 Years Maritime Experience",
        "Large Fleet Capacity (230-300 feet)",
        "Multi-Port Operations",
        "Safety First Approach",
      ],
      gradient: "from-blue-600 to-cyan-700",
    },
    {
      id: "pt-prn",
      name: "PT Perkakas Rekadaya Nusantara",
      tagline: "Advanced Tools & Parts Manufacturing Excellence",
      type: "Manufacturing",
      description:
        "PT Perkakas Rekadaya Nusantara (PRN) adalah perusahaan manufaktur yang berbasis di Subang dengan spesialisasi komponen otomotif, jigs & fixtures, dies, pallets, serta mesin khusus (special purpose machines). Dengan fasilitas lengkap, tenaga kerja terampil ±419 orang, sertifikasi ISO, serta klien global, PRN telah menempatkan diri sebagai pemain penting di industri manufaktur Indonesia.",
      services: [
        "Mass Production (Automotive Components)",
        "Jigs & Fixtures Manufacturing",
        "Dies Production (Bending, Piercing, Stamping)",
        "Special Purpose Machines",
        "Steel Pallets & Trolley Manufacturing",
        "Tools & Parts Manufacturing",
      ],
      icon: <Factory className="w-12 h-12" />,
      location: "Subang, West Java",
      website: "www.prn-subang.com",
      email: "prnsbg@indosat.net.id",
      phone: "+62 260 472504",
      fax: "+62 260 472506",
      established: "2006",
      totalEmployees: "±419 people",
      landArea: "50 hectares",
      highlights: [
        "19 Years Manufacturing Excellence",
        "ISO 9001:2008 Certified",
        "419+ Skilled Workforce",
        "Global Automotive Clients",
        "50 Hectare Facility",
      ],
      gradient: "from-gray-600 to-gray-800",
      certifications: [
        "ISO 9001:2008 - Quality Management",
        "ISO 14001:2004 - Environment Management",
        "OHSAS 18001:2007 - Health & Safety",
      ],
      majorClients: [
        "Toyota (TMMIN)",
        "Astra Daihatsu",
        "Yamaha",
        "Suzuki",
        "Kawasaki",
        "Chevrolet",
        "Hitachi",
        "Siemens",
      ],
    },
    {
      id: "gemilang",
      name: "PT Gemilang Kharisma",
      tagline: "Sustainable Marine Sand Mining Operations",
      type: "Marine Operations",
      description:
        "Perusahaan yang bergerak di bidang penambangan pasir laut dan melakukan kegiatannya di perairan pantai Batam. Memiliki aset lahan seluas 33.200 m² atau senilai 400 Miliar Rupiah dengan kepemilikan anak perusahaan sebesar 70%.",
      services: [
        "Marine Sand Mining",
        "Coastal Water Operations",
        "Environmental Compliance",
        "Sustainable Resource Extraction",
        "Marine Equipment Operations",
        "Coastal Development Support",
      ],
      icon: <Waves className="w-12 h-12" />,
      location: "Batam Waters",
      email: "info@gemilangkharisma.com",
      phone: "+62 778 [Contact for Details]",
      assets: "Land Assets: 33,200 m² (400 Billion IDR)",
      established: "2020",
      highlights: [
        "Strategic Batam Location",
        "400 Billion IDR Assets",
        "Sustainable Operations",
        "70% Group Ownership",
      ],
      gradient: "from-cyan-600 to-blue-700",
    },
    {
      id: "kembar",
      name: "PT Kembar Jaya Abadi",
      tagline: "Building Excellence, Delivering Trust",
      type: "Construction",
      description:
        "Established construction company specializing in comprehensive building and infrastructure development with 31 years of proven excellence. Tersertifikasi ISO 9001:2015, ISO 14001:2015, dan ISO 45001:2018.",
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

  const subsidiaries = [
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
          {companies.map((company, index) => (
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
                  {company.highlights.map((highlight, highlightIndex) => (
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
                      {company.certifications.map((cert, certIndex) => (
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
                      {company.majorClients.map((client, clientIndex) => (
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
                    {company.services.map((service, serviceIndex) => (
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

                  <button
                    onClick={() =>
                      window.open(`/companies/${company.id}`, "_blank")
                    }
                    className={`mt-6 w-full bg-gradient-to-r ${company.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
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
            {subsidiaries.map((subsidiary, index) => (
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
          <div className="mb-8 text-center">
            <h3 className="mb-4 font-heading font-bold text-3xl">
              RMU Group at a Glance
            </h3>
            <p className="text-blue-100 text-lg">
              Comprehensive business portfolio across strategic industries
            </p>
          </div>

          <div className="gap-8 grid grid-cols-2 lg:grid-cols-5">
            <div className="text-center">
              <div className="mb-2 font-bold text-cyan-400 text-4xl">5</div>
              <div className="text-blue-100 text-sm">Operating Companies</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-cyan-400 text-4xl">19+</div>
              <div className="text-blue-100 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-cyan-400 text-4xl">500+</div>
              <div className="text-blue-100 text-sm">Total Workforce</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-cyan-400 text-4xl">50+</div>
              <div className="text-blue-100 text-sm">Hectares Facilities</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-cyan-400 text-4xl">∞</div>
              <div className="text-blue-100 text-sm">Sustainable Future</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
