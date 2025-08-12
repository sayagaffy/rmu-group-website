"use client";

import React from "react";
import { ArrowRight, Play, Award, Globe, Users } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const openWhatsApp = () => {
    const message =
      "Hello RMU Group, I'm interested in learning more about your services.";
    const phoneNumber = "6282122761331";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    );
  };

  const stats = [
    {
      icon: <Award className="w-6 h-6" />,
      label: "Years Experience",
      value: "18+",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Projects Completed",
      value: "200+",
    },
    { icon: <Users className="w-6 h-6" />, label: "Expert Team", value: "50+" },
  ];

  return (
    <section
      id="home"
      className="relative flex justify-center items-center min-h-screen overflow-hidden"
    >
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="top-20 left-20 absolute bg-white blur-3xl rounded-full w-64 h-64 animate-float"></div>
        <div
          className="right-20 bottom-20 absolute bg-blue-300 blur-3xl rounded-full w-96 h-96 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="top-1/2 left-1/2 absolute bg-yellow-300 blur-3xl rounded-full w-80 h-80 -translate-x-1/2 -translate-y-1/2 animate-float transform"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md mb-8 px-6 py-2 border border-white/20 rounded-full">
            <div className="bg-green-400 rounded-full w-2 h-2 animate-pulse"></div>
            <span className="font-medium text-white/90 text-sm">
              Leading Mining Technology Provider
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 font-heading font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight">
            Advanced Mining Technology &{" "}
            <span className="bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent">
              Construction Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-8 max-w-5xl font-light text-blue-100 text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Converting minerals into metals using green pressurized
            hydrometallurgical process (MPAL) with sustainable ESG-based
            principles
          </p>

          {/* CTA Buttons */}
          <div className="flex sm:flex-row flex-col justify-center gap-4 mb-16">
            <button
              onClick={openWhatsApp}
              className="group flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-300 hover:shadow-xl px-8 py-4 rounded-xl font-semibold text-blue-900 hover:scale-105 transition-all duration-300"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection("#about")}
              className="group flex justify-center items-center gap-2 hover:bg-white backdrop-blur-sm px-8 py-4 border-2 border-white rounded-xl font-semibold text-white hover:text-blue-900 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>Learn More</span>
            </button>
          </div>

          {/* Stats */}
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-4xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-6 border border-white/20 rounded-2xl text-center hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-3 text-yellow-400">
                  {stat.icon}
                </div>
                <div className="mb-1 font-bold text-white text-3xl">
                  {stat.value}
                </div>
                <div className="font-medium text-blue-100 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="bottom-8 left-1/2 absolute -translate-x-1/2 animate-bounce transform">
        <button
          onClick={() => scrollToSection("#about")}
          className="text-white/70 hover:text-white transition-colors"
        >
          <div className="flex justify-center border-2 border-current rounded-full w-6 h-10">
            <div className="bg-current mt-2 rounded-full w-1 h-3 animate-pulse"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
