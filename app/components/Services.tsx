import { ReactNode } from 'react';
import { FiLayers, FiCpu, FiSmartphone } from 'react-icons/fi';
import SectionHeader from './ui/SectionHeader';

interface ServiceItemProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const ServiceItem = ({ icon, title, desc }: ServiceItemProps) => (
  <div className="bg-white p-10 shadow-sm border border-gray-50 rounded-sm">
    <div className="text-4xl mb-6">{icon}</div>
    <h3 className="text-[16px] font-bold uppercase mb-4">{title}</h3>
    <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#f2f3f7]">
      <div className="max-w-6xl">
        <SectionHeader subtitle="What I Do" title="My Services" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceItem icon={<FiLayers color="#2c98f0"/>} title="Web Development" desc="Responsive Next.js & React apps with Node.js backends." />
          <ServiceItem icon={<FiCpu color="#ec5453"/>} title="ML Solutions" desc="Custom deep learning models and data-driven predictive systems." />
          <ServiceItem icon={<FiSmartphone color="#f9bf3f"/>} title="API Integration" desc="Building and connecting robust RESTful APIs for modern platforms." />
        </div>
      </div>
    </section>
  );
}
