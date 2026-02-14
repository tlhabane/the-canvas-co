import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES_DATA } from '../content/siteContent';
import Accordion from '../components/Accordion';
import ContactForm from '../sections/ContactForm';
import ScrollReveal from '../components/ScrollReveal';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICES_DATA[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-[#121217] min-h-screen">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] glow-cyan rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[35rem] h-[35rem] glow-magenta rounded-full"></div>
      </div>

      {/* Hero Header */}
      <section className="relative pt-48 pb-24 h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={`The Canvas Co | ${service.title}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/85 via-[#94a3b8]/75 to-transparent mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-white/20"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">Service Insight</span>
            </div>
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-black leading-[0.9] tracking-tighter mb-8 text-gradient uppercase">
              {service.title.split('(')[0]}
            </h1>
            <p className="text-2xl text-[#EC008C] font-black italic tracking-tight">{service.tagline}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 pt-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-24">

              {/* Overview */}
              <ScrollReveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <svg className="w-6 h-6 text-[#00AEEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Overview</h2>
                </div>
                <p className="text-xl text-neutral-400 leading-relaxed font-medium">{service.overview}</p>
              </ScrollReveal>

              {/* Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScrollReveal>
                  <div className="premium-card p-10 rounded-3xl h-full border-t-4 border-t-[#00AEEF]">
                    <h3 className="text-xl font-black uppercase mb-8 tracking-widest text-white">What Improves?</h3>
                    <ul className="space-y-6">
                      {service.whatImproves.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="mt-1 w-2 h-2 rounded-full bg-[#00AEEF] flex-shrink-0"></div>
                          <span className="text-neutral-300 font-bold text-sm uppercase tracking-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="premium-card p-10 rounded-3xl h-full border-t-4 border-t-[#EC008C]">
                    <h3 className="text-xl font-black uppercase mb-8 tracking-widest text-white">Impact</h3>
                    <ul className="space-y-6">
                      {service.outcomes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="mt-1 w-2 h-2 rounded-full bg-[#EC008C] flex-shrink-0"></div>
                          <span className="text-neutral-300 font-bold text-sm uppercase tracking-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              {/* Execution Steps */}
              <ScrollReveal>
                <h2 className="text-3xl font-black uppercase mb-12 tracking-tighter text-white">The Workflow</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.howItWorks.map((step, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 p-8 rounded-2xl flex items-center gap-6 group hover:bg-white/10 transition-colors">
                      <div className="text-4xl font-black italic text-[#FFF200] opacity-40 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                      <p className="font-bold uppercase text-[10px] tracking-[0.2em] text-white">{step}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Procurement Insight */}
              <ScrollReveal>
                <div className="bg-[#FFF200] p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-black/5 text-8xl font-black">OPS</div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-black mb-6">Strategic Insight</h3>
                  <p className="text-2xl md:text-3xl text-black font-black leading-tight tracking-tighter italic relative z-10">
                    "{service.decisionSupport}"
                  </p>
                </div>
              </ScrollReveal>

              {/* FAQ Section */}
              <ScrollReveal className="pt-8">
                <h2 className="text-3xl font-black uppercase mb-12 tracking-tighter text-white italic underline decoration-[#00AEEF] decoration-4 underline-offset-8">Common Queries</h2>
                <Accordion items={service.faqs} />
              </ScrollReveal>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-8">
                <ScrollReveal>
                  <ContactForm initialService={service.id} />
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="premium-card p-10 rounded-3xl bg-white text-black border-none">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-6">The Promise</h4>
                    <p className="text-2xl font-black italic tracking-tighter">
                      "On-brand, on-budget, and on-time. No exceptions."
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="accent-strip w-full"></div>
    </div>
  );
};

export default ServiceDetail;