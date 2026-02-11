import React, { useState } from "react";
import { ChevronDown, Trophy, Clock, Users, Shield } from "lucide-react";

const Devfest = ({ onNavigate }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <button
          onClick={() => onNavigate("home")}
          className="text-cyan-400 hover:text-cyan-300 mb-6"
        >
          ← Back to Home
        </button>

        <h1 className="text-5xl md:text-7xl font-black mb-4">
          ROBO <span className="text-red-400">WAR</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10">
          Build a combat-ready robot and dominate the arena.
        </p>

        {/* Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Info icon={Trophy} title="Prize Pool" value="₹20,000" />
          <Info icon={Users} title="Team Size" value="3-5 Members" />
          <Info icon={Clock} title="Match Time" value="5 min" />
        </div>

        {/* Sections */}
        <Accordion
          title="⚔️ Rules & Regulations"
          open={expandedSection === "rules"}
          toggle={() => toggleSection("rules")}
        >
          <li>• Max robot weight: 15 kg</li>
          <li>• Wired / Wireless allowed</li>
          <li>• No flame / liquid weapons</li>
          <li>• Arena knockout rules apply</li>
        </Accordion>

        <Accordion
          title="🛡️ Arena & Safety"
          open={expandedSection === "arena"}
          toggle={() => toggleSection("arena")}
        >
          <li>• Steel enclosed arena</li>
          <li>• Judges’ decision final</li>
          <li>• Safety checks mandatory</li>
        </Accordion>

        <Accordion
          title="⭐ Scoring"
          open={expandedSection === "scoring"}
          toggle={() => toggleSection("scoring")}
        >
          <li>• Knockout = Instant win</li>
          <li>• Damage points considered</li>
          <li>• Aggression bonus</li>
        </Accordion>

        <Register />
      </div>
    </div>
  );
};

const Info = ({ icon: Icon, title, value }) => (
  <div className="bg-white/5 p-6 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <Icon className="text-red-400" />
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="text-2xl font-bold text-red-400">{value}</p>
  </div>
);

const Accordion = ({ title, open, toggle, children }) => (
  <div className="bg-white/5 rounded-lg overflow-hidden mb-4">
    <button
      onClick={toggle}
      className="w-full p-6 flex justify-between items-center"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <ChevronDown className={open ? "rotate-180" : ""} />
    </button>
    {open && (
      <ul className="px-6 pb-6 text-gray-300 space-y-2 border-t border-white/10">
        {children}
      </ul>
    )}
  </div>
);

const Register = () => (
  <div className="mt-8 bg-red-500/20 p-6 rounded-lg">
    <h3 className="text-xl font-bold mb-3">🔥 Register Now</h3>
    <button className="bg-red-500 px-8 py-3 rounded-lg font-bold text-black">
      Register Team
    </button>
  </div>
);

export default Devfest;
