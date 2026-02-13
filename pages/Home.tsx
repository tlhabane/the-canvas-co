import React from 'react';
import Button from '../components/Button';
import { SERVICE_SUMMARIES, HERO_SLIDES } from '../content/siteContent';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#121217]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] glow-cyan rounded-full pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[35rem] h-[35rem] glow-magenta rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[50rem] h-[50rem] glow-yellow rounded-full pointer-events-none"></div>

      {/* Hero Section - Updated to Slideshow with specific overlay requested */}
      <Carousel slides={HERO_SLIDES} />

      {/* Core Services Section - Staggered Grid */}
      <section id="services" className="py-32 relative z-10 bg-[#121217]/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-24">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">Strategic <br/> Foundations</h2>
            <p className="text-neutral-400 text-lg max-w-xl font-medium">We deliver consistent brand execution across every physical and digital touchpoint.</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-grid">
            {SERVICE_SUMMARIES.map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 150}>
                <Link to={`/services/${service.slug}`} className="block group">
                  <div className={`premium-card p-12 h-full rounded-3xl flex flex-col justify-between overflow-hidden relative ${
                    idx === 0 ? 'bg-[#EC008C]' : idx === 1 ? 'bg-[#1e1e26]' : 'bg-[#00AEEF]'
                  }`}>
                    {idx === 1 && (
                      <div className="absolute top-0 right-0 p-8 text-neutral-800/10 text-9xl font-black italic select-none">
                        0{idx + 1}
                      </div>
                    )}
                    <div>
                      <h3 className={`text-3xl font-black uppercase mb-6 tracking-tighter transition-colors ${idx === 1 ? 'text-white' : 'text-black'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm font-medium leading-relaxed mb-12 ${idx === 1 ? 'text-neutral-400' : 'text-black/70'}`}>
                        {service.shortDesc}
                      </p>
                    </div>
                    <div className={`text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 ${idx === 1 ? 'text-[#EC008C]' : 'text-black'}`}>
                      <span>Explore Service</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 leading-none">
                You can't use up <br/> <span className="text-neutral-300">creativity.</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-lg font-medium leading-relaxed">
                The more you use, the more you have in your significant mind. We help you deploy it at scale.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex gap-16">
                <div>
                  <div className="text-8xl font-black tracking-tighter mb-2 italic">14</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Years of Experience</div>
                </div>
                <div>
                  <div className="text-8xl font-black tracking-tighter mb-2 italic text-[#EC008C]">187</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Satisfied Clients</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-tighter text-gradient mb-12">
              Ready to <br/> <span className="text-[#FFF200]">Transform?</span>
            </h2>
            <Link to="/contact">
              <Button variant="creative" size="lg">Start Your Journey</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
      
      <div className="accent-strip w-full"></div>
    </div>
  );
};

export default Home;