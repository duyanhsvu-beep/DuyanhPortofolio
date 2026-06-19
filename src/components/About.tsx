import { BIOGRAPHY } from '../data';
import overmijImg from '../assets/images/Overmij.jpg';

export default function About() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-black border-t border-white/5 py-32 px-6 md:px-12 lg:px-24"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        {/* Minimalist 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Premium, Clean Portrait */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-lg bg-[#0a0a0a] aspect-[3/4] w-full max-w-md mx-auto">
              <img
                src={overmijImg}
                alt="Portrait van Duyanh Vu"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover brightness-[0.95] contrast-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Focused Biography Text */}
          <div className="lg:col-span-7 flex flex-col space-y-8 max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl text-white">
              OVER MIJ
            </h2>
            
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
            
          
          </div>
        </div>
      </div>
    </section>
  );
}
