import React, { useState } from 'react';
import Button from '../components/Button';
import ServiceCheckbox from '../components/ServiceCheckbox';

interface ContactFormProps {
  initialService?: string;
  title?: React.ReactNode;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialService = '', title = <>Contact <span className="text-[#EC008C]">Us</span></> }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: initialService ? [initialService] : [] as string[],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
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
      setFormData({ name: '', email: '', phone: '', company: '', services: [], message: '' });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-[#1e1e26] p-12 text-center rounded-3xl border border-white/5 shadow-2xl">
        <div className="w-20 h-20 bg-[#00AEEF] rounded-2xl flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Received.</h3>
        <p className="text-neutral-400 font-medium mb-12">We'll get back to you within 24 hours.</p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>Send Another</Button>
      </div>
    );
  }

  return (
    <div className="bg-[#1e1e26] p-10 md:p-14 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
      <h3 className="text-3xl font-black uppercase mb-12 tracking-tighter">
        {title}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
        <div className="space-y-8">
          <div className="relative group/field">
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:border-[#EC008C] transition-all text-white outline-none font-bold placeholder:text-neutral-600"
              placeholder="What's your name?"
            />
          </div>
          <div className="relative group/field">
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:border-[#00AEEF] transition-all text-white outline-none font-bold placeholder:text-neutral-600"
              placeholder="Your email address"
            />
          </div>

          <div>
            <h4 className="font-bold text-neutral-600 mb-6">Services</h4>
            <ServiceCheckbox
              selectedServices={formData.services}
              onToggle={handleServiceToggle}
            />
          </div>

          <div className="relative group/field">
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:border-white transition-all text-white outline-none resize-none font-bold placeholder:text-neutral-600"
              placeholder="Tell us about your goal..."
            ></textarea>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          size="lg"
          className="w-full"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;