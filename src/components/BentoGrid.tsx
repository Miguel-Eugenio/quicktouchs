"use client";

import React, { useState } from "react";
import { Sparkles, Radio, Shield, Zap, Smartphone, Sliders, Wifi, Compass, Bell } from "lucide-react";

export default function BentoGrid() {
  const [selectedActionKey, setSelectedActionKey] = useState<string>("camera");

  const actionKeyOptions = [
    { id: "camera", label: "Camera Instant Snap", icon: "📸" },
    { id: "flash", label: "High-Beam Torch", icon: "🔦" },
    { id: "memo", label: "Voice Memos", icon: "🎙️" },
    { id: "focus", label: "Silent / Focus", icon: "🌙" },
    { id: "shortcut", label: "Custom Shortcut", icon: "⚡" },
  ];

  return (
    <section className="py-24 bg-[#0a0c12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DESIGN INNOVATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Designed to make a difference.
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Every millimeter refined. Every feature calibrated for the ultimate pro workflow.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Super Retina XDR ProMotion (Span 2) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-[#0f121a] border border-white/10 flex flex-col justify-between hover:border-blue-500/30 transition-all group">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                <Smartphone className="w-4 h-4" />
                <span>Super Retina XDR Display</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Thinnest borders on any smartphone.
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
                Available in 6.3-inch and 6.9-inch sizes. ProMotion technology ramps up refresh rates to 120Hz when you need exceptional graphics performance, and ramps down to 1Hz to save power.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 pt-4 border-t border-white/5 text-center">
              <div className="p-3 rounded-2xl bg-white/[0.03]">
                <div className="text-lg font-bold text-white">2,000 nits</div>
                <span className="text-[11px] text-zinc-400">Peak Outdoor Brightness</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03]">
                <div className="text-lg font-bold text-white">120 Hz</div>
                <span className="text-[11px] text-zinc-400">Adaptive ProMotion</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03]">
                <div className="text-lg font-bold text-white">Always-On</div>
                <span className="text-[11px] text-zinc-400">Glanceable StandBy</span>
              </div>
            </div>
          </div>

          {/* Card 2: Action Button Customizer (Span 2) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-[#0f121a] border border-white/10 flex flex-col justify-between hover:border-amber-500/30 transition-all">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                <Sliders className="w-4 h-4" />
                <span>Action Button</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Fast track to your favorite feature.
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                By default, the Action button switches between Ring and Silent. Choose an action and press and hold to launch it instantly.
              </p>
            </div>

            {/* Interactive Action Key Simulator */}
            <div className="mt-6 space-y-3">
              <span className="text-xs font-semibold text-zinc-400">Tap to test an action:</span>
              <div className="flex flex-wrap gap-2">
                {actionKeyOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedActionKey(opt.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      selectedActionKey === opt.id
                        ? "bg-amber-500 text-black font-bold scale-105 shadow-md shadow-amber-500/20"
                        : "bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <span>{opt.icon}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Dynamic Island */}
          <div className="md:col-span-2 lg:col-span-2 p-8 rounded-3xl bg-[#0f121a] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                <Bell className="w-4 h-4" />
                <span>Dynamic Island</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Bubbles up alerts and Live Activities.
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Never miss your next turn, flight gate change, food delivery countdown, or incoming calls while using other apps.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-black border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
                <span className="text-xs font-semibold text-white">Flight UA482 • Gate B12</span>
              </div>
              <span className="text-xs font-bold text-emerald-400">Boarding in 12m</span>
            </div>
          </div>

          {/* Card 4: USB 3 & Connectivity */}
          <div className="md:col-span-1 lg:col-span-1 p-8 rounded-3xl bg-[#0f121a] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">USB 3 Speeds</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Transfer speeds up to 10Gb/s. Record 4K 120 fps ProRes video directly to an external SSD.
              </p>
            </div>
            <div className="mt-4 text-xs font-mono font-bold text-blue-400">Up to 20x Faster</div>
          </div>

          {/* Card 5: Satellite Safety & SOS */}
          <div className="md:col-span-1 lg:col-span-1 p-8 rounded-3xl bg-[#0f121a] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Radio className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Emergency SOS</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Crash Detection and Satellite Messaging keep you connected even when off the grid.
              </p>
            </div>
            <div className="mt-4 text-xs font-mono font-bold text-emerald-400">Peace of Mind</div>
          </div>
        </div>
      </div>
    </section>
  );
}
