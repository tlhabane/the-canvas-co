
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121217] text-white pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <Link to="/" className="inline-block group mb-10">
              <div className="flex flex-col items-start leading-none">
                <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">THE CANVAS CO</span>
                <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-500 mt-1">BILLBOARDS • BANNERS • PRINT</span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed font-medium">
              We deliver world-class brand identity, print collateral, and high-impact signage.
              Always on-brand, on-budget, and on-time.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-8">Expertise</h4>
            <ul className="space-y-4">
              <li><Link to="/services/brand-identity" className="text-neutral-400 hover:text-white transition-colors text-sm font-bold">Branding</Link></li>
              <li><Link to="/services/print-collateral" className="text-neutral-400 hover:text-white transition-colors text-sm font-bold">Print</Link></li>
              <li><Link to="/services/signage-graphics" className="text-neutral-400 hover:text-white transition-colors text-sm font-bold">Signage</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-8">Canvas</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors text-sm font-bold">About Us</Link></li>
              <li><Link to="/why-us" className="text-neutral-400 hover:text-white transition-colors text-sm font-bold">Why Us</Link></li>
              <li><Link to="/case-scenarios" className="text-neutral-400 hover:text-white transition-colors text-sm font-bold">Case Studies</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-8">Contact</h4>
            <div className="space-y-4">
              <p className="text-white text-lg font-black italic">hello@thecanvasco.co.za</p>
              <p className="text-neutral-400 text-sm font-bold">082 589 6841</p>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} The Canvas Co. Standard of Excellence.</p>
          <div className="flex space-x-8 mt-8 md:mt-0">
            <Link to="/policy/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/policy/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
