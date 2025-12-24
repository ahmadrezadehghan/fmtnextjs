'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cardData = [
  {
    path: '/orientation.png',
    text: "Use FMT broker's mobile apps",
    color: 'from-[#00ffcc] via-[#00d0ff] to-[#00ffcc]',
    glow: 'rgba(0, 255, 204, 1)', // Solid color for fill
    theme: '#00ffcc'
  },
  {
    path: '/tablet.png',
    text: "Trade anywhere with tablet support",
    color: 'from-[#00d0ff] via-[#bf40ff] to-[#00d0ff]',
    glow: 'rgba(0, 208, 255, 1)',
    theme: '#00d0ff'
  },
  {
    path: '/laptop.png',
    text: "Professional trading on your PC",
    color: 'from-[#bf40ff] via-[#ff4081] to-[#bf40ff]',
    glow: 'rgba(191, 64, 255, 1)',
    theme: '#bf40ff'
  },
  {
    path: '/internet.png',
    text: "Access from the web at any time",
    color: 'from-[#ff4081] via-[#00ffcc] to-[#ff4081]',
    glow: 'rgba(255, 64, 129, 1)',
    theme: '#ff4081'
  }
];

export default function CardGlow() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter italic">
            FLUID <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] via-[#bf40ff] to-[#ff4081] animate-gradient-x not-italic">PLATFORMS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>

        <p className="mt-20 max-w-3xl mx-auto text-center text-lg md:text-xl text-white/40 font-light leading-relaxed">
          Master forex trading with <span className="text-white font-medium">FMT Broker</span>.
          Simply click your device to begin trading with sophistication.
        </p>
      </div>

      <style>{`
          @keyframes gradient-x {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
              background-size: 200% 200%;
              animation: gradient-x 5s ease infinite;
          }
      `}</style>
    </section>
  );
}

function Card({ item, index }: { item: typeof cardData[0], index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative h-full"
    >
      {/* Outer Blur Glow behind the card */}
      <div className={`absolute -inset-2 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-[2rem]`} />

      <div
        className="relative z-10 bg-[#080808]/60 backdrop-blur-3xl rounded-[2rem] p-10 h-full flex flex-col items-center justify-center border border-white/5 transition-all duration-500 group-hover:-translate-y-3 group-hover:border-transparent overflow-hidden"
        style={{
          /* STRICT TOP AND BOTTOM INNER SHADOW ONLY */
          boxShadow: `
            inset 0 40px 40px -30px ${item.theme}66,
            inset 0 -40px 40px -30px ${item.theme}66
          `
        }}
      >
        {/* FULL SOLID COLOR FILL ON HOVER */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{ backgroundColor: item.theme }}
        />

        {/* Mouse Follow Light Effect (Visible only on hover) */}
        <div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, white, transparent 70%)`,
          }}
        />

        {/* Floating Icon Container */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 w-24 h-24 mb-8"
        >
          <Image
            src={item.path}
            alt={item.text}
            width={96}
            height={96}
            className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] group-hover:brightness-0 transition-all duration-500"
          />
          {/* Subtle Aura behind icon while unhovered */}
          <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} rounded-full blur-2xl opacity-10 group-hover:opacity-0 transition-opacity duration-500`} />
        </motion.div>

        <p className="relative z-20 text-lg font-black text-white/50 group-hover:text-black text-center tracking-tight leading-tight uppercase italic transition-all duration-500">
          {item.text}
        </p>

        {/* Dynamic Running Bar */}

      </div>
    </motion.div>
  );
}
