import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { CONTACT_LINKS } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "WEBDESIGN",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate server POST with visual low latency timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", service: "WEBDESIGN", message: "" });
      
      // Clear success feedback
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  const servicesOption = ["WEBDESIGN", "FOTOGRAFIE", "VIDEOGRAFIE", "CREATIVE DIRECTION"];

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#050505] border-t border-white/5 py-24 px-6 md:px-12 lg:px-24"
      id="contact"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6">
          <div className="flex flex-col">
            <span className="font-mono text-xs tracking-[0.25em] text-[#8c8c8c] uppercase mb-2">
              VERBINDING
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl md:text-6xl text-white">
              Samenwerken?
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8c8c8c] mt-4 md:mt-0 max-w-xs md:text-right">
            Laten we jouw visie vertalen naar een betekenisvol en tastbaar resultaat.
          </span>
        </div>

        {/* Form and Contact Link Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Contact Information Cards & Social Handles */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-xs tracking-wider text-white border-b border-white/10 pb-2 w-max block">
                DIRECT CONTACT
              </span>
              
              <h3 className="font-serif text-3xl font-light italic text-[#bebebe] leading-relaxed">
                Heb je een idee, een project of wil je gewoon even kennismaken?
              </h3>

              <div className="py-2">
                <p className="font-mono text-[10px] text-[#8c8c8c] tracking-wider uppercase mb-1.5">E-MAIL</p>
                <a 
                  href={`mailto:${CONTACT_LINKS.email}`} 
                  className="group inline-flex items-center space-x-2 text-xl font-display font-semibold text-white hover:text-[#8c8c8c] transition-colors duration-300"
                  id="direct-email-link"
                >
                  <span>{CONTACT_LINKS.email}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Social Links List */}
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-wider text-white border-b border-white/10 pb-2 w-max block">
                VOLG DUYANH ON LINE
              </span>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <a
                  href={CONTACT_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/5 bg-black p-4 rounded-lg transition-all duration-300 hover:border-white/20 select-none cursor-pointer"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-[#bebebe] group-hover:text-white transition-colors">
                    Instagram
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#8c8c8c] transition-all group-hover:text-white" />
                </a>

                <a
                  href={CONTACT_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/5 bg-black p-4 rounded-lg transition-all duration-300 hover:border-white/20 select-none cursor-pointer"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-[#bebebe] group-hover:text-white transition-colors">
                    LinkedIn
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#8c8c8c] transition-all group-hover:text-white" />
                </a>

                <a
                  href={CONTACT_LINKS.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/5 bg-black p-4 rounded-lg transition-all duration-300 hover:border-white/20 select-none cursor-pointer"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-[#bebebe] group-hover:text-white transition-colors">
                    Behance
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#8c8c8c] transition-all group-hover:text-white" />
                </a>

                <a
                  href={CONTACT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/5 bg-black p-4 rounded-lg transition-all duration-300 hover:border-white/20 select-none cursor-pointer"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-[#bebebe] group-hover:text-white transition-colors">
                    GitHub
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#8c8c8c] transition-all group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Form Case */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/5 bg-black/40 p-6 md:p-8">
              <span className="font-mono text-xs tracking-wider text-white border-b border-white/10 pb-2 w-max block mb-8">
                STUUR EEN BERICHT
              </span>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name" className="font-mono text-[10px] text-[#8c8c8c] tracking-widest uppercase">
                      NAAM *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="bijv. Duyanh"
                      className="rounded bg-black/60 border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-all duration-300 focus:border-white focus:bg-black font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="font-mono text-[10px] text-[#8c8c8c] tracking-widest uppercase">
                      E-MAILADRES *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="bijv. naam@domein.com"
                      className="rounded bg-black/60 border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-all duration-300 focus:border-white focus:bg-black font-sans"
                    />
                  </div>
                </div>

                {/* Inquiry Service Type select list */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="service" className="font-mono text-[10px] text-[#8c8c8c] tracking-widest uppercase">
                    WAAR GEBRUIK JE MIJN HULP VOOR?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {servicesOption.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: opt })}
                        className={`rounded py-2 px-1 font-mono text-[9px] tracking-widest border transition-all duration-300 ${
                          formData.service === opt
                            ? "bg-white border-white text-black"
                            : "bg-black/40 border-white/10 text-[#8c8c8c] hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="message" className="font-mono text-[10px] text-[#8c8c8c] tracking-widest uppercase">
                    BERICHT *
                    </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Beschrijf je ideeën, doelen of stel simpelweg een vraag..."
                    className="rounded bg-black/60 border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-all duration-300 focus:border-white focus:bg-black font-sans resize-none"
                  />
                </div>

                {/* Form submit response states */}
                <div className="pt-2 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
                  <span className="font-mono text-[9px] text-[#8c8c8c] max-w-xs text-center sm:text-left">
                    * Verplichte velden. Jouw privacy is gegarandeerd.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="relative group w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded px-8 py-4 font-mono text-xs uppercase tracking-widest bg-white text-black font-semibold transition-all duration-300 hover:bg-neutral-200 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    id="submit-contact-form"
                  >
                    {isSubmitting ? (
                      <span className="inline-block h-4 w-4 rounded-full border-2 border-dashed border-black animate-spin" />
                    ) : (
                      <>
                        <span>VERSTUUR BERICHT</span>
                        <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Form Success Toast */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="mt-6 flex items-center space-x-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 text-emerald-400 text-xs font-sans"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block">Bericht succesvol verzonden!</span>
                      Bedankt, ik neem binnen 24 uur contact met je op.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
