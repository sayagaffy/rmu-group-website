"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Company", href: "/company" },
    { name: "Mining", href: "/mining" },
    { name: "Processing", href: "/processing" },
    { name: "ESG & Carbon", href: "/esg-carbon" },
  ];

  const companies = [
    "PT Rekayasa Mineral Utama",
    "PT Bahana Nusa Pasifik",
    "PT Perkakas Rekadaya Nusantara",
    "PT Gemilang Kharisma",
    "PT Kembar Jaya Abadi",
    "PT Bumi Lautan Samudera",
    "PT Prosympac Oil and Gas",
    "PT Saba Prima Konstruksi",
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="relative">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Company Info - Left */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <Image
                  src="/logo-rmu.png"
                  alt="RMU Group"
                  width={160}
                  height={89}
                  className="h-auto brightness-110"
                />
              </div>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                Leading provider of advanced mining technology and sustainable mineral processing solutions for Indonesia&apos;s development.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+622122761331"
                  className="flex items-start gap-3 text-slate-400 hover:text-primary-400 transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+62 21 22761331</span>
                </a>
                <a
                  href="mailto:info@rekayasamineralutama.com"
                  className="flex items-start gap-3 text-slate-400 hover:text-primary-400 transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">info@rekayasamineralutama.com</span>
                </a>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-500" />
                  <span className="text-sm">JL. TB Simatupang Kav. 36, RT.001/RW015<br />Jakarta Selatan 12430, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Navigation - Center */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                Navigation
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></span>
              </h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-500 flex items-center justify-center transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-500 flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-500 flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-500 flex items-center justify-center transition-all hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Our Companies - Right */}
            <div className="lg:col-span-5">
              <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                Our Portfolio
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {companies.map((company, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"></span>
                    <span>{company}</span>
                  </div>
                ))}
              </div>

              {/* Company count badge */}
              <div className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/10 to-cyan-500/10 border border-primary-500/20 rounded-full px-5 py-2.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-cyan-600 flex items-center justify-center">
                  <span className="text-2xl font-bold">8</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Integrated Companies</div>
                  <div className="text-slate-400 text-xs">Powering Indonesia&apos;s Future</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © {currentYear} RMU Group. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="#" className="text-slate-500 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-500 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-500 hover:text-primary-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* ESG Badge */}
            <div className="mt-6 pt-6 border-t border-slate-800/50 text-center">
              <p className="text-slate-500 text-xs max-w-4xl mx-auto">
                Committed to Environmental, Social, and Governance (ESG) excellence •
                Sustainable mining technology • Responsible operations • Green practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
