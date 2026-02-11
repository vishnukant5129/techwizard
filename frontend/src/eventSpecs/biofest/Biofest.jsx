import React, { useState } from "react";
import { ChevronDown, Trophy, Users, Gamepad2 } from "lucide-react";

const Biofest = ({ onNavigate }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20 max-w-6xl mx-auto">
      <button onClick={() => onNavigate("events")} className="text-cyan-400 mb-6">
        ← Back to Home
      </button>

      <h1 className="text-6xl font-black mb-4">
        BIO<span className="text-green-400">FEST</span>
      </h1>
      <p className="text-gray-400 mb-10">
        Digital warfare. Squad supremacy.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Info icon={Trophy} title="Prize Pool" value="₹10,000" />
        <Info icon={Users} title="Team Size" value="4 Players" />
        <Info icon={Gamepad2} title="Platform" value="Mobile" />
      </div>

      <Accordion title="🎮 Game Rules" open={open} setOpen={setOpen} id="rules">
        <li>• Squad mode only</li>
        <li>• Emulator not allowed</li>
        <li>• Fair play mandatory</li>
      </Accordion>

      <Register />
    </div>
  );
};

const Info = ({ icon: Icon, title, value }) => (
  <div className="bg-white/5 p-6 rounded-lg">
    <div className="flex gap-3 mb-2">
      <Icon className="text-green-400" />
      <h3>{title}</h3>
    </div>
    <p className="text-2xl font-bold text-green-400">{value}</p>
  </div>
);

const Accordion = ({ title, open, setOpen, id, children }) => (
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

const Register = () => (
  <div className="mt-8 bg-green-500/20 p-6 rounded-lg">
    <button className="bg-green-500 px-8 py-3 rounded-lg text-black font-bold">
      Register Squad
    </button>
  </div>
);

export default Biofest;
