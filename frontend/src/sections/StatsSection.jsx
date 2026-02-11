import { useEffect, useRef, useState } from 'react';
import { Zap, Trophy, Clock } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      icon: Trophy, 
      value: '10+', 
      label: 'Events',
      color: 'text-cyan-400',
      bgColor: 'from-cyan-500/20 to-cyan-500/5'
    },
    { 
      icon: Clock, 
      value: '03', 
      label: 'Days',
      color: 'text-pink-400',
      bgColor: 'from-pink-500/20 to-pink-500/5'
    },
    { 
      icon: Zap, 
      value: '∞', 
      label: 'Energy',
      color: 'text-yellow-400',
      bgColor: 'from-yellow-500/20 to-yellow-500/5'
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${stat.bgColor} border border-cyan-500/20 p-8 text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2`}>
                {/* Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${stat.bgColor} blur-xl`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black/50 border border-cyan-500/30`}>
                    <stat.icon className={stat.color} size={32} />
                  </div>
                </div>

                {/* Value */}
                <div className={`relative z-10 text-5xl md:text-6xl font-black ${stat.color} mb-2`}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="relative z-10 text-gray-400 text-sm tracking-[0.2em] uppercase">
                  {stat.label}
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-500/50" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-500/50" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-500/50" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-500/50" />
              </div>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="event-card rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-cyan-400 text-xs font-bold tracking-wider">ONLINE</span>
              <span className="text-4xl font-black text-white">10+</span>
            </div>
            <div className="text-gray-400 text-sm mb-2">// ACTIVE_EVENTS</div>
            <p className="text-white">From Robo Wars to Esports</p>
            <button className="mt-4 text-cyan-400 text-sm hover:text-cyan-300 transition-colors flex items-center gap-1">
              &gt; Click for details
            </button>
          </div>

          <div className="event-card rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-pink-400 text-xs font-bold tracking-wider">ONLINE</span>
              <span className="text-4xl font-black text-white">₹1.5L+</span>
            </div>
            <div className="text-gray-400 text-sm mb-2">// VAL_PRIZE_POOL</div>
            <p className="text-white">Total cash prizes to be won</p>
            <button className="mt-4 text-cyan-400 text-sm hover:text-cyan-300 transition-colors flex items-center gap-1">
              &gt; Click for details
            </button>
          </div>
        </div>

        {/* Powered By */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm tracking-wider">
            // Powered_By_Our_Partners
          </p>
          <div className="flex items-center justify-center gap-8 mt-4 opacity-50">
            {['CSJMU', 'UIET', 'INNOVATION'].map((partner, index) => (
              <span 
                key={index} 
                className="text-gray-400 font-bold text-lg tracking-wider"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

