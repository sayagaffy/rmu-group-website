"use client";

import React from "react";
import {
  Cog,
  Leaf,
  TrendingDown,
  Award,
  FlaskConical,
  MapPin,
  Factory,
  Recycle,
} from "lucide-react";

const Technology = () => {
  const mpalFeatures = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Lower Operating Conditions",
      description:
        "MPAL uses lower temperature & pressure than HPAL process, reducing energy consumption and operational costs",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Modular Design",
      description:
        "Scalable modular units with 4,000 tons nickel capacity per line. Capacity expandable by adding production modules",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Reduced CAPEX & OPEX",
      description:
        "Significantly lower investment and operating costs compared to conventional technologies",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental Friendly",
      description:
        "Green pressurized hydrometallurgical process prioritizing ESG-based sustainable principles",
    },
  ];

  const facilities = [
    {
      name: "Research Laboratory",
      location:
        "Jl. Dangdeur Indah No.3, Sukagalih, Bandung – 40163, West Java",
      description:
        "Advanced laboratory facilities for mineral processing research and development",
      icon: <FlaskConical className="w-8 h-8" />,
      features: [
        "Mineral Testing",
        "Process Optimization",
        "Quality Control",
        "R&D Services",
      ],
    },
    {
      name: "Future Workshop & Pilot Plant",
      location: "Bunihayu Village, Subang Regency, West Java (10 hectares)",
      description:
        "Validates nickel processing with MPAL process for optimal parameters across different ore types",
      icon: <Factory className="w-8 h-8" />,
      features: [
        "Pilot Plant Testing",
        "Process Validation",
        "Equipment Testing",
        "Staff Training",
      ],
    },
  ];

  const esgDimensions = [
    {
      name: "Waste Management",
      description: "Comprehensive waste reduction and recycling",
    },
    {
      name: "Water Conservation",
      description: "Efficient water usage and treatment systems",
    },
    {
      name: "Environmental Conservation",
      description: "Protecting biodiversity and ecosystems",
    },
    {
      name: "Land Use Optimization",
      description: "Responsible land management practices",
    },
    {
      name: "Community Engagement",
      description: "Local community involvement and benefits",
    },
    {
      name: "Social Vulnerability",
      description: "Addressing social impact and equity",
    },
    {
      name: "Governance Standards",
      description: "Transparent and ethical business practices",
    },
  ];

  const tailingManagement = [
    {
      step: "Mine-Mouth MPAL Plant",
      description:
        "Building MPAL factory in mining area to achieve low OPEX and green environment",
    },
    {
      step: "Tailings Processing",
      description:
        "Simplified and cost-effective MHP tailings processing compared to non-MPAL technology",
    },
    {
      step: "Reforestation Program",
      description:
        "Treating MPAL tailings for reforestation with bacteria-based organic fertilization",
    },
    {
      step: "Pioneer Crop Plantation",
      description:
        "Successfully growing sorghum as pioneer crop in treated mining areas",
    },
  ];

  return (
    <section
      id="technology"
      className="bg-gradient-to-br from-gray-50 to-blue-50 section-padding"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 mb-4 px-4 py-2 rounded-full font-medium text-blue-800 text-sm">
            <Cog className="w-4 h-4" />
            Our Technology
          </div>
          <h2 className="mb-6 font-heading font-bold text-gray-900 text-4xl md:text-5xl">
            Revolutionary <span className="text-gradient">MPAL Technology</span>
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            Modular Pressurized Acid Leaching technology with spiral tube
            reactor system - our patented intellectual property for sustainable
            mineral processing
          </p>
        </div>

        {/* MPAL Technology Overview */}
        <div className="bg-white shadow-xl mb-16 p-8 lg:p-12 rounded-3xl">
          <div className="items-center gap-12 grid lg:grid-cols-2">
            <div>
              <h3 className="mb-6 font-heading font-bold text-gray-900 text-3xl">
                What is MPAL Technology?
              </h3>
              <p className="mb-8 text-gray-700 text-lg leading-relaxed">
                A breakthrough in mineral processing technology that enables
                scalable, cost-effective, and environmentally responsible
                extraction of Energy Transition Metals (ETM) and Rare Earth
                Metals from various mineral sources.
              </p>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl text-white">
                <h4 className="mb-3 font-bold text-xl">Key Innovation</h4>
                <p className="text-blue-100">
                  Our patented spiral tube reactor system represents a
                  compromise between process conditions, plant equipment design,
                  and production capacity, resulting in optimal efficiency and
                  sustainability.
                </p>
              </div>
            </div>

            <div className="gap-6 grid grid-cols-2">
              {mpalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-lg p-6 rounded-xl transition-shadow"
                >
                  <div className="mb-4 text-blue-600">{feature.icon}</div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="gap-8 grid lg:grid-cols-2 mb-16">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-shadow"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    {facility.icon}
                  </div>
                  <h3 className="font-heading font-bold text-2xl">
                    {facility.name}
                  </h3>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="flex-shrink-0 mt-1 w-5 h-5" />
                  <p className="text-blue-100 text-sm">{facility.location}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-6 text-gray-700 leading-relaxed">
                  {facility.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <div className="gap-2 grid grid-cols-2">
                    {facility.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ESG Compliance */}
        <div className="bg-white shadow-xl mb-16 p-8 lg:p-12 rounded-3xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 mb-4 px-4 py-2 rounded-full font-medium text-green-800 text-sm">
              <Leaf className="w-4 h-4" />
              ESG Compliance
            </div>
            <h3 className="mb-4 font-heading font-bold text-gray-900 text-3xl">
              Seven ESG Risk Dimensions
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600 text-lg">
              Our MPAL technology manages complex extraction through
              comprehensive environmental, social, and governance considerations
            </p>
          </div>

          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
            {esgDimensions.map((dimension, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-md p-6 rounded-xl transition-shadow"
              >
                <h4 className="mb-2 font-bold text-gray-900">
                  {dimension.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dimension.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tailing Management */}
        <div className="bg-gradient-to-br from-green-600 to-teal-700 p-8 lg:p-12 rounded-3xl text-white">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm mb-4 px-4 py-2 rounded-full font-medium text-sm">
              <Recycle className="w-4 h-4" />
              Sustainable Tailing Management
            </div>
            <h3 className="mb-4 font-heading font-bold text-3xl">
              Green Environment Initiative
            </h3>
            <p className="mx-auto max-w-2xl text-green-100 text-lg">
              Integrated approach to tailings management with successful
              reforestation programs
            </p>
          </div>

          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
            {tailingManagement.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-16 h-16">
                  <span className="font-bold text-2xl">{index + 1}</span>
                </div>
                <h4 className="mb-2 font-bold">{item.step}</h4>
                <p className="text-green-100 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm mt-12 p-6 rounded-2xl">
            <h4 className="mb-4 font-bold text-xl">
              Proven Results: Sorghum Pioneer Crop
            </h4>
            <p className="text-green-100 leading-relaxed">
              Our reforestation experiment shows successful growth of sorghum as
              pioneer crop in treated mining areas, demonstrating effective land
              rehabilitation from 10 days to 120 days after planting with
              bacteria-based organic fertilization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
