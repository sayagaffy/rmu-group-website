import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MPALTechnology from '@/components/processing/MPALTechnology';
import ProcessingBenefits from '@/components/processing/ProcessingBenefits';
import ProcessingHero from '@/components/processing/ProcessingHero';
import ProcessingProducts from '@/components/processing/ProcessingProducts';
import TechnologyFeatures from '@/components/processing/TechnologyFeatures';
import { processingContent } from '@/data/processing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advanced Processing | RMU Group',
  description: 'Innovative MPAL processing technology for high-purity nickel products, powering the electric vehicle revolution.',
};

export default function ProcessingPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      <ProcessingHero
        title={processingContent.hero.title}
        subtitle={processingContent.hero.subtitle}
        image={processingContent.hero.image}
      />

      <MPALTechnology
        title={processingContent.mpalTechnology.title}
        description={processingContent.mpalTechnology.description}
        process={processingContent.mpalTechnology.process}
      />

      <TechnologyFeatures
        title={processingContent.features.title}
        items={processingContent.features.items}
      />

      <ProcessingBenefits
        title={processingContent.benefits.title}
        environmental={processingContent.benefits.environmental}
        economic={processingContent.benefits.economic}
        technical={processingContent.benefits.technical}
      />

      <ProcessingProducts
        title={processingContent.products.title}
        description={processingContent.products.description}
        items={processingContent.products.items}
      />

      <Footer />
    </main>
  );
}
