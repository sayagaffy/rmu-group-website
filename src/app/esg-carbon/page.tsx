import { Metadata } from 'next';
import { esgContent } from '@/data/esg';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsappButton';
import ESGHero from '@/components/esg/ESGHero';
import ESGPillars from '@/components/esg/ESGPillars';
import CarbonCreditOpportunities from '@/components/esg/CarbonCreditOpportunities';
import VisionRoadmap from '@/components/esg/VisionRoadmap';

export const metadata: Metadata = {
  title: 'ESG & Carbon Credit | RMU Group',
  description: 'Building a sustainable future through comprehensive ESG initiatives and carbon credit opportunities.',
};

export default function ESGPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      <ESGHero
        title={esgContent.hero.title}
        subtitle={esgContent.hero.subtitle}
        image={esgContent.hero.image}
      />

      <ESGPillars
        title={esgContent.pillars.title}
        items={esgContent.pillars.items}
      />

      <CarbonCreditOpportunities
        title={esgContent.carbonCredit.title}
        description={esgContent.carbonCredit.description}
        opportunities={esgContent.carbonCredit.opportunities}
      />

      <VisionRoadmap
        title={esgContent.vision.title}
        description={esgContent.vision.description}
        image={esgContent.vision.image}
        roadmap={esgContent.vision.roadmap}
      />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
