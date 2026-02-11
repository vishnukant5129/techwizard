import React, { useState } from "react";
import { ChevronDown, Trophy, Clock, Users } from "lucide-react";

const Robotics = ({ onNavigate }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Star Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => onNavigate('home')}
            className="text-cyan-400 hover:text-cyan-300 transition-colors mb-6 flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            ROBO <span className="text-cyan-400">OBSTACLE RACE</span>
          </h1>
          <p className="text-xl text-gray-400">Build a wired or wireless robot to navigate a track with obstacles and finish in the shortest time.</p>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-white/5 to-white/3 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="text-cyan-400" size={24} />
              <h3 className="font-semibold text-lg">Prize Pool</h3>
            </div>
            <p className="text-2xl font-bold text-cyan-400">₹20,000</p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/3 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-cyan-400" size={24} />
              <h3 className="font-semibold text-lg">Team Size</h3>
            </div>
            <p className="text-2xl font-bold text-cyan-400">3-5 Members</p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/3 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="text-cyan-400" size={24} />
              <h3 className="font-semibold text-lg">Duration</h3>
            </div>
            <p className="text-2xl font-bold text-cyan-400">30 min</p>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-4">
          {/* Rules Section */}
          <div className="bg-gradient-to-br from-white/5 to-white/3 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('rules')}
              className="w-full p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold">📋 Rules & Regulations</h3>
              <ChevronDown
                size={24}
                className={`transition-transform ${expandedSection === 'rules' ? 'rotate-180' : ''}`}
              />
            </button>
            {expandedSection === 'rules' && (
              <div className="px-6 pb-6 border-t border-white/10">
                <ul className="space-y-2 text-gray-300">
                  <li>• Robot weight must not exceed 3 kg</li>
                  <li>• Maximum dimensions: 30cm × 30cm × 30cm</li>
                  <li>• Must complete 2 practice rounds before finals</li>
                  <li>• No external power sources allowed</li>
                  <li>• Robot must finish within 5 minutes or be disqualified</li>
                </ul>
              </div>
            )}
          </div>

          {/* Track Details Section */}
          <div className="bg-gradient-to-br from-white/5 to-white/3 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('track')}
              className="w-full p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold">🏁 Track Details</h3>
              <ChevronDown
                size={24}
                className={`transition-transform ${expandedSection === 'track' ? 'rotate-180' : ''}`}
              />
            </button>
            {expandedSection === 'track' && (
              <div className="px-6 pb-6 border-t border-white/10">
                <ul className="space-y-2 text-gray-300">
                  <li>• Total track length: 50 meters</li>
                  <li>• 8 obstacle checkpoints</li>
                  <li>• Maze section: 2m × 2m</li>
                  <li>• Ramp climb: 45-degree angle, 1 meter height</li>
                  <li>• Precision zone: 1cm accuracy required</li>
                </ul>
              </div>
            )}
          </div>

          {/* Scoring Section */}
          <div className="bg-gradient-to-br from-white/5 to-white/3 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('scoring')}
              className="w-full p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold">⭐ Scoring System</h3>
              <ChevronDown
                size={24}
                className={`transition-transform ${expandedSection === 'scoring' ? 'rotate-180' : ''}`}
              />
            </button>
            {expandedSection === 'scoring' && (
              <div className="px-6 pb-6 border-t border-white/10">
                <ul className="space-y-2 text-gray-300">
                  <li>• Time-based: Fastest completion wins</li>
                  <li>• Obstacle bonus: +10 points per obstacle cleared</li>
                  <li>• Precision bonus: +20 points per zone traversed</li>
                  <li>• Penalty: -5 points per obstruction touch</li>
                  <li>• Final score = Time points + Bonuses - Penalties</li>
                </ul>
              </div>
            )}
          </div>

          {/* Registration Section */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-lg p-6 border border-cyan-400/30">
            <h3 className="text-xl font-bold mb-4">🚀 Register Now</h3>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-lg transition-colors">
              Register Your Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robotics;
