"use client";

import React, { useState } from "react";
import {
  Play,
  X,
  ArrowRight,
  Star,
  Award,
  Users,
  Globe,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // YouTube video ID - ganti dengan video ID yang sesuai
  const youtubeVideoId = "dQw4w9WgXcQ"; // Contoh ID - ganti dengan video RMU Group

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const achievements = [
    { number: "5", label: "Companies", icon: <Globe className="w-5 h-5" /> },
    {
      number: "19+",
      label: "Years Experience",
      icon: <Award className="w-5 h-5" />,
    },
    { number: "500+", label: "Employees", icon: <Users className="w-5 h-5" /> },
    { number: "50+", label: "Hectares", icon: <Star className="w-5 h-5" /> },
  ];

  return (
    <>
      <section
        id="home"
        className="relative flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 pt-20 md:pt-0 min-h-screen overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10"></div>
          <div className="top-20 right-20 absolute bg-cyan-500 opacity-20 blur-xl rounded-full w-72 h-72 animate-blob mix-blend-multiply filter"></div>
          <div className="top-40 left-20 absolute bg-blue-500 opacity-20 blur-xl rounded-full w-72 h-72 animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
          <div className="bottom-20 left-1/2 absolute bg-purple-500 opacity-20 blur-xl rounded-full w-72 h-72 animate-blob animation-delay-4000 mix-blend-multiply filter"></div>
        </div>

        <div className="z-10 relative container-custom">
          <div className="items-center gap-12 grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full font-medium text-sm">
                  <Star className="w-4 h-4 text-cyan-400" />
                  <span>Leading Indonesian Industrial Group</span>
                </div>

                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight">
                  RMU Group
                  <span className="block bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 text-transparent">
                    Excellence
                  </span>
                </h1>

                <p className="max-w-2xl text-blue-100 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  Advanced Mining Technology, Maritime Transportation,
                  Manufacturing Excellence, Marine Operations & Construction
                  Services
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "MPAL Technology",
                    "Maritime Services",
                    "Manufacturing",
                    "Marine Operations",
                    "Construction",
                  ].map((service, index) => (
                    <span
                      key={index}
                      className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full font-medium text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex sm:flex-row flex-col gap-4">
                <button
                  onClick={() => scrollToSection("companies")}
                  className="group flex justify-center items-center gap-3 bg-gradient-to-r from-cyan-500 hover:from-cyan-600 to-blue-600 hover:to-blue-700 shadow-xl hover:shadow-2xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white text-base sm:text-lg transition-all duration-300"
                  style={{ touchAction: "manipulation" }}
                >
                  <span>Explore Our Companies</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={openVideo}
                  className="group flex justify-center items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 border border-white/20 hover:border-white/30 rounded-lg font-semibold text-white text-base sm:text-lg transition-all duration-300"
                  style={{ touchAction: "manipulation" }}
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Watch Our Story</span>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 pt-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 rounded-xl text-center"
                  >
                    <div className="flex justify-center items-center mb-2 text-cyan-400">
                      {achievement.icon}
                    </div>
                    <div className="mb-1 font-bold text-2xl lg:text-3xl">
                      {achievement.number}
                    </div>
                    <div className="text-blue-200 text-sm">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Video Preview */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm p-8 border border-white/20 rounded-3xl">
                {/* Video Thumbnail */}
                <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl aspect-video overflow-hidden cursor-pointer">
                  <img
                    src="/images/rmu-video-thumbnail.jpg"
                    alt="RMU Group Overview Video"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Play Button */}
                  <div
                    className="z-10 absolute inset-0 flex justify-center items-center"
                    style={{ pointerEvents: "auto" }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openVideo();
                      }}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-6 border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 group-hover:scale-110 transition-all duration-300"
                      style={{
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        userSelect: "none",
                      }}
                      aria-label="Play video"
                    >
                      <Play className="fill-current ml-1 w-12 h-12 text-white" />
                    </button>
                  </div>

                  {/* Video Info */}
                  <div className="right-4 bottom-4 left-4 absolute pointer-events-none">
                    <h3 className="mb-1 font-semibold text-white text-lg">
                      RMU Group Company Overview
                    </h3>
                    <p className="text-white/80 text-sm">
                      Discover our integrated portfolio of excellence across 5
                      specialized companies
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3 mt-6">
                  {[
                    "Patented MPAL Technology",
                    "Maritime Transportation Excellence",
                    "Advanced Manufacturing Capabilities",
                    "Sustainable Operations Focus",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white"
                    >
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-cyan-400" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Cards */}
              <div className="-top-4 -right-4 absolute bg-gradient-to-r from-cyan-500 to-blue-600 shadow-xl p-4 rounded-xl text-white">
                <div className="text-center">
                  <div className="font-bold text-2xl">ESG</div>
                  <div className="text-xs">Compliant</div>
                </div>
              </div>

              <div className="-bottom-4 -left-4 absolute bg-gradient-to-r from-green-500 to-emerald-600 shadow-xl p-4 rounded-xl text-white">
                <div className="text-center">
                  <div className="font-bold text-2xl">ISO</div>
                  <div className="text-xs">Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="bottom-8 left-1/2 absolute -translate-x-1/2 transform">
            <button
              onClick={() => scrollToSection("about")}
              className="group flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <span className="font-medium text-sm">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/90 p-4"
          style={{ touchAction: "manipulation" }}
        >
          <div className="relative w-full max-w-6xl aspect-video">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeVideo();
              }}
              className="-top-12 right-0 z-10 absolute p-2 text-white hover:text-gray-300 transition-colors"
              style={{ touchAction: "manipulation" }}
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>

            {/* YouTube Iframe */}
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="RMU Group Company Overview"
              className="rounded-lg w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ pointerEvents: "auto" }}
            ></iframe>
          </div>

          {/* Click outside to close */}
          <div
            className="-z-10 absolute inset-0"
            onClick={(e) => {
              e.preventDefault();
              closeVideo();
            }}
            style={{ touchAction: "manipulation" }}
          ></div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default Hero;
