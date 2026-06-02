import { ArrowDown, MapPin, Grid, Camera, Film, Monitor } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { HERO_TEXT } from '../data';
// @ts-ignore
import heroImage from '../assets/images/section1_1780415106278.png';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState("");

  // Update current Dutch time dynamically for that premium detail
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Amsterdam",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="my-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Large Typographical Text */}
        <motion.div 
          style={{ y: textY, opacity: opacityFade }}
          className="md:col-span-7 flex flex-col items-start z-10"
        >
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 py-1.5 px-3.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              BESCHIKBAAR VOOR PROJECTEN
            </span>
          </motion.div>

          {/* Large Title */}
          <div className="overflow-hidden mb-4">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-7xl font-bold tracking-tight uppercase sm:text-8xl md:text-9xl text-white leading-none selection:bg-white selection:text-black"
            >
              {HERO_TEXT.name}
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.h2 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl italic text-[#8c8c8c] sm:text-4xl md:text-5xl tracking-tight leading-tight"
            >
              {HERO_TEXT.title}
            </motion.h2>
          </div>

          {/* Description Text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="font-sans max-w-lg text-[#bebebe] text-base md:text-lg font-light leading-relaxed mb-10"
          >
            {HERO_TEXT.tagline} {HERO_TEXT.subtitle}
          </motion.p>

          {/* Quick Specialties Row */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="grid grid-cols-3 gap-6 max-w-md w-full border-t border-white/10 pt-6"
          >
            <div className="flex flex-col">
              <div className="flex items-center space-x-1 mb-1 text-white">
                <Camera className="h-3.5 w-3.5" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8c8c8c]">FOTO</span>
              </div>
              <span className="font-sans text-xs text-white">Licht & Schaduw</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1 mb-1 text-white">
                <Film className="h-3.5 w-3.5" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8c8c8c]">VIDEO</span>
              </div>
              <span className="font-sans text-xs text-white">Ritme & Beeld</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1 mb-1 text-white">
                <Monitor className="h-3.5 w-3.5" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8c8c8c]">WEB</span>
              </div>
              <span className="font-sans text-xs text-white">Code & Creatie</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait Container */}
        <div className="md:col-span-5 flex justify-center z-10 relative">
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden border border-white/10 bg-[#0a0a0a] rounded-lg shadow-2xl shadow-white/5 w-full max-w-sm aspect-[3/4]"
          >
            {/* The dramatic portrait of Duyanh */}
            <img
              src={heroImage}
              alt="Duyanh Portrait digital designer"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-all duration-1000 saturate-[0.1] hover:saturate-50 contrast-[1.1] brightness-[0.95]"
            />
            
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Quick Metadata Box inside Image bottom */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md border border-white/15 p-3.5 rounded">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c8c8c]">DUYANH / EST. 1999</span>
                <span className="h-1 w-1 bg-red-500 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Underlayer decoration border */}
          <div className="absolute top-4 left-4 -right-4 -bottom-4 border border-white/5 rounded-lg pointer-events-none -z-10" />
        </div>
      </div>

      {/* Baseline Footer: Metadata Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-8 mt-12 text-xs font-mono text-[#8c8c8c]"
      >
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-white" />
          <div className="flex flex-col">
            <span className="text-white text-[10px] uppercase tracking-wider">LOCATIE</span>
            <span className="text-[11px] text-[#8c8c8c]">{HERO_TEXT.location}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Grid className="h-4 w-4 text-white" />
          <div className="flex flex-col">
            <span className="text-white text-[10px] uppercase tracking-wider">COÖRDINATEN</span>
            <span className="text-[11px] text-[#8c8c8c]">{HERO_TEXT.coordinates}</span>
          </div>
        </div>

        <div className="flex flex-col text-left md:text-right">
          <span className="text-white text-[10px] uppercase tracking-wider">TIJDZONE</span>
          <span className="text-[11px] text-[#8c8c8c]">GMT+2 / AMS TIME: {currentTime || "LADER"}</span>
        </div>

        <div className="flex flex-col items-start md:items-end justify-center">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center space-x-2 text-white hover:text-[#8c8c8c] transition-colors duration-300 focus:outline-none"
            id="scroll-down-cta"
          >
            <span className="text-[10px] tracking-widest uppercase">ONTDEK MEER</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
