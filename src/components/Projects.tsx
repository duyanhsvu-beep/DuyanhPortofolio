import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight, Eye, Grid } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALLES");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const categories = ["ALLES", "FOTOGRAFIE", "VIDEOGRAFIE", "WEBDESIGN"];

  // Filter projects by active tab
  const filteredProjects = selectedCategory === "ALLES"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section 
      className="relative w-full overflow-hidden bg-black border-t border-white/5 py-24 px-6 md:px-12 lg:px-24"
      id="projects"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6">
          <div className="flex flex-col">
            <span className="font-mono text-xs tracking-[0.25em] text-[#8c8c8c] uppercase mb-2">
              PORTFOLIO EXPOSITIE
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl md:text-6xl text-white">
              GESELECTEERD WERK
            </h2>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 max-w-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 rounded-full border cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white border-white text-black"
                    : "bg-transparent border-white/10 text-[#8c8c8c] hover:border-white/40 hover:text-white"
                }`}
                id={`category-filter-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Exhibition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((p, index) => {
            const isHovered = hoveredCard === p.id;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredCard(p.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onSelectProject(p)}
                className="group relative flex flex-col justify-between overflow-hidden bg-black cursor-pointer"
                id={`project-card-${p.id}`}
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[16/10] bg-[#121212] border border-white/10 rounded-lg">
                  {/* Subtle index tag top left */}
                  <span className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded font-mono text-[9px] text-[#bebebe] tracking-widest">
                    0{index + 1}
                  </span>

                  {/* High Quality project image with transition */}
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 saturate-[0.2] group-hover:saturate-100 contrast-[1.05] brightness-90 group-hover:brightness-95"
                  />

                  {/* Dark transparent gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Live Hover CTA Drawer */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="flex items-center space-x-2 bg-black/80 backdrop-blur border border-white/20 px-4 py-2 text-white text-xs font-mono tracking-widest uppercase rounded">
                      <span>BEKIJK CASE</span>
                      <Eye className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Category Pill bottom left */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="font-mono text-[9px] uppercase tracking-widest rounded bg-white text-black font-semibold px-2 py-0.5">
                      {p.category}
                    </span>
                  </div>

                  {/* Year Pill bottom right */}
                  <div className="absolute bottom-4 right-4 z-10 font-mono text-[10px] text-[#bebebe] bg-black/50 border border-white/10 px-2 py-0.5 rounded">
                    {p.year}
                  </div>
                </div>

                {/* Info Metadata Block */}
                <div className="pt-5 pb-2 flex items-start justify-between font-sans">
                  <div className="flex flex-col">
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#a3a3a3] transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#8c8c8c] leading-relaxed max-w-sm sm:max-w-md mt-1.5 line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                  <button 
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black focus:outline-none ml-4 self-center"
                    aria-label={`Bekijk details van ${p.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                {/* Thin dividing horizontal divider */}
                <div className="h-[1px] w-full bg-neutral-900 border-b border-white/5 pt-2" />
              </motion.div>
            );
          })}
        </div>

        {/* Empty layout case handle */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-white/5 rounded-lg bg-[#050505]">
            <p className="font-mono text-xs text-[#8c8c8c] uppercase tracking-wider">
              GEEN PROJECTEN GEVONDEN IN DEZE CATEGORIE
            </p>
          </div>
        )}

        {/* Dynamic decorative Marquee beneath work section */}
        <div className="mt-28 py-6 border-y border-white/10 overflow-hidden relative select-none w-full">
          <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] lowercase text-stroke text-4xl font-display font-black tracking-tighter uppercase sm:text-6xl">
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">photography</span>
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">•</span>
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">videography</span>
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">•</span>
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">web design</span>
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">•</span>
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">photography</span>
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">•</span>
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">videography</span>
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">•</span>
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">web design</span>
            <span className="mr-12 hover:text-[#ffffff] cursor-default transition-all duration-300">•</span>
          </div>
        </div>
      </div>
    </section>
  );
}
