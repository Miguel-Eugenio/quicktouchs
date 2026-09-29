"use client";

import React, { useState } from "react";
import { Cpu, Smartphone, Sliders, Moon, Sparkles, Zap, Radio, Check } from "lucide-react";

export default function QuickOSSection() {
  const [activeScreen, setActiveScreen] = useState<"camera" | "minimal" | "audio">("camera");

  return (
    <section id="quickos" className="py-24 bg-[#07090f] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>QUICKOS 1.0 KINETIC SOFTWARE LAYER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Software that feels alive. <br />
            <span className="text-zinc-400 font-normal">
              Zero-latency interface mapped to physical resistance.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            QuickOS transforms every on-screen element into a physical object with mass, momentum, and elasticity.
            When you scroll, swipe, or toggle, the UI pushes back with tailored kinetic resistance.
          </p>
        </div>

        {/* Interactive OS Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Feature Navigator */}
          <div className="lg:col-span-6 space-y-4">
            <button
              onClick={() => setActiveScreen("camera")}
              className={`w-full text-left p-5 rounded-2xl border transition-all ${
                activeScreen === "camera"
                  ? "border-[#e28743] bg-[#e28743]/10 shadow-lg shadow-[#e28743]/10"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Kinetic Camera Viewfinder</h4>
                    <span className="text-xs font-mono text-zinc-400">Tactile exposure dial & manual iris feedback</span>
                  </div>
                </div>
                {activeScreen === "camera" && <Check className="w-4 h-4 text-[#e28743]" />}
              </div>
              <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                Rotational haptic detents simulate physical camera gear teeth while zooming or manually tweaking ISO, shutter speed, and f-stops.
              </p>
            </button>

            <button
              onClick={() => setActiveScreen("minimal")}
              className={`w-full text-left p-5 rounded-2xl border transition-all ${
                activeScreen === "minimal"
                  ? "border-[#e28743] bg-[#e28743]/10 shadow-lg shadow-[#e28743]/10"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Monochrome Zen Sanctuary</h4>
                    <span className="text-xs font-mono text-zinc-400">Zero-distraction high-contrast OLED launcher</span>
                  </div>
                </div>
                {activeScreen === "minimal" && <Check className="w-4 h-4 text-[#e28743]" />}
              </div>
              <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                Reclaim your attention. Strips out casino-like badge notifications in favor of pure typography and quiet, tactile task management.
              </p>
            </button>

            <button
              onClick={() => setActiveScreen("audio")}
              className={`w-full text-left p-5 rounded-2xl border transition-all ${
                activeScreen === "audio"
                  ? "border-[#e28743] bg-[#e28743]/10 shadow-lg shadow-[#e28743]/10"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Physical Sound & Volume Wheel</h4>
                    <span className="text-xs font-mono text-zinc-400">Lossless 32-bit quad DAC playback studio</span>
                  </div>
                </div>
                {activeScreen === "audio" && <Check className="w-4 h-4 text-[#e28743]" />}
              </div>
              <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                Rotational audio fader with stepped haptic notch feel, supporting Hi-Res Wireless LDAC and lossless physical 3.5mm optical adapter.
              </p>
            </button>
          </div>

          {/* Right Phone Frame Screen Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[320px] aspect-[9/19] rounded-[42px] p-3.5 bg-gradient-to-b from-[#242c3b] via-[#10141c] to-[#07090e] border-[3px] border-[#384357] shadow-2xl relative shadow-black/80">
              {/* Dynamic Island / Punch Hole */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black border border-white/10 z-30 flex items-center justify-between px-2 text-[9px] font-mono text-zinc-400">
                <div className="w-2 h-2 rounded-full bg-blue-500/80" />
                <span className="text-emerald-400">0.4ms</span>
              </div>

              {/* Simulated Screen Inner Container */}
              <div className="w-full h-full rounded-[32px] overflow-hidden bg-black p-4 flex flex-col justify-between relative border border-white/5 pt-10">
                {/* Screen 1: Camera UI */}
                {activeScreen === "camera" && (
                  <div className="h-full flex flex-col justify-between text-white font-mono">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400">
                      <span>RAW 50MP</span>
                      <span className="text-amber-400">f/1.4 IRIS</span>
                      <span>ISO 100</span>
                    </div>

                    <div className="my-auto text-center py-10 relative">
                      <div className="w-32 h-32 mx-auto rounded-full border border-dashed border-white/30 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border border-blue-400/50 flex items-center justify-center text-xs text-blue-300 animate-pulse">
                          AF LOCK
                        </div>
                      </div>
                      <div className="text-[10px] text-zinc-500 mt-3">Tactile Shutter Ready</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-around text-xs bg-white/10 p-2 rounded-xl">
                        <span className="text-zinc-400">14mm</span>
                        <span className="text-[#e28743] font-bold">24mm 1.0″</span>
                        <span className="text-zinc-400">85mm</span>
                      </div>
                      <div className="w-12 h-12 mx-auto rounded-full bg-white border-4 border-zinc-800 flex items-center justify-center shadow-lg" />
                    </div>
                  </div>
                )}

                {/* Screen 2: Minimal Zen UI */}
                {activeScreen === "minimal" && (
                  <div className="h-full flex flex-col justify-between text-white">
                    <div>
                      <div className="text-3xl font-light tracking-tight mb-1">09:41</div>
                      <div className="text-xs font-mono text-zinc-500">TUE, SEPT 29 • 24°C</div>
                    </div>

                    <div className="space-y-4 my-auto">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-sm font-medium">Capture Thoughts</span>
                        <span className="text-xs font-mono text-zinc-500">Instant</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-sm font-medium">Kinetic Compass</span>
                        <span className="text-xs font-mono text-zinc-500">312° NW</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-sm font-medium">Field Audio Recorder</span>
                        <span className="text-xs font-mono text-zinc-500">32-Bit</span>
                      </div>
                    </div>

                    <div className="text-center text-[10px] font-mono text-zinc-500">
                      ZEN SHIELD ACTIVE
                    </div>
                  </div>
                )}

                {/* Screen 3: Audio Master UI */}
                {activeScreen === "audio" && (
                  <div className="h-full flex flex-col justify-between text-white font-mono">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400">
                      <span>HI-RES MASTER</span>
                      <span className="text-purple-400">192kHz/24bit</span>
                    </div>

                    <div className="my-auto text-center py-6">
                      <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-purple-900 to-indigo-950 border border-purple-500/40 flex items-center justify-center p-3 shadow-xl">
                        <Radio className="w-8 h-8 text-purple-300 animate-pulse" />
                      </div>
                      <div className="mt-4 text-xs font-bold text-white">Resonance Protocol</div>
                      <div className="text-[10px] text-zinc-400">Lossless Master Stream</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] text-zinc-400">
                        <span>VOLUME GAIN</span>
                        <span className="text-white font-bold">+6.5 dB</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-[#e28743] w-3/4 rounded-full" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
