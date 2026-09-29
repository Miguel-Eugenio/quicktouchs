"use client";

import React, { useState } from "react";
import { Battery, Zap, Clock, ShieldCheck, PlayCircle, Music, Radio } from "lucide-react";

export default function BatteryMagSafe() {
  const [selectedModel, setSelectedModel] = useState<"pro" | "proMax">("proMax");

  const stats = {
    proMax: {
      model: "QuickTouch 16 Pro Max",
      video: 33,
      stream: 29,
      audio: 105,
      gain: "+4 hours longer than 15 Pro Max",
    },
    pro: {
      model: "QuickTouch 16 Pro",
      video: 27,
      stream: 22,
      audio: 85,
      gain: "+4 hours longer than 15 Pro",
    },
  };

  const active = stats[selectedModel];

  return (
    <section id="battery" className="py-24 bg-[#07080b] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <Battery className="w-3.5 h-3.5" />
            <span>ALL-DAY BATTERY LIFE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            A huge leap in battery life. <br />
            <span className="text-zinc-400 font-normal">Game on.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            An optimized internal design fits larger batteries, which work together with the A18 Pro chip to deliver huge boosts in battery life.
          </p>
        </div>

        {/* Model Switcher */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
            <button
              onClick={() => setSelectedModel("pro")}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedModel === "pro"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              QuickTouch 16 Pro
            </button>
            <button
              onClick={() => setSelectedModel("proMax")}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedModel === "proMax"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              QuickTouch 16 Pro Max
            </button>
          </div>
        </div>

        {/* Big Numbers Battery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="p-8 rounded-3xl bg-[#0f121a] border border-white/10 text-center hover:border-emerald-500/30 transition-all">
            <PlayCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <div className="text-4xl sm:text-6xl font-extrabold text-white mb-2">
              Up to {active.video}h
            </div>
            <div className="text-sm font-semibold text-zinc-300">Video Playback</div>
            <p className="text-xs text-zinc-500 mt-2">{active.gain}</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0f121a] border border-white/10 text-center hover:border-emerald-500/30 transition-all">
            <Radio className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-4xl sm:text-6xl font-extrabold text-white mb-2">
              Up to {active.stream}h
            </div>
            <div className="text-sm font-semibold text-zinc-300">Streamed Video</div>
            <p className="text-xs text-zinc-500 mt-2">Binge your favorite series on the go</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0f121a] border border-white/10 text-center hover:border-emerald-500/30 transition-all">
            <Music className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-4xl sm:text-6xl font-extrabold text-white mb-2">
              Up to {active.audio}h
            </div>
            <div className="text-sm font-semibold text-zinc-300">Audio Playback</div>
            <p className="text-xs text-zinc-500 mt-2">Non-stop lossless spatial audio</p>
          </div>
        </div>

        {/* MagSafe Fast Wireless Feature Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#0f121a] to-emerald-950/40 border border-white/10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>MagSafe Fast Charging</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Up to 50% charge in around 30 minutes.
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl">
              Snap on a MagSafe charger for faster wireless charging — up to 25W with a 30W power adapter or higher.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center flex-shrink-0">
            <div className="text-2xl font-bold text-emerald-400">25W MagSafe</div>
            <span className="text-xs text-zinc-400">Qi2 Wireless Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
