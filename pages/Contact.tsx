import React from 'react';
import ContactForm from '../sections/ContactForm';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#121217] min-h-screen">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[45rem] h-[45rem] glow-cyan rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[35rem] h-[35rem] glow-magenta rounded-full"></div>
      </div>

      {/* Map Hero Section - Lightened overlay, removed hover effect */}
      <section className="h-[100vh] w-full relative overflow-hidden bg-neutral-900 border-b border-white/5">
        <iframe
          title="The Canvas Co Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.9744158485295!2d27.99424887640283!3d-26.03403317717887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9574044b58e70f%3A0xc3f3b94207907f15!2s12%20Chroom%20St%2C%20Jukskei%20Park%2C%20Randburg%2C%202188%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-70 grayscale contrast-125"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#121217] via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-10 left-10 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">Our Canvas</div>
          <p className="text-white font-bold text-sm">12 Chroom Street, Jukskei Park, Randburg</p>
        </div>
      </section>

      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <ScrollReveal>
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-white/20"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">Initiate Project</span>
              </div>
              <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-black uppercase tracking-tighter mb-12 leading-[0.9] text-gradient">
                Let's <br /> <span className="text-[#00AEEF]">Scale</span> <br /> Your Brand.
              </h1>
              <p className="text-2xl text-neutral-400 font-medium leading-relaxed mb-16 max-w-lg italic">
                World-class branding, delivered through precise execution. No more vendor management headaches.
              </p>

              <div className="space-y-12">
                <div className="group flex items-center gap-10">
                  <div className="w-16 h-16 bg-white/5 text-[#00AEEF] border border-white/10 flex items-center justify-center rounded-2xl group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-500">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-2">Voice Strategy</h3>
                    <p className="text-3xl font-black text-white tracking-tighter">082 589 6841</p>
                  </div>
                </div>

                <div className="group flex items-center gap-10">
                  <div className="w-16 h-16 bg-white/5 text-[#EC008C] border border-white/10 flex items-center justify-center rounded-2xl group-hover:bg-[#EC008C] group-hover:text-white transition-all duration-500">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-2">Direct Channel</h3>
                    <p className="text-3xl font-black text-white tracking-tighter">hello@thecanvasco.co.za</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="relative">
                <div className="absolute -inset-10 glow-cyan rounded-full opacity-5 pointer-events-none"></div>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="accent-strip w-full"></div>
    </div>
  );
};

export default Contact;