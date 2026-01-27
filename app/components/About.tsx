import { ReactNode } from 'react';
import { FiMonitor, FiCpu, FiPieChart, FiDatabase } from 'react-icons/fi';
import SectionHeader from './ui/SectionHeader';
import StatCard from './ui/StatCard';
import { useTheme } from '../contexts/ThemeContext';

interface ExpertiseCardProps {
  icon: ReactNode;
  title: string;
  color: string;
}

const ExpertiseCard = ({ icon, title, color }: ExpertiseCardProps) => {
  const { theme } = useTheme();
  return (
    <div className={`p-8 shadow-lg border-b-4 ${color} text-center ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="text-3xl text-blue-500 flex justify-center mb-6">{icon}</div>
      <h3 className="text-[13px] font-bold uppercase tracking-wider">{title}</h3>
    </div>
  );
};

export default function About() {
  const { theme } = useTheme();
  return (
    <section id="about" className={`py-24 px-6 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl">
        <SectionHeader subtitle="About Me" title="Who Am I?" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className={`space-y-6 leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
          }`}>
            <p><strong className={`font-bold text-lg ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>I am Saad Abbasi,</strong> a Full Stack & AI Developer based in Abbottabad. I build responsive web applications using modern stacks and create smart solutions using Machine Learning.</p>
            <p>My goal is to solve real-world problems through clean, type-safe code and data-driven insights.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard count="50+" label="Projects" />
            <StatCard count="4+" label="Years" />
            <StatCard count="30+" label="Clients" />
            <StatCard count="100%" label="Commitment" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ExpertiseCard icon={<FiMonitor />} title="Full Stack" color="border-b-[#2c98f0]" />
          <ExpertiseCard icon={<FiCpu />} title="Machine Learning" color="border-b-[#ec5453]" />
          <ExpertiseCard icon={<FiPieChart />} title="Data Analysis" color="border-b-[#f9bf3f]" />
          <ExpertiseCard icon={<FiDatabase />} title="Deployment" color="border-b-[#a84cb8]" />
        </div>
      </div>
    </section>
  );
}
