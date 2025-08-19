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
    "PT Bahana Nusa Pasifik",
    "PT Perkakas Rekadaya Nusantara",
    "PT Gemilang Kharisma",
    "PT Kembar Jaya Abadi",
  ];

  const services = [
    "MPAL Technology",
    "Maritime Transportation",
    "Manufacturing Excellence",
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
                  Integrated Industrial Excellence
                </p>
              </div>
            </div>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Leading provider of advanced mining technology, maritime
              transportation, manufacturing excellence, marine operations, and
              comprehensive construction services with sustainable ESG-based
              principles for Indonesia&apos;s development.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Globe className="w-5 h-5" />
              <span>www.rekayasamineralutama.com</span>
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
                <li key={index} className="text-gray-300 text-sm">
                  {company}
                </li>
              ))}
            </ul>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 mt-6 px-4 py-2 rounded-lg text-white text-center">
              <div className="font-bold text-lg">5</div>
              <div className="text-xs">Integrated Companies</div>
            </div>
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

      {/* Bottom Footer */}
      <div className="border-gray-800 border-t">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} RMU Group. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          {/* ESG Commitment */}
          <div className="mt-6 pt-6 border-gray-800 border-t">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Committed to Environmental, Social, and Governance (ESG)
                excellence • Sustainable mining technology • Responsible
                maritime operations • Green manufacturing practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
