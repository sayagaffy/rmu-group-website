"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Show tooltip after 3 seconds on first load
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Auto hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const message =
      "Hello RMU Group! I'm interested in learning more about your services. Could you please provide more information?";
    const phoneNumber = "6282122761331";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div className="right-6 bottom-24 z-50 fixed animate-fade-in">
          <div className="relative bg-white shadow-xl p-4 border border-gray-200 rounded-lg max-w-xs">
            <button
              onClick={() => setShowTooltip(false)}
              className="top-2 right-2 absolute text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="pr-6">
              <h4 className="mb-1 font-semibold text-gray-900">Need Help?</h4>
              <p className="mb-3 text-gray-600 text-sm">
                Chat with us on WhatsApp for quick responses about our mining
                technology and construction services.
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg w-full font-medium text-white text-sm transition-colors"
              >
                Start Chat
              </button>
            </div>
            {/* Arrow pointing to WhatsApp button */}
            <div className="right-8 -bottom-2 absolute bg-white border-gray-200 border-r border-b w-4 h-4 rotate-45"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="group right-6 bottom-6 z-40 fixed bg-green-500 hover:bg-green-600 shadow-lg p-4 rounded-full text-white hover:scale-110 transition-all animate-float duration-300"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />

        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 opacity-75 rounded-full animate-ping"></div>

        {/* Hover text */}
        <div className="top-1/2 right-full absolute bg-gray-900 opacity-0 group-hover:opacity-100 mr-3 px-3 py-2 rounded-lg font-medium text-white text-sm whitespace-nowrap transition-opacity -translate-y-1/2 transform">
          Chat with us on WhatsApp
          <div className="top-1/2 left-full absolute border-4 border-transparent border-l-gray-900 -translate-y-1/2 transform"></div>
        </div>
      </button>
    </>
  );
};

export default WhatsAppButton;
