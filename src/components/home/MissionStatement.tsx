'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

interface MissionStatementProps {
  text: string;
  background: string;
}

export default function MissionStatement({ text, background }: MissionStatementProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Function to highlight keywords
  const highlightKeywords = (text: string) => {
    const keywords = [
      'transform', 'raw energy', 'lasting power', 'batteries',
      'drive progress', 'sustainability', 'human potential'
    ];

    let highlighted = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      highlighted = highlighted.replace(
        regex,
        '<span class="text-yellow-400 font-extrabold">$1</span>'
      );
    });

    return highlighted;
  };

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <Image
          src={background}
          alt="Mission background"
          fill
          className="object-cover"
          priority={false}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-relaxed tracking-wide"
          dangerouslySetInnerHTML={{ __html: highlightKeywords(text) }}
        />
      </div>
    </section>
  );
}
