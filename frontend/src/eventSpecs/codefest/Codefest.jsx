import React, { useState } from "react";
import { ChevronDown, Trophy, Clock, Users, Code } from "lucide-react";

const Codefest = ({ onNavigate }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20 max-w-6xl mx-auto">
      <button onClick={() => onNavigate("home")} className="text-cyan-400 mb-6">
        ← Back to Home
      </button>

      <h1 className="text-6xl font-black mb-4">
        CODE<span className="text-purple-400">FEST</span>
      </h1>
      <p className="text-gray-400 mb-10">
        Algorithmic warfare where logic dominates.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Info icon={Trophy} title="Prize Pool" value="₹15,000" />
        <Info icon={Users} title="Team Size" value="Solo / Duo" />
        <Info icon={Clock} title="Duration" value="2 Hours" />
      </div>

      <Section title="📜 Rules" id="rules" open={open} setOpen={setOpen}>
        <li>• Languages: C/C++/Java/Python</li>
        <li>• Internet disabled</li>
        <li>• Plagiarism = Disqualification</li>
      </Section>

      <Section title="🧠 Problem Format" id="format" open={open} setOpen={setOpen}>
        <li>• Easy → Hard progression</li>
        <li>• Hidden test cases</li>
        <li>• Partial scoring allowed</li>
      </Section>

      <Register color="purple" />
    </div>
  );
};

const Info = ({ icon: Icon, title, value }) => (
  <div className="bg-white/5 p-6 rounded-lg">
    <div className="flex gap-3 mb-2">
      <Icon className="text-purple-400" />
      <h3>{title}</h3>
    </div>
    <p className="text-2xl font-bold text-purple-400">{value}</p>
  </div>
);

const Section = ({ title, id, open, setOpen, children }) => (
  <div className="bg-white/5 rounded-lg mb-4">
    <button
      onClick={() => setOpen(open === id ? null : id)}
      className="w-full p-6 flex justify-between"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <ChevronDown className={open === id ? "rotate-180" : ""} />
    </button>
    {open === id && <ul className="px-6 pb-6 text-gray-300">{children}</ul>}
  </div>
);

const Register = ({ color }) => (
  <div className={`mt-8 bg-${color}-500/20 p-6 rounded-lg`}>
    <button className={`bg-${color}-500 px-8 py-3 rounded-lg text-black font-bold`}>
      Register Now
    </button>
  </div>
);

export default Codefest;
