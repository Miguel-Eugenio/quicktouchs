"use client";

import React, { useState, useEffect, useRef } from "react";
import { Zap, Activity, Volume2, VolumeX, Sliders, Play, RotateCcw, Cpu, Sparkles } from "lucide-react";

interface HapticPreset {
  id: string;
  name: string;
  desc: string;
  freq: number; // Hz
  force: number; // G-force
  decay: number; // ms
  category: string;
  type: "sine" | "triangle" | "square";
}

export default function HapticsLab() {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [activePreset, setActivePreset] = useState<string>("machined");
  const [freq, setFreq] = useState<number>(180);
  const [force, setForce] = useState<number>(2.4);
  const [decay, setDecay] = useState<number>(18);
  const [isImpulsing, setIsImpulsing] = useState(false);
  const [impulseCount, setImpulseCount] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const waveStateRef = useRef({ phase: 0, amp: 0, targetAmp: 0 });

  const presets: HapticPreset[] = [
    {
      id: "machined",
      name: "Machined Click",
      desc: "Ultra-crisp 180Hz transient for precision UI selections and toggles.",
      freq: 180,
      force: 2.2,
      decay: 14,
      category: "UI Interaction",
      type: "triangle",
    },
    {
      id: "hydraulic",
      name: "Hydraulic Detent",
      desc: "Deep 55Hz sub-bass impulse with heavy physical weight for locks & security.",
      freq: 55,
      force: 3.1,
      decay: 42,
      category: "System Action",
      type: "sine",
    },
    {
      id: "rotary",
      name: "Precision Ratchet",
      desc: "Rapid sequential 260Hz micro-notches mimicking a Swiss watch bezel.",
      freq: 260,
      force: 1.6,
      decay: 8,
      category: "Scroll & Dial",
      type: "square",
    },
    {
      id: "shutter",
      name: "Mechanical Shutter",
      desc: "Two-stage recoil duplicating a physical leaf shutter curtain release.",
      freq: 120,
      force: 2.8,
      decay: 28,
      category: "Optics Capture",
      type: "triangle",
    },
  ];

  // Synthesize realistic haptic acoustic transient via Web Audio API
  const playHapticAcoustic = (f: number, dur: number, intensity: number) => {
    if (!audioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = f < 80 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(f, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(f * 0.4, ctx.currentTime + dur / 1000);

      const peakGain = Math.min(0.25, (intensity / 3.5) * 0.2);
      gain.gain.setValueAtTime(peakGain, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur / 1000);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + dur / 1000);
    } catch {
      // Audio not permitted or supported in background
    }
  };

  const triggerImpulse = (customFreq = freq, customForce = force, customDecay = decay) => {
    setIsImpulsing(true);
    setImpulseCount((c) => c + 1);
    waveStateRef.current.targetAmp = customForce;
    waveStateRef.current.amp = customForce;

    playHapticAcoustic(customFreq, customDecay, customForce);

    setTimeout(() => {
      setIsImpulsing(false);
    }, customDecay + 50);
  };

  const selectPreset = (p: HapticPreset) => {
    setActivePreset(p.id);
    setFreq(p.freq);
    setForce(p.force);
    setDecay(p.decay);
    triggerImpulse(p.freq, p.force, p.decay);
  };

  // Canvas oscilloscope loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let running = true;

    const render = () => {
      if (!running) return;
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.fillStyle = "#0c1017";
      ctx.fillRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center baseline
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Animate wave damping
      waveStateRef.current.amp += (0 - waveStateRef.current.amp) * 0.04;
      waveStateRef.current.phase += 0.15;

      const currentAmp = waveStateRef.current.amp;

      // Draw waveform
      ctx.beginPath();
      ctx.strokeStyle = currentAmp > 0.2 ? "#e28743" : "#3a4a60";
      ctx.lineWidth = currentAmp > 0.2 ? 2.5 : 1.5;

      for (let x = 0; x < width; x++) {
        const normalizedX = x / width;
        // Damped harmonic oscillator envelope
        const envelope = Math.exp(-normalizedX * (decay / 8));
        const wavelength = (freq / 1000) * 80;
        const wave = Math.sin(normalizedX * wavelength * Math.PI * 2 + waveStateRef.current.phase);
        
        const y = centerY - (wave * envelope * (currentAmp * 28));
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Glowing pulse head if active
      if (currentAmp > 0.3) {
        ctx.shadowColor = "#e28743";
        ctx.shadowBlur = 12;
      } else {
        ctx.shadowBlur = 0;
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      running = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [freq, force, decay]);

  return (
    <section id="haptics" className="py-24 bg-[#090c12] border-t border-b border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#e28743]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e28743]/10 border border-[#e28743]/30 text-xs font-mono text-[#e28743] mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>KINETIC RESONANCE LAB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Dual Linear Resonators. <br />
            <span className="text-zinc-400 font-normal">
              Not a vibrating motor. A physical tactile engine.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Conventional phone buzzers produce muddy, delayed vibrations. Kinetic 1 utilizes dual balanced
            electromagnetic actuators calibrated to a 45Hz–320Hz dynamic spectrum with a sub-0.4 millisecond acceleration threshold.
          </p>
        </div>

        {/* Interactive Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Presets Selection */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Tactile Calibration Presets
              </span>
              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                title="Toggle Web Audio Acoustic Feedback"
              >
                {audioEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#e28743]" />
                    <span>Acoustic: ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Acoustic: OFF</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-3">
              {presets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => selectPreset(preset)}
                  className={`w-full text-left p-4 rounded-xl border transition-all relative overflow-hidden group ${
                    activePreset === preset.id
                      ? "border-[#e28743] bg-[#e28743]/10 shadow-lg shadow-[#e28743]/10"
                      : "border-white/10 bg-[#0f141f]/70 hover:border-white/20 hover:bg-[#131926]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm group-hover:text-[#e28743] transition-colors">
                          {preset.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                          {preset.category}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                        {preset.desc}
                      </p>
                    </div>

                    <div className="text-right font-mono text-xs text-zinc-300 pl-3 flex-shrink-0">
                      <div className="text-[#e28743] font-bold">{preset.freq} Hz</div>
                      <div className="text-zinc-500 text-[10px]">{preset.force} G-force</div>
                    </div>
                  </div>

                  {activePreset === preset.id && (
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                      <span className="flex items-center gap-1 text-[#e28743]">
                        <Sparkles className="w-3 h-3" /> Active Signal
                      </span>
                      <span>Click to Re-Trigger</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Architecture Explainer Badge */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-zinc-400 font-mono space-y-2">
              <div className="flex items-center gap-2 text-zinc-200">
                <Cpu className="w-4 h-4 text-[#e28743]" />
                <span className="font-semibold">Dynamic DSP Frequency Multiplexing</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                A dedicated 32-bit tactile DSP modulates electromagnetic coil current at 24,000 samples/sec, providing independent left-right spatial guidance across the titanium unibody.
              </p>
            </div>
          </div>

          {/* Right: Real-time Oscilloscope & Manual Tuner */}
          <div className="lg:col-span-7 bg-[#0c1017] rounded-2xl border border-white/15 p-6 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e28743] animate-pulse" />
                <span className="text-xs font-mono text-zinc-200 font-semibold uppercase tracking-wider">
                  Live Oscilloscope Output (Chamber A + B)
                </span>
              </div>
              <div className="text-xs font-mono text-zinc-400">
                Impulses Fired: <span className="text-white font-bold">{impulseCount}</span>
              </div>
            </div>

            {/* Canvas Display */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 mb-6 bg-[#080b10]">
              <canvas
                ref={canvasRef}
                width={640}
                height={200}
                className="w-full h-[180px] sm:h-[200px] block"
              />

              {/* Overlay Readout */}
              <div className="absolute top-3 right-3 flex items-center gap-2 font-mono text-[10px] text-zinc-400 bg-black/60 px-2 py-1 rounded border border-white/10 backdrop-blur-md">
                <span>PEAK FORCE:</span>
                <span className="text-[#e28743] font-bold">{force.toFixed(1)} G</span>
                <span className="text-zinc-600">|</span>
                <span>RISE:</span>
                <span className="text-emerald-400 font-bold">0.38 ms</span>
              </div>

              {/* Physical Recoil Pulse Ring */}
              {isImpulsing && (
                <div className="absolute inset-0 border-2 border-[#e28743]/50 pointer-events-none animate-ping" />
              )}
            </div>

            {/* Manual Modulation Sliders */}
            <div className="space-y-4 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#e28743]" />
                  Resonance Frequency
                </span>
                <span className="text-white font-bold">{freq} Hz</span>
              </div>
              <input
                type="range"
                min="45"
                max="320"
                value={freq}
                onChange={(e) => setFreq(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#e28743]"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-1.5">
                    <span>Acceleration Force</span>
                    <span className="text-white font-bold">{force.toFixed(1)} G</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.5"
                    step="0.1"
                    value={force}
                    onChange={(e) => setForce(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#e28743]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-1.5">
                    <span>Impulse Damping Decay</span>
                    <span className="text-white font-bold">{decay} ms</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="60"
                    value={decay}
                    onChange={(e) => setDecay(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#e28743]"
                  />
                </div>
              </div>
            </div>

            {/* Test Trigger Button */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => triggerImpulse()}
                className={`flex-1 py-3.5 px-6 rounded-xl font-semibold text-sm font-mono flex items-center justify-center gap-2 transition-all ${
                  isImpulsing
                    ? "bg-[#e28743] text-white scale-[0.98] shadow-lg shadow-[#e28743]/40"
                    : "bg-white text-black hover:bg-[#e28743] hover:text-white shadow-md"
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
                <span>FIRE HAPTIC IMPULSE</span>
              </button>

              <button
                onClick={() => {
                  setFreq(180);
                  setForce(2.4);
                  setDecay(18);
                  setActivePreset("machined");
                }}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Reset to Default"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
