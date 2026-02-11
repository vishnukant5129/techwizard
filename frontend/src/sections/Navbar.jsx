import { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, X, User, UserPlus } from 'lucide-react';

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = useMemo(() => [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EVENTS', href: '#events' },
    // { name: 'SCHEDULE', href: '#schedule' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'TEAM', href: '#team' },
    // { name: 'PATRONS', href: '#patrons' },
    // { name: 'SPONSORS', href: '#sponsors' },
    { name: 'WORKSHOP', href: '#workshop' },
    { name: 'COMPETITION', href: "#competition" },
  ], []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleLogin = useCallback(() => {
    handleMenuClose();
    onNavigate('login');
  }, [onNavigate]);

  const handleRegister = useCallback(() => {
    handleMenuClose();
    onNavigate('register');
  }, [onNavigate]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? 'bg-black/80 backdrop-blur-lg border-b border-cyan-500/20'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
              <div className="absolute inset-1 bg-black rounded-lg flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-lg">T</span>
              </div>
            </div>
            <span className="text-white font-bold text-xl tracking-wider hidden sm:block">
              TECH<span className="text-cyan-400">WIZARD</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-xs font-medium tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleLogin}
              className="flex items-center gap-2 px-4 py-2 border border-cyan-500/50 text-cyan-400 text-sm font-medium rounded hover:bg-cyan-500/10 transition-colors"
            >
              <User size={16} />
              LOGIN
            </button>
            <button
              onClick={handleRegister}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black text-sm font-bold rounded hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              <UserPlus size={16} />
              REGISTER
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-cyan-500/20">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-white/70 hover:text-cyan-400 transition-colors"
                onClick={handleMenuClose}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-3 pt-4 border-t border-gray-800">
              <button
                onClick={handleLogin}
                className="flex-1 py-2 border border-cyan-500/50 text-cyan-400 text-sm font-medium rounded hover:bg-cyan-500/10 transition-colors"
              >
                LOGIN
              </button>
              <button
                onClick={handleRegister}
                className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black text-sm font-bold rounded hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

