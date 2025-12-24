'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const platforms = [
    {
        name: 'Android MT4',
        logo: '/android_meta4.png',
        link: 'https://downloads.metaquotes.net/mt4/android/mt4.apk',
        direct: true,
        colors: 'from-[#3DDC84] via-[#00ffcc] to-[#3DDC84]',
        innerShadow: 'rgba(61, 220, 132, 1)' // Full opacity for fill
    },
    {
        name: 'iOS MT4',
        logo: '/ios_meta4.png',
        link: 'https://apps.apple.com/app/metatrader-4/id496212596',
        direct: false,
        colors: 'from-[#00d0ff] via-[#ffffff] to-[#00d0ff]',
        innerShadow: 'rgba(0, 208, 255, 1)'
    },
    {
        name: 'PC MT4',
        logo: '/pc_meta4.png',
        link: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/mt4setup.exe',
        direct: true,
        colors: 'from-[#bf40ff] via-[#00d0ff] to-[#bf40ff]',
        innerShadow: 'rgba(226, 64, 255, 1)'
    },
    {
        name: 'Android MT5',
        logo: '/android_meta5.png',
        link: 'https://downloads.metaquotes.net/mt5/android/mt5.apk',
        direct: true,
        colors: 'from-[#00ffcc] via-[#3DDC84] to-[#00ffcc]',
        innerShadow: 'rgba(0, 255, 195, 1)'
    },
    {
        name: 'iOS MT5',
        logo: '/ios_meta5.png',
        link: 'https://apps.apple.com/app/metatrader-5/idXXXXXXXXX',
        direct: false,
        colors: 'from-[#ff4081] via-[#bf40ff] to-[#ff4081]',
        innerShadow: 'rgba(128, 0, 255, 1)'
    },
    {
        name: 'PC MT5',
        logo: '/pc_meta5.png',
        link: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe',
        direct: true,
        colors: 'from-[#00d0ff] via-[#00ffcc] to-[#00d0ff]',
        innerShadow: 'rgba(0, 110, 255, 1)'
    },
];

export default function PlatformsSection() {
    return (
        <section className="relative py-24 bg-transparent overflow-hidden">
            <div className="w-full text-center px-5 mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight"
                >
                    EXPERIENCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] via-[#bf40ff] to-[#00d0ff] animate-gradient-x">ELITE TRADING</span>
                </motion.h1>
                <p className="text-white/30 text-xl mt-6 font-light max-w-2xl mx-auto">
                    Access the world's most powerful trading engines on any device.
                </p>
            </div>

            <div className="container mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {platforms.map((p, i) => (
                        <PlatformCard key={i} platform={p} index={i} />
                    ))}
                </div>
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
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite linear;
                }
            `}</style>
        </section>
    );
}

function PlatformCard({ platform, index }: { platform: any; index: number }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.8 }}
            onMouseMove={handleMouseMove}
            className="group relative h-full"
        >
            <a
                href={platform.link}
                {...(platform.direct ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                className="block relative z-10 overflow-hidden border border-white/5 rounded-[3rem] p-12 flex flex-col items-center justify-between min-h-[450px] transition-all duration-500 group-hover:-translate-y-4 group-hover:border-transparent"
                style={{
                    // Initial dark background
                    backgroundColor: 'rgba(10, 10, 10, 0.4)',
                    boxShadow: `
                        inset 0 50px 30px -40px ${platform.innerShadow},
                        inset 0 -50px 50px -20px ${platform.innerShadow}
                    `,
                }}
            >
                {/* FULL BACKGROUND FILL LAYER */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                    style={{ backgroundColor: platform.innerShadow }}
                />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

                <div className="relative z-20 w-full flex flex-col items-center">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                        className="relative w-44 h-44 mb-10 flex items-center justify-center"
                    >
                        <img
                            src={platform.logo}
                            alt={platform.name}
                            className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:brightness-0 group-hover:invert transition-all duration-500"
                        />
                    </motion.div>

                    <span className="text-3xl font-black text-white/40 group-hover:text-black uppercase tracking-[0.25em] italic transition-all duration-500 text-center leading-none">
                        {platform.name}
                    </span>
                </div>

                <div className="relative z-20 w-full mt-8">
                    <div className="flex items-center justify-center space-x-2 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-black">Download Now</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-black animate-pulse" />
                    </div>
                </div>
            </a>
        </motion.div>
    );
}
