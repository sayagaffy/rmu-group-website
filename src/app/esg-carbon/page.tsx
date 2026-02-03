import CarbonCreditOpportunities from '@/components/esg/CarbonCreditOpportunities';
import ESGHero from '@/components/esg/ESGHero';
import ESGPillars from '@/components/esg/ESGPillars';
import VisionRoadmap from '@/components/esg/VisionRoadmap';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { esgContent } from '@/data/esg';
import { Metadata } from 'next';

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
    </main>
  );
}
