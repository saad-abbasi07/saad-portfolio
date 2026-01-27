interface StatCardProps {
  count: string;
  label: string;
}

import { useTheme } from '../../contexts/ThemeContext';

export default function StatCard({ count, label }: StatCardProps) {
  const { theme } = useTheme();
  return (
    <div className={`p-6 text-center transition-all ${
      theme === 'dark' 
        ? 'bg-gray-800 hover:bg-gray-700' 
        : 'bg-[#f2f3f7] hover:bg-white'
    } hover:shadow-xl`}>
      <h3 className="text-2xl font-serif font-bold text-blue-600 mb-1">{count}</h3>
      <p className={`text-[10px] uppercase tracking-widest font-bold ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
      }`}>{label}</p>
    </div>
  );
}
