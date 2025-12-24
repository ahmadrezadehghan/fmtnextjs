"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Account {
    key: string;
    title: string;
    description: string;
    link: string;
    accent: string;
    innerShadowColor: string;
}

const accounts: Account[] = [
    {
        key: 'Standard',
        title: 'Standard Account',
        description: 'Ideal for balanced market entry. Access institutional liquidity with floating FMT spreads starting from 1.2 pips. Benefit from micro-lot trading capabilities across MT4/MT5, ensuring high-speed execution for retail strategies without the high entry barriers.',
        link: 'https://direct.FMT.group/en/register/ua/cri/2y6ueacdr',
        accent: 'from-[#00ffcc] to-[#00d0ff]',
        innerShadowColor: 'rgba(0, 255, 204, 0.15)',
    },
    {
        key: 'ECN',
        title: 'ECN Account',
        description: 'Engineered for the professional trader. Experience direct market access with raw spreads from 0.0 pips. Our ECN infrastructure ensures ultra-low latency execution and deep liquidity pooling, providing a transparent trading environment with competitive commission structures.',
        link: 'https://direct.FMT.group/en/register/ua/cri/2y6ueacdr',
        accent: 'from-[#00d0ff] to-[#bf40ff]',
        innerShadowColor: 'rgba(0, 208, 255, 0.15)',
    },
    {
        key: 'Ecn Pro',
        title: 'Ecn Pro Account',
        description: 'The pinnacle of high-frequency trading. Enjoy zero-spread consistency for over 90% of the trading day. This account is optimized for volume-heavy strategies, offering an exclusive rebate program that returns up to 21% of your commissions directly to your balance.',
        link: 'https://direct.FMT.group/en/register/ua/cri/2y6ueacdr',
        accent: 'from-[#bf40ff] to-[#ff4081]',
        innerShadowColor: 'rgba(191, 64, 255, 0.15)',
    },
    {
        key: 'Elite',
        title: 'Elite Account',
        description: 'Our most prestigious tier for institutional-grade performance. Featuring absolute zero spreads and a heavily discounted commission of just $2.5 per lot. Elite holders maximize profitability with our highest rebate tier of 25%, tailored for high-net-worth portfolio management.',
        link: 'https://direct.FMT.group/en/register/ua/cri/2y6ueacdr',
        accent: 'from-[#bf40ff] via-[#00d0ff] to-[#00ffcc]',
        innerShadowColor: 'rgba(0, 208, 255, 0.2)',
    },
];

export default function AccountsSection() {
    return (
        <section className="py-24 bg-transparent text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                        Select Your <span className="text-[#00ffcc]">Trading Power</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">
                        Tailored accounts designed for institutional performance and retail flexibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {accounts.map((acc, idx) => (
                        <motion.div
                            key={acc.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="group relative h-full"
                        >
                            {/* OUTER GLOW (Hover Only) */}
                            <div className={`absolute -inset-1 bg-gradient-to-br ${acc.accent} rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                            <div
                                // Added min-h-[550px] and increased py-12 to add height
                                className="relative h-full min-h-[550px] p-8 py-12 bg-[#0a0a0a]/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] flex flex-col justify-between overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.02]"
                                style={{
                                    boxShadow: `inset 0 20px 40px ${acc.innerShadowColor}, inset 0 -20px 40px ${acc.innerShadowColor}`
                                }}
                            >
                                {/* Glass Shimmer Effect */}
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-10">
                                        <span className={`px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-gradient-to-r ${acc.accent} rounded-md text-black`}>
                                            {acc.key}
                                        </span>
                                        <div className="text-4xl font-black text-white/[0.05] group-hover:text-white/10 transition-colors">
                                            0{idx + 1}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black mb-6 tracking-tight group-hover:text-white transition-colors uppercase italic leading-none">
                                        {acc.title}
                                    </h3>

                                    {/* Expanded Text Section */}
                                    <p className="text-sm text-white/50 leading-relaxed mb-8 font-light group-hover:text-white/70 transition-colors">
                                        {acc.description}
                                    </p>
                                </div>

                                <div className="relative z-10 pt-4">
                                    <a
                                        href={acc.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative flex items-center justify-center w-full py-5 text-xs font-black rounded-xl border border-white/10 bg-white/5 group-hover:border-transparent transition-all group/btn overflow-hidden"
                                    >
                                        <span className="relative z-10 uppercase tracking-[0.2em]">Open Account</span>
                                        <div className={`absolute inset-0 translate-y-full group-hover/btn:translate-y-0 bg-gradient-to-r ${acc.accent} transition-transform duration-500`} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
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
