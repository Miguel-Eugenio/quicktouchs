"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CameraShowcase from "@/components/CameraShowcase";
import PerformanceSection from "@/components/PerformanceSection";
import BentoGrid from "@/components/BentoGrid";
import BatteryMagSafe from "@/components/BatteryMagSafe";
import TradeInCalculator from "@/components/TradeInCalculator";
import ModelComparison from "@/components/ModelComparison";
import ReviewsFAQ from "@/components/ReviewsFAQ";
import BuyModal from "@/components/BuyModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [selectedInitialModel, setSelectedInitialModel] = useState<"pro" | "proMax">("pro");
  const [tradeInDiscount, setTradeInDiscount] = useState<number>(0);
  const [tradeInDevice, setTradeInDevice] = useState<string>("");
  const [orders, setOrders] = useState<
    Array<{ model: string; finish: string; storage: string; price: number }>
  >([]);

  const handleOpenBuy = (model: "pro" | "proMax" = "pro") => {
    setSelectedInitialModel(model);
    setBuyModalOpen(true);
  };

  const handleApplyTradeIn = (discount: number, deviceName: string) => {
    setTradeInDiscount(discount);
    setTradeInDevice(deviceName);
  };

  const handleOrderComplete = (order: {
    model: string;
    finish: string;
    storage: string;
    price: number;
  }) => {
    setOrders((prev) => [...prev, order]);
  };

  return (
    <main className="min-h-screen bg-[#07080b] text-[#f3f6fa] selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar onOpenBuyModal={() => handleOpenBuy("pro")} cartCount={orders.length} />

      {/* Hero Section */}
      <HeroSection onOpenBuyModal={() => handleOpenBuy("pro")} />

      {/* Camera System Showcase with Zoom Simulator */}
      <CameraShowcase />

      {/* Performance & A18 Pro Chip Benchmark */}
      <PerformanceSection />

      {/* Bento Grid Design & Feature Innovations */}
      <BentoGrid />

      {/* Battery Life & MagSafe Fast Charging */}
      <BatteryMagSafe />

      {/* Trade-In Value Estimator */}
      <TradeInCalculator onApplyDiscount={handleApplyTradeIn} />

      {/* Model Comparison Grid */}
      <ModelComparison onSelectModel={(m) => handleOpenBuy(m)} />

      {/* Press Reviews & FAQ Accordion */}
      <ReviewsFAQ />

      {/* Bottom Pre-Order & Store Banner */}
      <section className="py-20 bg-gradient-to-b from-[#0a0c14] to-[#050609] border-t border-white/10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Upgrade to QuickTouch 16 Pro today.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-8">
            Get free shipping, flexible monthly installments at 0% APR, and up to $800 with trade-in.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleOpenBuy("pro")}
              className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Order QuickTouch 16 Pro
            </button>
            <button
              onClick={() => handleOpenBuy("proMax")}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-base backdrop-blur-md transition-all cursor-pointer"
            >
              Order QuickTouch 16 Pro Max
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Buy / Order Modal */}
      <BuyModal
        isOpen={buyModalOpen}
        onClose={() => setBuyModalOpen(false)}
        initialModel={selectedInitialModel}
        tradeInDiscount={tradeInDiscount}
        tradeInDevice={tradeInDevice}
        onOrderComplete={handleOrderComplete}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
