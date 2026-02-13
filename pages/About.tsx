import React from 'react';
import { ABOUT_CONTENT } from '../content/siteContent';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="bg-[#121217] min-h-screen">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] w-[40rem] h-[40rem] glow-magenta rounded-full"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[35rem] h-[35rem] glow-cyan rounded-full"></div>
      </div>

      {/* Hero Header */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-white/20"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">Our Story</span>
            </div>
            <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-black uppercase tracking-tighter mb-8 leading-[0.9] text-gradient">
              Standard of <br/> Excellence.
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
              Empowering businesses to stand out through consistent, high-quality visual communication. 
              We don't just design; we deploy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight italic text-white">
                More Than Just <br/> <span className="text-[#EC008C]">a Logo</span>
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed mb-12 font-medium">
                {ABOUT_CONTENT.vision}
              </p>
              <div className="flex items-center gap-6">
                 <Link to="/contact">
                   <Button variant="creative">Start Rollout</Button>
                 </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative group">
                <div className="aspect-[4/5] bg-neutral-900 overflow-hidden rounded-3xl border border-white/5">
                  <img src="https://placehold.co/800x1000/1e1e26/FFFFFF?text=Brand+Consistency" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white text-black p-10 rounded-2xl shadow-2xl hidden md:block">
                  <div className="text-4xl font-black italic mb-2 tracking-tighter">14Yrs</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Visual Authority</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who We Are & Philosophy */}
      <section className="py-32 bg-white text-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <ScrollReveal>
                 <div className="flex items-center gap-4 mb-6">
                  <span className="h-[1px] w-12 bg-black/20"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">The Team</span>
                </div>
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Who We Are</h2>
                <p className="text-lg text-neutral-600 font-medium leading-relaxed">
                  {ABOUT_CONTENT.whoWeAre}
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7">
              <ScrollReveal delay={200}>
                <div className="p-12 md:p-20 bg-neutral-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 text-white/5 text-9xl font-black italic">CORE</div>
                  <h3 className="text-2xl font-black uppercase mb-8 tracking-widest text-[#FFF200] italic">Our Philosophy</h3>
                  <p className="text-3xl md:text-4xl font-black leading-tight tracking-tighter italic relative z-10">
                    "{ABOUT_CONTENT.howWeWork}"
                  </p>
                  <div className="mt-12">
                    <Link to="/contact">
                      <Button variant="primary" size="lg">Join the journey</Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="accent-strip w-full"></div>
    </div>
  );
};

export default About;