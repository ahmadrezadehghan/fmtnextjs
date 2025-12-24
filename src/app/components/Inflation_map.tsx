'use client';

import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const INFLATION_DATA_2025: Record<string, number> = {
  "United States of America": 2.2, "Canada": 2.0, "Mexico": 3.4,
  "Germany": 1.9, "France": 1.6, "United Kingdom": 2.1, "Italy": 1.7, "Spain": 2.1,
  "Netherlands": 1.9, "Poland": 3.8, "Sweden": 1.8, "Norway": 2.2, "Switzerland": 1.1,
  "Ukraine": 7.8, "Russia": 5.8, "Austria": 2.1, "Belgium": 2.3, "Greece": 2.0,
  "China": 1.4, "Japan": 1.8, "India": 4.0, "Indonesia": 2.7, "South Korea": 1.9,
  "Saudi Arabia": 2.0, "Turkey": 24.2, "Pakistan": 11.5, "Vietnam": 3.3, "Thailand": 1.4,
  "Iran": 28.0, "Iraq": 4.5, "Israel": 2.4, "Kazakhstan": 7.8, "Philippines": 3.2,
  "Brazil": 3.8, "Argentina": 42.0, "Colombia": 4.5, "Chile": 3.0, "Peru": 2.5, "Venezuela": 120.0,
  "Nigeria": 16.5, "Egypt": 18.2, "South Africa": 4.4, "Algeria": 5.5, "Morocco": 2.1,
  "Ethiopia": 15.0, "Kenya": 5.2, "Angola": 12.0,
  "Australia": 2.5, "New Zealand": 2.2,
  "United States": 2.2, "Dem. Rep. Congo": 9.5, "Central African Rep.": 4.0, "South Sudan": 12.0
};

const getRate = (name: string): number => {
  return INFLATION_DATA_2025[name] || 2.5;
};

const getColor = (rate: number): string => {
  const clamped = Math.min(Math.max(rate, 0), 15);
  const ratio = clamped / 15;
  const hue = 195 + (285 - 195) * ratio;
  const lightness = 75 - (75 - 35) * ratio;
  return `hsl(${hue}, 85%, ${lightness}%)`;
};

export default function GlobalInflationMap() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<{ name: string; rate: number; x: number; y: number } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[600px] w-full bg-[#050505] rounded-[40px] animate-pulse" />;

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 mb-12">
      <section className="relative bg-[#050505] rounded-[40px] overflow-hidden border border-white/10 shadow-[inset_0_120px_100px_-80px_rgba(200,0,0,0.25)]">

        {/* HEADER */}
        <div className="px-8 md:px-16 py-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 border-b border-white/10 bg-white/[0.02] z-10 relative">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
              Global <span className="text-[#ff3b3b] not-italic">Inflation</span>
            </h2>
            <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-[#ff3b3b]/30 bg-[#ff3b3b]/10 w-fit">
              <div className="h-2 w-2 rounded-full bg-[#ff3b3b] animate-pulse" />
              <span className="text-xs text-[#ff3b3b] font-black uppercase tracking-[0.2em]">
                2025 Data Stream
              </span>
            </div>
          </div>
        </div>

        {/* MAP CONTAINER */}
        <div className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center p-0 overflow-hidden cursor-crosshair">
          <ComposableMap
            width={800}
            height={400}
            projectionConfig={{ scale: 140, center: [0, 5] }}
            className="w-full h-full outline-none"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryName = geo.properties.name;
                  const rate = getRate(countryName);
                  const fill = getColor(rate);

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth={0.5}
                      onMouseMove={(e) => {
                        // Using clientX/Y for more reliable fixed positioning
                        setHovered({
                          name: countryName,
                          rate,
                          x: e.clientX,
                          y: e.clientY
                        });
                      }}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        default: { outline: "none", transition: "all 250ms" },
                        hover: { fill: "#fff", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {/* TOOLTIP */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.1 }}
                className="fixed pointer-events-none z-[9999] bg-black/90 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl"
                style={{
                  left: hovered.x + 15,
                  top: hovered.y + 15
                }}
              >
                <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Country Data</p>
                <h3 className="text-xl font-black text-white uppercase italic leading-none border-b border-white/10 pb-2 mb-2">
                  {hovered.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-mono font-black text-[#ff3b3b]">
                    {hovered.rate.toFixed(1)}
                  </span>
                  <span className="text-sm font-bold text-white/70">%</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FOOTER */}
        <div className="px-8 md:px-16 py-8 border-t border-white/10 bg-white/[0.01] flex flex-wrap justify-between items-center gap-6 relative z-10">
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">Stability</span>
              <div className="flex items-center gap-3">
                <div className="w-12 h-2 rounded-full bg-[hsl(195,85%,75%)]" />
                <span className="text-xs text-white font-bold tracking-tighter">Target &lt; 2%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">High Inflation</span>
              <div className="flex items-center gap-3">
                <div className="w-12 h-2 rounded-full bg-[hsl(285,85%,35%)]" />
                <span className="text-xs text-white font-bold tracking-tighter">15% +</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
