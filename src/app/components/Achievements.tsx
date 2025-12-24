'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const achievements = [
  { value: 'Global', title: 'Worldwide Access', description: 'Launch your trading journey from over 100 countries with localized support.' },
  { value: '24/7', title: 'Elite Support', description: 'Multilingual expert assistance ensuring uninterrupted trading day and night.' },
  { value: 'Low', title: 'Premium Fees', description: 'Transparent, industry-leading structures to maximize your capital efficiency.' },
  { value: 'Secure', title: 'Bank-Grade', description: 'End-to-end encryption adhering to the highest global security protocols.' },
];

const StarShape = ({ className, style }: { className?: string, style?: any }) => (
  <div
    className={`absolute bg-yellow-400/10 backdrop-blur-[25px] ${className}`}
    style={{
      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      ...style
    }}
  />
);

const AchievementNebula = ({ item, index }: { item: typeof achievements[0], index: number }) => {
  const nebulaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: nebulaRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const smoothRotate = useSpring(rotate, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      ref={nebulaRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
      className="relative group h-full flex flex-col items-center justify-between py-16 px-8"
    >
      {/* Running Animation Wrapper - Increased max-width */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.6
        }}
        className="relative w-full aspect-square max-w-[300px] flex items-center justify-center"
      >

        {/* Layer 1: The Luminous Halo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/25 to-transparent blur-[70px] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

        {/* Layer 2: Rear Decorative Star */}
        <motion.div style={{ rotate: smoothRotate }} className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
          <StarShape className="w-full h-full border border-white/10 scale-110" />
        </motion.div>

        {/* Layer 3: Main Refractive Star - Transparent Glassy Yellow */}
        <div className="relative w-4/5 h-4/5 z-10 flex items-center justify-center">
          <StarShape className="w-full h-full border border-yellow-500/30 shadow-[0_0_50px_rgba(255,215,0,0.1)]" />

          {/* Luminous Border Edge */}
          <div className="absolute inset-0 p-[2px] bg-gradient-to-tr from-[#FFD700] via-transparent to-[#FFD700]/40 opacity-70"
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude'
            }}
          />

          <span className="relative z-20 text-[clamp(1.5rem,4vw,2.2rem)] font-black text-white tracking-tighter group-hover:text-[#FFD700] transition-colors duration-500">
            {item.value}
          </span>
        </div>
      </motion.div>

      {/* TYPOGRAPHY - Increased Sizes */}
      <div className="relative z-40 mt-16 text-center flex flex-col flex-grow">
        <h3 className="text-[clamp(1.5rem,2.5vw,1.85rem)] font-bold text-white mb-5 tracking-tight">
          {item.title}
        </h3>
        <p className="text-[clamp(1rem,1.8vw,1.15rem)] text-white/60 leading-[1.7] font-normal max-w-[300px] mx-auto">
          {item.description}
        </p>
      </div>

      {/* BUTTON - Increased Scaling */}
      <button className="mt-10 px-8 py-3 rounded-full border border-white/20 text-sm font-black tracking-widest uppercase text-white/60 hover:text-white hover:border-[#FFD700] hover:bg-[#FFD700]/5 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300 transform hover:scale-105">
        Explore Detail
      </button>
    </motion.div>
  );
};

export default function Achievements() {
  return (
    <section className="relative w-full bg-transparent py-32 lg:py-52 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[90rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {achievements.map((item, idx) => (
            <AchievementNebula key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>

      {/* Background Depth Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-2/3 h-2/3 bg-transparent blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-2/3 h-2/3 bg-transparent blur-[180px] rounded-full" />
      </div>

      <style>{`
        body {
          -webkit-font-smoothing: antialiased;
          background: #020202;
        }
        button:focus-visible {
          outline: 3px solid #FFD700;
          outline-offset: 10px;
        }
      `}</style>
    </section>
  );
}
