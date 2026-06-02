import { ArrowUp, Award } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#030303] border-t border-white/5 py-12 px-6 md:px-12 lg:px-24 text-xs font-mono text-[#8c8c8c]">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
        
        {/* Left item */}
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <Award className="h-4 w-4 text-white hover:rotate-12 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="text-white text-[10px] uppercase tracking-wider">DUYANH &copy; 2026</span>
            <span className="text-[10px] text-[#8c8c8c]">ONTWORPEN MET FOCUS OP MINIMALISTISCHE ESTHETIEK</span>
          </div>
        </div>

        {/* Center item */}
        <div className="text-center">
          <span className="text-[#8c8c8c] text-[10px]">
            AMSTERDAM, NEDERLAND • BUILT WITH REACT, VITE, TAILWIND & MOTION
          </span>
        </div>

        {/* Right item */}
        <div>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 border border-white/10 hover:border-white rounded-full py-2 px-4 text-white transition-all duration-300 focus:outline-none cursor-pointer"
            id="back-to-top-btn"
          >
            <span className="text-[9px] tracking-widest uppercase">TERUG NAAR BOVEN</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
