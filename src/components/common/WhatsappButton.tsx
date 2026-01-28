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
        <div className="right-6 bottom-24 z-50 fixed animate-fade-in-up origin-bottom-right">
          <div className="relative glass-panel p-5 rounded-2xl max-w-xs shadow-soft-2xl border border-white/40 backdrop-blur-xl">
            <button
              onClick={() => setShowTooltip(false)}
              className="top-3 right-3 absolute text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="pr-2">
              <h4 className="mb-2 font-bold text-slate-900 text-lg">Need Help?</h4>
              <p className="mb-4 text-slate-600 text-sm leading-relaxed text-balance">
                Chat with us on WhatsApp for quick responses about our mining
                technology and construction services.
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-[#25D366] hover:bg-[#128C7E] px-4 py-3 rounded-xl w-full font-bold text-white text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </button>
            </div>
            {/* Arrow pointing to WhatsApp button */}
            {/* Replaced CSS arrow with specific shape or just remove it for cleaner float look. I'll utilize a small svg or transform. */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 border-r border-b border-white/20"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="group right-6 bottom-6 z-40 fixed bg-[#25D366] hover:bg-[#128C7E] shadow-lg shadow-green-900/20 p-4 rounded-2xl text-white hover:scale-110 transition-all animate-float duration-300 ring-2 ring-white/50"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-2xl animate-ping opacity-20"></div>

        {/* Hover text */}
        <div className="top-1/2 right-full absolute bg-slate-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 mr-4 px-4 py-2 rounded-xl font-medium text-white text-sm whitespace-nowrap transition-all -translate-y-1/2 translate-x-4 group-hover:translate-x-0 shadow-xl">
          Chat with us
          <div className="top-1/2 left-full absolute border-4 border-transparent border-l-slate-900/90 -translate-y-1/2 transform"></div>
        </div>
      </button>
    </>
  );
};

export default WhatsAppButton;
