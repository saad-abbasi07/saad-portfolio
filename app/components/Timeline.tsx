import { ReactNode } from 'react';
import { FiBookOpen, FiBriefcase } from 'react-icons/fi';
import SectionHeader from './ui/SectionHeader';

interface TimelineItemProps {
  icon: ReactNode;
  date: string;
  title: string;
  sub: string;
  desc: string;
}

const TimelineItem = ({ icon, date, title, sub, desc }: TimelineItemProps) => (
  <div className="relative mb-12 last:mb-0">
    <div className="absolute -left-[51px] top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 text-lg">
      {icon}
    </div>
    <div className="bg-white p-6 shadow-sm border border-gray-100">
      <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{date}</span>
      <h3 className="text-lg font-bold text-black mt-2">{title} <span className="text-gray-400 font-normal"> - {sub}</span></h3>
      <p className="text-sm text-gray-500 mt-4 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export function Education() {
  return (
    <section id="education" className="py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#f2f3f7]">
      <div className="max-w-6xl">
        <SectionHeader subtitle="Knowledge" title="Education" />
        <div className="border-l-2 border-blue-500 ml-4 pl-8 space-y-12">
          <TimelineItem 
            icon={<FiBookOpen className="bg-blue-600 text-white"/>} 
            date="2022 - 2026" 
            title="Bachelor of Computer Science" 
            sub="Abbottabad University Of Science & Technology (AUST)" 
            desc="Focused on core computer science principles, software architecture, and artificial intelligence." 
          />
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-6xl">
        <SectionHeader subtitle="Career" title="Professional Experience" />
        <div className="border-l-2 border-red-500 ml-4 pl-8 space-y-12">
          <TimelineItem 
            icon={<FiBriefcase className="bg-red-500 text-white"/>} 
            date="2025 - Present" 
            title="Full Stack Web Developer" 
            sub="Nexelix, Havelian" 
            desc="Building responsive applications using Next.js, React, and Tailwind CSS. Developing backend APIs and managing MongoDB databases." 
          />
          <TimelineItem 
            icon={<FiBriefcase className="bg-gray-800 text-white"/>} 
            date="2024 - Present" 
            title="Machine Learning Developer" 
            sub="Freelance" 
            desc="Training deep learning models for computer vision and analyzing datasets with Python, Pandas, and NumPy." 
          />
        </div>
      </div>
    </section>
  );
}
