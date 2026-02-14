import React, { useState, useEffect } from 'react';
import Button from './Button';
import ServiceCheckbox from './ServiceCheckbox';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<{
    name: string;
    tel: string;
    email: string;
    day: string;
    time: string;
    services: string[];
  }>({
    name: '',
    tel: '',
    email: '',
    day: '',
    time: '',
    services: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Scroll Lock & Form Reset
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset after transition
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', tel: '', email: '', day: '', time: '', services: [] });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getTimeOptions = () => {
    const options = [
      { label: 'Morning: 08:00 - 11:30', value: 'morning' },
      { label: 'Afternoon: 12:00 - 14:30', value: 'afternoon' },
    ];
    if (formData.day !== 'Saturday') {
      options.push({ label: 'Late Afternoon: 15:00 - 17:00', value: 'late-afternoon' });
    }
    return options;
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#121217] overflow-y-auto transition-opacity duration-300 ease-out">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] glow-magenta rounded-full opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] glow-cyan rounded-full opacity-10"></div>
      </div>

      <div className="relative min-h-screen flex flex-col">
        {/* Header/Close */}
        <div className="flex justify-between items-center px-6 lg:px-12 py-8 z-20">
          <div className="flex flex-col items-start leading-none">
            <span className="text-xl font-black uppercase tracking-tighter text-white">THE CANVAS CO</span>
            <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-neutral-500 mt-1">BILLBOARDS • BANNERS • PRINT</span>
          </div>
          <button
            onClick={onClose}
            className="group flex items-center gap-4 text-neutral-500 hover:text-white transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Close Canvas</span>
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-[#EC008C] group-hover:border-[#EC008C] transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex-grow flex items-center pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-20 lg:gap-32 w-full items-start">

            {/* Column 1: Form (60% width on large) */}
            <div className="order-1 lg:col-span-6 transform transition-all duration-700">
              {isSuccess ? (
                <div className="py-20">
                  <div className="w-24 h-24 bg-[#00AEEF] rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-[#00AEEF]/20">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-6xl font-black uppercase tracking-tighter text-white mb-6">Secured.</h2>
                  <p className="text-2xl text-neutral-400 font-medium italic mb-12 max-w-md">Our team is reviewing your requirements. We'll connect at your requested time.</p>
                  <Button variant="outline" size="lg" onClick={onClose}>Return to Site</Button>
                </div>
              ) : (
                <div className="bg-[#1e1e26] p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                  <h3 className="text-4xl font-black uppercase mb-12 tracking-tighter">BOOK A <span className="text-[#EC008C]">CALL</span></h3>

                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-6">
                      <input
                        type="text"
                        required
                        placeholder="What's your name?"
                        className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:border-[#EC008C] transition-all text-white outline-none font-bold placeholder:text-neutral-600"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Your telephone number"
                        className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:border-[#00AEEF] transition-all text-white outline-none font-bold placeholder:text-neutral-600"
                        value={formData.tel}
                        onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:border-white transition-all text-white outline-none font-bold placeholder:text-neutral-600"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-neutral-600 mb-6">Services</h4>
                      <ServiceCheckbox
                        selectedServices={formData.services}
                        onToggle={handleServiceToggle}
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-neutral-600 mb-6">Preferred Day and Time</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <select
                          required
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#FFF200] transition-all text-white outline-none font-bold appearance-none cursor-pointer"
                          value={formData.day}
                          onChange={(e) => setFormData({ ...formData, day: e.target.value, time: '' })}
                        >
                          <option value="" className="bg-[#1e1e26]">Select Day</option>
                          {days.map(d => <option key={d} value={d} className="bg-[#1e1e26]">{d}</option>)}
                        </select>

                        <select
                          required
                          disabled={!formData.day}
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#FFF200] transition-all text-white outline-none font-bold appearance-none cursor-pointer disabled:opacity-30"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        >
                          <option value="" className="bg-[#1e1e26]">Select Time</option>
                          {getTimeOptions().map(t => <option key={t.value} value={t.value} className="bg-[#1e1e26]">{t.label}</option>)}
                        </select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full mt-6 bg-white text-black hover:bg-neutral-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'ESTABLISHING CONNECTION...' : 'DEPLOY MESSAGE'}
                    </Button>
                  </form>
                </div>
              )}
            </div>

            {/* Column 2: Text/Info (40% width on large) */}
            <div className="hidden lg:block lg:col-span-4 order-2 transform transition-all duration-700">
              <div className="inline-flex items-center gap-4 mb-10">
                <span className="h-[1px] w-12 bg-white/20"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">INITIATE PROJECT</span>
              </div>
              <h1 className="text-7xl font-black uppercase tracking-tighter mb-12 leading-[0.85] text-white">
                LET'S <br /> <span className="text-[#00AEEF]">SCALE</span> <br /> Your Brand.
              </h1>
              <p className="text-xl text-neutral-400 font-medium leading-relaxed mb-20 max-w-sm italic">
                World-class branding, delivered through precise execution. No more vendor management headaches.
              </p>

              <div className="space-y-16">
                <div className="group flex items-center gap-10">
                  <div className="w-16 h-16 bg-white/5 text-[#00AEEF] border border-white/10 flex items-center justify-center rounded-2xl group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-500">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-2 italic">VOICE STRATEGY</h3>
                    <p className="text-2xl font-black text-white tracking-tighter">082 589 6841</p>
                  </div>
                </div>

                <div className="group flex items-center gap-10">
                  <div className="w-16 h-16 bg-white/5 text-[#EC008C] border border-white/10 flex items-center justify-center rounded-2xl group-hover:bg-[#EC008C] group-hover:text-white transition-all duration-500">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-2 italic">DIRECT CHANNEL</h3>
                    <p className="text-2xl font-black text-white tracking-tighter">hello@thecanvasco.co.za</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;