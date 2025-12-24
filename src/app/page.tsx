"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import VideoBillboard from "./components/VideoBillboard";

// Component Imports
const Header = dynamic(() => import("./components/Header"), { ssr: false });
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const TradeInstruments = dynamic(() => import("./components/TradeInstruments"), { ssr: false });
const AccountsSection = dynamic(() => import("./components/AccountsSection"), { ssr: false });
const PlatformsSection = dynamic(() => import("./components/PlatformsSection"), { ssr: false });
const OnAnyDeviceHero = dynamic(() => import("./components/Oureplatforms"), { ssr: false });
const MobileSection = dynamic(() => import("./components/MobileSection"), { ssr: false });
const Achievements = dynamic(() => import("./components/Achievements"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });
const Flags = dynamic(() => import("./components/Flags"), { ssr: false });
const PriceTable = dynamic(() => import("./components/Price_tables"), { ssr: false });
const ForexHeatmap = dynamic(() => import("./components/Currency_pairs"), { ssr: false });
const InflationMap = dynamic(() => import("./components/Inflation_map"), { ssr: false });
const EconomicCalendar = dynamic(() => import("./components/Economic_calender"), { ssr: false });
const TradeLikePro = dynamic(() => import("./components/TradeLikePro"), { ssr: false });
const TradeCounts = dynamic(() => import("./components/TradeCounts"), { ssr: false });


export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white antialiased selection:bg-cyan-400/30 overflow-x-hidden">
      <Head>
        <title>FMT | Advanced Forex Trading</title>
      </Head>


      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex justify-center py-6">
          <Header />
        </div>

        {/* 1. First constrained container */}
        <div className="w-full max-w-screen-2xl px-4 md:px-8 space-y-20 md:space-y-24">
          <Hero />
          <TradeInstruments />
          <AccountsSection />
          <VideoBillboard />
          <PlatformsSection />
        </div>

        {/* 2. FULL WIDTH SECTION (Breaks out of the 2xl container) */}
        <div className="w-full">
          <OnAnyDeviceHero />
        </div>

        {/* 3. Return to constrained container */}
        <div className="w-full max-w-screen-2xl px-4 md:px-8 space-y-20 md:space-y-24 pb-32">
          <div className="text-center">
            <MobileSection />
          </div>
          <Flags />
          <Achievements />

          <section className="space-y-8">
            <h3 className="text-sm font-mono md:text-2xl tracking-widest text-cyan-500 uppercase flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-cyan-500 animate-ping" />
              Live Terminal Output
            </h3>
            <div className="flex flex-col gap-20">
              <PriceTable />
              <ForexHeatmap />
              <EconomicCalendar />
              <InflationMap />
            </div>
          </section>

          <TradeLikePro />
          <TradeCounts />
        </div>
      </main>

      <Footer />
    </div>
  );
}
