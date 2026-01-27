"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  buttonText: string;
  image: string;
}

interface HeroProps {
  slides: Slide[];
}

export default function Hero({ slides }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className={`relative h-screen w-full overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {slides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-all duration-1000 flex items-center ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <div className="container mx-auto h-full flex items-center px-6 sm:px-12 md:px-16 lg:px-24">
            <div className={`max-w-2xl z-30 p-6 md:p-0 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800/70 md:bg-transparent' : 'bg-white/70 md:bg-transparent'
          }`}>
              <h2 className="text-blue-500 font-bold tracking-[6px] uppercase text-[11px] mb-4">{slide.highlight}</h2>
              <h1 className={`text-[35px] sm:text-[60px] lg:text-[80px] font-serif font-bold leading-[1.1] mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-[#2c2c2c]'
              }`}>
                {slide.title} <br /> <span className="text-blue-600">{slide.subtitle}</span>
              </h1>
              <p className={`text-[14px] md:text-[15px] leading-relaxed mb-8 border-l-4 border-blue-500 pl-4 max-w-md ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
              }`}>{slide.description}</p>
              <button 
                className={`px-10 py-4 uppercase tracking-widest text-[11px] font-bold transition-all shadow-lg ${
                  theme === 'dark' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-black text-white hover:bg-blue-600'
                }`}
                onClick={() => {
                  if (slide.buttonText === "Download CV") {
                    window.open('/resume.pdf', '_blank');
                  } else {
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-full h-full md:w-2/3 lg:w-1/2 overflow-hidden z-0">
              <Image 
                src={slide.image} 
                alt="Saad" 
                fill 
                className="object-cover object-center md:object-right" 
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={`absolute inset-0 ${
                theme === 'dark' ? 'bg-gray-800/40 md:bg-transparent md:bg-gradient-to-r md:from-gray-900' : 'bg-white/40 md:bg-transparent md:bg-gradient-to-r md:from-white'
              } md:via-white/10 md:to-transparent`}></div>
          </div>
        </div>
      ))}
    </section>
  );
}
