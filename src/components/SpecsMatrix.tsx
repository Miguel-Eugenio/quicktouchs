"use client";

import React, { useState } from "react";
import { Sliders, Cpu, Smartphone, Camera, BatteryCharging, Shield, Wifi, Volume2, ChevronDown } from "lucide-react";

export default function SpecsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Full Overview" },
    { id: "chassis", label: "Chassis & Build" },
    { id: "display", label: "Ceramic OLED" },
    { id: "performance", label: "Compute & DSP" },
    { id: "camera", label: "Optics Array" },
    { id: "battery", label: "Power & Charge" },
  ];

  const specGroups = [
    {
      category: "chassis",
      title: "Chassis & Materiality",
      icon: Shield,
      specs: [
        { label: "Frame Material", value: "Grade-5 Titanium (Ti-6Al-4V) 5-Axis CNC Milled" },
        { label: "Back Glass", value: "Sintered Nano-Ceramic Shield with Matte Velvet Etch" },
        { label: "Dimensions", value: "161.4 mm × 75.8 mm × 8.15 mm" },
        { label: "Weight", value: "198 grams (Ultralight Titanium Monocoque)" },
        { label: "Environmental Rating", value: "IP68 Submersible (6 meters for up to 45 minutes)" },
        { label: "Physical Tactile Key", value: "Knurled Dual-Stage Shutter + Capacitive Slide Strip" },
      ],
    },
    {
      category: "display",
      title: "Display & Touch Surface",
      icon: Smartphone,
      specs: [
        { label: "Panel Architecture", value: "6.78-inch LTPO 4.0 Super Ceramic AMOLED" },
        { label: "Resolution", value: "2800 × 1260 pixels (452 ppi) with 10-bit DCI-P3" },
        { label: "Dynamic Refresh Rate", value: "1 Hz to 165 Hz Stepless Variable VRR" },
        { label: "Peak Luminance", value: "3,500 nits HDR Peak / 1,600 nits Outdoor Sustained" },
        { label: "Touch Polling Rate", value: "2,000 Hz Sub-Millisecond Instant Response" },
        { label: "Eye Comfort PWM", value: "3,840 Hz Ultra-High Frequency Zero-Flicker Dimming" },
      ],
    },
    {
      category: "performance",
      title: "Compute, Memory & Tactile DSP",
      icon: Cpu,
      specs: [
        { label: "Processor", value: "Snapdragon 8 Gen 4 Extreme Edition (3nm TSMC N3E)" },
        { label: "Tactile Co-Processor", value: "QuickTouch DSP 3.0 (24,000 samples/sec Force Engine)" },
        { label: "Memory (RAM)", value: "12 GB / 16 GB / 24 GB LPDDR5X (9,600 Mbps)" },
        { label: "Storage", value: "256 GB / 512 GB / 1 TB UFS 4.1 Dual-Channel" },
        { label: "Cooling Solution", value: "4,800 mm² 3D Liquid Vapor Chamber + Graphite Matrix" },
      ],
    },
    {
      category: "camera",
      title: "Optics & Mechanical Iris",
      icon: Camera,
      specs: [
        { label: "Main Prime Sensor", value: "50 MP 1.0-inch Sony LYT-900 (1.6μm / 3.2μm 4-in-1)" },
        { label: "Mechanical Aperture", value: "f/1.4 to f/4.0 Physical 6-Blade Stepped Iris" },
        { label: "Optical Stabilization", value: "5-Axis Sensor-Shift OIS + Dual Gyro Stabilizer" },
        { label: "Ultra-Wide Angle", value: "50 MP 14mm f/2.0 (122° FOV, 2.5cm Macro AF)" },
        { label: "Periscope Telephoto", value: "50 MP 85mm f/2.6 (3.5x–10x Stepless Optical, 120x Zoom)" },
        { label: "Video Capabilities", value: "8K 60fps 10-bit HDR ProRes / 4K 120fps Kinetic Slow-Mo" },
      ],
    },
    {
      category: "battery",
      title: "Battery & Fast Charging",
      icon: BatteryCharging,
      specs: [
        { label: "Battery Capacity", value: "5,400 mAh Silicon-Carbon High-Density Anode" },
        { label: "HyperTouch Wired", value: "120W Flash Charge (0–80% in 16 minutes)" },
        { label: "MagTouch Wireless", value: "50W Magnetic Induction Wireless Charging" },
        { label: "Reverse Wireless", value: "15W Reverse Qi2 Power Sharing for Earbuds & Watch" },
        { label: "Cycle Durability", value: "88%+ Capacity Retained After 1,600 Full Cycles" },
      ],
    },
  ];

  const filteredGroups =
    activeCategory === "all"
      ? specGroups
      : specGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="specs" className="py-24 bg-[#080a10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 mb-3">
              <Sliders className="w-3.5 h-3.5 text-[#e28743]" />
              <span>DETAILED SPECIFICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Hardware Matrix & Precision Numbers
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#e28743] text-white shadow-md shadow-[#e28743]/20"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Spec Tables */}
        <div className="space-y-8">
          {filteredGroups.map((group, gIdx) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={gIdx}
                className="rounded-2xl bg-[#0c1017] border border-white/10 overflow-hidden shadow-xl"
              >
                <div className="p-4 sm:p-5 bg-white/[0.02] border-b border-white/10 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#e28743]/10 text-[#e28743] border border-[#e28743]/20">
                    <GroupIcon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-white text-base">{group.title}</h3>
                </div>

                <div className="divide-y divide-white/5">
                  {group.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        {spec.label}
                      </span>
                      <span className="text-sm font-medium text-white sm:text-right font-mono">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
