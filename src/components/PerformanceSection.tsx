"use client";

import React, { useState } from "react";
import { Cpu, Zap, Gamepad2, Sparkles, BarChart3, Check } from "lucide-react";

export default function PerformanceSection() {
  const [selectedBenchmark, setSelectedBenchmark] = useState<"gpu" | "cpu" | "npu">("gpu");

  const benchmarks = {
    gpu: {
      title: "Hardware-Accelerated Ray Tracing",
      stat: "2x Faster",
      comparison: "vs previous generation A17 Pro",
      desc: "Delivers fluid console-grade lighting, realistic water reflections, and hyper-detailed shadows in AAA titles like Death Stranding and Assassin’s Creed Mirage.",
      bars: [
        { label: "QuickTouch 16 Pro (A18 Pro)", val: 100, color: "bg-blue-500" },
        { label: "QuickTouch 15 Pro", val: 52, color: "bg-zinc-600" },
        { label: "Competitor Flagship X", val: 44, color: "bg-zinc-700" },
      ],
    },
    cpu: {
      title: "6-Core High-Efficiency CPU",
      stat: "20% Faster",
      comparison: "Runs complex workflows using 20% less power",
      desc: "Two performance cores and four efficiency cores breeze through 4K video rendering, heavy multitasking, and instant app launches with zero heat buildup.",
      bars: [
        { label: "QuickTouch 16 Pro (A18 Pro)", val: 100, color: "bg-purple-500" },
        { label: "QuickTouch 15 Pro", val: 82, color: "bg-zinc-600" },
        { label: "Competitor Flagship X", val: 75, color: "bg-zinc-700" },
      ],
    },
    npu: {
      title: "16-Core Neural Engine",
      stat: "35 TOPS",
      comparison: "Powers on-device Apple & QuickTouch Intelligence",
      desc: "Runs complex multimodal generative AI models completely on-device without compromising your personal privacy or internet bandwidth.",
      bars: [
        { label: "QuickTouch 16 Pro (A18 Pro)", val: 100, color: "bg-emerald-500" },
        { label: "QuickTouch 15 Pro", val: 65, color: "bg-zinc-600" },
        { label: "Competitor Flagship X", val: 58, color: "bg-zinc-700" },
      ],
    },
  };

  const activeData = benchmarks[selectedBenchmark];

  return (
    <section id="performance" className="py-24 bg-[#07080b] relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>A18 PRO BIONIC SILICON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Outrageous performance. <br />
            <span className="text-zinc-400 font-normal">
              A chip of monstrous capability.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Built on second-generation 3-nanometer technology, the A18 Pro powers advanced photo and video features like Camera Control and brings next-level graphics to mobile gaming.
          </p>
        </div>

        {/* Interactive Benchmark Module */}
        <div className="bg-[#0f121a] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto">
          {/* Benchmark category tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedBenchmark("gpu")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedBenchmark === "gpu"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>GPU & Ray Tracing</span>
            </button>
            <button
              onClick={() => setSelectedBenchmark("cpu")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedBenchmark === "cpu"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>CPU Compute Speed</span>
            </button>
            <button
              onClick={() => setSelectedBenchmark("npu")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedBenchmark === "npu"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Neural Engine AI</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left stat details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-blue-400">
                {activeData.stat}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                {activeData.comparison}
              </div>
              <h3 className="text-xl font-bold text-white">{activeData.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{activeData.desc}</p>

              <div className="pt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-zinc-500 block">Process Node</span>
                  <span className="font-bold text-white">TSMC 3nm N3E</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-zinc-500 block">Memory Bandwidth</span>
                  <span className="font-bold text-white">+17% Higher</span>
                </div>
              </div>
            </div>

            {/* Right animated bar chart */}
            <div className="lg:col-span-6 space-y-5 p-6 rounded-2xl bg-black/40 border border-white/5">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold mb-2">
                <span>BENCHMARK RELATIVE EFFICIENCY</span>
                <span>SCORES</span>
              </div>

              {activeData.bars.map((bar, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-300 font-medium">{bar.label}</span>
                    <span className="font-bold text-white">{bar.val}%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className={`h-full ${bar.color} rounded-full transition-all duration-700`}
                      style={{ width: `${bar.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
