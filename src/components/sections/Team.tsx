"use client";

import React from "react";
import { Users, Crown, User, Mail, Phone } from "lucide-react";

const Team = () => {
  const managementTeam = [
    {
      id: "djoni-rosadi",
      name: "H. IR. DJONI ROSADI",
      position: "President Director",
      company: "PT Rekayasa Mineral Utama",
      department: "Executive Management",
      type: "executive",
      description:
        "Leading RMU Group with extensive experience in mining technology and business development",
    },
    {
      id: "zaki-mubarok",
      name: "Prof. DR. IR. MUHAMMAD ZAKI MUBAROK",
      position: "Commissioner & Expert Staff",
      company: "PT Rekayasa Mineral Utama",
      department: "Technical Advisory",
      type: "expert",
      description:
        "Chief technology advisor and co-founder, leading MPAL technology development and research initiatives",
    },
    {
      id: "mulyo-widodo",
      name: "Prof. DR. IR. MULYO WIDODO",
      position: "Commissioner & Founder",
      company: "PT Rekayasa Mineral Utama",
      department: "Board of Commissioners",
      type: "founder",
      description:
        "Co-founder and strategic advisor with expertise in mineral processing and technology innovation",
    },
  ];

  const boardMembers = [
    {
      id: "ibih-hassan",
      name: "IBIH TG HASSAN",
      position: "President Commissioner",
      company: "PT Rekayasa Mineral Utama",
      department: "Board of Commissioners",
    },
    {
      id: "abdurrachman",
      name: "IR. ABDURRACHMAN",
      position: "Commissioner",
      company: "PT Rekayasa Mineral Utama",
      department: "Board of Commissioners",
    },
  ];

  const kjaManagement = [
    {
      id: "syarifudin-nurdiansyah",
      name: "Syarifudin Nurdiansyah",
      position: "Direktur Utama",
      company: "PT Kembar Jaya Abadi",
      department: "Executive Management",
      type: "executive",
    },
    {
      id: "siti-aisyah",
      name: "Hj. Siti Aisyah",
      position: "Wakil Direktur Utama",
      company: "PT Kembar Jaya Abadi",
      department: "Executive Management",
      type: "executive",
    },
    {
      id: "siska-sari-dewi",
      name: "Siska Sari Dewi",
      position: "Komisaris Utama",
      company: "PT Kembar Jaya Abadi",
      department: "Board of Commissioners",
      type: "commissioner",
    },
    {
      id: "eka-hillyian",
      name: "Eka Hillyian Fazzih",
      position: "Direktur",
      company: "PT Kembar Jaya Abadi",
      department: "Operations",
    },
    {
      id: "lukman-hakim",
      name: "Lukman Hakim",
      position: "Direktur",
      company: "PT Kembar Jaya Abadi",
      department: "Operations",
    },
  ];

  const getIconForType = (type?: string) => {
    switch (type) {
      case "executive":
        return <Crown className="w-6 h-6" />;
      case "expert":
        return <Users className="w-6 h-6" />;
      case "founder":
        return <Crown className="w-6 h-6" />;
      case "commissioner":
        return <User className="w-6 h-6" />;
      default:
        return <User className="w-6 h-6" />;
    }
  };

  const getColorForCompany = (company: string) => {
    if (company.includes("Rekayasa Mineral"))
      return "from-blue-600 to-blue-800";
    if (company.includes("Kembar Jaya")) return "from-orange-600 to-red-700";
    return "from-gray-600 to-gray-800";
  };

  return (
    <section id="team" className="bg-white section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 mb-4 px-4 py-2 rounded-full font-medium text-blue-800 text-sm">
            <Users className="w-4 h-4" />
            Our Team
          </div>
          <h2 className="mb-6 font-heading font-bold text-gray-900 text-4xl md:text-5xl">
            Leadership <span className="text-gradient">Excellence</span>
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            Experienced leadership team driving innovation and excellence across
            mining technology, marine operations, and construction services
          </p>
        </div>

        {/* Executive Leadership */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-heading font-bold text-gray-900 text-3xl">
              Executive Leadership
            </h3>
            <p className="text-gray-600 text-lg">
              Visionary leaders guiding RMU Group&apos;s strategic direction and
              innovation
            </p>
          </div>

          <div className="gap-8 grid lg:grid-cols-3">
            {managementTeam.map((member, index) => (
              <div
                key={member.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-xl rounded-2xl overflow-hidden transition-all hover:-translate-y-1 duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${getColorForCompany(
                    member.company
                  )} p-6 text-white`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      {getIconForType(member.type)}
                    </div>
                    <div className="text-right">
                      <div className="bg-white/20 px-2 py-1 rounded-full text-xs">
                        {member.department}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center items-center bg-white/20 mx-auto mb-4 rounded-full w-24 h-24">
                      <User className="w-12 h-12 text-white/80" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 font-heading font-bold text-gray-900 text-xl text-center">
                    {member.name}
                  </h3>
                  <p className="mb-2 font-semibold text-blue-600 text-center">
                    {member.position}
                  </p>
                  <p className="mb-4 text-gray-500 text-sm text-center">
                    {member.company}
                  </p>

                  {member.description && (
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {member.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Commissioners */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-heading font-bold text-gray-900 text-3xl">
              Board of Commissioners
            </h3>
            <p className="text-gray-600 text-lg">
              Strategic oversight and governance leadership
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 mx-auto max-w-4xl">
            {boardMembers.map((member, index) => (
              <div
                key={member.id}
                className="bg-white shadow-lg hover:shadow-xl p-6 rounded-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-gray-900 text-lg">
                      {member.name}
                    </h3>
                    <p className="mb-1 font-medium text-blue-600 text-sm">
                      {member.position}
                    </p>
                    <p className="text-gray-500 text-xs">{member.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PT Kembar Jaya Abadi Management */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-heading font-bold text-gray-900 text-3xl">
              PT Kembar Jaya Abadi Management
            </h3>
            <p className="text-gray-600 text-lg">
              Construction excellence leadership team
            </p>
          </div>

          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
            {kjaManagement.map((member, index) => (
              <div
                key={member.id}
                className="bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-lg p-6 rounded-xl transition-shadow"
              >
                <div className="text-center">
                  <div className="flex justify-center items-center bg-gradient-to-br from-orange-200 to-red-200 mx-auto mb-4 rounded-full w-20 h-20">
                    {getIconForType(member.type)}
                    <User className="w-10 h-10 text-orange-700" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                    {member.name}
                  </h3>
                  <p className="mb-1 font-medium text-orange-600 text-sm">
                    {member.position}
                  </p>
                  <p className="mb-2 text-gray-500 text-xs">
                    {member.department}
                  </p>
                  <div className="inline-block bg-orange-100 px-2 py-1 rounded-full text-orange-800 text-xs">
                    {member.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Values */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 rounded-3xl text-white">
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-heading font-bold text-3xl">
              Our Leadership Values
            </h3>
            <p className="mx-auto max-w-2xl text-blue-100 text-lg">
              The principles that guide our leadership team in driving
              innovation, sustainability, and excellence across all our
              operations
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-16 h-16">
                <Crown className="w-8 h-8" />
              </div>
              <h4 className="mb-2 font-bold">Visionary Leadership</h4>
              <p className="text-blue-100 text-sm">
                Strategic thinking and innovative approaches to industry
                challenges
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-16 h-16">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="mb-2 font-bold">Collaborative Excellence</h4>
              <p className="text-blue-100 text-sm">
                Working together to achieve exceptional results across all
                divisions
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-16 h-16">
                <User className="w-8 h-8" />
              </div>
              <h4 className="mb-2 font-bold">Integrity & Trust</h4>
              <p className="text-blue-100 text-sm">
                Building lasting relationships through transparency and ethical
                practices
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-full w-16 h-16">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="mb-2 font-bold">Sustainable Growth</h4>
              <p className="text-blue-100 text-sm">
                Balancing business success with environmental and social
                responsibility
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h4 className="mb-4 font-heading font-bold text-2xl">
              Ready to Work With Our Team?
            </h4>
            <p className="mx-auto mb-6 max-w-2xl text-blue-100">
              Connect with our leadership team to discuss partnerships,
              projects, and opportunities for collaboration in mining technology
              and construction excellence.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <button
                onClick={() =>
                  window.open(
                    "mailto:info@rekayasamineralutama.com?subject=Leadership Contact"
                  )
                }
                className="flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-300 px-8 py-3 rounded-lg font-semibold text-blue-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Leadership
              </button>
              <button
                onClick={() => window.open("tel:+62212276133")}
                className="flex justify-center items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-8 py-3 border border-white/30 rounded-lg font-semibold text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
