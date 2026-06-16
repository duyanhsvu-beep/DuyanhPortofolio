import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background opaque on scroll logic
      setIsScrolled(window.scrollY > 50);

      // Scroll progress indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Mijn projecten', id: 'projects' },
    { name: 'Over mij', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-white/5 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
        id="app-header"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Logo Name - Duyanh Vu */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col focus:outline-none text-left"
            id="logo-brand-btn"
          >
            <span className="font-sans text-lg font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 group-hover:opacity-80">
              Duyanh Vu
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-white/60 focus:outline-none cursor-pointer"
                  id={`nav-link-${link.id}`}
                >
                  <span className={isActive ? 'text-white font-semibold' : 'text-[#8c8c8c]'}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden rounded-full border border-white/10 p-2 text-white hover:border-white hover:bg-white/5 focus:outline-none transition-colors duration-300"
            id="mobile-menu-toggle"
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Top Scroll Line Bar */}
        <div className="absolute bottom-0 left-0 h-[1.5px] bg-white/5 w-full">
          <motion.div
            className="h-full bg-white/40 origin-left"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.header>

      {/* Mobile Nav Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-lg flex flex-col justify-center px-6"
          >
            <div className="flex flex-col space-y-8 max-w-md mx-auto w-full">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#8c8c8c] uppercase border-b border-white/10 pb-2">
                NAVIGATIE
              </span>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-left font-display text-4xl font-bold uppercase tracking-tight text-white transition-all duration-300 hover:pl-4 focus:outline-none hover:text-[#8c8c8c]"
                    >
                      <div className="flex items-center space-x-4">
                        <span className={`font-mono text-xs tracking-widest ${isActive ? 'text-white' : 'text-[#8c8c8c]'}`}>
                          {(link.id === 'projects' && '01') || (link.id === 'about' && '02') || '03'}
                        </span>
                        <span className={isActive ? 'underline decoration-1 underline-offset-8' : ''}>
                          {link.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-white/10 pt-8 flex flex-col space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#8c8c8c]">
                  <span>DUYANH &copy; 2026</span>
                  <span>AMSTERDAM, NL</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
