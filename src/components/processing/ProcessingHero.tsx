'use client';

import Image from 'next/image';

interface ProcessingHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function ProcessingHero({ title, subtitle, image }: ProcessingHeroProps) {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
      {/* Background - temporary gradient if image not available */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 to-blue-700">
        {/* Uncomment when image available:
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        */}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mt-4">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
