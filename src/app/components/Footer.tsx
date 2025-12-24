'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// EXACT CurvedLine component logic from your code
const CurvedLine = () => {
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Colors kept as Purple/Blue/Teal spectrum
    const colors = ['#FFFFFF', 'rgba(0, 208, 255, 0.99)', 'rgba(191, 64, 255, 0.99)', 'rgba(0, 255, 204, 0.99)'];

    return (
        <div className="w-full h-96 relative overflow-hidden bg-black">
            <svg className="w-full h-96" viewBox="0 0 1000 220" preserveAspectRatio="none">
                {[...Array(50)].map((_, index) => {
                    const opacity = Math.max(0.05, Math.pow(0.95, index));
                    const yOffset = Math.pow(index, 1.5) * 1;
                    const xSpread = Math.min(100, index * 3);
                    const colorIndex = Math.floor((index / 30) * colors.length);
                    const color = colors[Math.min(colorIndex, colors.length - 1)];
                    const yValue = screenWidth < 1000 ? 150 : 50;

                    return (
                        <path
                            key={index}
                            d={`M-${xSpread},200 Q500,${yValue - yOffset} ${1000 + xSpread},200`}
                            fill="none"
                            stroke={color}
                            strokeWidth={7 - (index * 0.15)}
                            strokeOpacity={opacity}
                            style={{
                                filter: `blur(${Math.min(25, index * 0.9)}px)`
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
};

export default function Footer() {
    return (
        <footer className="relative z-10 text-white bg-black">
            {/* Top boundary curve */}
            <CurvedLine />



            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 border-t border-white/10">
                {/* Column 1: Brand Identity */}
                <div>
                    <Link href="/" className="inline-block mb-6">
                        <div className="flex font-extrabold text-[24px] tracking-tighter group">
                            <span className="text-[#bf40ff] drop-shadow-[0_0_10px_rgba(191,64,255,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(191,64,255,1)] transition-all">F</span>
                            <span className="text-[#00d0ff] drop-shadow-[0_0_10px_rgba(0,208,255,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(0,208,255,1)] transition-all">M</span>
                            <span className="text-[#00ffcc] drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(0,255,204,1)] transition-all">T</span>
                            <span className="text-white ml-2 uppercase">Broker</span>
                        </div>
                    </Link>
                    <p className="text-base text-gray-400 leading-relaxed">
                        FMT delivers top-tier service across 173 countries with innovative trading solutions.
                    </p>
                    <ul className="mt-6 space-y-3">
                        <li>
                            <Link href="/about" className="text-base text-gray-400 hover:text-[#00ffcc] transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/download" className="text-base text-gray-400 hover:text-[#00ffcc] transition">
                                Download App
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 2: Products */}
                <div>
                    <h4 className="text-lg font-bold uppercase tracking-widest text-white/40 mb-6">Products</h4>
                    <ul className="space-y-4">
                        {['Forex', 'Indices', 'Crypto CFDs'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-base text-gray-400 hover:text-[#00ffcc] transition-colors">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Platforms */}
                <div>
                    <h4 className="text-lg font-bold uppercase tracking-widest text-white/40 mb-6">Platforms</h4>
                    <ul className="space-y-4">
                        {['MetaTrader 4', 'MetaTrader 5', 'FMT Trade'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-base text-gray-400 hover:text-[#00d0ff] transition-colors">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Education */}
                <div>
                    <h4 className="text-lg font-bold uppercase tracking-widest text-white/40 mb-6">Education</h4>
                    <ul className="space-y-4">
                        {['FMT Blog', 'Training Courses', 'Economic Calendar'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-base text-gray-400 hover:text-[#bf40ff] transition-colors">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 5: Contact */}
                <div>
                    <h4 className="text-lg font-bold uppercase tracking-widest text-white/40 mb-6">Contact</h4>
                    <ul className="space-y-4">
                        <li>
                            <a href="tel:+442031515550" className="text-base font-bold text-gray-300 hover:text-[#00ffcc] transition">
                                +44 (0) 203 151 5550
                            </a>
                        </li>
                        <li>
                            <Link href="mailto:support@fmt.group" className="text-base text-gray-400 hover:text-[#00ffcc] transition">
                                support@fmt.group
                            </Link>
                        </li>
                        <li className="pt-4 text-sm text-gray-500 italic">
                            City of London, EC2V 5BQ, UK.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-900 py-10 bg-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center text-sm space-y-4 lg:space-y-0 text-gray-500">
                    <p className="max-w-2xl text-center lg:text-left">
                        <strong className="text-red-500/60 uppercase mr-2">Trade responsibly:</strong>
                        Trading CFDs is risky and may lead to permanent capital loss.
                        FMT Markets CR SRL is a subsidiary of FMT Group Ltd.
                    </p>
                    <div className="flex gap-8 font-bold uppercase tracking-widest">
                        <Link href="#" className="hover:text-white transition">Privacy</Link>
                        <Link href="#" className="hover:text-white transition">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
