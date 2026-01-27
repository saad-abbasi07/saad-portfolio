import { ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
}

export default function SectionHeader({ subtitle, title }: SectionHeaderProps) {
  const { theme } = useTheme();
  return (
    <div className="mb-16">
      <span className={`text-[11px] uppercase tracking-[5px] font-bold block mb-2 ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
      }`}>{subtitle}</span>
      <h2 className={`text-[28px] font-serif font-bold uppercase tracking-[4px] ${
        theme === 'dark' ? 'text-white' : 'text-[#2c2c2c]'
      }`}>{title}</h2>
    </div>
  );
}
