"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check, ShoppingBag, ShieldCheck, Truck, ArrowRight, Sparkles } from "lucide-react";

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModel?: "pro" | "proMax";
  tradeInDiscount?: number;
  tradeInDevice?: string;
  onOrderComplete: (order: {
    model: string;
    finish: string;
    storage: string;
    price: number;
  }) => void;
}

export default function BuyModal({
  isOpen,
  onClose,
  initialModel = "pro",
  tradeInDiscount = 0,
  tradeInDevice = "",
  onOrderComplete,
}: BuyModalProps) {
  const [model, setModel] = useState<"pro" | "proMax">(initialModel);
  const [finish, setFinish] = useState<string>("natural");
  const [storage, setStorage] = useState<string>("256gb");
  const [carrier, setCarrier] = useState<string>("unlocked");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const finishes = [
    { id: "natural", name: "Natural Titanium", hex: "#9a958e", img: "/images/hero-phone.jpg" },
    { id: "desert", name: "Desert Gold", hex: "#c5a083", img: "/images/camera-lens.jpg" },
    { id: "white", name: "White Titanium", hex: "#e8e7e3", img: "/images/hero-phone.jpg" },
    { id: "black", name: "Black Titanium", hex: "#222326", img: "/images/tactile-edge.jpg" },
  ];

  const storageOptions = [
    { id: "128gb", label: "128 GB", proPrice: 999, proMaxPrice: null },
    { id: "256gb", label: "256 GB", proPrice: 1099, proMaxPrice: 1199 },
    { id: "512gb", label: "512 GB", proPrice: 1299, proMaxPrice: 1399 },
    { id: "1tb", label: "1 TB", proPrice: 1499, proMaxPrice: 1599 },
  ];

  const carriers = [
    { id: "unlocked", label: "Connect on your own later", sub: "Unlocked, works with all carriers" },
    { id: "att", label: "AT&T", sub: "Instant activation" },
    { id: "verizon", label: "Verizon", sub: "Instant activation" },
    { id: "tmobile", label: "T-Mobile", sub: "Instant activation" },
  ];

  const currentFinish = finishes.find((f) => f.id === finish) || finishes[0];
  const currentStorage = storageOptions.find((s) => s.id === storage) || storageOptions[1];

  const rawPrice =
    model === "pro"
      ? currentStorage.proPrice || 999
      : currentStorage.proMaxPrice || 1199;

  const finalPrice = Math.max(0, rawPrice - tradeInDiscount);
  const monthly = (finalPrice / 24).toFixed(2);

  const handleCheckout = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmed(true);
      onOrderComplete({
        model: model === "pro" ? "QuickTouch 16 Pro (6.3″)" : "QuickTouch 16 Pro Max (6.9″)",
        finish: currentFinish.name,
        storage: currentStorage.label,
        price: finalPrice,
      });
    }, 1000);
  };

  const handleFinish = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0f121a] border border-white/15 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-blue-400" />
            <h3 className="font-bold text-white text-base sm:text-lg">
              Order QuickTouch 16 Pro
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          /* Confirmation state */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                ORDER SUCCESSFUL • ORDER #QT-99214
              </span>
              <h4 className="text-3xl font-extrabold text-white mt-2">
                Thank you for your order!
              </h4>
              <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">
                We’ve sent your order confirmation and shipment tracking details to your email address.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between text-zinc-400">
                <span>Model:</span>
                <span className="text-white font-bold">
                  {model === "pro" ? "QuickTouch 16 Pro (6.3″)" : "QuickTouch 16 Pro Max (6.9″)"}
                </span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Finish:</span>
                <span className="text-white font-semibold">{currentFinish.name}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Capacity:</span>
                <span className="text-white font-semibold">{currentStorage.label}</span>
              </div>
              {tradeInDiscount > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Trade-In ({tradeInDevice}):</span>
                  <span>-${tradeInDiscount}</span>
                </div>
              )}
              <div className="pt-2 border-t border-white/10 flex justify-between text-sm">
                <span className="text-white font-bold">Total Paid:</span>
                <span className="text-white font-extrabold">${finalPrice}</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
            >
              Done & Return
            </button>
          </div>
        ) : (
          /* Checkout Configurator */
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left Preview Pane */}
            <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-black/40">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/10 p-2 mb-4">
                <Image
                  src={currentFinish.img}
                  alt={currentFinish.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <Truck className="w-4 h-4" />
                  <span>Free Express Delivery by Tomorrow</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Includes 1-Year Limited Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Selection Steps */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Step 1: Model */}
              <div>
                <label className="text-xs font-bold uppercase text-zinc-400 block mb-3">
                  1. Select Model
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setModel("pro")}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      model === "pro"
                        ? "border-blue-500 bg-blue-500/10 text-white shadow-md"
                        : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20"
                    }`}
                  >
                    <div className="text-xs font-bold">QuickTouch 16 Pro</div>
                    <div className="text-[11px] text-zinc-400">6.3-inch display</div>
                    <div className="text-xs font-bold text-white mt-1">From $999</div>
                  </button>

                  <button
                    onClick={() => setModel("proMax")}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      model === "proMax"
                        ? "border-blue-500 bg-blue-500/10 text-white shadow-md"
                        : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20"
                    }`}
                  >
                    <div className="text-xs font-bold">QuickTouch 16 Pro Max</div>
                    <div className="text-[11px] text-zinc-400">6.9-inch display</div>
                    <div className="text-xs font-bold text-white mt-1">From $1,199</div>
                  </button>
                </div>
              </div>

              {/* Step 2: Finish */}
              <div>
                <label className="text-xs font-bold uppercase text-zinc-400 block mb-3">
                  2. Select Finish
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {finishes.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFinish(f.id)}
                      className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                        finish === f.id
                          ? "border-blue-500 bg-blue-500/10 text-white"
                          : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20"
                      }`}
                    >
                      <div
                        className="w-5 h-5 rounded-full border border-white/20 flex-shrink-0"
                        style={{ backgroundColor: f.hex }}
                      />
                      <span className="text-xs font-semibold">{f.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Storage */}
              <div>
                <label className="text-xs font-bold uppercase text-zinc-400 block mb-3">
                  3. Select Storage
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {storageOptions
                    .filter((s) => (model === "proMax" ? s.proMaxPrice !== null : true))
                    .map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setStorage(s.id)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          storage === s.id
                            ? "border-blue-500 bg-blue-500/10 text-white"
                            : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20"
                        }`}
                      >
                        <div className="text-xs font-bold">{s.label}</div>
                        <div className="text-[11px] text-zinc-400">
                          ${model === "pro" ? s.proPrice : s.proMaxPrice}
                        </div>
                      </button>
                    ))}
                </div>
              </div>

              {/* Step 4: Carrier */}
              <div>
                <label className="text-xs font-bold uppercase text-zinc-400 block mb-3">
                  4. Choose Carrier Connectivity
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {carriers.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setCarrier(c.id)}
                      className={`p-2.5 rounded-2xl border text-left transition-all ${
                        carrier === c.id
                          ? "border-blue-500 bg-blue-500/10 text-white"
                          : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20"
                      }`}
                    >
                      <div className="text-xs font-semibold">{c.label}</div>
                      <div className="text-[10px] text-zinc-500">{c.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Checkout Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-white">
                    ${finalPrice}
                  </div>
                  <div className="text-xs text-zinc-400">
                    or ${monthly}/mo. for 24 mo. at 0% APR
                  </div>
                </div>

                <button
                  disabled={isSubmitting}
                  onClick={handleCheckout}
                  className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isSubmitting ? "Placing Order..." : "Check Out"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
