"use client";

import React, { useState } from "react";
import { Shield, Cpu, ThermometerSnowflake, BatteryCharging, Sparkles, Layers, CheckCircle2 } from "lucide-react";

export default function EngineeringDeepDive() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      id: 0,
      title: "Grade-5 Aerospace Titanium Skeleton",
      subtitle: "CNC-Milled Monocoque Core",
      icon: Shield,
      accent: "#e28743",
      stat: "2.4x Stronger",
      statLabel: "Yield Strength vs 6000-Al",
      details: [
        "Machined from solid Grade-5 Ti-6Al-4V aerospace billet via 5-axis high-speed CNC.",
        "Precision knurled tactile edge rails provide tactile reference grip without requiring a case.",
        "Laser-welded internal bulkheads provide torsional rigidity under extreme pressure.",
      ],
    },
    {
      id: 1,
      title: "4,800mm² 3D Liquid Vapor Chamber",
      subtitle: "Micro-Porous Capillary Thermal Loop",
      icon: ThermometerSnowflake,
      accent: "#38bdf8",
      stat: "-14°C Cooler",
      statLabel: "Under Sustained 120fps Load",
      details: [
        "Laser-sealed micro-porous copper sintered wick structure circulating pure deionized fluid.",
        "Multi-layer graphite thermal sheets bridge the Snapdragon 8 Gen 4 Extreme Edition chip directly to the chassis frame.",
        "Zero thermal throttling during prolonged 8K 60fps HDR ProRes recording and ray-traced gaming.",
      ],
    },
    {
      id: 2,
      title: "Dual Resonant Voice Coil Actuators",
      subtitle: "Biaxial Kinetic Feedback Architecture",
      icon: Sparkles,
      accent: "#a855f7",
      stat: "0.38 ms",
      statLabel: "Transient Rise Time",
      details: [
        "Twin neodymium-magnet voice coils mounted symmetrically at top and bottom chassis anchor points.",
        "Independent phase shifting enables localized left-right and top-bottom spatial touch guidance.",
        "Custom 32-bit DSP computes over 24,000 force calculations per second.",
      ],
    },
    {
      id: 3,
      title: "5,400mAh Silicon-Carbon High Density Cell",
      subtitle: "Next-Generation Solid Anode Battery",
      icon: BatteryCharging,
      accent: "#10b981",
      stat: "16 min",
      statLabel: "0 to 80% HyperTouch Charge",
      details: [
        "10% silicon anode formulation achieving 850 Wh/L volumetric energy density.",
        "120W HyperTouch wired flash charging and 50W MagTouch wireless charging.",
        "Active BMS cell temperature balancing maintains over 88% capacity after 1,600 full charge cycles.",
      ],
    },
  ];

  const current = layers[activeLayer];
  const IconComponent = current.icon;

  return (
    <section id="engineering" className="py-24 bg-[#080b11] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 mb-4">
            <Layers className="w-3.5 h-3.5 text-[#e28743]" />
            <span>STRUCTURAL ANATOMY & THERMALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Milled from Aerospace Billet. <br />
            <span className="text-zinc-400 font-normal">
              Internal architecture engineered without compromise.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Every cubic millimeter inside Kinetic 1 is structurally allocated. From the CNC-sculpted Grade-5 titanium
            skeleton to the 3D vapor cooling loop, experience aerospace-grade density.
          </p>
        </div>

        {/* Interactive Layer Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Layer Navigation Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {layers.map((layer, index) => {
              const LayerIcon = layer.icon;
              const isActive = activeLayer === index;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isActive
                      ? "border-[#e28743] bg-[#e28743]/10 shadow-lg shadow-[#e28743]/10"
                      : "border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: isActive ? `${layer.accent}25` : "rgba(255,255,255,0.05)",
                        border: `1px solid ${isActive ? layer.accent : "rgba(255,255,255,0.1)"}`,
                      }}
                    >
                      <LayerIcon
                        className="w-5 h-5"
                        style={{ color: isActive ? layer.accent : "#9ca3af" }}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        LAYER 0{index + 1}
                      </div>
                      <div className="text-sm font-semibold text-white">{layer.title}</div>
                    </div>
                  </div>

                  <div className="text-right font-mono text-xs text-zinc-400 flex-shrink-0 pl-2">
                    <span className="text-white font-bold">{layer.stat}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Layer Detailed Blueprint Card */}
          <div className="lg:col-span-7 bg-[#0d121c] rounded-2xl border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Watermark */}
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-9xl font-bold font-mono text-white">
              0{activeLayer + 1}
            </div>

            {/* Header info */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: current.accent }}
                  />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    LAYER 0{activeLayer + 1} // ARCHITECTURAL SPECIFICATION
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {current.title}
                </h3>
                <p className="text-sm text-zinc-400 font-mono mt-1">{current.subtitle}</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center font-mono">
                <div className="text-lg font-bold text-white" style={{ color: current.accent }}>
                  {current.stat}
                </div>
                <div className="text-[10px] text-zinc-400 uppercase">{current.statLabel}</div>
              </div>
            </div>

            {/* Explanatory bullet points */}
            <div className="space-y-3.5 mb-8">
              {current.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: current.accent }}
                  />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Micro Specs readout bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-zinc-500 block text-[10px]">TOLERANCE</span>
                <span className="text-white font-semibold">±0.005 mm</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-zinc-500 block text-[10px]">ALLOY SPEC</span>
                <span className="text-white font-semibold">Ti-6Al-4V Grade-5</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-zinc-500 block text-[10px]">WATER / DUST</span>
                <span className="text-white font-semibold">IP68 (6m / 30min)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
