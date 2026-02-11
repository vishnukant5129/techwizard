import { useEffect, useState, useCallback, } from 'react';
import { ArrowRight, Calendar, MapPin, Download, User } from 'lucide-react';

const HeroSection = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [countdown, setCountdown] = useState({
    days: 16,
    hours: 11,
    minutes: 34,
    seconds: 45
  });

  const handleMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleRegister = useCallback(() => {
    handleMenuClose();
    onNavigate('register');
  }, [onNavigate]);

  const formatNumber = useCallback((num) => num.toString().padStart(2, '0'), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Tagline */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-500" />
          <span className="text-pink-500 text-sm md:text-base font-bold tracking-[0.3em]">
            CREATE · COMPETE · LEAD
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none">
            <span className="block glitch-text text-cyan-400">
              TECHWIZARD
            </span>
            <span className="block glitch-text text-cyan-400">
              2K25-26
            </span>
          </h1>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button className="btn-primary flex items-center gap-2 group"
            onClick={handleRegister}
          >
            REGISTER NOW
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          {/* <button className="btn-outline flex items-center gap-2">
            EXPLORE EVENTS
          </button> */}
          <button className="flex items-center gap-2 px-6 py-3 border border-pink-500/50 text-pink-400 hover:bg-pink-500/10 transition-colors clip-path-polygon">
            <Download size={18} />
            BROCHURE.PDF
          </button>
        </div>

        {/* Event Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12 text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="text-pink-500" size={20} />
            <span className="text-sm md:text-base font-mono tracking-wider">
              FEB_26_2026
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-cyan-400" size={20} />
            <span className="text-sm md:text-base font-mono tracking-wider">
              Dr. AITH_KANPUR
            </span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-box inline-block px-8 py-6 rounded-lg">
          <div className="text-pink-500 text-xs font-bold tracking-[0.3em] mb-4">
            DEPLOYMENT COUNTDOWN
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {[
              { value: countdown.days, label: 'DAYS' },
              { value: countdown.hours, label: 'HOURS' },
              { value: countdown.minutes, label: 'MINS' },
              { value: countdown.seconds, label: 'SECS' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white neon-glow">
                  {formatNumber(item.value)}
                </div>
                <div className="text-xs text-cyan-400 tracking-wider mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

