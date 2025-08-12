"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Companies", href: "#companies" },
    { name: "Technology", href: "#technology" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg w-10 h-10">
                <span className="font-bold text-white text-xl">R</span>
              </div>
              <div>
                <h1
                  className={`text-2xl font-heading font-bold transition-colors ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  RMU Group
                </h1>
                <p
                  className={`text-xs transition-colors ${
                    isScrolled ? "text-gray-600" : "text-blue-100"
                  }`}
                >
                  Mining Technology Excellence
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled
                    ? "text-gray-700"
                    : "text-white hover:text-blue-200"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div
              className={`text-sm ${
                isScrolled ? "text-gray-600" : "text-blue-100"
              }`}
            >
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>+62 21 22761331</span>
              </div>
            </div>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-white transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden hover:bg-gray-100/10 p-2 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-gray-200 border-t">
            <div className="space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block py-2 w-full font-medium text-gray-700 hover:text-blue-600 text-left transition-colors"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 border-gray-200 border-t">
                <div className="flex items-center gap-2 mb-3 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+62 21 22761331</span>
                </div>
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@rekayasamineralutama.com</span>
                </div>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg w-full font-medium text-white transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
