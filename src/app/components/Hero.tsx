"use client";

import React, { useMemo } from "react";

type Item = {
    id: string;
    radius: number;
    angle: number;
    scale: number;
    kind: "candle" | "symbol";
    up?: boolean;
    bodyH?: number;
    topWickH?: number;    // Added top wick
    bottomWickH?: number; // Added bottom wick
    symbol?: string;
    duration: number;
    offset: number;
};

function mulberry32(seed: number) {
    return function () {
        let t = (seed += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const Hero = () => {
    const items = useMemo(() => {
        const rand = mulberry32(42);
        const symbols = [
            "$", "€", "£", "¥", "₿", "%", "BTC", "ETH", "USDT", "XAU",
            "EUR", "GBP", "USD", "CHF", "AUD", "CAD", "NZD", "XAG",
            "WTI", "BRENT", "NG", "US30", "NAS100", "SPX500", "DAX40",
            "FTSE100", "▲", "▼", "↗", "↘", "⇡", "⇣", "◆", "◈", "●", "○",
            "▮", "▯", "+", "-", "×", "≋"
        ];
        const out: Item[] = [];

        const N = 100;
        for (let i = 0; i < N; i++) {
            const r = rand();
            const kind: Item["kind"] = r < 0.7 ? "candle" : "symbol";

            out.push({
                id: `item_${i}`,
                kind,
                radius: 18 + rand() * 32,
                angle: rand() * 360,
                scale: 0.4 + rand() * 0.8,
                duration: 12 + rand() * 22,
                offset: rand() * -20,
                symbol: symbols[Math.floor(rand() * symbols.length)],
                up: rand() > 0.5,
                bodyH: 8 + rand() * 20,
                topWickH: 5 + rand() * 15,    // Randomized top wick
                bottomWickH: 5 + rand() * 15, // Randomized bottom wick
            });
        }
        return out;
    }, []);

    return (
        <section id="homefirst" className="relative w-full min-h-screen overflow-hidden bg-transparent flex items-center justify-center">

            {/* ====== BLACK HOLE VISUAL ENGINE ====== */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">

                    {/* The Core Singularity */}
                    <div className="relative z-10 w-[50vw] h-[50vw] max-w-[350px] max-h-[350px] md:max-w-[500px] md:max-h-[500px] rounded-full bg-black shadow-[0_0_80px_10px_rgba(168,85,247,0.3)]">
                        <div className="absolute inset-[-6px] rounded-full border-t-2 border-teal-400/40 animate-spin duration-[4s]" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-900/30 via-transparent to-blue-900/30 blur-2xl" />
                    </div>

                    <div className="absolute w-[90vw] max-w-[1000px] h-[30vh] max-h-[300px] rounded-[100%] border-t-[20px] border-blue-500/10 blur-3xl rotate-[12deg] animate-pulse" />

                    {/* ====== SPIRALING DATA ====== */}
                    {items.map((it) => (
                        <div
                            key={it.id}
                            className="absolute animate-vortex"
                            style={{
                                "--radius": `${it.radius}vw`,
                                "--start-angle": `${it.angle}deg`,
                                animationDuration: `${it.duration}s`,
                                animationDelay: `${it.offset}s`,
                                transform: `scale(${it.scale})`,
                            } as React.CSSProperties}
                        >
                            {it.kind === "candle" ? (
                                <div className={`candle-wrap ${it.up ? "up" : "down"}`}>
                                    {/* Top Line */}
                                    <div className="bh-wick" style={{ height: it.topWickH }} />
                                    {/* Body */}
                                    <div className="bh-body" style={{ height: it.bodyH }} />
                                    {/* Bottom Line */}
                                    <div className="bh-wick" style={{ height: it.bottomWickH }} />
                                </div>
                            ) : (
                                <span className="bh-symbol">{it.symbol}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* ====== HERO CONTENT ====== */}
            <div className="relative z-30 text-center px-4 flex flex-col items-center select-none">
                <div className="flex font-extrabold text-[10vw] sm:text-[60px] md:text-[80px] lg:text-[100px] tracking-tighter group transition-transform duration-500">
                    <span className="text-[#bf40ff] drop-shadow-[0_0_15px_rgba(191,64,255,0.8)] group-hover:drop-shadow-[0_0_25px_rgba(191,64,255,1)] transition-all duration-300">F</span>
                    <span className="text-[#00d0ff] drop-shadow-[0_0_15px_rgba(0,208,255,0.8)] group-hover:drop-shadow-[0_0_25px_rgba(0,208,255,1)] transition-all duration-300">M</span>
                    <span className="text-[#00ffcc] drop-shadow-[0_0_15px_rgba(0,255,204,0.8)] group-hover:drop-shadow-[0_0_25px_rgba(0,255,204,1)] transition-all duration-300">T</span>
                    <span className="text-white ml-3 sm:ml-5 opacity-90">BROKER</span>
                </div>

                <p className="mt-4 max-w-[280px] sm:max-w-xl text-teal-300 font-mono tracking-widest uppercase text-[10px] sm:text-sm md:text-base opacity-90 leading-relaxed">
                    Master the Gravitational Pull of the Market
                </p>

                <div className="mt-8 sm:mt-12 w-full flex justify-center">
                    <a href="#" className="group relative inline-block w-fit px-8 py-3 sm:px-12 sm:py-5 font-bold text-white transition-all text-xs sm:text-base">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-teal-500/40 rounded-full blur-[15px] group-hover:blur-[25px] transition-all" />
                        <div className="absolute inset-0 bg-black rounded-full border border-white/10 group-hover:border-white/20 transition-colors" />
                        <span className="relative z-10 tracking-[0.2em] whitespace-nowrap">
                            START TRADING
                        </span>
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes vortex {
                    from {
                        transform: rotate(var(--start-angle)) translateX(var(--radius)) rotate(calc(-1 * var(--start-angle)));
                        opacity: 0;
                    }
                    20% { opacity: 0.7; }
                    80% { opacity: 0.7; }
                    to {
                        transform: rotate(calc(var(--start-angle) + 360deg)) translateX(calc(var(--radius) * 0.2)) rotate(calc(-1 * (var(--start-angle) + 360deg)));
                        opacity: 0;
                    }
                }

                .animate-vortex {
                    animation-name: vortex;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    will-change: transform, opacity;
                }

                .candle-wrap {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    filter: drop-shadow(0 0 4px currentColor);
                }

                .up { color: #2dd4bf; }
                .down { color: #a855f7; }

                .bh-wick {
                    width: 1px;
                    background: currentColor;
                    opacity: 0.6;
                }

                .bh-body {
                    width: 6px;
                    background: currentColor;
                    border-radius: 1px;
                }

                .bh-symbol {
                    font-family: monospace;
                    font-weight: bold;
                    color: #60a5fa;
                    text-shadow: 0 0 8px #2c78f2ff;
                    font-size: clamp(0.8rem, 2vw, 1.2rem);
                }
            `}</style>
        </section>
    );
};

export default Hero;
