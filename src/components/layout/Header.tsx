"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", type: "route" },
    { name: "Mining", href: "/mining", type: "route" },
    { name: "Processing", href: "/processing", type: "route" },
    { name: "ESG & Carbon", href: "/esg-carbon", type: "route" },
    { name: "Company", href: "/company", type: "route" },
    { name: "Contact", href: "#contact", type: "anchor" },
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

  const isActive = (item: { href: string; type: string }) => {
    if (item.type === "route") {
      if (item.href === "/") {
        return pathname === "/";
      }
      return pathname.startsWith(item.href);
    }
    return false;
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
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo-rmu.png" // Path ke logo di folder public
                alt="RMU Group Logo" // Teks alternatif untuk aksesibilitas
                width={120} // Sesuaikan lebar logo
                height={67} // Sesuaikan tinggi logo
                className="rounded-lg" // Tambahkan styling jika perlu
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-primary-500 border-b-2 ${
                    isActive(item)
                      ? "border-primary-500 text-primary-500"
                      : isScrolled
                      ? "text-gray-700 border-transparent"
                      : "text-white hover:text-primary-200 border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors hover:text-primary-500 ${
                    isScrolled
                      ? "text-gray-700"
                      : "text-white hover:text-primary-200"
                  }`}
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div
              className={`text-sm ${
                isScrolled ? "text-gray-600" : "text-primary-100"
              }`}
            >
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>+62 21 22761331</span>
              </div>
            </div>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg font-medium text-white transition-colors"
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
              {navItems.map((item) =>
                item.type === "route" ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 w-full font-medium text-left transition-colors rounded-lg px-3 ${
                      isActive(item)
                        ? "text-primary-500 bg-primary-50"
                        : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block hover:bg-gray-50 px-3 py-2 rounded-lg w-full font-medium text-gray-700 hover:text-primary-500 text-left transition-colors"
                  >
                    {item.name}
                  </button>
                )
              )}

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
                  className="bg-primary-500 hover:bg-primary-600 py-3 rounded-lg w-full font-medium text-white transition-colors"
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
