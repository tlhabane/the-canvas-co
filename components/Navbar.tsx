import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICE_SUMMARIES } from '../content/siteContent';

interface NavbarProps {
  onOpenBooking?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle outside clicks for the services dropdown (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] nav-glass">
      {/* Accent Strip */}
      <div className="accent-strip w-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo - Left */}
          <div className="flex-shrink-0 z-[110]">
            <Link to="/" className="flex flex-col items-start leading-none hover:opacity-80 transition-opacity">
              <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">THE CANVAS CO</span>
              <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-500 mt-1">BILLBOARDS • BANNERS • PRINT</span>
            </Link>
          </div>

          {/* Desktop Navigation - Center (Hidden below LG) */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-10 px-8">
            <Link
              to="/"
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-200 ${isActive('/') ? 'text-[#EC008C]' : 'text-neutral-400 hover:text-white'
                }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-200 flex items-center gap-1 ${location.pathname.startsWith('/services') ? 'text-[#00AEEF]' : 'text-neutral-400 hover:text-white'
                  }`}
                aria-expanded={isDropdownOpen}
              >
                Services
                <svg className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#1e1e26] border border-white/10 shadow-2xl transition-all duration-300 transform origin-top rounded-2xl overflow-hidden ${isDropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="p-3 bg-[#1e1e26]">
                  {SERVICE_SUMMARIES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="flex items-center justify-between group/item px-5 py-4 text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      <span>{service.title}</span>
                      <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#EC008C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/why-us"
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-200 ${isActive('/why-us') ? 'text-[#FFF200]' : 'text-neutral-400 hover:text-white'
                }`}
            >
              Why Us
            </Link>

            <Link
              to="/about"
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-200 ${isActive('/about') ? 'text-[#FFF200]' : 'text-neutral-400 hover:text-white'
                }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-200 ${isActive('/contact') ? 'text-[#FFF200]' : 'text-neutral-400 hover:text-white'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Action Area - Right (Always visible) */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-white text-black px-5 md:px-8 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-[#EC008C] hover:text-white hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/20"
            >
              Book a Call
            </button>

            {/* Hamburger Button - High Z-index */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 flex flex-col items-center justify-center space-y-1.5 focus:outline-none bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors relative z-[110]"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
            >
              <div className={`h-[2px] w-5 bg-white transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
              <div className={`h-[2px] w-5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`h-[2px] w-5 bg-white transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 h-[100dvh] bg-[#121217] z-[105] lg:hidden transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        {/* Background Decor Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
          <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] glow-cyan rounded-full"></div>
          <div className="absolute bottom-[20%] left-[-10%] w-[35rem] h-[35rem] glow-magenta rounded-full"></div>
        </div>

        <div className="relative px-8 pt-32 pb-12 flex flex-col h-full overflow-y-auto">
          <div className="space-y-12 mb-16">
            {/* Navigation links */}
            <div className="space-y-6">
              {/*<span className="text-[10px] font-black uppercase tracking-widest text-neutral-600 italic">Primary Navigation</span>*/}
              <div className="space-y-4">
                <Link to="/" className="block text-4xl font-black uppercase tracking-tighter text-white hover:text-[#EC008C] transition-colors">Home</Link>
                <Link to="/why-us" className="block text-4xl font-black uppercase tracking-tighter text-white hover:text-[#FFF200] transition-colors">Why Us</Link>
                <Link to="/about" className="block text-4xl font-black uppercase tracking-tighter text-white hover:text-[#FFF200] transition-colors">About Us</Link>
                <Link to="/contact" className="block text-4xl font-black uppercase tracking-tighter text-white hover:text-[#FFF200] transition-colors">Contact</Link>
              </div>
            </div>

            <div className="space-y-6 pt-10 border-t border-white/5">
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600 italic">Our Expertise & Services</span>
              <div className="space-y-4">
                {SERVICE_SUMMARIES.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="block text-4xl font-black uppercase tracking-tighter text-neutral-400 hover:text-[#00AEEF] transition-colors"
                  >
                    {service.title.split('&')[0].trim()}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <button
              onClick={() => { onOpenBooking?.(); setIsOpen(false); }}
              className="w-full bg-[#EC008C] text-white py-6 rounded-2xl text-base font-black uppercase tracking-[0.2em] shadow-xl shadow-[#EC008C]/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Book a Strategy Call
            </button>
            <div className="mt-8 text-center pb-8">
              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-600 italic">"On-brand, on-budget, and on-time."</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;