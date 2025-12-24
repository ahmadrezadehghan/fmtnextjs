'use client';

import Image from 'next/image';

const sections = [
    { title: 'Forex', color: '#bf40ff' },
    { title: 'Metals', color: '#00d0ff' },
    { title: 'Crypto', color: '#ff7b00' },
    { title: 'Indices', color: '#ffffff' },
    { title: 'Shares', color: '#408cff' },
    { title: 'Energy', color: '#ffff00' },
    { title: 'ETFs', color: '#00ff6e' },
];

export default function Flags() {
    return (
        /* OUTSIDE WRAPPER */
        <div className="relative mt-32 mb-32 z-20 mx-auto w-[98%] max-w-[1600px] p-[1.5px] rounded-[60px] group/container">

            {/* 1. SYNCED AMBIENT GLOW (Matches the running border color) */}
            <div className="absolute -inset-6 rounded-[70px] pointer-events-none group-hover/container:opacity-0 transition-opacity duration-700 blur-[60px] opacity-60 overflow-hidden">
                <div className="absolute inset-0 animate-border-flow bg-[length:300%_300%] bg-gradient-to-r from-[#bf40ff] via-[#00d0ff] to-[#00ffcc]" />
            </div>

            {/* 2. SLIM RUNNING GRADIENT BORDER (1.5px width) */}
            <div className="absolute inset-0 rounded-[60px] p-[1.5px] pointer-events-none group-hover/container:opacity-0 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-[60px] animate-border-flow bg-[length:300%_300%] bg-gradient-to-r from-[#bf40ff] via-[#00d0ff] to-[#00ffcc] [mask-image:linear-gradient(white,white),linear-gradient(white,white)] [mask-clip:content-box,border-box] [mask-composite:intersect]" />
            </div>

            {/* MAIN CONTAINER */}
            <section className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-[#050505] rounded-[58px] overflow-hidden relative border border-white/5 shadow-2xl">

                {/* Background Base */}
                <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
                    <Image
                        src="/Country Flag.png"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Panel Container */}
                <div className="absolute inset-0 flex flex-nowrap w-full">
                    {sections.map((sec, idx) => (
                        <div
                            key={idx}
                            className="relative flex-1 h-full group cursor-pointer transition-all duration-700 hover:flex-[2.2] border-r border-white/5 last:border-r-0 min-w-0"
                        >
                            {/* COLOR REVEAL ON HOVER */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                                <div className="absolute inset-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
                                    <Image
                                        src="/Country Flag.png"
                                        alt="Background Original"
                                        fill
                                        className="object-cover grayscale-0"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>

                            {/* INDIVIDUAL NEON LIGHT BARS */}
                            <div
                                className="absolute top-0 inset-x-0 h-[4px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
                                style={{
                                    backgroundColor: sec.color,
                                    boxShadow: `0 0 30px 6px ${sec.color}`
                                }}
                            />
                            <div
                                className="absolute bottom-0 inset-x-0 h-[4px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
                                style={{
                                    backgroundColor: sec.color,
                                    boxShadow: `0 0 30px 6px ${sec.color}`
                                }}
                            />

                            {/* TEXT CONTENT */}
                            <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
                                <span className="text-white/20 group-hover:text-white/80 font-mono text-[10px] md:text-xs mb-4 transition-colors tracking-[0.3em]">
                                    0{idx + 1}
                                </span>

                                <h3 className="text-white transition-all duration-500 font-black text-sm sm:text-lg md:text-2xl lg:text-4xl uppercase tracking-[0.1em] leading-none opacity-40 group-hover:opacity-100 group-hover:scale-110 px-1 truncate w-full">
                                    {sec.title}
                                </h3>

                                <div
                                    className="absolute w-40 h-40 rounded-full blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                                    style={{ backgroundColor: sec.color }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style>{`
                @keyframes border-flow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-border-flow {
                    animation: border-flow 8s linear infinite;
                }
            `}</style>
        </div>
    );
}
