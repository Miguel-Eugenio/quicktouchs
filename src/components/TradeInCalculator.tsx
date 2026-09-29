"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, DollarSign, Smartphone } from "lucide-react";

interface TradeInCalculatorProps {
  onApplyDiscount: (discountAmount: number, phoneModel: string) => void;
}

export default function TradeInCalculator({ onApplyDiscount }: TradeInCalculatorProps) {
  const [selectedDevice, setSelectedDevice] = useState<string>("15promax");
  const [condition, setCondition] = useState<"good" | "fair">("good");
  const [applied, setApplied] = useState(false);

  const devices = [
    { id: "15promax", name: "iPhone 15 Pro Max", goodVal: 650, fairVal: 450 },
    { id: "15pro", name: "iPhone 15 Pro", goodVal: 500, fairVal: 350 },
    { id: "14promax", name: "iPhone 14 Pro Max", goodVal: 420, fairVal: 280 },
    { id: "14pro", name: "iPhone 14 Pro", goodVal: 350, fairVal: 220 },
    { id: "s24ultra", name: "Galaxy S24 Ultra", goodVal: 600, fairVal: 400 },
    { id: "pixel8pro", name: "Google Pixel 8 Pro", goodVal: 350, fairVal: 200 },
  ];

  const currentDevice = devices.find((d) => d.id === selectedDevice) || devices[0];
  const tradeValue = condition === "good" ? currentDevice.goodVal : currentDevice.fairVal;
  const basePrice = 999;
  const finalPrice = Math.max(0, basePrice - tradeValue);
  const monthly = (finalPrice / 24).toFixed(2);

  const handleApply = () => {
    onApplyDiscount(tradeValue, currentDevice.name);
    setApplied(true);
    setTimeout(() => setApplied(false), 3000);
  };

  return (
    <section id="trade-in" className="py-24 bg-[#0a0c12] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            <span>TRADE-IN VALUE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trade in your current phone. <br />
            <span className="text-zinc-400 font-normal">
              Get up to $650 in instant credit.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Answer two quick questions to estimate how much credit you can get toward your new QuickTouch 16 Pro.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-[#0f121a] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Options */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="text-xs font-semibold uppercase text-zinc-400 block mb-3">
                  1. Select your trade-in model
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {devices.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDevice(d.id)}
                      className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        selectedDevice === d.id
                          ? "border-blue-500 bg-blue-500/10 text-white shadow-md shadow-blue-500/20"
                          : "border-white/5 bg-white/[0.03] text-zinc-300 hover:border-white/20"
                      }`}
                    >
                      <div className="text-xs font-semibold">{d.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-zinc-400 block mb-3">
                  2. Device Condition
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setCondition("good")}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      condition === "good"
                        ? "border-emerald-500 bg-emerald-500/10 text-white"
                        : "border-white/5 bg-white/[0.03] text-zinc-300 hover:border-white/20"
                    }`}
                  >
                    <div className="text-xs font-bold text-white">Good Condition</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">Powers on, no screen cracks</div>
                  </button>

                  <button
                    onClick={() => setCondition("fair")}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      condition === "fair"
                        ? "border-emerald-500 bg-emerald-500/10 text-white"
                        : "border-white/5 bg-white/[0.03] text-zinc-300 hover:border-white/20"
                    }`}
                  >
                    <div className="text-xs font-bold text-white">Fair Condition</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">Minor scratches or body scuffs</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between text-center space-y-4">
              <div>
                <span className="text-xs text-zinc-400 uppercase font-bold tracking-wider">
                  ESTIMATED TRADE-IN VALUE
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 mt-1">
                  ${tradeValue}
                </div>
                <p className="text-xs text-zinc-400 mt-1">Instant reduction applied to cart</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>QuickTouch 16 Pro Base:</span>
                  <span className="text-white font-semibold">${basePrice}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Trade-in Credit:</span>
                  <span className="font-bold">-${tradeValue}</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between text-sm">
                  <span className="text-white font-bold">New Starting Price:</span>
                  <span className="text-white font-extrabold">${finalPrice}</span>
                </div>
                <div className="text-right text-[11px] text-zinc-400">
                  or only <span className="text-blue-400 font-bold">${monthly}/mo.</span> for 24 mo.
                </div>
              </div>

              <button
                onClick={handleApply}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
              >
                {applied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Applied to Configurator!</span>
                  </>
                ) : (
                  <>
                    <span>Apply Trade-in Discount</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
