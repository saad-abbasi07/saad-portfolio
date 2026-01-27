import { ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ContactInfoProps {
  icon: ReactNode;
  label: string;
}

export default function ContactInfo({ icon, label }: ContactInfoProps) {
  const { theme } = useTheme();
  return (
    <div className="flex items-center space-x-6">
      <div className={`w-14 h-14 flex items-center justify-center text-blue-600 text-xl shrink-0 ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-[#f2f3f7]'
      }`}>{icon}</div>
      <span className={`text-[14px] font-medium break-all ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
      }`}>{label}</span>
    </div>
  );
}
