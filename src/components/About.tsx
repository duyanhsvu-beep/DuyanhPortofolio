import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Award, ChevronRight, User } from 'lucide-react';
import { BIOGRAPHY, SERVICES, SKILL_GROUPS, EXPERIENCES } from '../data';

export default function About() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#050505] border-t border-white/5 py-24 px-6 md:px-12 lg:px-24"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6">
          <div className="flex flex-col">
            <span className="font-mono text-xs tracking-[0.25em] text-[#8c8c8c] uppercase mb-2">
              INTRODUCTIE
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl md:text-6xl text-white">
              OVER MIJ
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8c8c8c] mt-4 md:mt-0 max-w-xs md:text-right">
            Het samenbrengen van creatieve visie, cinematisch licht en pixel-perfecte code.
          </span>
        </div>

        {/* Content Section 1: Philosophy Statement & Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Big Statement biography */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="font-mono text-xs tracking-wider text-white border-b border-white/10 pb-2 w-max">
              MIJN FILOSOFIE
            </span>
            <p className="font-display text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
              {BIOGRAPHY.text1}
            </p>
            <p className="font-sans text-base text-[#a3a3a3] leading-relaxed">
              {BIOGRAPHY.text2}
            </p>
            <p className="font-sans text-base text-[#a3a3a3] leading-relaxed">
              {BIOGRAPHY.text3}
            </p>

            {/* Micro details panel (Coordinates style) */}
            <div className="grid grid-cols-2 gap-4 border border-white/5 bg-black/40 p-5 rounded-lg mt-4 font-mono text-[11px] text-[#8c8c8c]">
              <div>
                <span className="text-white uppercase block mb-1">INTERESSES</span>
                <span>• Straatfotografie<br />• Cinematic color grading<br />• Generative WebGL</span>
              </div>
              <div>
                <span className="text-white uppercase block mb-1">STIJL</span>
                <span>• Monochrome contrasten<br />• Asymmetrische grids<br />• Zwitserse typografie</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key services stack with interactive hover states */}
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs tracking-wider text-white border-b border-white/10 pb-2 w-max block mb-6">
              WAT IK DOE
            </span>
            
            <div className="space-y-4">
              {SERVICES.map((srv) => {
                const isHovered = hoveredService === srv.id;
                return (
                  <div
                    key={srv.id}
                    onMouseEnter={() => setHoveredService(srv.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`relative p-6 rounded-lg border transition-all duration-500 ease-out cursor-default ${
                      isHovered 
                        ? 'bg-white border-white text-black translate-x-1' 
                        : 'bg-black/30 border-white/5 text-white'
                    }`}
                    id={`service-card-${srv.id}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-mono text-[10px] tracking-widest ${isHovered ? 'text-black/60' : 'text-[#8c8c8c]'}`}>
                        {srv.tag}
                      </span>
                      <span className={`rounded-full px-2 py-0.5 font-mono text-[9px] ${
                        isHovered ? 'bg-black/10 text-black' : 'bg-white/10 text-white'
                      }`}>
                        SERVICE
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold uppercase tracking-tight mb-2">
                      {srv.title}
                    </h3>
                    <p className={`font-sans text-sm mb-4 leading-relaxed ${isHovered ? 'text-zinc-800' : 'text-[#a3a3a3]'}`}>
                      {srv.description}
                    </p>

                    {/* Tools sub-list */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-800/20">
                      {srv.tools.map((tl, i) => (
                        <span 
                          key={i} 
                          className={`font-mono text-[10px] rounded px-1.5 py-0.5 border ${
                            isHovered 
                              ? 'bg-neutral-100 border-neutral-300 text-neutral-800' 
                              : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                          }`}
                        >
                          {tl}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Section 2: Timeline of Experience & Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-20 pt-16 border-t border-white/10">
          {/* Experience Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <span className="font-mono text-xs tracking-wider text-white border-b border-white/10 pb-2 w-max block">
              TRAJECT & TIMELINE
            </span>

            <div className="relative border-l border-white/10 pl-6 ml-2 space-y-10 py-2">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="relative group" id={`experience-${i}`}>
                  {/* Circle locator */}
                  <div className="absolute -left-[31px] top-1 h-2 w-2 rounded-full border border-white bg-[#050505] transition-transform duration-300 group-hover:scale-150" />
                  
                  <span className="font-mono text-[10px] tracking-widest text-[#8c8c8c] bg-white/5 border border-white/5 rounded px-2 py-1">
                    {exp.period}
                  </span>
                  
                  <h4 className="font-display text-base font-bold uppercase tracking-tight text-white mt-3 mb-1">
                    {exp.role}
                  </h4>
                  
                  <p className="font-serif text-sm italic text-[#8c8c8c] mb-3">
                    {exp.company}
                  </p>
                  
                  <p className="font-sans text-xs text-[#bebebe] leading-relaxed max-w-md">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Grid of Skills */}
          <div className="lg:col-span-6 space-y-8">
            <span className="font-mono text-xs tracking-wider text-white border-b border-white/10 pb-2 w-max block">
              VAARDIGHEDEN & TOOLKIT
            </span>

            <div className="space-y-6">
              {SKILL_GROUPS.map((group, i) => (
                <div 
                  key={i} 
                  className="rounded-lg border border-white/5 bg-black/20 p-5 flex flex-col space-y-3"
                  id={`skill-group-${i}`}
                >
                  <span className="font-mono text-[10px] text-white tracking-widest uppercase mb-1">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((sk, j) => (
                      <span 
                        key={j}
                        className="rounded bg-neutral-900 border border-neutral-800 px-3 py-1.5 font-sans text-xs text-[#dcdcdc] transition-all duration-300 hover:border-white hover:text-white"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
