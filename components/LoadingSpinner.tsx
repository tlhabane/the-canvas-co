import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#121217] flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-[3px] border-white/5 border-t-[#EC008C] rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-[3px] border-white/5 border-t-[#00AEEF] rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="absolute inset-8 border-[3px] border-white/5 border-t-[#FFF200] rounded-full animate-spin" style={{ animationDuration: '0.8s' }}></div>
      </div>
      <div className="mt-8 text-white font-black uppercase tracking-[0.4em] text-[10px] animate-pulse">
        Initializing Canvas
      </div>
    </div>
  );
};

export default LoadingSpinner;