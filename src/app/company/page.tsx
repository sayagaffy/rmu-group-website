import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsappButton';
import { BreadcrumbWithHome } from '@/components/common/Breadcrumb';
import { TeamGrid } from '@/components/company';
import {
  Building2,
  Users,
  Calendar,
  Target,
  Award,
  TrendingUp,
  Mail,
  Factory,
  Ship,
  Cog,
  Waves,
  Construction,
  Droplets,
  Fuel,
  HardHat
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Companies & Leadership | RMU Group',
  description: 'Discover RMU Group&apos;s portfolio of 8 specialized companies and meet our leadership team driving innovation in mining technology, maritime services, manufacturing, and construction.',
};

// Company data structure
interface PortfolioCompany {
  id: string;
  name: string;
  shortName: string;
  industry: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  link?: string;
}

export default function CompanyPage() {
  const portfolioCompanies: PortfolioCompany[] = [
    {
      id: 'rmu',
      name: 'PT Rekayasa Mineral Utama',
      shortName: 'RMU',
      industry: 'Mining Technology',
      description: 'Leading provider of MPAL technology for sustainable mineral processing with 19 years of innovation.',
      icon: <Cog className="w-8 h-8" />,
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      id: 'pt-bnp',
      name: 'PT Bahana Nusa Pasifik',
      shortName: 'BNP',
      industry: 'Maritime Services',
      description: 'Trusted maritime transportation and logistics solutions with large fleet capacity (230-300 feet).',
      icon: <Ship className="w-8 h-8" />,
      gradient: 'from-primary-500 to-cyan-700',
    },
    {
      id: 'pt-prn',
      name: 'PT Perkakas Rekadaya Nusantara',
      shortName: 'PRN',
      industry: 'Manufacturing',
      description: 'Advanced tools and automotive parts manufacturing with ISO certification and 419+ skilled workforce.',
      icon: <Factory className="w-8 h-8" />,
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      id: 'gemilang',
      name: 'PT Gemilang Kharisma',
      shortName: 'GSJ',
      industry: 'Marine Operations',
      description: 'Sustainable marine sand mining operations in Batam waters with 400 Billion IDR in assets.',
      icon: <Waves className="w-8 h-8" />,
      gradient: 'from-cyan-600 to-primary-600',
    },
    {
      id: 'kembar',
      name: 'PT Kembar Jaya Abadi',
      shortName: 'PTK',
      industry: 'Construction',
      description: 'Building excellence with 31 years of proven experience in comprehensive construction services.',
      icon: <Building2 className="w-8 h-8" />,
      gradient: 'from-orange-600 to-red-700',
    },
    {
      id: 'bls',
      name: 'PT Bumi Lautan Samudera',
      shortName: 'BLS',
      industry: 'Marine Sediment Treatment',
      description: 'Marine sediment treatment and sea sand quarry operations with sustainable environmental practices.',
      icon: <Droplets className="w-8 h-8" />,
      gradient: 'from-teal-600 to-cyan-700',
    },
    {
      id: 'pog',
      name: 'PT Prosympac Oil and Gas',
      shortName: 'POG',
      industry: 'Oil & Gas Construction',
      description: 'Trusted national construction company specializing in oil and gas industry EPC services.',
      icon: <Fuel className="w-8 h-8" />,
      gradient: 'from-amber-600 to-orange-700',
    },
    {
      id: 'spk',
      name: 'PT Saba Prima Konstruksi',
      shortName: 'SPK',
      industry: 'Construction Services',
      description: 'Superior, innovative, and quality-oriented construction delivering modern infrastructure solutions.',
      icon: <HardHat className="w-8 h-8" />,
      gradient: 'from-slate-600 to-gray-800',
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-primary-700 to-blue-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 animate-fade-in">
            <BreadcrumbWithHome currentPage="Company" className="[&_a]:text-white/80 [&_a]:hover:text-white [&_span]:text-white/60 [&_svg]:text-white/60" />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm mb-6 px-4 py-2 rounded-full text-white text-sm font-medium animate-fade-in">
              <Building2 className="w-4 h-4" />
              About RMU Group
            </div>

            <h1 className="font-heading font-bold text-white text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in">
              Our Companies
            </h1>

            <p className="text-primary-100 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto animate-fade-in">
              A diversified portfolio of specialized companies delivering integrated solutions across mining technology, maritime services, manufacturing, and construction
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* About RMU Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-gray-900 text-4xl md:text-5xl mb-6">
                About <span className="text-gradient">RMU Group</span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
                Building a sustainable future through innovation, expertise, and integrated industrial excellence
              </p>
            </div>

            {/* Company Overview */}
            <div className="bg-gradient-to-br from-primary-50 to-cyan-50 rounded-3xl p-8 lg:p-12 mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading font-bold text-gray-900 text-2xl md:text-3xl mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    To be a leading integrated industrial group in Indonesia, pioneering sustainable mining technologies and delivering comprehensive industrial solutions that drive economic growth while protecting our environment.
                  </p>
                  <div className="flex items-start gap-3 text-gray-700">
                    <Target className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      We combine cutting-edge technology with decades of expertise to create value across multiple industrial sectors, supporting Indonesia&apos;s industrial growth and energy transition.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-gray-900 text-2xl md:text-3xl mb-4">
                    Our Mission
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Develop and deploy sustainable mining technologies that minimize environmental impact
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Provide integrated industrial solutions through our specialized portfolio companies
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Foster innovation and excellence in manufacturing, maritime, and construction services
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Create sustainable value for stakeholders while contributing to Indonesia&apos;s industrial development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white border-2 border-primary-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                  <Calendar className="w-6 h-6 text-primary-500" />
                </div>
                <div className="font-bold text-4xl text-gray-900 mb-2">19+</div>
                <div className="text-gray-600 font-medium">Years in Operation</div>
              </div>

              <div className="bg-white border-2 border-primary-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                  <Building2 className="w-6 h-6 text-primary-500" />
                </div>
                <div className="font-bold text-4xl text-gray-900 mb-2">8</div>
                <div className="text-gray-600 font-medium">Portfolio Companies</div>
              </div>

              <div className="bg-white border-2 border-primary-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                  <Users className="w-6 h-6 text-primary-500" />
                </div>
                <div className="font-bold text-4xl text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Total Employees</div>
              </div>

              <div className="bg-white border-2 border-primary-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-500" />
                </div>
                <div className="font-bold text-4xl text-gray-900 mb-2">5</div>
                <div className="text-gray-600 font-medium">Industries Served</div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="font-heading font-bold text-3xl mb-8 text-center">Our Core Values</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                    <Award className="w-8 h-8 text-blue-300" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Excellence</h4>
                  <p className="text-primary-200 text-sm">
                    Committed to the highest standards in every project
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                    <Target className="w-8 h-8 text-blue-300" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Innovation</h4>
                  <p className="text-primary-200 text-sm">
                    Pioneering technologies for sustainable solutions
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                    <Users className="w-8 h-8 text-blue-300" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Integrity</h4>
                  <p className="text-primary-200 text-sm">
                    Building trust through transparency and ethics
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-300" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Sustainability</h4>
                  <p className="text-primary-200 text-sm">
                    Balancing growth with environmental responsibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <TeamGrid
            showByCategory={true}
            title="Meet Our Leadership"
            subtitle="Real leaders driving innovation and excellence across RMU Group - 11 members total"
            columns={3}
          />
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8 bg-gray-50">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gray-50 px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Companies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-100 mb-4 px-4 py-2 rounded-full text-primary-700 text-sm font-medium">
              <Building2 className="w-4 h-4" />
              Portfolio Companies
            </div>
            <h2 className="font-heading font-bold text-gray-900 text-4xl md:text-5xl mb-6">
              Our <span className="text-gradient">Companies</span>
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
              Eight specialized companies working in synergy to deliver comprehensive industrial solutions
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {portfolioCompanies.map((company) => (
              <div
                key={company.id}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Company Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${company.gradient} rounded-2xl mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {company.icon}
                </div>

                {/* Company Short Name Badge */}
                <div className="mb-3">
                  <span className={`inline-block bg-gradient-to-r ${company.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {company.shortName}
                  </span>
                </div>

                {/* Company Name */}
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-2 leading-tight min-h-[3.5rem]">
                  {company.name}
                </h3>

                {/* Industry Tag */}
                <div className="mb-3">
                  <span className="text-primary-500 text-sm font-medium">
                    {company.industry}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {company.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-primary-500 font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary-50 to-cyan-50 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="font-heading font-bold text-gray-900 text-3xl mb-4">
                Interested in Partnering With Us?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Explore opportunities to collaborate with RMU Group&apos;s portfolio of specialized companies. Together, we can create innovative solutions for your business needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </a>
                <a
                  href="/#companies"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Building2 className="w-5 h-5" />
                  View Detailed Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
