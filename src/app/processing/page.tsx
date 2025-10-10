import { Metadata } from 'next';
import { processingContent } from '@/data/processing';
import ProcessingHero from '@/components/processing/ProcessingHero';
import MPALTechnology from '@/components/processing/MPALTechnology';
import TechnologyFeatures from '@/components/processing/TechnologyFeatures';
import ProcessingBenefits from '@/components/processing/ProcessingBenefits';
import ProcessingProducts from '@/components/processing/ProcessingProducts';

export const metadata: Metadata = {
  title: 'Advanced Processing | RMU Group',
  description: 'Innovative MPAL processing technology for high-purity nickel products, powering the electric vehicle revolution.',
};

export default function ProcessingPage() {
  return (
    <main className="min-h-screen">
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
    </main>
  );
}
