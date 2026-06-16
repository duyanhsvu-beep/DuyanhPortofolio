import { motion } from 'motion/react';
import { CONTACT_LINKS } from '../data';

export default function Contact() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-black border-t border-white/5 py-36 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center"
      id="contact"
    >
      <div className="mx-auto max-w-4xl flex flex-col items-center">
        {/* Strong Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white leading-tight max-w-3xl"
        >
          LET'S CREATE SOMETHING TOGETHER.
        </motion.h2>

        {/* Short info text line */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-sm sm:text-base text-[#bebebe] font-light leading-relaxed max-w-md mt-6"
        >
          Heb je een project, een idee of wil je de mogelijkheden bespreken? Neem gerust direct contact met mij op.
        </motion.p>

        {/* Gorgeous Minimalist Monochrome Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href={`mailto:${CONTACT_LINKS.email}`}
            className="inline-flex items-center justify-center bg-white text-black font-mono text-[11px] tracking-[0.2em] font-bold uppercase rounded-full px-8 py-4 transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] cursor-pointer"
            id="contact-email-cta-btn"
          >
            GET IN TOUCH / MAIL MIJ
          </a>
        </motion.div>

        {/* Secondary Contact Info & Socials */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-white/5 w-full max-w-xl flex flex-col items-center space-y-6"
        >
          <a 
            href={`mailto:${CONTACT_LINKS.email}`}
            className="font-display text-lg text-[#bebebe] hover:text-white transition-colors duration-300 font-medium"
          >
            {CONTACT_LINKS.email}
          </a>

          {/* Social Links text lineup */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            <a 
              href={CONTACT_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
            >
              INSTAGRAM
            </a>
            <span className="text-neutral-800 font-sans">&bull;</span>
            <a 
              href={CONTACT_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
            >
              LINKEDIN
            </a>
            <span className="text-neutral-800 font-sans">&bull;</span>
            <a 
              href={CONTACT_LINKS.behance} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
            >
              BEHANCE
            </a>
            <span className="text-neutral-800 font-sans">&bull;</span>
            <a 
              href={CONTACT_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
            >
              GITHUB
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
