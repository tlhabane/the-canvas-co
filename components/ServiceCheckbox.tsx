import React from 'react';
import { SERVICE_SUMMARIES } from '../content/siteContent';

interface ServiceCheckboxProps {
  selectedServices: string[];
  onToggle: (serviceId: string) => void;
  accentColor?: string;
}

const ServiceCheckbox: React.FC<ServiceCheckboxProps> = ({ 
  selectedServices, 
  onToggle,
  accentColor = '#EC008C'
}) => {
  return (
    <div className="space-y-3 w-full">
      {SERVICE_SUMMARIES.map((service) => {
        const isSelected = selectedServices.includes(service.id);
        return (
          <button
            key={service.id}
            type="button"
            onClick={() => onToggle(service.id)}
            className={`w-full flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 text-left group ${
              isSelected 
                ? 'bg-white border-white shadow-xl shadow-white/5' 
                : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/[0.08]'
            }`}
          >
            <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              isSelected 
                ? 'bg-black border-black' 
                : 'border-neutral-700 group-hover:border-neutral-500'
            }`}>
              {isSelected && (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
              isSelected ? 'text-black' : 'text-neutral-400 group-hover:text-white'
            }`}>
              {service.title}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ServiceCheckbox;