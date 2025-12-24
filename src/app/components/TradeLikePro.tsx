'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function TradeLikePro() {
    const reduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: { opacity: 0, y: 30, filter: 'blur(15px)' },
        show: (i = 0) => ({
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: reduceMotion
                ? { duration: 0.01 }
                : {
                    duration: 0.8,
                    delay: 0.1 * i,
                    ease: [0.21, 1.02, 0.47, 0.98]
                },
        }),
    };

    return (
        <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-transparent">
            {/* VIBRANT BACKGROUND ACCENTS */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-transparent blur-[140px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-transparent blur-[140px] rounded-full" />
            </div>

            <div className="relative container mx-auto px-5 sm:px-6">
                <div className="mx-auto max-w-7xl">

                    {/* TOP ROW: badge + chips */}
                    <motion.div
                        className="flex flex-col items-center gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            variants={fadeUp}
                            custom={0}
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-lg font-medium text-white backdrop-blur-xl shadow-2xl"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                            </span>
                            <span className="tracking-wide text-white/90">Premium execution • Pro analytics</span>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            custom={1}
                            className="flex flex-wrap items-center justify-center gap-3"
                        >
                            {['Forex', 'CFDs', 'Metals', 'Energies', 'Indices', 'Shares', 'Crypto'].map((t) => (
                                <motion.span
                                    key={t}
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    className="cursor-default rounded-full border border-white/10 bg-white/[0.05] px-6 py-2 text-sm font-semibold text-white/80 backdrop-blur-xl transition-all"
                                >
                                    {t}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* HERO CARD - MODIFIED: NO BG COLOR + INNER GRADIENT SHADOW */}
                    <motion.div
                        className="relative mt-16 rounded-[4rem] border border-white/20 p-10 sm:p-16 lg:p-20 shadow-2xl overflow-hidden group"
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            show: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1.2, ease: "easeOut" }
                            },
                        }}
                    >
                        {/* 1. THE INNER GRADIENT SHADOW LAYER */}
                        <div className="absolute inset-0 pointer-events-none rounded-[4rem] shadow-[inset_0_0_100px_rgba(191,64,255,0.15),inset_0_0_80px_rgba(0,208,255,0.15)]" />
                        <div className="absolute inset-0 pointer-events-none rounded-[4rem] bg-gradient-to-br from-purple-500/40 via-transparent to-teal-400/40" />

                        {/* 2. OPTIONAL: Animated Border Light Streak */}
                        <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -skew-x-12 pointer-events-none"
                        />

                        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
                            {/* LEFT: copy */}
                            <div className="text-center lg:text-left">
                                <motion.h2
                                    className="text-balance text-6xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl leading-[0.9]"
                                    variants={fadeUp}
                                    custom={2}
                                >
                                    Trade like a{' '}
                                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-300">
                                        Pro
                                        <motion.span
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ delay: 1, duration: 1 }}
                                            className="absolute -bottom-2 left-0 h-[4px] bg-gradient-to-r from-blue-400 to-emerald-400/50"
                                        />
                                    </span>
                                </motion.h2>

                                <motion.p
                                    className="mt-10 max-w-2xl text-pretty text-xl leading-relaxed text-slate-400 sm:text-2xl"
                                    variants={fadeUp}
                                    custom={3}
                                >
                                    Institutional-grade charts, ultra-fast execution, and advanced risk controls—engineered for the next generation of traders.
                                </motion.p>

                                {/* Mini Features Grid */}
                                <motion.div
                                    className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
                                    variants={fadeUp}
                                    custom={4}
                                >
                                    {[
                                        { title: 'Sub-ms routing', desc: 'Fast path delivery' },
                                        { title: 'Deep liquidity', desc: 'Tighter spreads' },
                                        { title: 'Pro analytics', desc: 'Signals + insights' },
                                        { title: 'Risk controls', desc: 'Smart protection' },
                                    ].map((f) => (
                                        <motion.div
                                            key={f.title}
                                            whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                                            className="group rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                </span>
                                                <div>
                                                    <p className="text-base font-bold text-white/90">{f.title}</p>
                                                    <p className="text-xs text-slate-500">{f.desc}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* CTAs */}
                                <motion.div
                                    className="mt-14 flex flex-col items-stretch gap-6 sm:flex-row sm:items-center"
                                    variants={fadeUp}
                                    custom={5}
                                >
                                    <motion.a
                                        href="#"
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-10 py-5 text-xl font-bold text-white transition-all"
                                    >
                                        Start Trading Pro
                                        <svg className="h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                    </motion.a>

                                    <motion.a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-10 py-5 text-xl font-bold text-white backdrop-blur-xl hover:bg-white/10 transition-all"
                                    >
                                        View Accounts
                                    </motion.a>
                                </motion.div>
                            </div>

                            {/* RIGHT: WIDGETS - Using Inner Shadows for consistency */}
                            <motion.div
                                className="relative lg:pl-10"
                                variants={fadeUp}
                                custom={4}
                            >
                                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 p-10 backdrop-blur-3xl shadow-[inset_0_0_50px_rgba(255,255,255,0.02)]">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-black uppercase tracking-widest text-blue-400/80">Live Terminal</p>
                                            <p className="text-3xl font-black text-white mt-2">FMT Pro Suite</p>
                                        </div>
                                        <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-purple-500/50 via-blue-500/50 to-teal-400/50 p-[1.5px]">
                                            <div className="h-full w-full rounded-full bg-slate-950 flex items-center justify-center text-sm font-bold text-white">
                                                PRO
                                            </div>
                                        </div>
                                    </div>

                                    {/* Metric Grid */}
                                    <div className="mt-10 grid grid-cols-3 gap-4">
                                        {[
                                            { k: '0.01s', v: 'Latency', color: 'text-emerald-400' },
                                            { k: 'RAW', v: 'Spreads', color: 'text-blue-400' },
                                            { k: '1:500', v: 'Leverage', color: 'text-purple-400' },
                                        ].map((m) => (
                                            <div key={m.k} className="rounded-2xl bg-white/[0.03] border border-white/5 p-5 text-center shadow-inner">
                                                <div className={`text-2xl font-black ${m.color}`}>{m.k}</div>
                                                <div className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">{m.v}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Animated Chart */}
                                    <div className="mt-10 rounded-2xl bg-black/20 border border-white/5 p-6 shadow-inner">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Growth Index</span>
                                            <span className="flex items-center gap-2 text-lg text-emerald-400/80 font-black">
                                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" /> +12.4%
                                            </span>
                                        </div>
                                        <svg viewBox="0 0 400 100" className="w-full stroke-blue-500/60 fill-none filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">
                                            <motion.path
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                d="M0,80 Q50,20 100,70 T200,40 T300,60 T400,10"
                                            />
                                        </svg>
                                    </div>

                                    <button className="mt-10 w-full py-5 rounded-2xl bg-white text-black font-black text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all">
                                        Deposit Now
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* FOOTER NOTE */}
                    <motion.p
                        className="mx-auto mt-12 max-w-3xl text-center text-[10px] uppercase tracking-[0.3em] leading-relaxed text-slate-600 font-medium"
                        variants={fadeUp}
                        custom={6}
                    >
                        Risk Warning: Capital at risk. Trading involves significant risk of loss.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
