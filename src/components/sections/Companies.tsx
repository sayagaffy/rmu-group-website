"use client";

import React from "react";
import {
  Factory,
  Ship,
  Building,
  ArrowRight,
  MapPin,
  Calendar,
  DollarSign,
} from "lucide-react";

const Companies = () => {
  const companies = [
    {
      id: "rmu",
      name: "PT Rekayasa Mineral Utama",
      type: "Core Technology",
      tagline: "Advanced Mining Technology",
      description:
        "Modular Pressure Acid Leaching (MPAL) technology untuk processing mineral menjadi Energy Transition Metals dan Rare Earth Metals dengan prinsip ESG-based yang berkelanjutan.",
      services: [
        "MPAL Technology Development",
        "Mineral Processing Solutions",
        "Laboratory Testing Services",
        "Engineering Consultancy",
        "ESG Compliance Solutions",
        "Technology Licensing",
      ],
      icon: <Factory className="w-12 h-12" />,
      location: "Bandung, West Java",
      website: "www.rmineral.com",
      email: "info@rekayasamineralutama.com",
      phone: "+62 21 22761331",
      highlights: [
        "Patented MPAL Technology",
        "Research Laboratory",
        "Future Workshop",
      ],
      gradient: "from-blue-600 to-blue-800",
    },
    {
      id: "gemilang-kharisma",
      name: "PT Gemilang Kharisma",
      type: "Marine Operations",
      tagline: "Sustainable Marine Mining",
      description:
        "Spesialis marine sand mining operations di perairan Batam dengan aset lahan seluas 33.200 m² bernilai 400 Miliar Rupiah dan estimasi sumber daya pasir laut 20 juta m³.",
      services: [
        "Marine Sand Mining",
        "Sediment Cleaning & Treatment",
        "Marine Transportation",
        "Cargo Barge Services",
        "Marine Environmental Management",
        "Port Operations",
      ],
      icon: <Ship className="w-12 h-12" />,
      location: "Batam, Riau Islands",
      email: "gemilangkharisma1@gmail.com",
      phone: "+62 778 4805412",
      established: "2020",
      assets: "400 Billion Rupiah",
      highlights: [
        "33,200 m² Land Assets",
        "20M m³ Sand Resources",
        "Marine Expertise",
      ],
      gradient: "from-teal-600 to-cyan-700",
    },
    {
      id: "kembar-jaya-abadi",
      name: "PT Kembar Jaya Abadi",
      type: "Construction Services",
      tagline: "Building Excellence Since 1994",
      description:
        "Penyedia jasa konstruksi komprehensif untuk building, civil, dan infrastructure projects dengan pengalaman sejak 1994. Tersertifikasi ISO 9001:2015, ISO 14001:2015, dan ISO 45001:2018.",
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
        "29 Years Experience",
        "ISO Certified",
        "Infrastructure Specialist",
      ],
      gradient: "from-orange-600 to-red-700",
    },
  ];

  const subsidiaries = [
    {
      name: "Specialized Cargo Transportation",
      description:
        "Barge vessel transportation services operating commercially since 2020",
      type: "Transportation",
    },
    {
      name: "Marine Sediment Solutions",
      description:
        "Specializing in marine sediment cleaning, treatment, transport, and utilization",
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
            <span className="text-gradient">Excellence</span>
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            Three specialized companies working together to deliver
            comprehensive solutions across mining technology, marine operations,
            and construction services
          </p>
        </div>

        {/* Main Companies Grid */}
        <div className="space-y-12 mb-20">
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
                    className={`bg-gradient-to-br ${company.gradient} text-white p-4 rounded-2xl`}
                  >
                    {company.icon}
                  </div>
                  <div>
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

                {/* Key Information */}
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">{company.location}</span>
                  </div>
                  {company.established && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-sm">
                        Est. {company.established}
                      </span>
                    </div>
                  )}
                  {company.assets && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                      <span className="text-sm">{company.assets}</span>
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

                {/* Contact Info */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="mb-3 font-semibold text-gray-900">
                    Contact Information
                  </h4>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <div>📞 {company.phone}</div>
                    <div>✉️ {company.email}</div>
                    {company.website && <div>🌐 {company.website}</div>}
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl">
                  <h4 className="mb-6 font-heading font-bold text-gray-900 text-2xl">
                    Our Services
                  </h4>
                  <div className="gap-4 grid">
                    {company.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="group flex items-center gap-3 bg-white hover:shadow-md p-4 rounded-lg transition-shadow"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${company.gradient} rounded-full`}
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
                    className={`mt-6 w-full bg-gradient-to-r ${company.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2 group`}
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
      </div>
    </section>
  );
};

export default Companies;
