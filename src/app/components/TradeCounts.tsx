'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Stat = {
    base: number;
    label: string;
    palette: string[];
};

function formatWithSpaces(n: number) {
    const s = Math.round(n).toString();
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function useOscillatingNumber(base: number, amplitude: number, periodMs: number, updateEveryMs: number = 700, step: number = 10) {
    const reduceMotion = useReducedMotion();
    const [val, setVal] = useState(base);

    useEffect(() => {
        if (reduceMotion) { setVal(base); return; }
        let raf = 0;
        const start = performance.now();
        let lastUpdate = 0;
        const tick = (t: number) => {
            const elapsed = t - start;
            if (t - lastUpdate >= updateEveryMs) {
                lastUpdate = t;
                const phase = (elapsed % periodMs) / periodMs;
                const wave = Math.sin(phase * Math.PI * 2);
                const raw = base + wave * amplitude;
                setVal(Math.round(raw / step) * step);
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [base, amplitude, periodMs, reduceMotion, updateEveryMs, step]);

    return val;
}

function NeonDigit({ ch, color, index }: { ch: string; color: string; index: number; }) {
    return (
        <motion.span
            className="inline-block leading-none"
            animate={{ opacity: [0.7, 1, 0.7], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.05 }}
            style={{
                color: 'transparent',
                WebkitTextStroke: '3.5px ' + color,
                textShadow: `0 0 20px ${color}33`,
            }}
        >
            {ch}
        </motion.span>
    );
}

export default function TradeCounts() {
    const stats: Stat[] = useMemo(() => [
        { base: 3965140, label: 'Traders connected', palette: ['#A855F7', '#3B82F6', '#2DD4BF'] },
        { base: 355281122, label: 'Live orders executed', palette: ['#2DD4BF', '#3B82F6', '#A855F7'] },
    ], []);

    const left = useOscillatingNumber(stats[0].base, 4200, 30000, 900, 50);
    const right = useOscillatingNumber(stats[1].base, 220000, 45000, 1200, 500);

    return (
        <section className="relative py-32 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* BRANDING HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center mb-24 text-center"
                >
                    <div className="flex items-center gap-5 mb-6 ">
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-500" />
                        <span className="text-sm text-4xl md:text-4xl font-black tracking-[0.4em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400">
                            FMT Broker
                        </span>
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-teal-500" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                        Precision in every <span className="italic opacity-50">execution.</span>
                    </h2>
                </motion.div>

                {/* MINIMALIST STATS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

                    {/* Left Stat */}
                    <div className="flex flex-col items-center lg:items-start space-y-6">
                        <div className="text-6xl md:text-8xl font-black tracking-tighter flex items-baseline gap-1">
                            {Array.from(formatWithSpaces(left)).map((ch, i) => (
                                ch === ' ' ? <span key={i} className="w-[0.3ch]">&nbsp;</span> :
                                    <NeonDigit key={i} ch={ch} color={stats[0].palette[i % 3]} index={i} />
                            ))}
                        </div>
                        <p className="text-lg font-bold uppercase tracking-widest text-white/30 border-l border-white/20 pl-4">
                            {stats[0].label}
                        </p>
                    </div>

                    {/* Right Stat */}
                    <div className="flex flex-col items-center lg:items-end space-y-6 text-right">
                        <div className="text-6xl md:text-8xl font-black tracking-tighter flex items-baseline gap-1">
                            {Array.from(formatWithSpaces(right)).map((ch, i) => (
                                ch === ' ' ? <span key={i} className="w-[0.3ch]">&nbsp;</span> :
                                    <NeonDigit key={i} ch={ch} color={stats[1].palette[i % 3]} index={i} />
                            ))}
                        </div>
                        <p className="text-lg font-bold uppercase tracking-widest text-white/30 border-r border-white/20 pr-4">
                            {stats[1].label}
                        </p>
                    </div>

                </div>
            </div>

            {/* LIGHT ATMOSPHERE (No boxes, just glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/5 blur-[140px] rounded-full" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-500/5 blur-[140px] rounded-full" />
            </div>
        </section>
    );
}
