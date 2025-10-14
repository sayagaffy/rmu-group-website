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
    { number: "4+", label: "Group Companies" },
    { number: "200+", label: "Projects Completed" },
    { number: "100%", label: "ESG Compliance" },
  ];

  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 mb-4 px-4 py-2 rounded-full font-medium text-primary-700 text-sm">
            <Target className="w-4 h-4" />
            About RMU Group
          </div>
          <h2 className="mb-6 font-heading font-bold text-gray-900 text-4xl md:text-5xl">
            Leading Indonesia&apos;s{" "}
            <span className="text-gradient">Mining Innovation</span>
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
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
                <Eye className="w-8 h-8 text-primary-500" />
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
                  >
                    <div className="mt-1 text-primary-500">{point.icon}</div>
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
                <Target className="w-8 h-8 text-primary-500" />
                <h3 className="font-heading font-bold text-gray-900 text-3xl">
                  Our Mission
                </h3>
              </div>

              {/* Mission Points */}
              <div className="space-y-6">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 rounded-2xl text-white">
              <h4 className="mb-4 font-heading font-bold text-2xl">
                Ready to Transform Your Mining Operations?
              </h4>
              <p className="mb-6 text-primary-100">
                Discover how our MPAL technology can revolutionize your mineral
                processing while maintaining the highest environmental
                standards.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-300 px-6 py-3 rounded-lg font-semibold text-blue-900 transition-colors">
                Explore Our Technology
              </button>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white shadow-xl p-8 lg:p-12 rounded-3xl">
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-heading font-bold text-gray-900 text-3xl">
              Our Track Record
            </h3>
            <p className="text-gray-600 text-lg">
              Proven excellence in mining technology and construction services
            </p>
          </div>

          <div className="gap-8 grid grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="group text-center">
                <div className="mb-2 font-bold text-primary-500 text-4xl lg:text-5xl group-hover:scale-110 transition-transform">
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
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-heading font-bold text-gray-900 text-3xl">
              Why Choose RMU Group?
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600 text-lg">
              Leading Indonesia&apos;s transformation towards sustainable mining
              and infrastructure development
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl text-center transition-shadow">
              <div className="flex justify-center items-center bg-primary-100 mx-auto mb-4 rounded-full w-16 h-16">
                <Lightbulb className="w-8 h-8 text-primary-500" />
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
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 mt-20 p-8 lg:p-12 rounded-3xl text-white">
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-heading font-bold text-3xl">
              Our Journey
            </h3>
            <p className="mx-auto max-w-2xl text-primary-100 text-lg">
              From innovative research to industry leadership - the RMU Group
              evolution
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-20 h-20">
                <span className="font-bold text-2xl">1994</span>
              </div>
              <h4 className="mb-2 font-bold">Foundation</h4>
              <p className="text-primary-100 text-sm">
                PT Kembar Jaya Abadi established, beginning our construction
                excellence journey
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-20 h-20">
                <span className="font-bold text-2xl">2006</span>
              </div>
              <h4 className="mb-2 font-bold">Technology Innovation</h4>
              <p className="text-primary-100 text-sm">
                RMU founded with focus on revolutionary MPAL technology
                development
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-20 h-20">
                <span className="font-bold text-2xl">2020</span>
              </div>
              <h4 className="mb-2 font-bold">Marine Expansion</h4>
              <p className="text-primary-100 text-sm">
                PT Gemilang Kharisma operational, expanding into sustainable
                marine operations
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-20 h-20">
                <span className="font-bold text-2xl">2025</span>
              </div>
              <h4 className="mb-2 font-bold">Future Vision</h4>
              <p className="text-primary-100 text-sm">
                Integrated group leadership in sustainable mining and
                construction excellence
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <h4 className="mb-4 font-bold text-xl">Looking Ahead</h4>
              <p className="mx-auto max-w-3xl text-primary-100 leading-relaxed">
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
