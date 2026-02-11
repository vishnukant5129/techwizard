import { Mail, ExternalLink, Shield, Wifi, Activity } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Events_Arena', href: '#events' },
    { name: 'Timeline_Sync', href: '#schedule' },
    { name: 'Archive_Recall', href: '#gallery' },
    { name: 'Unit_Registration', href: '#register' },
  ];

  const systemLogs = [
    '[INFO] Decrypting Mission Data...',
    '[SYNC] Operational Timeline Updated...',
    '[AUTH] User Verified as Administrator...',
    '[SYS] Matrix Field Generated Successfully...',
  ];

  return (
    <footer className="relative bg-black border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg transform rotate-45" />
                <div className="absolute inset-1 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-xl">T</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">
                  TECH<span className="text-cyan-400">WIZARD</span>
                </h3>
                {/* <p className="text-pink-400 text-sm">3.0</p> */}
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Where engineering meets combat robotics.
              Design with precision. Fight with purpose. Leave a legacy.
            </p>

            {/* System Status */}
            <div className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-4 font-mono text-xs">
              <div className="text-gray-500 mb-2">// System_Snapshot</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Activity className="text-green-400" size={12} />
                  <span className="text-gray-400">Core_Temp:</span>
                  <span className="text-green-400">Optimal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="text-cyan-400" size={12} />
                  <span className="text-gray-400">Connectivity:</span>
                  <span className="text-cyan-400">Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="text-pink-400" size={12} />
                  <span className="text-gray-400">Latency:</span>
                  <span className="text-pink-400">14ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-cyan-500/50 group-hover:text-cyan-400">/</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">Command_Center</h4>
            {/* <div className="space-y-4">
              <a
                href=""
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram size={16} />
                vishnukantray10
              </a>
              <button className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors">
                <ExternalLink size={16} />
                Admin_Login
              </button>
            </div> */}

            {/* System Logs */}
            <div className="mt-6 p-3 bg-black border border-green-500/30 rounded font-mono text-xs">
              {systemLogs.map((log, index) => (
                <div key={index} className="text-green-500/70 mb-1">
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-gray-500 text-sm">
              © 2026 AITH Innovation Cell. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-600 font-mono">
              <span>INSTITUTE CORE:</span>
              <span className="text-green-500">AITH_KANPUR_ACTIVE</span>
            </div>

            <div>
              <p className="text-xs text-gray-600">
                CREATED by VishnuKant Ray
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-500/20" />
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-cyan-500/20" />
    </footer>
  );
};

export default Footer;

