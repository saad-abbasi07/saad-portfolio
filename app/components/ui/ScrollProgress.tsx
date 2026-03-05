"use client";
import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
      <div className={`h-1 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
      }`}>
        <div 
          className="h-full bg-gradient-to-r from-[#A855F7] to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
}
