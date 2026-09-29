"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check, ShieldCheck, Truck, Sparkles, ShoppingBag, ArrowRight, RotateCcw } from "lucide-react";

interface ConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderSuccess: (orderData: {
    finish: string;
    tier: string;
    price: number;
    engraving: string;
  }) => void;
}

export default function ConfiguratorModal({
  isOpen,
  onClose,
  onOrderSuccess,
}: ConfiguratorModalProps) {
  const [selectedFinish, setSelectedFinish] = useState<string>("obsidian");
  const [selectedTier, setSelectedTier] = useState<string>("512gb");
  const [engravingText, setEngravingText] = useState<string>("QUICKTOUCH • LABS");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const finishes = [
    {
      id: "obsidian",
      name: "Obsidian Slate",
      color: "#181b22",
      badge: "Deep PVD Titanium",
      img: "/images/hero-phone.jpg",
    },
    {
      id: "raw",
      name: "Raw Milled Titanium",
      color: "#5c6575",
      badge: "Bead-Blasted Satin",
      img: "/images/tactile-edge.jpg",
    },
    {
      id: "copper",
      name: "Solar Copper Edition",
      color: "#994d1c",
      badge: "Milled Copper Rings",
      img: "/images/camera-lens.jpg",
    },
    {
      id: "ceramic",
      name: "Ceramic Lunar White",
      color: "#d9e2ec",
      badge: "Sintered Zirconia",
      img: "/images/hero-phone.jpg",
    },
  ];

  const tiers = [
    {
      id: "256gb",
      ram: "12 GB LPDDR5X",
      storage: "256 GB UFS 4.1",
      price: 1099,
      badge: "Standard",
    },
    {
      id: "512gb",
      ram: "16 GB LPDDR5X",
      storage: "512 GB UFS 4.1",
      price: 1249,
      badge: "Recommended",
      popular: true,
    },
    {
      id: "1tb",
      ram: "24 GB LPDDR5X",
      storage: "1 TB Dual-Stream",
      price: 1449,
      badge: "Pro Collector",
    },
  ];

  const currentFinish = finishes.find((f) => f.id === selectedFinish) || finishes[0];
  const currentTier = tiers.find((t) => t.id === selectedTier) || tiers[1];

  const handleCompleteOrder = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderConfirmed(true);
      onOrderSuccess({
        finish: currentFinish.name,
        tier: `${currentTier.ram} / ${currentTier.storage}`,
        price: currentTier.price,
        engraving: engravingText,
      });
    }, 1000);
  };

  const handleResetModal = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0b0e15] border border-white/15 shadow-2xl overflow-hidden my-8">
        {/* Header Close Bar */}
        <div className="p-5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#e28743] animate-pulse" />
            <h3 className="font-bold text-white text-lg tracking-tight">
              Kinetic 1 Bespoke Configurator
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderConfirmed ? (
          /* Confirmation State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#e28743]">
                RESERVATION CONFIRMED • BATCH 01 ALLOCATION #4829
              </span>
              <h4 className="text-3xl font-bold text-white mt-2">
                Your Kinetic 1 is being prepared.
              </h4>
              <p className="text-sm text-zinc-400 mt-2 max-w-lg mx-auto leading-relaxed">
                Thank you for reserving the world’s first tactile-first smartphone. You will receive an official production dispatch email with your titanium serial certificate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#10141e] border border-white/10 max-w-md mx-auto text-left font-mono text-xs space-y-2">
              <div className="flex justify-between text-zinc-400">
                <span>Model:</span>
                <span className="text-white font-bold">QuickTouch Kinetic 1</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Chassis Finish:</span>
                <span className="text-white">{currentFinish.name}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Memory / Storage:</span>
                <span className="text-white">{currentTier.ram} / {currentTier.storage}</span>
              </div>
              {engravingText && (
                <div className="flex justify-between text-zinc-400">
                  <span>Titanium Inscription:</span>
                  <span className="text-[#e28743] font-bold">{engravingText}</span>
                </div>
              )}
              <div className="pt-2 border-t border-white/10 flex justify-between text-sm">
                <span className="text-zinc-300">Total Price:</span>
                <span className="text-emerald-400 font-bold font-mono">${currentTier.price}</span>
              </div>
            </div>

            <button
              onClick={handleResetModal}
              className="px-8 py-3.5 rounded-xl bg-[#e28743] text-white font-semibold text-sm hover:scale-105 transition-transform"
            >
              Done & Return to Showcase
            </button>
          </div>
        ) : (
          /* Configuration Steps Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left Preview Pane */}
            <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-[#080a0f]">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40 p-2 mb-4">
                <Image
                  src={currentFinish.img}
                  alt={currentFinish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover rounded-xl"
                />

                {/* Laser Engraving Preview Tag */}
                {engravingText && (
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-2 rounded-lg border border-white/15 text-center">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block">
                      TITANIUM LASER ENGRAVING
                    </span>
                    <span className="text-xs font-mono font-bold text-[#e28743] tracking-widest uppercase">
                      {engravingText}
                    </span>
                  </div>
                )}
              </div>

              {/* In-box inclusions list */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 space-y-1.5 font-mono">
                <div className="text-zinc-200 font-semibold mb-1">INCLUDED IN BOX:</div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>120W GaN HyperTouch Charger</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Braided Copper 1.5m Type-C Cable</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CNC Titanium SIM Key & MagStrap</span>
                </div>
              </div>
            </div>

            {/* Right Configuration Controls */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Step 1: Finish */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  1. Select Titanium Finish
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {finishes.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFinish(f.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                        selectedFinish === f.id
                          ? "border-[#e28743] bg-[#e28743]/10"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div
                        className="w-5 h-5 rounded-full border border-white/30 flex-shrink-0"
                        style={{ backgroundColor: f.color }}
                      />
                      <div>
                        <div className="text-xs font-semibold text-white">{f.name}</div>
                        <div className="text-[10px] text-zinc-400">{f.badge}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Memory & Storage Tier */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  2. Performance & Storage Configuration
                </label>
                <div className="space-y-2.5">
                  {tiers.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTier(t.id)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                        selectedTier === t.id
                          ? "border-[#e28743] bg-[#e28743]/10 shadow-md shadow-[#e28743]/10"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white text-sm">{t.storage}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                            {t.ram}
                          </span>
                          {t.popular && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#e28743]/20 text-[#e28743] border border-[#e28743]/30">
                              MOST POPULAR
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="font-mono font-bold text-white text-base">
                        ${t.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Laser Engraving */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    3. Custom Laser Inscription (Complimentary)
                  </label>
                  <span className="text-[11px] font-mono text-zinc-500">
                    Max 20 Characters
                  </span>
                </div>
                <input
                  type="text"
                  maxLength={20}
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value.toUpperCase())}
                  placeholder="E.G. KINETIC • 0042"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-[#e28743] transition-colors uppercase"
                />
              </div>

              {/* Checkout Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-zinc-400">Total Price</span>
                  <div className="text-2xl font-bold font-mono text-white">
                    ${currentTier.price}
                  </div>
                </div>

                <button
                  disabled={isSubmitting}
                  onClick={handleCompleteOrder}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#e28743] to-[#c2621f] text-white font-semibold text-sm flex items-center gap-2 shadow-xl shadow-[#e28743]/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isSubmitting ? "Processing Reservation..." : "Confirm Reservation"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
