export const Hero = () => (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-32">
      {/* Purple Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square">
        <div className="purple-glow absolute inset-0" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
          INVESTING. SIMPLIFIED.
        </h1>
        <p className="text-xl sm:text-2xl mb-12 text-gray-300 animate-fade-in-delay">
          Your commission-free, self-directed investment platform.
        </p>
        <button className="
          px-8 py-4 text-lg font-semibold rounded-full
          bg-gradient-to-r from-purple-600 to-pink-500
          hover:opacity-90 transition-all duration-300
          hover:scale-105 hover-glow
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black
          animate-fade-in-delay-2
        ">
          OPEN YOUR ACCOUNT NOW
        </button>
        <p className="mt-8 text-sm text-gray-400 font-mono animate-fade-in-delay-3">
          WHEN YOU INVEST, YOUR CAPITAL IS AT RISK.
          <br />
          OTHER CHARGES MAY APPLY.
        </p>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/30 to-transparent" />
    </section>
  )
