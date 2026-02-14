
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { POLICIES } from '../content/policyContent';
import ContactForm from '../sections/ContactForm';
import ScrollReveal from '../components/ScrollReveal';


const PolicyDetail: React.FC = () => {
    const { type } = useParams<{ type: string }>();
    const policy = type ? POLICIES[type] : null;
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.policy-section');
            let currentSection = 0;
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150) {
                    currentSection = index;
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!policy) {
        return <Navigate to="/" replace />;
    }

    const scrollToSection = (index: number) => {
        const section = document.getElementById(`section-${index}`);
        if (section) {
            const offset = 120;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = section.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-[#121217] min-h-screen selection:bg-[#EC008C] selection:text-white">
            {/* Background Decor */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[10%] right-[-5%] w-[40rem] h-[40rem] glow-cyan rounded-full opacity-5"></div>
                <div className="absolute bottom-[20%] left-[-5%] w-[35rem] h-[35rem] glow-magenta rounded-full opacity-5"></div>
            </div>

            {/* Hero Header */}
            <section className="relative pt-48 pb-16 lg:pb-24 z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-12 bg-[#EC008C]"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">Legal Documentation</span>
                        </div>
                        <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.9] tracking-tighter mb-6 text-gradient uppercase">
                            {policy.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-widest">
                            <span className="text-[#EC008C]">Effective Date: {policy.effectiveDate}</span>
                            <span className="text-neutral-600 hidden md:inline">|</span>
                            <span className="text-neutral-400">Authority: Simaga (Pty) Ltd</span>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main Reading Area */}
            <section className="pb-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Sticky Navigation Sidebar (Hidden on Mobile) */}
                        <aside className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-32 space-y-8">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600 mb-6">In This Document</h4>
                                    <nav className="space-y-2">
                                        {policy.sections.map((section, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => scrollToSection(idx)}
                                                className={`block text-left py-2 px-4 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all duration-300 w-full truncate ${activeSection === idx
                                                    ? 'bg-white text-black translate-x-2'
                                                    : 'text-neutral-500 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {section.title}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                    <h5 className="text-[10px] font-black uppercase tracking-widest text-white mb-3">Need Clarity?</h5>
                                    <p className="text-xs text-neutral-500 font-medium leading-relaxed mb-4">
                                        If you have questions regarding our legal terms or data usage, our team is ready to assist.
                                    </p>
                                    <button
                                        onClick={() => {
                                            const contactSection = document.getElementById('legal-contact');
                                            contactSection?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-[10px] font-black uppercase tracking-widest text-[#00AEEF] hover:text-white transition-colors"
                                    >
                                        Contact Legal Support &rarr;
                                    </button>
                                </div>
                            </div>
                        </aside>

                        {/* Content Column */}
                        <div className="lg:col-span-9">
                            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl">

                                {/* Intro Block */}
                                <div className="mb-20 pb-12 border-b border-white/5">
                                    <p className="text-xl md:text-2xl text-white font-black leading-tight tracking-tight uppercase italic opacity-90">
                                        "{policy.intro}"
                                    </p>
                                </div>

                                {/* Detailed Sections */}
                                <div className="space-y-24">
                                    {policy.sections.map((section, idx) => (
                                        <div
                                            key={idx}
                                            id={`section-${idx}`}
                                            className="policy-section scroll-mt-32"
                                        >
                                            <div className="flex items-center gap-6 mb-10 group">
                                                <span className={`w-12 h-[2px] transition-all duration-500 group-hover:w-20 ${idx % 2 === 0 ? 'bg-[#EC008C]' : 'bg-[#00AEEF]'}`}></span>
                                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                                                    {section.title}
                                                </h2>
                                            </div>

                                            <div className="space-y-8 pl-0 md:pl-18">
                                                {section.clauses.map((clause, cIdx) => (
                                                    <span key={cIdx}>
                                                        {Object.entries(clause).map(([key, value]) => (
                                                            <ul className="space-y-4" key={key}>
                                                                <li className="text-neutral-400 font-medium leading-relaxed pl-6 relative">
                                                                    {!Array.isArray(value) && (
                                                                        <>
                                                                            <span className="absolute left-0 top-3 w-2 h-[1px] bg-neutral-700"></span>
                                                                            <span className="flex flex-row">
                                                                                <span className="font-bold text-white mr-3">{key}</span>
                                                                                {value.toString()}
                                                                            </span>
                                                                        </>
                                                                    )}
                                                                    {Array.isArray(value) && value.map((val, vIdx) => (
                                                                        <ul className="space-y-4 ml-8" key={`${key}-${vIdx}`}>
                                                                            {Object.entries(val).map(([vKey, vValue]) => (
                                                                                <li className="text-neutral-400 font-medium leading-relaxed pl-6 relative" key={vKey}>
                                                                                    <span className="absolute left-0 top-3 w-2 h-[1px] bg-neutral-700"></span>
                                                                                    <span className="grid grid-cols-12 gap-2">
                                                                                        <span className="font-semibold text-white">{vKey}</span>
                                                                                        <span className="col-span-9">
                                                                                            {vValue.toString()}
                                                                                        </span>
                                                                                    </span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    ))}
                                                                </li>
                                                            </ul>
                                                        ))}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Contact Sub-section */}
                                <div id="legal-contact" className="mt-32 pt-24 border-t border-white/5">
                                    <div className="grid grid-cols-1 items-center">
                                        <div>
                                            <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6 italic underline decoration-[#FFF200] decoration-4 underline-offset-8">
                                                Legal Inquiries
                                            </h3>
                                            <p className="text-neutral-400 font-medium mb-8 leading-relaxed">
                                                For any clarifications regarding the above {policy.title}, please reach out to our administrative team or visit our Jukskei Park headquarters.
                                            </p>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-[#EC008C]">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm font-bold text-white">hello@thecanvasco.co.za</span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-[#00AEEF]">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm font-bold text-white">12 Chroom Street, Jukskeipark, Randburg, South Africa</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reusable Accent Strip */}
            <div className="accent-strip w-full"></div>
        </div>
    );
};

export default PolicyDetail;