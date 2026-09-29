"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ArrowRight, Sparkles, Check, ShieldCheck, Zap, Camera, Battery } from "lucide-react";

interface HeroSectionProps {
  onOpenBuyModal: () => void;
}

export default function HeroSection({ onOpenBuyModal }: HeroSectionProps) {
  const [selectedColor, setSelectedColor] = useState<string>("natural");
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const colors = [
    {
      id: "natural",
      name: "Natural Titanium",
      hex: "#9a958e",
      bgClass: "from-zinc-800 to-zinc-950",
      img: "/images/hero-phone.jpg",
    },
    {
      id: "desert",
      name: "Desert Gold",
      hex: "#c5a083",
      bgClass: "from-amber-950 to-zinc-950",
      img: "/images/camera-lens.jpg",
    },
    {
      id: "white",
      name: "White Titanium",
      hex: "#e8e7e3",
      bgClass: "from-slate-800 to-zinc-950",
      img: "/images/hero-phone.jpg",
    },
    {
      id: "black",
      name: "Black Titanium",
      hex: "#222326",
      bgClass: "from-zinc-900 to-black",
      img: "/images/tactile-edge.jpg",
    },
  ];

  const currentColor = colors.find((c) => c.id === selectedColor) || colors[0];

  return (
    <section id="overview" className="relative pt-12 pb-24 overflow-hidden bg-gradient-to-b from-[#07080b] via-[#0c0e14] to-[#07080b]">
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Sub-headline / Brand */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300 mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>The New Flagship Standard</span>
          <span className="text-zinc-500">•</span>
          <span className="text-blue-400">Available Now</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4">
          QuickTouch 16 Pro
        </h1>
        <p className="text-xl sm:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500 max-w-3xl mx-auto mb-8">
          Titanium. So strong. So light. So Pro.
        </p>

        {/* Buy & Pricing info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenBuyModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Buy from $999</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setVideoModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-base backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-current text-blue-400" />
            <span>Watch the Film</span>
          </button>
        </div>

        <p className="text-xs text-zinc-400 mb-8">
          From $41.62/mo. for 24 mo. or $999 before eligible trade-in.
        </p>

        {/* Interactive Center Phone Showcase */}
        <div className="relative max-w-3xl mx-auto mb-10">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#141722] to-[#08090d] shadow-2xl p-4 flex items-center justify-center group">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={currentColor.img}
                alt={`QuickTouch 16 Pro in ${currentColor.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover group-hover:scale-105 transition-all duration-700"
                priority
              />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-4 left-4 sm:left-6 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-left">
                <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider block">
                  CHASSIS FINISH
                </span>
                <span className="text-sm font-semibold text-white">
                  {currentColor.name}
                </span>
              </div>
            </div>
          </div>

          {/* Color Selector Pills */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs font-medium text-zinc-400">Available Finishes:</span>
            <div className="flex items-center gap-3 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  title={color.name}
                  className={`w-7 h-7 rounded-full transition-all relative flex items-center justify-center ${
                    selectedColor === color.id
                      ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-black scale-110"
                      : "hover:scale-105 opacity-80"
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  {selectedColor === color.id && (
                    <Check className={`w-3.5 h-3.5 ${color.id === "white" ? "text-black" : "text-white"}`} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Feature Highlights Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-6">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-left hover:bg-white/[0.06] transition-colors">
            <Zap className="w-5 h-5 text-amber-400 mb-2" />
            <div className="text-sm font-bold text-white">A18 Pro Chip</div>
            <p className="text-xs text-zinc-400 mt-1">
              Unmatched 3nm efficiency with 6-core GPU.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-left hover:bg-white/[0.06] transition-colors">
            <Camera className="w-5 h-5 text-blue-400 mb-2" />
            <div className="text-sm font-bold text-white">48MP Fusion Pro</div>
            <p className="text-xs text-zinc-400 mt-1">
              Next-gen optical sensors with 5x Telephoto.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-left hover:bg-white/[0.06] transition-colors">
            <Battery className="w-5 h-5 text-emerald-400 mb-2" />
            <div className="text-sm font-bold text-white">Up to 33h Battery</div>
            <p className="text-xs text-zinc-400 mt-1">
              All-day power with 25W MagSafe charging.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-left hover:bg-white/[0.06] transition-colors">
            <ShieldCheck className="w-5 h-5 text-purple-400 mb-2" />
            <div className="text-sm font-bold text-white">Aerospace Titanium</div>
            <p className="text-xs text-zinc-400 mt-1">
              Lightest Pro model with Ceramic Shield.
            </p>
          </div>
        </div>
      </div>

      {/* Simulated Keynote Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#0f121a] border border-white/20 p-6 shadow-2xl text-center">
            <div className="aspect-video w-full rounded-2xl bg-black flex flex-col items-center justify-center relative overflow-hidden border border-white/10">
              <Image
                src="/images/hero-phone.jpg"
                alt="Video thumbnail"
                fill
                className="object-cover opacity-40"
              />
              <div className="relative z-10 space-y-3">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h4 className="text-xl font-bold text-white">Introducing QuickTouch 16 Pro</h4>
                <p className="text-xs text-zinc-300">Engineering Film • 4K Dolby Atmos</p>
              </div>
            </div>

            <button
              onClick={() => setVideoModalOpen(false)}
              className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
            >
              Close Video
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
