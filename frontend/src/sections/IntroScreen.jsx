const IntroScreen = () => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black intro-screen">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-8">
          <span className="inline-block animate-pulse" style={{
            background: 'linear-gradient(90deg, #00ff88 0%, #00d4ff 33%, #ff006e 66%, #ffaa00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(0, 212, 255, 0.5)'
          }}>
            TECHWIZARD
          </span>
        </h1>

        {/* Version */}
        {/* <div className="text-4xl md:text-6xl font-bold text-white mb-12 glitch-text" data-text="3.0">
          <span className="text-cyan-400">3</span>
          <span className="text-white">.</span>
          <span className="text-pink-500">0</span>
        </div> */}

        {/* Loading Text */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-red-500 font-mono text-lg tracking-widest">
            &gt;&gt; LOADING CORE…... &lt;&lt;
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 h-1 bg-gray-800 mx-auto rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 animate-pulse"
            style={{
              width: '100%',
              animation: 'loading 2.5s ease-out forwards'
            }}
          />
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-500/50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-500/50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-500/50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-500/50" />

      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;

