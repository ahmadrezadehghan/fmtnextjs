'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sampleEvents = [
  { time: '14:00', date: 'APR 27', country: 'United States', code: 'US', event: 'Nonfarm Payrolls', actual: '236K', forecast: '200K', prior: '215K', impact: 'high' },
  { time: '09:00', date: 'APR 28', country: 'Germany', code: 'DE', event: 'GDP QoQ', actual: '0.4%', forecast: '0.3%', prior: '0.5%', impact: 'high' },
  { time: '10:00', date: 'APR 28', country: 'Eurozone', code: 'EU', event: 'Consumer Confidence', actual: '-8.5', forecast: '-7.9', prior: '-8.0', impact: 'low' },
  { time: '02:30', date: 'APR 29', country: 'China', code: 'CN', event: 'Manufacturing PMI', actual: '50.1', forecast: '49.8', prior: '49.5', impact: 'medium' },
  { time: '08:30', date: 'APR 29', country: 'United Kingdom', code: 'GB', event: 'CPI YoY', actual: '1.7%', forecast: '1.8%', prior: '1.6%', impact: 'medium' },
];

export default function EconomicCalendar({ events = sampleEvents }) {
  const themeColor = '#00f2ff'; // Electric Teal

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 overflow-hidden">
      <section
        className="relative bg-[#050505] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
        style={{
          boxShadow: `
            inset 0 120px 100px -80px ${themeColor}33,
            inset 0 -120px 100px -80px ${themeColor}33
          `
        }}
      >
        {/* --- BIG HEADER UTILITY BAR --- */}
        <div className="px-8 md:px-16 py-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 border-b border-white/10 bg-white/[0.02] relative z-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
              Economic <span className="text-[#00f2ff] not-italic">Calendar</span>
            </h2>
            <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-[#00f2ff]/30 bg-[#00f2ff]/10 w-fit">
              <div className="h-3 w-3 rounded-full bg-[#00f2ff] animate-pulse" />
              <span className="text-lg md:text-xl text-[#00f2ff] font-black uppercase tracking-[0.2em]">Live Macro Feed</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-24 text-right">
            <div className="flex flex-col">
              <span className="text-sm text-white/30 uppercase font-black tracking-[0.3em] mb-2">Impact Level</span>
              <span className="text-3xl md:text-2xl text-white font-black tracking-tighter uppercase">High Vol</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white/30 uppercase font-black tracking-[0.3em] mb-2">Timezone</span>
              <span className="text-3xl md:text-2xl text-[#00f2ff] font-black tracking-tighter uppercase italic">GMT +0</span>
            </div>
          </div>
        </div>

        {/* --- GRID HEADER (Custom Column Spans) --- */}
        <div className="hidden md:grid grid-cols-12 px-16 py-8 bg-white/[0.03] border-b border-white/10">
          <span className="col-span-2 text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/60">Time / Date</span>
          <span className="col-span-2 text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/60">Country</span>
          {/* Economic Event Header gets more space (col-span-4) */}
          <span className="col-span-3 text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/60">Economic Event</span>
          <span className="col-span-1 text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/60 text-right">Actual</span>
          <span className="col-span-2 text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/60 text-right">Forecast</span>
          <span className="col-span-2 text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/60 text-right">Prior</span>
        </div>

        {/* --- GRID BODY --- */}
        <div className="flex flex-col divide-y divide-white/[0.05]">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 md:grid-cols-12 px-8 md:px-16 py-8 transition-all duration-300 cursor-pointer items-center"
            >
              {/* FULL TEAL BACKGROUND FILL ON HOVER */}
              <div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: themeColor }}
              />

              {/* COLUMN 1: Time/Date (col-span-2) */}
              <div className="relative z-10 flex flex-col col-span-2">
                <span className="text-xl font-black text-white group-hover:text-black transition-colors tracking-tighter font-mono">
                  {e.time}
                </span>
                <span className="text-sm font-bold text-white/30 group-hover:text-black/60 transition-colors uppercase tracking-widest">
                  {e.date}
                </span>
              </div>

              {/* COLUMN 2: Country (col-span-2) */}
              <div className="relative z-10 flex items-center gap-3 col-span-2">
                <div className="relative w-8 h-5 overflow-hidden rounded-sm border border-white/10 group-hover:border-black/20 transition-all">
                  <Image
                    src={`https://s3-symbol-logo.tradingview.com/country/${e.code}.svg`}
                    alt={e.country}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-base font-bold text-white/80 group-hover:text-black transition-colors">
                  {e.country}
                </span>
              </div>

              {/* COLUMN 3: Event (Increased Width: col-span-3) */}
              <div className="relative z-10 flex items-center gap-3 col-span-3">
                <div className={`w-1.5 h-6 rounded-full shrink-0 ${e.impact === 'high' ? 'bg-[#00f2ff]' : e.impact === 'medium' ? 'bg-white/40' : 'bg-white/10'
                  } group-hover:bg-black transition-colors`} />
                <span className="text-xl font-black text-white group-hover:text-black transition-colors tracking-tight uppercase italic truncate">
                  {e.event}
                </span>
              </div>

              {/* COLUMN 4: Actual (col-span-1) */}
              <div className="relative z-10 text-left md:text-right col-span-1">
                <span className="text-xl font-black text-[#00f2ff] group-hover:text-black transition-colors font-mono tracking-tighter">
                  {e.actual}
                </span>
              </div>

              {/* COLUMN 5: Forecast (col-span-2) */}
              <div className="relative z-10 text-left md:text-right col-span-2">
                <span className="text-xl font-bold text-white/40 group-hover:text-black/60 transition-colors font-mono">
                  {e.forecast}
                </span>
              </div>

              {/* COLUMN 6: Prior (col-span-2) */}
              <div className="relative z-10 text-left md:text-right col-span-2">
                <span className="text-xl font-bold text-white/40 group-hover:text-black/60 transition-colors font-mono">
                  {e.prior}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 bg-white/[0.01] relative z-20">
          <span className="text-xs text-white/20 font-black uppercase tracking-[0.4em]">
            Global Macro Statistics Feed • 2025 Real-Time
          </span>
          <button className="w-full md:w-auto text-xs font-black text-[#00f2ff] uppercase tracking-[0.2em] px-10 py-4 rounded-full border border-[#00f2ff]/20 hover:bg-[#00f2ff] hover:text-black transition-all">
            Full Historical Data
          </button>
        </div>
      </section>
    </div>
  );
}
