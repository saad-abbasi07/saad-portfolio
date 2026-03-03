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
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300`}>
      <nav className={`flex items-center gap-1 px-4 py-2 rounded-full shadow-lg backdrop-blur-md ${
        theme === 'dark' 
          ? 'bg-gray-900/90 border border-gray-700' 
          : 'bg-white/90 border border-gray-200'
      }`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
              activeSection === item.id
                ? 'bg-[#A855F7] text-white'
                : theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
            title={item.label}
          >
            <span className="text-sm">{item.icon}</span>
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
