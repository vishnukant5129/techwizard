import { Sparkles } from 'lucide-react';

const ThemeSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-cyan-400" size={20} />
            <span className="text-cyan-400 text-sm font-bold tracking-[0.3em]">
              THEME 2K25-26
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-2">
            <span className="text-white">INITIALIZING NEXUS… </span>
          </h2>
          <p className="text-pink-500 text-lg md:text-xl tracking-wider">
            — Arena of Champions —
          </p>
        </div>

        {/* Theme Content */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 border-l-2 border-t-2 border-cyan-500/30" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 border-r-2 border-b-2 border-pink-500/30" />

          {/* Main Text */}
          <div className="bg-gradient-to-br from-cyan-500/5 to-pink-500/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-6xl md:text-8xl font-black text-cyan-400/20 leading-none">
                THE
              </span>
              <div>
                <span className="text-4xl md:text-6xl font-black text-white">
                  THEME
                </span>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 text-lg md:text-xl leading-relaxed">
              <p>
                Born in the battleground of circuits and code - {' '}
                <span className="text-cyan-400 font-semibold">innovation awakens.</span>.
              </p>
              <p>
                Like warriors of steel and silicon, innovation takes form,{' '}
                <span className="text-pink-400 font-semibold">TECHWIZARD</span> where engineering brilliance meets competitive spirit.
                Every bot is a testament to human ingenuity.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="mt-8 p-4 bg-black/40 border-l-4 border-cyan-400 rounded-r">
              <p className="text-cyan-400 font-mono text-sm">
                &gt; WHERE CIRCUITS IGNITE COURAGE
              </p>
              <p className="text-gray-400 font-mono text-sm">
                &gt; WHERE CODE TURNS TO COMBAT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;

