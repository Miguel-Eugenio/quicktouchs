"use client";

import React from "react";
import { Smartphone, Shield, RefreshCw, Truck, HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050608] border-t border-white/10 text-zinc-400 text-xs">
      {/* Values Banner */}
      <div className="border-b border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <Truck className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div>
              <div className="font-bold text-white text-sm">Free Two-Day Delivery</div>
              <p className="text-[11px] text-zinc-500 mt-0.5">On all in-stock smartphone orders</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <RefreshCw className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="font-bold text-white text-sm">Free Returns</div>
              <p className="text-[11px] text-zinc-500 mt-0.5">14-day hassle-free return policy</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <Shield className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <div className="font-bold text-white text-sm">QuickTouch Care+</div>
              <p className="text-[11px] text-zinc-500 mt-0.5">Unlimited damage protection</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <HeartHandshake className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <div className="font-bold text-white text-sm">Trade In & Save</div>
              <p className="text-[11px] text-zinc-500 mt-0.5">Up to $800 with eligible device</p>
            </div>
          </div>
        </div>
      </div>

      {/* Directory Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="space-y-2">
          <h6 className="font-bold text-white">Shop & Learn</h6>
          <ul className="space-y-1.5 text-zinc-400">
            <li><a href="#overview" className="hover:text-white">QuickTouch 16 Pro</a></li>
            <li><a href="#compare" className="hover:text-white">QuickTouch 16 Pro Max</a></li>
            <li><a href="#camera" className="hover:text-white">Camera Control</a></li>
            <li><a href="#battery" className="hover:text-white">MagSafe Accessories</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h6 className="font-bold text-white">QuickTouch Store</h6>
          <ul className="space-y-1.5 text-zinc-400">
            <li><a href="#trade-in" className="hover:text-white">Trade-in Program</a></li>
            <li><a href="#" className="hover:text-white">Financing Options</a></li>
            <li><a href="#" className="hover:text-white">Order Status</a></li>
            <li><a href="#" className="hover:text-white">Certified Refurbished</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h6 className="font-bold text-white">Entertainment</h6>
          <ul className="space-y-1.5 text-zinc-400">
            <li><a href="#" className="hover:text-white">QuickTouch Arcade</a></li>
            <li><a href="#" className="hover:text-white">Spatial Audio Music</a></li>
            <li><a href="#" className="hover:text-white">Pro TV+</a></li>
            <li><a href="#" className="hover:text-white">Cloud Storage</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h6 className="font-bold text-white">QuickTouch Values</h6>
          <ul className="space-y-1.5 text-zinc-400">
            <li><a href="#" className="hover:text-white">Accessibility</a></li>
            <li><a href="#" className="hover:text-white">Environment & 100% Recycled Ti</a></li>
            <li><a href="#" className="hover:text-white">Privacy & On-Device AI</a></li>
            <li><a href="#" className="hover:text-white">Supply Chain Responsibility</a></li>
          </ul>
        </div>

        <div className="space-y-2 col-span-2 sm:col-span-1">
          <h6 className="font-bold text-white">About QuickTouch</h6>
          <ul className="space-y-1.5 text-zinc-400">
            <li><a href="#" className="hover:text-white">Newsroom</a></li>
            <li><a href="#" className="hover:text-white">Leadership</a></li>
            <li><a href="#" className="hover:text-white">Career Opportunities</a></li>
            <li><a href="#" className="hover:text-white">Ethics & Compliance</a></li>
          </ul>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            Copyright © {new Date().getFullYear()} QuickTouch Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms of Use</a>
            <a href="#" className="hover:text-zinc-300">Sales and Refunds</a>
            <a href="#" className="hover:text-zinc-300">Legal</a>
            <a href="#" className="hover:text-zinc-300">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
