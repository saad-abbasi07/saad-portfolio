"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FiMenu, FiX, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMoon, FiSun } from 'react-icons/fi';

const Sidebar = () => {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setIsOpen(!isMobileView);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed top-4 left-4 z-[60] p-2 border shadow-sm rounded-md md:hidden ${
            theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'
          }`}
        >
          <FiMenu size={24} className={theme === 'dark' ? 'text-white' : 'text-black'} />
        </button>
      )}

      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen w-[300px] flex flex-col items-center py-16 px-6 overflow-y-auto transition-transform duration-500 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-[#f2f3f7]'
          }`}
      >
        {isMobile && (
          <button onClick={() => setIsOpen(false)} className={`absolute top-4 right-4 md:hidden transition-colors ${
            theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-black'
          }`}>
            <FiX size={24} />
          </button>
        )}

        {/* Profile Section */}
        <div className="text-center mb-10 w-full">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-8">
            <Image 
              src="/images/main_images/profile.jpg" 
              alt="Saad Abbasi" 
              fill
              className="object-cover" 
            />
          </div>
          <h1 className={`text-[24px] font-bold mb-2 tracking-normal font-sans ${
            theme === 'dark' ? 'text-white' : 'text-[#000]'
          }`}>
            Saad Abbasi
          </h1>
          <p className="text-[12px] uppercase tracking-[1px] text-[#2c98f0] font-medium">
            Full-Stack ML Engineer
          </p>
        </div>

        {/* Navigation */}
        <nav className="w-full flex-1 mt-4">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.id} className="w-full text-center">
                <Link
                  href={`#${item.id}`}
                  onClick={() => { setActive(item.id); if (isMobile) setIsOpen(false); }}
                  className={`block text-[12px] uppercase tracking-[1px] font-medium transition-all duration-200 ${
                    active === item.id 
                    ? 'text-[#2c98f0] font-bold' 
                    : theme === 'dark' ? 'text-gray-400 hover:text-[#2c98f0]' : 'text-gray-500 hover:text-[#2c98f0]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social & Footer */}
        <div className="mt-auto pt-8 text-center w-full">
          {/* Dark Mode Toggle */}
          <div className="flex justify-center gap-2 mb-6">
             <button 
               onClick={toggleTheme}
               className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] transition-all ${
                 theme === 'dark' 
                   ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700' 
                   : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-black'
               }`}
             >
                {theme === 'dark' ? <FiSun size={13} /> : <FiMoon size={13} />}
                {theme === 'dark' ? 'LIGHT' : 'DARK'}
             </button>
          </div>

          {/* Footer Text - Colorlib Style */}
          <div className="px-4 mb-6">
            <p className={`text-[12px] leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-[#00000080]'
            }`}>
              © Copyright ©2026 All rights reserved by Saad Abbasi<br />
            </p>
          </div>

          {/* Social Icons */}
          <div className={`flex justify-center space-x-4 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <Link href="#" className="hover:text-[#2c98f0] transition-colors"><FiFacebook size={14}/></Link>
            <Link href="#" className="hover:text-[#2c98f0] transition-colors"><FiTwitter size={14}/></Link>
            <Link href="#" className="hover:text-[#2c98f0] transition-colors"><FiInstagram size={14}/></Link>
            <Link href="#" className="hover:text-[#2c98f0] transition-colors"><FiLinkedin size={14}/></Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;