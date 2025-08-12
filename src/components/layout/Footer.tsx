"use client";

import React from "react";
import { Globe, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Companies", href: "#companies" },
    { name: "Technology", href: "#technology" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const companies = [
    "PT Rekayasa Mineral Utama",
    "PT Gemilang Kharisma",
    "PT Kembar Jaya Abadi",
    "Subsidiary Companies",
  ];

  const services = [
    "MPAL Technology",
    "Marine Sand Mining",
    "Construction Services",
    "Engineering Solutions",
    "ESG Compliance",
    "Project Management",
  ];

  const scrollToSection = (href: string) => {
    if (typeof window !== "undefined") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        <div className="gap-8 grid lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex justify-center items-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg w-10 h-10">
                <span className="font-bold text-white text-xl">R</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl">RMU Group</h3>
                <p className="text-gray-400 text-sm">
                  Mining Technology Excellence
                </p>
              </div>
            </div>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Leading provider of advanced mining technology and comprehensive
              construction services with sustainable ESG-based principles for
              Indonesia&apos;s development.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Globe className="w-5 h-5" />
              <span>www.rmineral.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ArrowRight className="opacity-0 group-hover:opacity-100 w-4 h-4 transition-opacity" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h4 className="mb-6 font-semibold text-lg">Our Companies</h4>
            <ul className="space-y-3">
              {companies.map((company, index) => (
                <li key={index} className="text-gray-300">
                  {company}
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Contact */}
          <div>
            <h4 className="mb-6 font-semibold text-lg">Services</h4>
            <ul className="space-y-2 mb-8">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>

            <div className="space-y-3 text-sm">
              <h5 className="font-semibold text-white">Contact Info</h5>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="flex-shrink-0 w-4 h-4" />
                <span>JL. TB Simatupang Kav. 36, Jakarta Selatan 12430</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+62 21 22761331</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@rekayasamineralutama.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
