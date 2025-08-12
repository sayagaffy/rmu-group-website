"use client";

import React from "react";
import {
  CheckCircle,
  Target,
  Eye,
  Lightbulb,
  Leaf,
  Shield,
} from "lucide-react";

const About = () => {
  const visionPoints = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Green Technology",
      description:
        "Converting minerals using environmentally sustainable processes",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ESG Principles",
      description:
        "Prioritizing Environmental, Social, and Governance standards",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Developing cutting-edge hydrometallurgical solutions",
    },
  ];

  const missionPoints = [
    "Process Indonesia's mineral wealth into Energy Transition Metals (ETM) and Rare Earth Metals through patented MPAL technology",
    "Manage complex extraction through seven ESG risk dimensions: Waste, Water, Conservation, Land Use, Community, Social Vulnerability, Governance",
    "Provide comprehensive construction and marine services to support Indonesia's infrastructure development",
  ];

  const achievements = [
    { number: "18+", label: "Years of Excellence" },
    { number: "3", label: "Specialized Companies" },
    { number: "200+", label: "Projects Completed" },
    { number: "100%", label: "ESG Compliance" },
  ];

  return (
    <section
      id="about"
      className="bg-gray-50 section-padding"
      aria-labelledby="about-main-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div
            className="inline-flex items-center gap-2 bg-blue-100 mb-4 px-4 py-2 rounded-full font-medium text-blue-800 text-sm"
            aria-hidden="true"
          >
            <Target className="w-4 h-4" />
            About RMU Group
          </div>
          <h2
            id="about-main-heading"
            className="mb-6 font-heading font-bold text-gray-900 text-4xl md:text-5xl"
          >
            Leading Indonesia&apos;s{" "}
            <span className="text-gradient">Mining Innovation</span>
          </h2>
          <p
            className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed"
            aria-describedby="about-main-heading"
          >
            Pioneering sustainable mining technology and comprehensive
            construction services with a commitment to environmental stewardship
            and social responsibility
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="items-center gap-16 grid lg:grid-cols-2 mb-20">
          {/* Left Column - Vision */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
                <h3 className="font-heading font-bold text-gray-900 text-3xl">
                  Our Vision
                </h3>
              </div>
              <p className="mb-8 text-gray-700 text-lg leading-relaxed">
                Converting minerals into metals using a green pressurized
                hydrometallurgical process that prioritizes sustainable or
                ESG-based principles, establishing Indonesia as a leader in
                responsible mining technology.
              </p>

              {/* Vision Points */}
              <div className="space-y-4">
                {visionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-4 bg-white shadow-sm hover:shadow-md p-4 rounded-xl transition-shadow"
                    role="article"
                  >
                    <div className="mt-1 text-blue-600" aria-hidden="true">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Mission */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-blue-600" aria-hidden="true" />
                <h3
                  className="font-heading font-bold text-gray-900 text-3xl"
                  id="mission-heading"
                >
                  Our Mission
                </h3>
              </div>

              {/* Mission Points */}
              <div
                className="space-y-6"
                role="list"
                aria-labelledby="mission-heading"
              >
                {missionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                    role="listitem"
                    aria-label={`Mission point ${index + 1}`}
                  >
                    <div className="mt-1" aria-hidden="true">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white"
              role="region"
              aria-labelledby="cta-heading"
            >
              <h4
                id="cta-heading"
                className="mb-4 font-heading font-bold text-2xl"
              >
                Ready to Transform Your Mining Operations?
              </h4>
              <p className="mb-6 text-blue-100" aria-describedby="cta-heading">
                Discover how our MPAL technology can revolutionize your mineral
                processing while maintaining the highest environmental
                standards.
              </p>
              <button
                className="bg-yellow-400 hover:bg-yellow-300 px-6 py-3 rounded-lg font-semibold text-blue-900 transition-colors"
                aria-label="Explore RMU Group Technology"
                tabIndex={0}
                onClick={() => window.open("/technology", "_blank")}
              >
                Explore Our Technology
              </button>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div
          className="bg-white shadow-xl p-8 lg:p-12 rounded-3xl"
          aria-labelledby="achievements-heading"
        >
          <div className="mb-12 text-center">
            <h3
              id="achievements-heading"
              className="mb-4 font-heading font-bold text-gray-900 text-3xl"
            >
              Our Track Record
            </h3>
            <p className="text-gray-600 text-lg">
              Proven excellence in mining technology and construction services
            </p>
          </div>

          <div className="gap-8 grid grid-cols-2 lg:grid-cols-4" role="list">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group text-center"
                role="listitem"
                aria-label={`Achievement: ${achievement.label}`}
              >
                <div
                  className="mb-2 font-bold text-blue-600 text-4xl lg:text-5xl group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                >
                  {achievement.number}
                </div>
                <div className="font-medium text-gray-600">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose RMU Group */}
        <div className="mt-20" aria-labelledby="why-choose-heading">
          <div className="mb-12 text-center">
            <h3
              id="why-choose-heading"
              className="mb-4 font-heading font-bold text-gray-900 text-3xl"
            >
              Why Choose RMU Group?
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600 text-lg">
              Leading Indonesia&apos;s transformation towards sustainable mining
              and infrastructure development
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3" role="list">
            <div
              className="bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl text-center transition-shadow"
              role="listitem"
              aria-label="Innovation Leadership"
            >
              <div
                className="flex justify-center items-center bg-blue-100 mx-auto mb-4 rounded-full w-16 h-16"
                aria-hidden="true"
              >
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mb-3 font-semibold text-gray-900 text-xl">
                Innovation Leadership
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Pioneering MPAL technology with patented spiral tube reactor
                system for next-generation mineral processing
              </p>
            </div>

            <div className="bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl text-center transition-shadow">
              <div className="flex justify-center items-center bg-green-100 mx-auto mb-4 rounded-full w-16 h-16">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="mb-3 font-semibold text-gray-900 text-xl">
                ESG Commitment
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive approach to Environmental, Social, and Governance
                standards across all operations
              </p>
            </div>

            <div className="bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl text-center transition-shadow">
              <div className="flex justify-center items-center bg-orange-100 mx-auto mb-4 rounded-full w-16 h-16">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="mb-3 font-semibold text-gray-900 text-xl">
                Proven Excellence
              </h4>
              <p className="text-gray-600 leading-relaxed">
                18+ years of experience delivering complex projects across
                mining, marine, and construction sectors
              </p>
            </div>

            <div className="bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl text-center transition-shadow">
              <div className="flex justify-center items-center bg-purple-100 mx-auto mb-4 rounded-full w-16 h-16">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="mb-3 font-semibold text-gray-900 text-xl">
                Integrated Solutions
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Complete ecosystem from technology development to construction
                implementation and marine operations
              </p>
            </div>

            <div className="bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl text-center transition-shadow">
              <div className="flex justify-center items-center bg-red-100 mx-auto mb-4 rounded-full w-16 h-16">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="mb-3 font-semibold text-gray-900 text-xl">
                Quality Assurance
              </h4>
              <p className="text-gray-600 leading-relaxed">
                ISO certified operations ensuring highest standards in safety,
                environmental management, and quality
              </p>
            </div>

            <div className="bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl text-center transition-shadow">
              <div className="flex justify-center items-center bg-teal-100 mx-auto mb-4 rounded-full w-16 h-16">
                <Eye className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="mb-3 font-semibold text-gray-900 text-xl">
                Future Ready
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Scalable modular technology and infrastructure designed for
                Indonesia&apos;s energy transition needs
              </p>
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div
          className="bg-gradient-to-br from-blue-600 to-blue-800 mt-20 p-8 lg:p-12 rounded-3xl text-white"
          aria-labelledby="journey-heading"
        >
          <div className="mb-12 text-center">
            <h3
              id="journey-heading"
              className="mb-4 font-heading font-bold text-3xl"
            >
              Our Journey
            </h3>
            <p className="mx-auto max-w-2xl text-blue-100 text-lg">
              From innovative research to industry leadership - the RMU Group
              evolution
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4" role="list">
            <div
              className="text-center"
              role="listitem"
              aria-label="Company Timeline: Foundation in 1994"
            >
              <div
                className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-20 h-20"
                aria-hidden="true"
              >
                <span className="font-bold text-2xl">1994</span>
              </div>
              <h4 className="mb-2 font-bold">Foundation</h4>
              <p className="text-blue-100 text-sm">
                PT Kembar Jaya Abadi established, beginning our construction
                excellence journey
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-20 h-20">
                <span className="font-bold text-2xl">2006</span>
              </div>
              <h4 className="mb-2 font-bold">Technology Innovation</h4>
              <p className="text-blue-100 text-sm">
                RMU founded with focus on revolutionary MPAL technology
                development
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-20 h-20">
                <span className="font-bold text-2xl">2020</span>
              </div>
              <h4 className="mb-2 font-bold">Marine Expansion</h4>
              <p className="text-blue-100 text-sm">
                PT Gemilang Kharisma operational, expanding into sustainable
                marine operations
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-20 h-20">
                <span className="font-bold text-2xl">2025</span>
              </div>
              <h4 className="mb-2 font-bold">Future Vision</h4>
              <p className="text-blue-100 text-sm">
                Integrated group leadership in sustainable mining and
                construction excellence
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <h4 className="mb-4 font-bold text-xl">Looking Ahead</h4>
              <p className="mx-auto max-w-3xl text-blue-100 leading-relaxed">
                As Indonesia moves towards its energy transition goals, RMU
                Group stands ready to lead the transformation with our
                integrated portfolio of sustainable mining technology,
                responsible marine operations, and world-class construction
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
