'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Types & Data ---
type CrossRateData = { [base: string]: { [quote: string]: string | null } };

const currencies = [
  { code: 'EUR', flag: 'EU' }, { code: 'USD', flag: 'US' },
  { code: 'GBP', flag: 'GB' }, { code: 'JPY', flag: 'JP' },
  { code: 'CHF', flag: 'CH' }, { code: 'AUD', flag: 'AU' },
  { code: 'CNY', flag: 'CN' }, { code: 'CAD', flag: 'CA' },
];

enum Timeframe {
  '1D' = '1D', '1W' = '1W', '1M' = '1M', '3M' = '3M',
  '6M' = '6M', '1Y' = '1Y', YTD = 'YTD', '5Y' = '5Y', All = 'All'
}

const timeframes: Timeframe[] = Object.values(Timeframe);

const sampleData: CrossRateData = currencies.reduce((acc, base) => {
  acc[base.code] = currencies.reduce((row: { [key: string]: string | null }, quote) => {
    row[quote.code] = base.code === quote.code ? null : `${(Math.random() * 4 - 2).toFixed(2)}%`;
    return row;
  }, {});
  return acc;
}, {} as CrossRateData);

export default function ForexHeatmap({ data = sampleData }: { data?: CrossRateData }) {
  const [activeTF, setActiveTF] = useState<Timeframe>(timeframes[0]);
  const themeColor = '#0070ff'; // Electric Blue

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 overflow-hidden">
      <section
        className="relative bg-[#050505] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
        style={{
          boxShadow: `
            inset 0 120px 100px -80px ${themeColor}44,
            inset 0 -120px 100px -80px ${themeColor}44
          `
        }}
      >
        {/* --- BIG HEADER UTILITY BAR --- */}
        <div className="px-8 md:px-16 py-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 border-b border-white/10 bg-white/[0.02] relative z-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
              Forex <span className="text-[#0070ff] not-italic">Heatmap</span>
            </h2>
            <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-[#0070ff]/30 bg-[#0070ff]/10 w-fit">
              <div className="h-3 w-3 rounded-full bg-[#0070ff] animate-pulse" />
              <span className="text-lg md:text-xl text-[#0070ff] font-black uppercase tracking-[0.2em]">Active Matrix</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-24">
            <div className="flex flex-col">
              <span className="text-sm text-white/30 uppercase font-black tracking-[0.3em] mb-2">Market Strength</span>
              <span className="text-2xl md:text-2xl text-white font-black tracking-tighter uppercase">High Flow</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white/30 uppercase font-black tracking-[0.3em] mb-2">Sentiment</span>
              <span className="text-2xl md:text-2xl text-[#0070ff] font-black tracking-tighter uppercase italic">Bullish / US</span>
            </div>
          </div>
        </div>

        {/* --- HEATMAP GRID --- */}
        <div className="w-full overflow-hidden">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-white/[0.03]">
                {/* Top Left Corner */}
                <th className="p-8 border-r border-b border-white/10">
                  <span className="text-base font-black text-white/20 uppercase tracking-[0.3em]">Cross</span>
                </th>
                {currencies.map((cur) => (
                  <th key={cur.code} className="p-6 text-center border-b border-white/10">
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src={`https://s3-symbol-logo.tradingview.com/country/${cur.flag}.svg`}
                        alt={cur.code} width={32} height={20} className="rounded-sm grayscale group-hover:grayscale-0 transition-all"
                      />
                      <span className="text-xl md:text-1xl font-black text-white/80 tracking-tighter">{cur.code}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currencies.map((base) => (
                <tr key={base.code} className="group transition-all duration-300">
                  {/* First Column: Power 1 Larger Items */}
                  <td className="p-8 border-r border-b border-white/5 bg-[#080808] group-hover:bg-[#0070ff] transition-all duration-300">
                    <div className="flex items-center gap-4 relative z-10">
                      <Image
                        src={`https://s3-symbol-logo.tradingview.com/country/${base.flag}.svg`}
                        alt={base.code} width={28} height={18} className="rounded-sm group-hover:invert transition-all"
                      />
                      <span className="text-xl md:text-1xl font-black text-white group-hover:text-black tracking-tighter uppercase italic transition-all">
                        {base.code}
                      </span>
                    </div>
                  </td>

                  {currencies.map((quote) => {
                    const change = data[base.code][quote.code];
                    const isNeg = change?.startsWith('-');

                    return (
                      <td key={quote.code} className="p-2 border-b border-white/5 h-24 relative overflow-hidden group/cell">
                        {/* Cell Background Fill */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-white pointer-events-none" />

                        {change ? (
                          <div className={`h-full w-full rounded-xl flex items-center justify-center border border-white/[0.03] transition-all duration-500
                            ${isNeg ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'}
                            group-hover:scale-95 group-hover:bg-black group-hover:border-[#0070ff]/50
                          `}>
                            <span className="text-xl md:text-1xl font-black font-mono tracking-tighter">
                              {change}
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- TIMEFRAME SELECTOR --- */}
        <div className="px-12 py-10 bg-white/[0.01] border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-20">
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/20 font-black uppercase tracking-[0.4em]">Select Interval</span>
            <div className="flex flex-wrap gap-2">
              {timeframes.map((tf) => (
                <button
                  key={tf}
                  onClick={() => setActiveTF(tf)}
                  className={`
                      px-6 py-2.5 rounded-full text-sm font-black transition-all duration-300 border
                      ${activeTF === tf
                      ? 'bg-[#0070ff] text-black border-[#0070ff] shadow-[0_0_20px_rgba(0,112,255,0.4)] scale-110'
                      : 'text-white/40 border-white/10 hover:text-white hover:border-[#0070ff]/50'}
                    `}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
          <button className="text-xs font-black text-[#0070ff] uppercase tracking-[0.2em] px-10 py-4 rounded-full border border-[#0070ff]/20 hover:bg-[#0070ff] hover:text-black transition-all whitespace-nowrap">
            Download Matrix
          </button>
        </div>
      </section>
    </div>
  );
}
