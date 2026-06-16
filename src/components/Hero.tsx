import { ArrowDown, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { HERO_TEXT } from '../data';
// @ts-ignore
import heroImage from '../assets/images/section1_1780415106278.png';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth parallax scroll offsets for the text and image
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-black pt-28 pb-12 px-6 md:px-12 lg:px-24"
      id="hero"
    >
      {/* Background radial atmosphere overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Content Grid */}
      <div className="my-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Left Side: Large Typographical Text */}
        <motion.div 
          style={{ y: textY, opacity: opacityFade }}
          className="md:col-span-7 flex flex-col items-start z-10"
        >
          {/* Tagline Badge */}
          <div className="flex items-center space-x-2 mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8c8c8c] font-semibold">
              BESCHIKBAAR VOOR PROJECTEN
            </span>
          </div>

          <div className="mb-6">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-extrabold tracking-tight uppercase text-white leading-[1.05] selection:bg-white selection:text-black">
              Freelance <br />
              <span className="font-normal text-white/40">Videographer</span> <br />
              <span>& Editor</span>
            </h1>
          </div>

          {/* Description Text */}
          <p className="font-sans max-w-md text-[#bebebe] text-[15px] sm:text-base font-light leading-relaxed">
            Specialized in videography, editing and visual storytelling.
          </p>
        </motion.div>


        {/* Right Side: Portrait Container */}
        <div className="md:col-span-5 flex justify-center z-10 animation-delay-300">
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden w-full max-w-md aspect-[3/4]"
          >
            {/* The dramatic portrait of Duyanh - Plain and Pure */}
            <img
              src={heroImage}
              alt="Duyanh Vu Portrait"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover saturate-0 contrast-[1.08] brightness-[0.85]"
            />
          </motion.div>
        </div>
      </div>

      {/* Baseline Footer: Metadata Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-white/15 pt-8 mt-12 text-xs font-mono text-[#8c8c8c]"
      >
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-white/50" />
          <div className="flex flex-col">
            <span className="text-white/40 text-[9px] uppercase tracking-[0.15em] font-semibold">LOCATIE</span>
            <span className="text-[11px] text-[#bebebe]">{HERO_TEXT.location}</span>
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center space-x-2 text-white hover:text-white/60 transition-colors duration-300 focus:outline-none cursor-pointer"
            id="scroll-down-cta"
          >
            <span className="text-[10px] tracking-widest uppercase group-hover:tracking-[0.15em] transition-all duration-300">ONTDEK MEER</span>
            <ArrowDown className="h-4 w-4 text-white/50 animate-bounce group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
