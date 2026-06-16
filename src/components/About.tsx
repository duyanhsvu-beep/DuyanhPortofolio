import { BIOGRAPHY } from '../data';

export default function About() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-black border-t border-white/5 py-32 px-6 md:px-12 lg:px-24"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 border-b border-white/5 pb-8">
          <div className="flex flex-col">
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#8c8c8c] uppercase mb-2 font-semibold">
              CREATIEVE VISIE
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl text-white">
              OVER MIJ
            </h2>
          </div>
        </div>

        {/* Minimalist 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Focused Biography Text */}
          <div className="lg:col-span-7 flex flex-col space-y-8 max-w-2xl">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#8c8c8c] uppercase font-semibold">
              BIOGRAFIE
            </span>
            
            <h3 className="font-display text-2xl sm:text-3xl font-light text-white leading-tight">
              {BIOGRAPHY.text1}
            </h3>

            <div className="font-sans text-sm text-[#bebebe] leading-relaxed font-light space-y-6">
              <p>
                {BIOGRAPHY.text2}
              </p>
              <p>
                {BIOGRAPHY.text3}
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-8 text-[11px] font-mono text-[#8c8c8c]">
              <div>
                <span className="text-white block mb-1.5 font-semibold tracking-wider uppercase">LOCATIE</span>
                <span>Amsterdam, Nederland</span>
              </div>
              <div>
                <span className="text-white block mb-1.5 font-semibold tracking-wider uppercase">DISCIPLINES</span>
                <span>Cinematic Videography &bull; Creative Editing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium, Clean B&W Portrait */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-lg bg-[#0a0a0a] aspect-[3/4] w-full max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1200&sat=-100"
                alt="Portrait van Duyanh Vu"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover saturate-0 contrast-[1.05] brightness-[0.8] hover:scale-[1.01] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
