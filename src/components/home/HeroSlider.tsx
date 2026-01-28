'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/Button";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
  type?: 'image' | 'video';
  videoUrl?: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoplay?: boolean;
  interval?: number;
}

export default function HeroSlider({
  slides,
  autoplay = true,
  interval = 5000
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-rotation logic
  useEffect(() => {
    if (!autoplay || isPaused || isModalOpen) return;

    // Don't auto-rotate if current slide is video (optional, but good UX? 
    // Actually user wants it as a slider, so maybe it should still rotate? 
    // Use case: "slider ini isinya video". Usually video headers loop.
    // If it's a slider, usually we pause on video or let it play background.
    // Given the prompt "slider utama... isinya video", I assume it's like a background video slide.

    // Safety check for slides validity
    if (!slides || slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, isPaused, isModalOpen, slides.length]);

  // Handlers
  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <div
      className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden"
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Removed mode="wait" to prevent white flash/blank state during rapid transitions or loop-back */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Media */}
          {slides[currentSlide]?.type === 'video' && slides[currentSlide]?.videoUrl ? (
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <iframe
                src={slides[currentSlide].videoUrl}
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ pointerEvents: 'none' }}
              />
            </div>
          ) : (
            <Image
              src={slides[currentSlide]?.image || ''}
              alt={slides[currentSlide]?.title || 'Slide'}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              quality={90}
            />
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl lg:text-2xl text-gray-200 mt-4"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {slides[currentSlide].cta && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-8 flex justify-center gap-4"
                >
                  {slides[currentSlide].type === 'video' ? (
                    <Button
                      variant="accent"
                      size="lg"
                      onClick={() => setIsModalOpen(true)}
                    >
                      {slides[currentSlide].cta!.text}
                    </Button>
                  ) : (
                    <Link href={slides[currentSlide].cta!.link}>
                      <Button variant="accent" size="lg">
                        {slides[currentSlide].cta!.text}
                      </Button>
                    </Link>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && slides[currentSlide].type === 'video' && slides[currentSlide].videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-50 text-white hover:text-yellow-500 transition-colors bg-black/50 rounded-full p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={slides[currentSlide].videoUrl?.replace('mute=1', 'mute=0')}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors duration-200 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors duration-200 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
