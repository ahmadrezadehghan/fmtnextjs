"use client";

import React from "react";

const VideoBillboard = () => {
    return (
        <section className="relative w-full bg-black py-20 px-4 overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative group">

                {/* The Container */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-black shadow-[0_0_50px_rgba(0,0,0,1)] border border-white/10">

                    {/* Loop/Mute/Autoplay Video - 100% RAW, NO FILTERS */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full aspect-video object-cover"
                    >
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* ====== NEON BILLBOARD CENTERPIECE ====== */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="flex flex-col items-center">
                            {/* Neon "FMT" */}
                            <div className="flex font-extrabold text-[8vw] md:text-[120px] tracking-tighter animate-neon-pulse">
                                <span className="text-[#bf40ff] drop-shadow-[0_0_40px_rgba(191,64,255,1)] animate-flicker">F</span>
                                <span className="text-[#00d0ff] drop-shadow-[0_0_40px_rgba(0,208,255,1)] animate-flicker-delayed">M</span>
                                <span className="text-[#00ffcc] drop-shadow-[0_0_40px_rgba(0,255,204,1)] animate-flicker">T</span>
                                <span className="text-white ml-6 drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">BROKER</span>
                            </div>

                            {/* Subtitle LED effect */}
                            <div className="mt-2 px-4 py-2 border border-[#00d0ff]/40 bg-black/40 backdrop-blur-md rounded-sm">
                                <p className="text-[#00ffcc] font-mono tracking-[0.5em] text-[10px] md:text-xs uppercase animate-pulse">
                                    System Active • 24/7 Trading
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ultra-thin Glowing Frame */}
                    <div className="absolute inset-0 rounded-[2.5rem] border border-white/20 pointer-events-none" />
                </div>
            </div>

            <style >{`
                @keyframes flicker {
                    0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; filter: brightness(1); }
                    20%, 24%, 55% { opacity: 0.1; filter: brightness(0.5); }
                }

                @keyframes neon-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.01); }
                }

                .animate-flicker {
                    animation: flicker 3s infinite alternate;
                }

                .animate-flicker-delayed {
                    animation: flicker 5s infinite alternate-reverse;
                }

                .animate-neon-pulse {
                    animation: neon-pulse 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default VideoBillboard;
