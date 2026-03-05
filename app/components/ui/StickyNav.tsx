'use client';

import { useState, useEffect } from 'react';
import { FiHome, FiUser, FiBriefcase, FiAward, FiBookOpen, FiMail } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme } = useTheme();

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: <FiHome /> },
    { id: 'about', label: 'About', icon: <FiUser /> },
    { id: 'services', label: 'Services', icon: <FiBriefcase /> },
    { id: 'skills', label: 'Skills', icon: <FiAward /> },
    { id: 'education', label: 'Education', icon: <FiBookOpen /> },
    { id: 'contact', label: 'Contact', icon: <FiMail /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide nav based on scroll position
      setIsVisible(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className={`sticky top-0 backdrop-blur-lg bg-black/30 border-b border-white/10 ${
        theme === 'dark' 
          ? 'bg-gray-900/80' 
          : 'bg-white/80'
      }`}>
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-[#A855F7] text-white shadow-lg shadow-[#A855F7]/25'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/10'
                }`}
                title={item.label}
              >
                <span className="text-sm">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
