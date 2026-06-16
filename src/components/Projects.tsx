import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section 
      className="relative w-full overflow-hidden bg-black border-t border-white/5 py-24 px-6 md:px-12 lg:px-24"
      id="projects"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 border-b border-white/5 pb-8">
          <div className="flex flex-col">
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl text-white">
              PORTFOLIO
            </h2>
          </div>
        </div>

        {/* Projects Exhibition Grid - Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {PROJECTS.map((p, index) => {
            // Explicitly map each project to a hand-curated size and aspect ratio for premium editorial rhythm
            const getLayout = (id: string) => {
              switch (id) {
                case "een-nieuw-begin":
                  // Largest, first, dominant widescreen thumbnail
                  return { col: "md:col-span-8", aspect: "aspect-[4/3] md:aspect-[16/10]" };
                case "ontkurkt":
                  // Vertical aspect ratio to naturally match the portrait composition next to it
                  return { col: "md:col-span-4", aspect: "aspect-[3/4]" };
                case "heroes-only":
                  // Sleek horizontal medium-width presentation
                  return { col: "md:col-span-7", aspect: "aspect-[4/3] md:aspect-[16/10]" };
                case "amsterdam-nocturne":
                  // Supporting square/artistic presentation
                  return { col: "md:col-span-5", aspect: "aspect-[1/1] md:aspect-[4/3]" };
                default:
                  return { col: "md:col-span-6", aspect: "aspect-[16/10]" };
              }
            };

            const currentLayout = getLayout(p.id);

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                onClick={() => onSelectProject(p)}
                className={`group relative overflow-hidden bg-[#0a0a0a] rounded-lg cursor-pointer ${currentLayout.col} ${currentLayout.aspect}`}
                id={`project-card-${p.id}`}
              >
                {/* Image - GPU Accelerated subpixel render on hover with natural original colors */}
                <img
                  src={p.image}
                  alt={p.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.85] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-[1.035] group-hover:rotate-[0.6deg]"
                  style={{
                    transformOrigin: 'center center',
                    backfaceVisibility: 'hidden',
                    WebkitFontSmoothing: 'subpixel-antialiased'
                  }}
                />
                
                {/* Subtle gradient overlay bottom for absolute legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                {/* Understated top subtle shadow overlay */}
                <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

                {/* Elegant premium white outline hover effect overlay */}
                <div className="absolute inset-0 border border-white/0 rounded-lg pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white/40 z-20" />

                {/* Typography inside Image - Bottom Left */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10 select-none text-left">
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-tight text-white leading-tight">
                    {p.title}
                  </h3>
                  <span className="font-sans text-[11px] tracking-wider text-[#8c8c8c] mt-1 transition-colors duration-300 group-hover:text-[#bebebe]">
                    {p.client}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
