import { useEffect, useRef, useState } from 'react';
import { Users, Crown, Target, Wrench } from 'lucide-react';

const MentorsSection = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mentors = {
    chiefPatron: {
      name: 'Prof. Vinay Kumar Pathak',
      role: 'Chief Patron',
      title: 'Vice Chancellor, AITH',
      icon: Crown
    },
    patrons: [
      {
        name: 'Dr. Shilpa Kaistha',
        role: 'Patron',
        title: 'Dean, Innovation Foundation',
        icon: Target
      },
      {
        name: 'Mr. Divyansh Shukla',
        role: 'Patron',
        title: 'CEO, Innovation Foundation',
        icon: Target
      },
      {
        name: 'Dr. Alok Kumar',
        role: 'Patron',
        title: 'Director, AITH',
        icon: Target
      }
    ],
    advisors: [
      {
        name: 'Dr. Ajay Tiwari',
        role: 'Faculty Coordinator',
        title: 'Asst. Professor, AITH',
        icon: Wrench
      },
      {
        name: 'Er. Mohd Shah Alam',
        role: 'Faculty Coordinator',
        title: 'Asst. Professor, AITH',
        icon: Wrench
      }
    ]
  };

  return (
    <section id="patrons" ref={sectionRef} className="relative py-20 md:py-32 px-4">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="text-pink-500" size={24} />
            <span className="text-pink-500 text-sm font-bold tracking-[0.3em]">
              LEADERSHIP_&_GUIDANCE
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black">
            <span className="text-white">OUR</span>{' '}
            <span className="text-cyan-400">MENTORS</span>
          </h2>
        </div>

        {/* Chief Patron */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-gray-500 text-sm mb-4 tracking-wider">// Chief_Patron</div>
          <div className="mentor-card rounded-lg p-8 max-w-md mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Crown className="text-white" size={36} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{mentors.chiefPatron.name}</h3>
            <p className="text-pink-400 text-sm mb-1">{mentors.chiefPatron.role}</p>
            <p className="text-gray-400 text-sm">{mentors.chiefPatron.title}</p>
          </div>
        </div>

        {/* Strategic Patrons */}
        <div className={`mb-12 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-gray-500 text-sm mb-4 tracking-wider">// Strategic_Patrons</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mentors.patrons.map((patron, index) => (
              <div key={index} className="mentor-card rounded-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{patron.name}</h3>
                <p className="text-pink-400 text-sm mb-1">{patron.role}</p>
                <p className="text-gray-400 text-sm">{patron.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Advisors */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-gray-500 text-sm mb-4 tracking-wider">// Technical_Advisors</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {mentors.advisors.map((advisor, index) => (
              <div key={index} className="mentor-card rounded-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <Wrench className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{advisor.name}</h3>
                <p className="text-pink-400 text-sm mb-1">{advisor.role}</p>
                <p className="text-gray-400 text-sm">{advisor.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;

