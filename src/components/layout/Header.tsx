"use client";

import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-soft h-16 lg:h-20"
          : "bg-transparent h-20 lg:h-24"
        }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo-rmu.png"
                alt="RMU Group Logo"
                width={isScrolled ? 100 : 120}
                height={isScrolled ? 56 : 67}
                className="transition-all duration-500"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(item)
                      ? isScrolled
                        ? "bg-primary/10 text-primary"
                        : "bg-white/20 text-white backdrop-blur-sm"
                      : isScrolled
                        ? "text-slate-600 hover:text-primary hover:bg-slate-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isScrolled
                      ? "text-slate-600 hover:text-primary hover:bg-slate-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+622122761331"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:scale-105 ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"
                }`}
            >
              <Phone className="w-4 h-4" />
              <span>+62 21 22761331</span>
            </a>
            {/* We'll use a standard button here but styled to match context because we can't easily import the custom Button without changing imports above */}
            <button
              onClick={() => scrollToSection("#contact")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 ${isScrolled
                  ? "bg-primary text-white hover:bg-primary-600"
                  : "bg-white text-primary hover:bg-primary-50"
                }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "hover:bg-slate-100" : "hover:bg-white/10"
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"
                  }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"
                  }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col pt-24 px-6 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
            }`}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-bold py-2 border-b border-gray-100 ${isActive(item)
                      ? "text-primary"
                      : "text-slate-600 hover:text-primary"
                    }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl font-bold py-2 text-left text-slate-600 hover:text-primary border-b border-gray-100"
                >
                  {item.name}
                </button>
              )
            )}

            <div className="pt-8 space-y-4">
              <a
                href="tel:+622122761331"
                className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-lg font-medium">+62 21 22761331</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-lg font-medium">info@rekayasamineralutama.com</span>
              </div>
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full mt-4 bg-primary text-white py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/20"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
