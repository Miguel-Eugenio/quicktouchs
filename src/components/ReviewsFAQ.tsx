"use client";

import React, { useState } from "react";
import { ChevronDown, Star, MessageSquare } from "lucide-react";

export default function ReviewsFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const reviews = [
    {
      outlet: "The Verge",
      score: "9.5 / 10",
      quote: "The combination of the tactile Camera Control key and 4K 120fps Dolby Vision makes this the undisputed champion of mobile content creation.",
      author: "Nilay Patel",
    },
    {
      outlet: "Wired",
      score: "Editor's Choice",
      quote: "The battery life on the 16 Pro Max is frankly miraculous. Combined with Grade-5 titanium, it feels significantly lighter yet immensely durable.",
      author: "Julian Chokkattu",
    },
    {
      outlet: "TechRadar",
      score: "5 / 5 Stars",
      quote: "The A18 Pro silicon smashes every benchmark in existence. Mobile AAA gaming with real hardware ray tracing is finally here.",
      author: "Lance Ulanoff",
    },
  ];

  const faqs = [
    {
      q: "How does the QuickTouch Trade-In program work?",
      a: "You can trade in your current smartphone online or in-store. We'll give you instant credit toward your purchase of QuickTouch 16 Pro, or a gift card you can use anytime. If your device isn't eligible for credit, we'll recycle it for free.",
    },
    {
      q: "What comes in the box with QuickTouch 16 Pro?",
      a: "Your box includes the QuickTouch 16 Pro or Pro Max, a 1m Braided USB-C Charge Cable (USB 2/3 compatible), SIM eject tool, and quick documentation. A 30W USB-C power adapter is sold separately.",
    },
    {
      q: "Does QuickTouch 16 Pro support both eSIM and physical SIM cards?",
      a: "Yes. Models shipped in North America and globally support Dual Active eSIM as well as a physical nano-SIM slot, allowing seamless international roaming across more than 200 carriers.",
    },
    {
      q: "What is the water resistance rating of the titanium chassis?",
      a: "QuickTouch 16 Pro is rated IP68 under IEC standard 60529 (maximum depth of 6 meters up to 30 minutes). It is resistant to accidental spills from common liquids such as coffee, soda, tea, and juice.",
    },
    {
      q: "What warranty and coverage is provided?",
      a: "Every purchase includes a 1-year limited hardware warranty and 90 days of complimentary technical support. You can add QuickTouch Care+ at checkout for unlimited accidental damage protection and 24/7 priority support.",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0c12] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Press Accolades */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>CRITICAL ACCLAIM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Loved by reviewers worldwide.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0f121a] border border-white/10 flex flex-col justify-between hover:border-white/25 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-white text-base">{rev.outlet}</span>
                    <span className="text-xs font-bold text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10">
                      {rev.score}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed italic">
                    “{rev.quote}”
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-zinc-500">
                  Reviewed by {rev.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Everything you need to know about purchasing and trade-ins.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#0f121a] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-white text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
