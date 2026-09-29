"use client";

import React from "react";
import Image from "next/image";
import { Check, Smartphone, Camera, Battery, Cpu, ShieldCheck } from "lucide-react";

interface ModelComparisonProps {
  onSelectModel: (modelName: "pro" | "proMax") => void;
}

export default function ModelComparison({ onSelectModel }: ModelComparisonProps) {
  return (
    <section id="compare" className="py-24 bg-[#07080b] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Which Pro is right for you?
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Compare screen sizes, battery life, and capabilities.
          </p>
        </div>

        {/* 2 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pro Card */}
          <div className="p-8 rounded-3xl bg-[#0f121a] border border-white/10 flex flex-col justify-between hover:border-blue-500/40 transition-all text-center">
            <div>
              <div className="relative aspect-[4/3] w-48 mx-auto mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-phone.jpg"
                  alt="QuickTouch 16 Pro"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-white">QuickTouch 16 Pro</h3>
              <p className="text-xs text-zinc-400 mt-1">The ultimate powerhouse in a compact size.</p>

              <div className="text-2xl font-extrabold text-white mt-4">
                From $999
              </div>
              <p className="text-xs text-zinc-500">or $41.62/mo. for 24 mo.</p>

              <button
                onClick={() => onSelectModel("pro")}
                className="w-full mt-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/20"
              >
                Buy 16 Pro
              </button>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-4 text-left text-xs">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">6.3″ Super Retina XDR</span>
                    <span className="text-zinc-400">ProMotion 120Hz, Always-On</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">A18 Pro Silicon</span>
                    <span className="text-zinc-400">6-core CPU, 6-core GPU, 16-core NPU</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Camera className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Pro Camera Array</span>
                    <span className="text-zinc-400">48MP Fusion • 48MP Ultra Wide • 5x Tele</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Battery className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Up to 27 hrs Video</span>
                    <span className="text-zinc-400">25W MagSafe Fast Wireless</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Max Card */}
          <div className="p-8 rounded-3xl bg-[#0f121a] border border-blue-500/30 flex flex-col justify-between hover:border-blue-500 transition-all text-center relative shadow-2xl">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-[11px] font-bold text-white uppercase tracking-wider shadow-md">
              Most Popular
            </div>

            <div>
              <div className="relative aspect-[4/3] w-56 mx-auto mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-phone.jpg"
                  alt="QuickTouch 16 Pro Max"
                  fill
                  className="object-cover scale-105"
                />
              </div>

              <h3 className="text-2xl font-bold text-white">QuickTouch 16 Pro Max</h3>
              <p className="text-xs text-zinc-400 mt-1">Our largest display and longest battery life ever.</p>

              <div className="text-2xl font-extrabold text-white mt-4">
                From $1,199
              </div>
              <p className="text-xs text-zinc-500">or $49.95/mo. for 24 mo.</p>

              <button
                onClick={() => onSelectModel("proMax")}
                className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-500/30"
              >
                Buy 16 Pro Max
              </button>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-4 text-left text-xs">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">6.9″ Super Retina XDR</span>
                    <span className="text-zinc-400">Largest Pro display ever built</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">A18 Pro Silicon</span>
                    <span className="text-zinc-400">Enhanced vapor chamber cooling</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Camera className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Pro Camera Array</span>
                    <span className="text-zinc-400">48MP Fusion • 48MP Ultra Wide • 5x Tele</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Battery className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Up to 33 hrs Video</span>
                    <span className="text-zinc-400">Best battery life of any smartphone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
