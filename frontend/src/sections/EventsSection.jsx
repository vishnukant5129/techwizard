import { useState, useMemo, useCallback } from 'react';
import { Bot, Shield, Route, Circle, Hand, Plane, Gamepad2, ChevronRight } from 'lucide-react';

const EventsSection = ({ onNavigate }) => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleEventSpecs = useCallback((event) => {
    handleMenuClose();
    console.log(event.href)
    onNavigate(event.href);
  }, [onNavigate]);

  // some changes 
  const events = useMemo(() => [
    {
      category: 'Robotics',
      title: 'Robo Obstacle Race',
      description: 'Build a wired or wireless robot to navigate a track with obstacles and finish in the shortest time.',
      prize: '₹20,000',
      icon: Route,
      color: 'from-cyan-500 to-blue-500',
      href: 'robotics'
    },
    {
      category: 'Codefest',
      title: 'RC Flying',
      description: 'Pilot a remotely controlled fixed-wing aircraft through basic and precision maneuvers.',
      prize: '₹20,000',
      icon: Plane,
      color: 'from-sky-500 to-cyan-500',
      href: 'codefest'
    },
    {
      category: 'Biofest',
      title: 'E-SPORTS',
      description: 'Competitive digital arena. Squad Mode (4 players). Mobile only.',
      prize: '₹20,000',
      icon: Gamepad2,
      color: 'from-violet-500 to-purple-500',
      href: 'biofest'
    },
    {
      category: 'Devfest',
      title: 'Robo War',
      description: 'Construct a wired or wireless combat robot to knockout or push the opponent out of the arena.',
      prize: '₹20,000',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      href: 'devfest'
    },
  ], []);

  return (
    <section id="events" className="relative py-20 md:py-32 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-bold tracking-[0.3em] mb-4">
            SYSTEM_ARENA_INITIALIZED


          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
            <span className="block text-white glitch-text" data-text="ENTER">
              ENTER
            </span>
            <span className="block text-cyan-400 text-3d">
              THE ARENA
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Choose your battlefield and compete across high-precision robotics, aerial maneuvers, and digital warfare.  </p>
        </div>

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-8 bg-pink-500" />
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
            // EVENTS_PARADIGMS
          </h3>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="event-card rounded-lg overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredEvent(index)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              {/* Card Header with Gradient */}
              <div className={`relative h-40 bg-gradient-to-br ${event.color} p-6`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold text-white/80 bg-black/30 px-2 py-1 rounded">
                    [{event.category.toUpperCase()}]
                  </span>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-black/40 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                    <event.icon className="text-white" size={28} />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 bg-gradient-to-b from-gray-900 to-black">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {event.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Prize & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
                  <div>
                    <span className="text-cyan-400 font-bold">{event.prize}</span>
                    <span className="text-gray-500 text-sm ml-1">Prize Pool</span>
                  </div>
                  <button
                    onClick={() => handleEventSpecs(event)}
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-cyan-400 transition-colors">
                    VIEW_SPECS
                    <ChevronRight size={14} className={`transition-transform ${hoveredEvent === index ? 'translate-x-1' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

