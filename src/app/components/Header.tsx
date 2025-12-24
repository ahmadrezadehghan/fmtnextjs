"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_DATA = {
    Products: [
        { title: "Supercharts", desc: "Advanced financial visualization" },
        { title: "Screeners", desc: "Filter stocks and crypto" },
        { title: "Economic Calendar", desc: "Key global events" },
        { title: "News", desc: "Real-time market updates" },
    ],
    Community: [
        { title: "Ideas", desc: "Daily trading setups" },
        { title: "Scripts", desc: "Custom indicators & strategies" },
        { title: "Streams", desc: "Watch experts trade live" },
        { title: "Trade Wall", desc: "Community sentiment" },
    ],
    Markets: [
        { title: "Crypto", desc: "Bitcoin and Altcoins" },
        { title: "Forex", desc: "Global currency pairs" },
        { title: "Stocks", desc: "US and Global equities" },
        { title: "Indices", desc: "S&P 500, Nasdaq, DAX" },
    ],
    Brokers: [
        { title: "Top Rated", desc: "Best overall platforms" },
        { title: "Comparison", desc: "Side-by-side analysis" },
        { title: "User Reviews", desc: "Verified trader feedback" },
        { title: "Broker Awards", desc: "2024 industry winners" },
    ]
};

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [open]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[100] h-[70px] bg-[#000000] flex items-center border-b border-[#2a2e39]">
                <div className="w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between gap-4 md:gap-10">

                    {/* LEFT: Branded Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-105">
                            {/* <div className="w-10 h-10 bg-[#131722] rounded-lg flex items-center justify-center border border-[#2a2e39] shadow-lg shadow-white/5">
                                <svg viewBox="0 0 28 28" className="w-6 h-6 fill-white">
                                    <path d="M4 4h20v20H4V4zm5 5v2h10V9H9zm0 4v2h10v-2H9zm0 4v2h6v-2H9z" />
                                </svg>
                            </div> */}
                            <div className="flex font-extrabold text-[22px] tracking-tighter hidden md:flex group">
                                <span className="text-[#bf40ff] drop-shadow-[0_0_10px_rgba(191,64,255,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(191,64,255,1)] transition-all">F</span>
                                <span className="text-[#00d0ff] drop-shadow-[0_0_10px_rgba(0,208,255,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(0,208,255,1)] transition-all">M</span>
                                <span className="text-[#00ffcc] drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(0,255,204,1)] transition-all">T</span>
                                <span className="text-white ml-2">BROKER</span>
                            </div>
                        </Link>
                    </div>

                    {/* CENTER: Search & Nav with Dropdowns */}
                    <div className="flex flex-1 items-center justify-center gap-6">
                        <div className="relative w-full max-w-[160px] md:max-w-[240px] group/search">
                            <button className="flex items-center gap-3 bg-[#2a2e39] hover:bg-[#363a45] px-4 py-2 rounded-full w-full transition-all duration-200 border border-transparent hover:border-[#434651]">
                                <svg className="w-4 h-4 text-[#b2b5be] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span className="text-[14px] text-[#b2b5be] font-semibold truncate">Search</span>
                            </button>
                        </div>

                        <nav className="hidden xl:flex items-center gap-2 h-[70px]">
                            {Object.entries(NAV_DATA).map(([item, subItems]) => (
                                <div key={item} className="relative group/nav h-full flex items-center">
                                    <button className="px-4 py-2 text-[16px] font-bold text-[#b2b5be] group-hover/nav:text-white transition-all whitespace-nowrap h-full">
                                        {item}
                                    </button>

                                    {/* DROPDOWN MENU */}
                                    <div className="absolute top-[70px] left-0 w-[550px] bg-[#1e222d] border border-[#2a2e39] rounded-xl shadow-2xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 p-6 z-[200]">
                                        <h4 className="text-[11px] font-black text-[#5d606b] uppercase tracking-[0.2em] border-b border-[#2a2e39] pb-3 mb-4">
                                            {item} Overview
                                        </h4>
                                        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                                            {subItems.map((sub, idx) => (
                                                <Link key={idx} href="#" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#2a2e39] transition-all group/item">
                                                    {/* ICON PLACEHOLDER */}
                                                    <div className="w-10 h-10 rounded-lg bg-[#2a2e39] group-hover/item:bg-[#363a45] flex-shrink-0 flex items-center justify-center transition-colors">
                                                        <div className="w-5 h-5 rounded-full bg-[#434651]" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-white font-bold group-hover/item:text-[#2962ff] transition-colors leading-tight">
                                                            {sub.title}
                                                        </span>
                                                        <span className="text-[13px] text-[#b2b5be] mt-1 line-clamp-1">
                                                            {sub.desc}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="flex items-center gap-6 flex-shrink-0">
                        <div className="hidden sm:flex items-center gap-4 text-white">
                            <button className="flex items-center gap-2 hover:text-[#2962ff] transition-colors group">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <span className="text-[15px] font-bold tracking-wide">EN</span>
                            </button>

                            <Link href="/signin" className="hover:text-[#2962ff] transition-colors">
                                <svg className="w-7 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="none">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </Link>
                        </div>

                        <Link
                            href="/get-started"
                            className="trapezoid-btn relative px-5 py-2.5 text-white text-[13px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 flex items-center justify-center group/btn"
                        >
                            <span className="unskew-text group-hover/btn:italic transition-all">Register Now</span>
                        </Link>

                        <button onClick={() => setOpen(!open)} className="lg:hidden p-1 text-[#b2b5be] hover:text-white transition-all z-[110]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 bg-[#000000] z-[105] lg:hidden transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
                <nav className="flex flex-col pt-[40px] px-8 gap-4 h-full overflow-y-auto bg-[#000000]">
                    <button onClick={() => setOpen(false)} className="flex items-center gap-3 text-[#b2b5be] hover:text-white py-6 transition-colors group">
                        <svg className="w-7 h-7 transition-transform group-hover:-translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-lg font-black uppercase tracking-[0.2em]">Back</span>
                    </button>

                    {Object.keys(NAV_DATA).map((item) => (
                        <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setOpen(false)} className="text-4xl font-black text-white py-6 border-b border-[#2a2e39] flex justify-between items-center active:bg-white/5 tracking-tighter">
                            {item}
                        </Link>
                    ))}

                    <div className="flex justify-end items-center gap-8 mt-10 pb-10">
                        <button className="flex items-center gap-3 text-white">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            <span className="text-2xl font-bold">EN</span>
                        </button>
                        <Link href="/signin" onClick={() => setOpen(false)} className="text-[#2962ff]">
                            <svg className="w-11 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="none">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </Link>
                    </div>
                </nav>
            </div>

            <style>{`
                .trapezoid-btn {
                    background: linear-gradient(90deg, #2962ff, #9c27b0, #2962ff);
                    background-size: 200% auto;
                    transform: skew(-15deg);
                    border-radius: 10px;
                    animation: running-gradient 3s linear infinite;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .unskew-text { transform: skew(15deg); display: block; }
                @keyframes running-gradient { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
                @media (max-width: 600px) {
                    .trapezoid-btn { padding: 8px 18px; font-size: 11px; transform: skew(-10deg); }
                    .unskew-text { transform: skew(10deg); }
                }
            `}</style>
        </>
    );
}
