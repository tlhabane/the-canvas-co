import React from 'react';
import { WHY_CHOOSE_US_HOMEPAGE } from '../content/siteContent';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Holistic Approach",
      desc: "We manage the entire process, from initial design concepts to final production and installation.",
      benefit: "Seamless Execution: Saves you time, effort, and the complexity of managing multiple vendors.",
      color: "#00AEEF"
    },
    {
      title: "Brand Consistency",
      desc: "Our focus is on ensuring every item, whether a tiny business card or a massive sign, speaks the same brand language.",
      benefit: "Increased Trust: A unified look and feel builds credibility and brand recognition.",
      color: "#EC008C"
    },
    {
      title: "Quality & Durability",
      desc: "We use premium materials and modern production techniques to ensure longevity and a professional finish.",
      benefit: "Exceptional Value: Your marketing investments last longer and reflect positively on your company.",
      color: "#FFF200"
    },
    {
      title: "Expert Consultation",
      desc: "Our team provides strategic advice on the best materials and formats to achieve your specific objectives.",
      benefit: "Maximized ROI: Ensures you choose the most effective solutions for your budget and goals.",
      color: "#ffffff"
    }
  ];

  return (
    <div className="bg-[#121217] min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 glow-yellow opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-white/20"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">Differentiation</span>
            </div>
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black uppercase tracking-tighter mb-8 leading-[0.85] text-gradient">
              The <span className="text-[#EC008C]">Canvas</span> <br/> Advantage.
            </h1>
            <p className="text-2xl text-neutral-400 font-bold leading-relaxed max-w-3xl italic">
              Fewer vendors. Clearer accountability. Consistent execution. 
              We reduce risk, save time, and ensure your brand performs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 stagger-grid">
            {benefits.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="premium-card p-12 md:p-16 rounded-[3rem] h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-1 mb-10" style={{ backgroundColor: item.color }}></div>
                    <h3 className="text-4xl font-black uppercase mb-8 tracking-tighter text-white italic">{item.title}</h3>
                    <p className="text-xl text-neutral-400 mb-12 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                  <div className="p-8 bg-white/5 rounded-2xl border-l-4 border-white">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-4 italic">Direct ROI</h4>
                    <p className="font-black text-white text-lg leading-snug">{item.benefit}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
             <h2 className="text-5xl md:text-8xl font-black uppercase mb-16 tracking-tighter leading-none text-gradient">
              Protect <span className="text-[#00AEEF]">&</span> Elevate
            </h2>
            <Link to="/contact">
              <Button variant="creative" size="lg" className="px-16">Start your Project</Button>
            </Link>
          </ScrollReveal>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
          <span className="text-[30vw] font-black uppercase tracking-tighter italic whitespace-nowrap">AUTHORITY</span>
        </div>
      </section>

      <div className="accent-strip w-full"></div>
    </div>
  );
};

export default WhyChooseUs;