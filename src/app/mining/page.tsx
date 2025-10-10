import { Metadata } from 'next';
import { miningContent } from '@/data/mining';
import MiningHero from '@/components/mining/MiningHero';
import MiningIntro from '@/components/mining/MiningIntro';
import StrategicRegions from '@/components/mining/StrategicRegions';
import MiningStats from '@/components/mining/MiningStats';
import SustainabilityInitiatives from '@/components/mining/SustainabilityInitiatives';

export const metadata: Metadata = {
  title: 'Mining Operations | RMU Group',
  description: 'Sustainable nickel mining operations across strategic regions in Indonesia, powering the global EV revolution.',
};

export default function MiningPage() {
  return (
    <main className="min-h-screen">
      <MiningHero
        title={miningContent.hero.title}
        subtitle={miningContent.hero.subtitle}
        image={miningContent.hero.image}
      />

      <MiningIntro
        title={miningContent.introduction.title}
        description={miningContent.introduction.description}
        highlights={miningContent.introduction.highlights}
      />

      <StrategicRegions
        title={miningContent.strategic.title}
        description={miningContent.strategic.description}
        regions={miningContent.strategic.regions}
      />

      <MiningStats
        title={miningContent.stats.title}
        metrics={miningContent.stats.metrics}
      />

      <SustainabilityInitiatives
        title={miningContent.sustainability.title}
        description={miningContent.sustainability.description}
        initiatives={miningContent.sustainability.initiatives}
      />
    </main>
  );
}
