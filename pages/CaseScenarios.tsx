import React from 'react';
import { CASE_SCENARIOS } from '../content/siteContent';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const CaseScenarios: React.FC = () => {
  return (
    <div className="bg-[#121217] min-h-screen">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[-10%] w-[40rem] h-[40rem] glow-magenta rounded-full"></div>
      </div>

      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-white/20"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">Proof of Work</span>
            </div>
            <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-black uppercase tracking-tighter mb-8 leading-[0.9] text-gradient">
              Strategic <br/> <span className="text-[#00AEEF]">Outcomes.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
              Real-world challenges solved through integrated design and deployment strategies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {CASE_SCENARIOS.map((item, idx) => (
              <ScrollReveal key={idx}>
                <div className="premium-card rounded-[3rem] overflow-hidden flex flex-col md:flex-row group border-none">
                  <div className="md:w-2/5 overflow-hidden">
                    <img 
                      src={`https://placehold.co/800x800/1e1e26/FFFFFF?text=Scenario+0${idx + 1}`} 
                      alt="" 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                    />
                  </div>
                  <div className="md:w-3/5 p-12 md:p-20 flex flex-col justify-center relative bg-white text-black">
                    <div className="absolute top-10 right-10 text-neutral-100 text-[12rem] font-black italic select-none pointer-events-none">0{idx + 1}</div>
                    <div className="relative z-10">
                      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EC008C] mb-6 italic">Case Study</div>
                      <h2 className="text-4xl font-black uppercase mb-8 tracking-tighter leading-tight">{item.title}</h2>
                      <p className="text-xl text-neutral-600 mb-12 leading-relaxed font-bold italic">
                        "{item.description}"
                      </p>
                      <Link to="/contact">
                        <Button variant="primary" size="lg">Discuss similar Project</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-[#1e1e26] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-10 tracking-tighter leading-tight text-white">Custom Requirements?</h2>
            <p className="text-xl text-neutral-400 mb-12 leading-relaxed font-medium">
              We work across industries to deliver bespoke visual assets that define brand leadership.
            </p>
            <Link to="/contact">
              <Button variant="creative" size="lg">Talk to an expert</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
      
      <div className="accent-strip w-full"></div>
    </div>
  );
};

export default CaseScenarios;