import React, { useState, useEffect } from 'react';
import { HeroSlide } from '../types';
import Button from './Button';
import { Link } from 'react-router-dom';

interface CarouselProps {
  slides: HeroSlide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[90vh] min-h-[700px] overflow-hidden bg-[#121217]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image - Only visible on the right due to gradient */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[15000ms] ease-linear"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === current ? 'scale(1.15)' : 'scale(1)'
            }}
          />
          
          {/* Gradient Overlay: Opaque Left, Transparent Right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#121217] via-[#121217]/95 to-transparent z-10" />
          
          {/* Content - Positioned on the Left */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-[1px] w-12 bg-white/20"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">
                    {slide.title}
                  </span>
                </div>
                <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black text-white leading-[0.9] tracking-tighter mb-8 text-gradient">
                  {slide.headline}
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 font-medium max-w-xl mb-12 leading-relaxed italic">
                  {slide.subheadline}
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link to={slide.link}>
                    <Button variant="primary" size="lg">
                      {slide.cta}
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">
                      Book a Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Indicators */}
      <div className="absolute bottom-12 left-6 lg:left-12 z-30 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`group flex items-center gap-2 focus:outline-none transition-all duration-300`}
          >
            <div className={`h-[2px] transition-all duration-500 ${
              index === current ? 'w-16 bg-[#EC008C]' : 'w-6 bg-neutral-700 group-hover:bg-neutral-500'
            }`} />
            <span className={`text-[10px] font-black transition-opacity duration-300 ${
              index === current ? 'opacity-100 text-[#EC008C]' : 'opacity-0'
            }`}>0{index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;