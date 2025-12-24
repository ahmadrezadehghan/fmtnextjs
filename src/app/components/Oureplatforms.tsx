"use client";

import React from "react";
import Image from "next/image";

export default function OnAnyDeviceHero() {
    const leftSvg = "/image.svg";
    const videoLeft = "/videoleft.mp4";
    const videoRight = "/videoright.mp4";

    return (
        <section className="relative w-full bg-black py-32 lg:py-60 overflow-hidden">
            {/* 1. AMBIENT CIRCULAR BLUR (Centered under sides) */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Left Side Spotlight (Teal/Cyan) */}
                <div
                    className="absolute left-[15%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full opacity-80 blur-[120px]"
                    style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)' }}
                />
                {/* Right Side Spotlight (Purple) */}
                <div
                    className="absolute right-[15%] top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full opacity-80 blur-[140px]"
                    style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.45) 0%, transparent 70%)' }}
                />
            </div>

            <style>{`
        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .running-border {
          position: relative;
          padding: 2px;
          background: linear-gradient(90deg, #7c3aed, #3b82f6, #06b6d4, #7c3aed);
          background-size: 300% 300%;
          animation: border-flow 4s ease infinite;
        }
        .inner-content {
          background: #000;
          width: 100%;
          height: 100%;
          position: relative;
        }
      `}</style>

            <div className="relative z-10 w-full flex flex-col items-center justify-center lg:flex-row lg:justify-between px-6 lg:px-16">

                {/* LEFT PLATFORM: Tablet (image.svg) + Video */}
                <div className="relative hidden lg:flex flex-none items-end justify-start w-[32%] xl:w-[38%] lg:-translate-x-16">
                    {/* Tablet with Running Border */}
                    <div className="running-border z-0 h-[480px] w-[350px] rounded-[2.5rem] xl:h-[620px] xl:w-[450px] shadow-[0_0_60px_rgba(6,182,212,0.3)]">
                        <div className="inner-content rounded-[2.4rem] overflow-hidden">
                            <Image src={leftSvg} alt="Interface" fill className="object-cover" priority />
                        </div>
                    </div>

                    {/* Phone Video with Running Border */}
                    <div className="running-border z-10 -ml-44 mb-[-50px] h-[420px] w-[210px] rounded-[3rem] xl:h-[550px] xl:w-[260px] shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
                        <div className="inner-content rounded-[2.9rem] overflow-hidden">
                            <video src={videoLeft} className="h-full w-full object-cover" autoPlay muted loop playsInline />
                        </div>
                    </div>
                </div>

                {/* CENTER TEXT */}
                <div className="flex flex-col items-center text-center max-w-2xl lg:w-1/3 z-20">
                    <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.05] mb-10">
                        {/* PURPLE BLUE TEAL GRADIENT TEXT */}
                        <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            On any <br /> device
                        </span>
                    </h1>

                    <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-14 max-w-md">
                        Ultimate in trading convenience. Charting at its finest —
                        synced across web, mobile, and desktop apps.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
                        <button className="flex items-center justify-center gap-4 rounded-full bg-white px-12 py-5 text-black hover:bg-teal-400 transition-all transform hover:scale-105 shadow-xl">
                            <span className="font-bold text-lg">Desktop app</span>
                            <div className="h-4 w-5 rounded-sm border-2 border-black" />
                        </button>
                        <button className="flex items-center justify-center gap-4 rounded-full border-2 border-white/20 bg-black/40 backdrop-blur-md px-12 py-5 text-white hover:border-white transition-all transform hover:scale-105">
                            <span className="font-bold text-lg">Mobile apps</span>
                            <div className="h-5 w-3 rounded-sm border-2 border-white" />
                        </button>
                    </div>
                </div>

                {/* RIGHT PLATFORM: Desktop Video */}
                <div className="relative hidden lg:flex flex-none justify-end w-[32%] xl:w-[38%] lg:translate-x-16">
                    <div className="running-border h-[480px] w-[600px] rounded-2xl xl:h-[580px] xl:w-[850px] shadow-[0_60px_120px_rgba(0,0,0,1)]">
                        <div className="inner-content rounded-[14px] overflow-hidden">
                            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-6 py-5">
                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-white/20" />
                                    <div className="h-3 w-3 rounded-full bg-white/20" />
                                    <div className="h-3 w-3 rounded-full bg-white/20" />
                                </div>
                            </div>
                            <video src={videoRight} className="h-full w-full object-cover" autoPlay muted loop playsInline />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
