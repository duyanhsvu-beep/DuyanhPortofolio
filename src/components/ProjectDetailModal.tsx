import { X, ArrowUpRight, Calendar, User, Briefcase, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden bg-black/85 backdrop-blur-md">
      {/* Background click handler */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 cursor-zoom-out"
      />

      {/* Modal Slide-out content */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 150 }}
        className="relative z-10 flex h-full w-full flex-col justify-between border-l border-white/10 bg-black text-white sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
        id={`modal-${project.id}`}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-8">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs tracking-widest text-[#8c8c8c]">PROJECT</span>
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-white">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="group flex items-center justify-center rounded-full border border-white/10 p-2.5 text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black focus:outline-none"
            id="close-modal-btn"
            aria-label="Sluit modal"
          >
            <X className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>

        {/* Scrollable details */}
        <div className="no-scrollbar flex-1 overflow-y-auto px-6 py-8 md:px-8">
          <div className="max-w-2xl">
            {/* Title */}
            <h2 className="font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl md:text-6xl text-white mb-6">
              {project.title}
            </h2>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-2 gap-6 border-y border-white/10 py-6 mb-8 text-sm font-sans">
              <div className="flex items-start space-x-3">
                <Calendar className="h-4 w-4 text-[#8c8c8c] mt-0.5" />
                <div>
                  <p className="font-mono text-xs text-[#8c8c8c] uppercase tracking-wider">JAAR</p>
                  <p className="font-medium text-white">{project.year}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <User className="h-4 w-4 text-[#8c8c8c] mt-0.5" />
                <div>
                  <p className="font-mono text-xs text-[#8c8c8c] uppercase tracking-wider">OPDRACHTGEVER</p>
                  <p className="font-medium text-white">{project.client}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 col-span-2 sm:col-span-1">
                <Briefcase className="h-4 w-4 text-[#8c8c8c] mt-0.5" />
                <div>
                  <p className="font-mono text-xs text-[#8c8c8c] uppercase tracking-wider">ROL</p>
                  <p className="font-medium text-white">{project.role}</p>
                </div>
              </div>
              {project.deliverables && (
                <div className="flex items-start space-x-3 col-span-2 sm:col-span-1">
                  <FileText className="h-4 w-4 text-[#8c8c8c] mt-0.5" />
                  <div>
                    <p className="font-mono text-xs text-[#8c8c8c] uppercase tracking-wider">DELIVERABLES</p>
                    <p className="font-medium text-white text-xs leading-relaxed">
                      {project.deliverables.join(", ")}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Descriptions */}
            <div className="space-y-6 text-sm leading-relaxed text-[#c0c0c0] font-sans">
              <p className="text-base text-white border-l-2 border-white pl-4 italic">
                {project.description}
              </p>
              <p className="text-[#a3a3a3] whitespace-pre-line text-sm md:text-base">
                {project.fullDescription}
              </p>
            </div>

            {/* Scope / Service Bullets */}
            <div className="mt-8">
              <p className="font-mono text-xs text-[#8c8c8c] uppercase tracking-wider mb-3">EXPERTISE SCOPE</p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono text-white"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery Images */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-12 space-y-6">
                <p className="font-mono text-xs text-[#8c8c8c] uppercase tracking-wider border-b border-white/5 pb-2">PROJECT GALLERIJ</p>
                <div className="grid grid-cols-1 gap-4">
                  {project.gallery.map((img, i) => (
                    <div 
                      key={i} 
                      className="group relative overflow-hidden bg-neutral-900 border border-white/5 rounded-lg aspect-16/10"
                    >
                      <img
                        src={img}
                        alt={`${project.title} detail ${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t border-white/10 bg-[#080808] px-6 py-6 md:px-8">
          <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <span className="font-mono text-xs text-[#8c8c8c] tracking-wider">
              DUYANH VU &copy; 2026
            </span>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 text-white hover:text-[#8c8c8c] font-medium text-sm transition-colors duration-300"
              >
                <span>BEKIJK LIVE PROJECT</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
