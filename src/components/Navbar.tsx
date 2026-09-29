"use client";

import React, { useState, useEffect } from "react";
import { Smartphone, ShoppingBag, Menu, X, ChevronRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBuyModal: () => void;
  cartCount?: number;
}

export default function Navbar({ onOpenBuyModal, cartCount = 0 }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Trade-in promo ticker */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-[12px] sm:text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        <span>Get $180–$800 in credit when you trade in iPhone 11 or higher.</span>
        <a href="#trade-in" className="underline font-semibold hover:text-blue-100 hidden sm:inline">
          See trade-in values
        </a>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0c10]/85 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
            : "bg-[#07080b]/60 backdrop-blur-md py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Smartphone className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-white text-lg">QuickTouch</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                16 Pro
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#camera" className="hover:text-white transition-colors">Camera</a>
            <a href="#performance" className="hover:text-white transition-colors">Chip & Gaming</a>
            <a href="#battery" className="hover:text-white transition-colors">Battery</a>
            <a href="#trade-in" className="hover:text-white transition-colors">Trade In</a>
            <a href="#compare" className="hover:text-white transition-colors">Compare</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBuyModal}
              className="cursor-pointer px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Buy Now</span>
              <span className="hidden sm:inline text-blue-200">from $999</span>
              {cartCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-white text-blue-600 text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0f14] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-zinc-200 hover:bg-white/5"
            >
              Overview
            </a>
            <a
              href="#camera"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-zinc-200 hover:bg-white/5"
            >
              Camera System
            </a>
            <a
              href="#performance"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-zinc-200 hover:bg-white/5"
            >
              A18 Pro Performance
            </a>
            <a
              href="#battery"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-zinc-200 hover:bg-white/5"
            >
              Battery & MagSafe
            </a>
            <a
              href="#trade-in"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-zinc-200 hover:bg-white/5"
            >
              Trade-in Value Calculator
            </a>
            <a
              href="#compare"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-zinc-200 hover:bg-white/5"
            >
              Compare Models
            </a>
          </div>
        )}
      </header>
    </>
  );
}
