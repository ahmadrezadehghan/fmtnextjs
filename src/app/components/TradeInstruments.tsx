"use client";
import React from 'react';

const instruments = [
    {
        name: 'Forex',
        emoji: '💱',
        color: 'from-[#bf40ff]',
        shadow: 'shadow-[inset_0_20px_40px_rgba(191,64,255,0.1),inset_0_-20px_40px_rgba(191,64,255,0.05)]',
        accent: 'bg-[#bf40ff]'
    },
    {
        name: 'Indices',
        emoji: '📈',
        color: 'from-[#00d0ff]',
        shadow: 'shadow-[inset_0_20px_40px_rgba(0,208,255,0.1),inset_0_-20px_40px_rgba(0,208,255,0.05)]',
        accent: 'bg-[#00d0ff]'
    },
    {
        name: 'Stocks',
        emoji: '🏦',
        color: 'from-[#00ffcc]',
        shadow: 'shadow-[inset_0_20px_40px_rgba(0,255,204,0.1),inset_0_-20px_40px_rgba(0,255,204,0.05)]',
        accent: 'bg-[#00ffcc]'
    },
    {
        name: 'Commodities',
        emoji: '⚖️',
        color: 'from-white',
        shadow: 'shadow-[inset_0_20px_40px_rgba(255,255,255,0.1),inset_0_-20px_40px_rgba(255,255,255,0.05)]',
        accent: 'bg-white'
    },
];

export default function TradeInstruments() {
    return (
        <section className="relative container mx-auto px-6 py-24 text-center overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[160px] rounded-full -z-10 animate-pulse" />

            {/* Title Section */}
            <div className="mb-20">
                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                    Trade <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf40ff] via-[#00d0ff] to-[#00ffcc]">Global Markets</span> <br /> with Precision
                </h2>
                <p className="text-lg md:text-2xl text-white/40  mx-auto font-light leading-relaxed">
                    Institutional-grade execution with <span className="text-white font-semibold">ultra-low latency</span>. Your bridge to global liquidity.
                </p>
            </div>

            {/* Instruments Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24">
                {instruments.map(({ name, emoji, color, shadow, accent }) => (
                    <div
                        key={name}
                        className={`group relative bg-white/[0.01] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-12 flex flex-col items-center transition-all duration-700 hover:-translate-y-4 hover:border-white/20 hover:bg-white/[0.04] ${shadow} overflow-hidden`}
                    >
                        {/* 1. SHIMMER SWEEP ANIMATION */}
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

                        {/* 2. HOVER GLOW RADIAL */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)] ${color}`} />

                        {/* Emoji with Neon Drop Shadow */}
                        <div className={`text-6xl mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 ease-out z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]`}>
                            {emoji}
                        </div>

                        <span className="text-white/60 group-hover:text-white font-black text-2xl tracking-widest uppercase transition-all duration-500 z-10">
                            {name}
                        </span>



                        {/* Corner Accent for "Pro" look */}
                        <div className={`absolute top-0 right-0 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${accent}`} />
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#bf40ff] via-[#00d0ff] to-[#00ffcc] rounded-2xl blur-lg opacity-25 group-hover:opacity-60 group-hover:duration-200 duration-1000 animate-pulse" />

                <button
                    type="button"
                    onClick={() => window.open('https://direct.FMT.group/en/register/ua/cri/2y6ueacdr', '_blank', 'noopener')}
                    className="relative flex items-center px-16 py-6 bg-[#050505] rounded-2xl text-white font-black text-xl uppercase tracking-[0.3em] transition-all duration-500 border border-white/10 group-hover:border-white/30 group-hover:bg-black group-hover:scale-[1.05]"
                >
                    Open Pro Account
                    <svg className="w-6 h-6 ml-4 transition-transform group-hover:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </div>

            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 1.5s infinite linear;
                }
            `}</style>
        </section>
    );
}
