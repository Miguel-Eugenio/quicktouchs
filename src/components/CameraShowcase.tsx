"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Aperture, Video, Sparkles, Sliders, Maximize2, Zap } from "lucide-react";

export default function CameraShowcase() {
  const [zoomLevel, setZoomLevel] = useState<string>("1x");

  const zoomOptions = [
    {
      id: "0.5x",
      label: "0.5x",
      focal: "13 mm",
      name: "48MP Ultra Wide",
      desc: "Super-sharp macro photography and expansive 120° landscape capture.",
      img: "/images/camera-lens.jpg",
    },
    {
      id: "1x",
      label: "1x",
      focal: "24 mm",
      name: "48MP Fusion Main",
      desc: "Second-generation sensor-shift OIS with 24MP and 48MP super-high-res photos.",
      img: "/images/hero-phone.jpg",
    },
    {
      id: "2x",
      label: "2x",
      focal: "48 mm",
      name: "2x Optical Telephoto",
      desc: "Pixel-binned optical clarity tailored for documentary portraits and street scenes.",
      img: "/images/tactile-edge.jpg",
    },
    {
      id: "5x",
      label: "5x",
      focal: "120 mm",
      name: "5x Tetraprism Telephoto",
      desc: "Longest optical zoom ever on QuickTouch, bringing distant action right up close.",
      img: "/images/camera-lens.jpg",
    },
  ];

  const currentZoom = zoomOptions.find((z) => z.id === zoomLevel) || zoomOptions[1];

  return (
    <section id="camera" className="py-24 bg-[#0a0c12] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>PRO CAMERA SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            48MP Fusion. 5x Telephoto. <br />
            <span className="text-zinc-400 font-normal">
              A studio in your pocket.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            From monumental landscapes to micro details, the new camera system gives you seven pro lenses in one device with our most advanced sensor array yet.
          </p>
        </div>

        {/* Interactive Lens & Zoom Simulator */}
        <div className="bg-[#0f121a] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Viewfinder Preview */}
            <div className="lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/10 group">
              <Image
                src={currentZoom.img}
                alt={currentZoom.name}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover group-hover:scale-105 transition-all duration-500"
              />

              {/* Viewfinder HUD Overlays */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>4K 120 FPS DOLBY VISION</span>
              </div>

              {/* Interactive Zoom Selector Dial */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/75 backdrop-blur-xl p-1.5 rounded-full border border-white/20 shadow-2xl">
                {zoomOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setZoomLevel(opt.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      zoomLevel === opt.id
                        ? "bg-blue-600 text-white scale-105 shadow-md shadow-blue-500/30"
                        : "text-zinc-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Focal Specs Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase text-blue-400 tracking-wider mb-1">
                  {currentZoom.focal} EQUIVALENT
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentZoom.name}
                </h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  {currentZoom.desc}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Sensor Technology</span>
                  <span className="text-xs font-semibold text-white">2.44μm Quad-Pixel Sensor</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Optical Stabilization</span>
                  <span className="text-xs font-semibold text-white">2nd-Gen Sensor Shift OIS</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Focus System</span>
                  <span className="text-xs font-semibold text-white">100% Focus Pixels + LiDAR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Feature Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Camera Control Key */}
          <div className="p-8 rounded-3xl bg-[#0f121a] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Sliders className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Camera Control</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Take the perfect shot in record time. A sapphire crystal tactile key with force sensor allows you to swipe to adjust zoom, exposure, or depth of field effortlessly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-blue-400">
              <Zap className="w-4 h-4" />
              <span>Click to Launch • Slide to Zoom • Press to Snap</span>
            </div>
          </div>

          {/* Card 2: 4K 120 fps Cinematic Video */}
          <div className="p-8 rounded-3xl bg-[#0f121a] border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">4K 120 fps Dolby Vision</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Record cinematic master footage with the highest resolution and frame rate combination ever seen in a smartphone. Edit frame by frame with Studio Mics audio mixing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-purple-400">
              <Sparkles className="w-4 h-4" />
              <span>Cinematic Slow-Mo • Spatial Audio Recording</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
