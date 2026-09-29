"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Aperture, Eye, Disc, Sparkles, Sun, Maximize2 } from "lucide-react";

export default function OpticsSection() {
  const [selectedAperture, setSelectedAperture] = useState<number>(1.4);
  const [selectedLens, setSelectedLens] = useState<"wide" | "prime" | "tele">("prime");
  const [activeTab, setActiveTab] = useState<"optics" | "actionKey">("optics");

  const apertures = [
    { f: 1.4, label: "f/1.4", dof: "Super Shallow Bokeh", light: "100% Max Light", bokehRadius: 24 },
    { f: 2.0, label: "f/2.0", dof: "Classic Portrait Depth", light: "68% Light Intake", bokehRadius: 16 },
    { f: 2.8, label: "f/2.8", dof: "Balanced Documentary", light: "42% Light Intake", bokehRadius: 8 },
    { f: 4.0, label: "f/4.0", dof: "Edge-to-Edge Sharpness", light: "25% Studio Purity", bokehRadius: 2 },
  ];

  const lenses = [
    {
      id: "wide",
      name: "14mm Ultra-Wide",
      mp: "50 MP",
      fov: "122°",
      sensor: "1/1.56″",
      features: "2.5cm Micro-Macro AF • Anti-Distortion Aspheric Glass",
    },
    {
      id: "prime",
      name: "24mm True Prime",
      mp: "50 MP",
      fov: "84°",
      sensor: "1.0″-Type Sony LYT-900",
      features: "6-Blade Physical Mechanical Iris • 5-Axis Sensor-Shift OIS",
    },
    {
      id: "tele",
      name: "85mm Periscope Macro",
      mp: "50 MP",
      fov: "28°",
      sensor: "1/2.0″",
      features: "3.5x–10x Stepless Optical Range • 120x Kinetic SuperRes",
    },
  ];

  const currentApertureData = apertures.find((a) => a.f === selectedAperture) || apertures[0];

  return (
    <section id="optics" className="py-24 bg-[#07090e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-400 mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>OPTICAL ENGINEERING & MECHANICAL IRIS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            True Optical Aperture. <br />
            <span className="text-zinc-400 font-normal">
              Real glass. Real blades. Real depth of field.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Computational blur cannot replace physical physics. Kinetic 1 incorporates a micro-machined
            6-blade mechanical iris directly in front of the 1-inch sensor, letting you control authentic optical depth of field with physical aperture blades.
          </p>
        </div>

        {/* Feature Focus Switcher */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab("optics")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === "optics"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            1.0″ Mechanical Iris Chamber
          </button>
          <button
            onClick={() => setActiveTab("actionKey")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === "actionKey"
                ? "bg-[#e28743] text-white shadow-lg shadow-[#e28743]/25"
                : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            Knurled Tactile Shutter Key
          </button>
        </div>

        {activeTab === "optics" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Lens Macro Visualization with interactive iris diaphragm */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#101522] to-[#080a10] shadow-2xl group">
              <Image
                src="/images/camera-lens.jpg"
                alt="QuickTouch Camera Lens Iris"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dynamic Aperture Blade Graphic Overlay */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center pointer-events-none">
                <div className="relative w-44 h-44 rounded-full border border-[#e28743]/40 flex items-center justify-center">
                  {/* Iris Hole */}
                  <div
                    className="rounded-full border-2 border-white/80 bg-blue-500/20 backdrop-blur-md shadow-2xl transition-all duration-300 flex items-center justify-center"
                    style={{
                      width: `${(1 / selectedAperture) * 110}px`,
                      height: `${(1 / selectedAperture) * 110}px`,
                      boxShadow: `0 0 ${currentApertureData.bokehRadius * 2}px rgba(59, 130, 246, 0.4)`,
                    }}
                  >
                    <span className="text-[11px] font-mono font-bold text-white drop-shadow">
                      {currentApertureData.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom live stats */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <Aperture className="w-4 h-4 text-[#e28743]" />
                  <span>Physical Blades: 6-Leaves Sintered Steel</span>
                </div>
                <span className="text-blue-400 font-semibold">{currentApertureData.dof}</span>
              </div>
            </div>

            {/* Right: Interactive Aperture & Lens Selection */}
            <div className="lg:col-span-6 space-y-6">
              {/* Stepped Aperture Selector */}
              <div className="p-6 rounded-2xl bg-[#0f141e]/80 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Mechanical Aperture Stop
                  </span>
                  <span className="text-xs font-mono text-blue-400 font-semibold">
                    {currentApertureData.light}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2.5 mb-6">
                  {apertures.map((ap) => (
                    <button
                      key={ap.f}
                      onClick={() => setSelectedAperture(ap.f)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedAperture === ap.f
                          ? "border-[#e28743] bg-[#e28743]/15 text-white shadow-lg shadow-[#e28743]/20"
                          : "border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      <div className="font-mono font-bold text-base">{ap.label}</div>
                      <div className="text-[10px] text-zinc-400 mt-1 line-clamp-1">
                        {ap.f === 1.4 ? "Bokeh" : ap.f === 4.0 ? "Sharp" : "Balanced"}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Focal Length Trio */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    Triple Focal Plane Array
                  </span>

                  {lenses.map((lens) => (
                    <button
                      key={lens.id}
                      onClick={() => setSelectedLens(lens.id as "wide" | "prime" | "tele")}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                        selectedLens === lens.id
                          ? "border-blue-500 bg-blue-500/10 shadow-md shadow-blue-500/15"
                          : "border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/5"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white text-sm">{lens.name}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-blue-300">
                            {lens.mp}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">{lens.features}</p>
                      </div>

                      <div className="text-right font-mono text-xs text-zinc-400 flex-shrink-0 pl-3">
                        <div className="text-white font-bold">{lens.fov}</div>
                        <div className="text-[10px] text-zinc-500">{lens.sensor}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Action Key Detail Tab */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#121622] to-[#090b10] shadow-2xl">
              <Image
                src="/images/tactile-edge.jpg"
                alt="Tactile Knurled Action Edge Button"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-[#0f141e]/80 border border-white/10 backdrop-blur-md space-y-4">
                <div className="flex items-center gap-2 text-[#e28743] font-mono text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>KNURLED TITANIUM DUAL-STAGE TRIGGER</span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  A physical camera button with continuous touch track.
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  Located on the right titanium chassis rail, the textured knurled action key is not just a button.
                  It combines a dual-stage micro-switch with a high-resolution capacitive touch strip.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs font-mono">
                    <span className="text-white font-semibold">Stage 1 (Half-Press):</span>
                    <span className="text-zinc-400 ml-2">Locks AE/AF focus with a 120Hz micro-haptic notch.</span>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs font-mono">
                    <span className="text-white font-semibold">Stage 2 (Full-Press):</span>
                    <span className="text-zinc-400 ml-2">Trips mechanical shutter snap & zero-lag 50MP RAW burst.</span>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs font-mono">
                    <span className="text-white font-semibold">Glide Gesture (Swipe):</span>
                    <span className="text-zinc-400 ml-2">Smooth ratcheting zoom or manual exposure compensation.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
