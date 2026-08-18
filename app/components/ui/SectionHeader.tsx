import { ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
}

export default function SectionHeader({ subtitle, title }: SectionHeaderProps) {
  const { theme } = useTheme();
  return (
    <div className="mb-20">
      <span className={`text-[12px] uppercase tracking-[6px] font-bold block mb-3 ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
      }`}>{subtitle}</span>
      <h2 className={`text-[36px] sm:text-[42px] font-serif font-black uppercase tracking-[3px] leading-tight ${
        theme === 'dark' ? 'text-white' : 'text-[#2c2c2c]'
      }`}>{title}</h2>
    </div>
  );
}
