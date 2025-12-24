'use client';

import React from 'react';
import { motion } from 'framer-motion';

const forexData = [
  { product: 'EUR / USD', price: '1.08542', change: '+0.12%', updated: '20:10' },
  { product: 'GBP / USD', price: '1.26315', change: '-0.08%', updated: '20:10' },
  { product: 'USD / JPY', price: '149.420', change: '+0.45%', updated: '20:09' },
  { product: 'AUD / USD', price: '0.65412', change: '+0.23%', updated: '20:10' },
  { product: 'USD / CHF', price: '0.88124', change: '-0.11%', updated: '20:08' },
  { product: 'USD / CAD', price: '1.35042', change: '+0.05%', updated: '20:10' },
  { product: 'NZD / USD', price: '0.61234', change: '-0.34%', updated: '20:07' },
  { product: 'EUR / JPY', price: '162.150', change: '+0.52%', updated: '20:10' },
  { product: 'GBP / JPY', price: '188.740', change: '+0.38%', updated: '20:09' },
  { product: 'XAU / USD', price: '2024.15', change: '+1.12%', updated: '20:10' },
];

export default function PriceTable({ data = forexData }) {
  const themeColor = '#bf40ff';

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 overflow-hidden">
      <section
        className="relative bg-[#050505] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
        style={{
          boxShadow: `
              inset 0 100px 80px -70px ${themeColor}33,
              inset 0 -100px 80px -70px ${themeColor}33
            `
        }}
      >

        {/* --- HEADER UTILITY BAR --- */}
        <div className="px-8 md:px-16 py-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 border-b border-white/10 bg-white/[0.02] relative z-20">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
              Market <span className="text-[#bf40ff] not-italic">Execution</span>
            </h3>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#bf40ff]/30 bg-[#bf40ff]/10 w-fit">
              <div className="h-2 w-2 rounded-full bg-[#bf40ff] animate-pulse" />
              <span className="text-xs text-[#bf40ff] font-black uppercase tracking-[0.2em]">Server Live</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-16">
            <div className="flex flex-col">
              <span className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] mb-1">Volatility</span>
              <span className="text-xl md:text-2xl text-white font-black tracking-tighter uppercase">High Index</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] mb-1">Session</span>
              <span className="text-xl md:text-2xl text-[#bf40ff] font-black tracking-tighter uppercase italic">London / NY</span>
            </div>
          </div>
        </div>

        {/* --- GRID HEADER (Increased by Power 1) --- */}
        <div className="hidden md:grid grid-cols-4 px-16 py-8 bg-white/[0.03] border-b border-white/10">
          <span className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-white/60">Currency Pair</span>
          <span className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-white/60">Bid / Ask</span>
          <span className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-white/60">Spread Change</span>
          <span className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-white/60 text-right">Time (GMT)</span>
        </div>

        {/* --- GRID BODY --- */}
        <div className="flex flex-col divide-y divide-white/[0.05]">
          {data.map((item, idx) => {
            const isPositive = item.change.startsWith('+');
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group relative grid grid-cols-1 md:grid-cols-4 px-8 md:px-16 py-7 transition-all duration-300 cursor-pointer items-center"
              >
                {/* FULL PURPLE BACKGROUND FILL ON HOVER */}
                <div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: themeColor }}
                />

                {/* COLUMN 1: Currency Pair (Power 1 Larger) */}
                <div className="relative z-10 py-1 md:py-0">
                  <span className="text-lg md:text-xl font-black text-white group-hover:text-black transition-colors tracking-tighter uppercase italic">
                    {item.product}
                  </span>
                </div>

                {/* COLUMN 2: Bid / Ask (Standard Size) */}
                <div className="relative z-10 py-1 md:py-0">
                  <span className="text-xl md:text-1xl font-medium text-white/60 tracking-tight font-mono group-hover:text-black transition-colors">
                    {item.price}
                  </span>
                </div>

                {/* COLUMN 3: Spread Change (Matches Header Size Scale) */}
                <div className="relative z-10 py-2 md:py-0">
                  <div className={`inline-flex items-center px-4 py-1.5 rounded-lg text-xl md:text-1xl font-black transition-all duration-300 ${isPositive
                    ? 'bg-green-500/10 text-green-400 group-hover:text-white group-hover:bg-black'
                    : 'bg-red-500/10 text-red-400 group-hover:text-white group-hover:bg-black'
                    }`}>
                    {item.change}
                  </div>
                </div>

                {/* COLUMN 4: Time GMT (Matches Header Size Scale) */}
                <div className="relative z-10 py-1 md:py-0 text-left md:text-right">
                  <span className="text-xl md:text-1xl font-black text-white/40 group-hover:text-black transition-colors font-mono tracking-tighter">
                    {item.updated}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 bg-white/[0.01] relative z-20">
          <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">
            Institutional Liquidity Feed 2.0 • FMT Global
          </span>
          <button className="w-full md:w-auto text-[10px] font-black text-[#bf40ff] uppercase tracking-[0.2em] px-8 py-3 rounded-full border border-[#bf40ff]/20 hover:bg-[#bf40ff] hover:text-black transition-all">
            Refresh Market
          </button>
        </div>

      </section>
    </div>
  );
}
