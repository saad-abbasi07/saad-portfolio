import SectionHeader from './ui/SectionHeader';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
}

const SkillBar = ({ skill, percentage, color }: SkillBarProps) => (
  <div className="w-full">
    <div className="flex justify-between mb-2">
      <span className="text-[12px] font-bold uppercase tracking-widest text-gray-700">{skill}</span>
      <span className="text-[12px] font-bold text-gray-500">{percentage}%</span>
    </div>
    <div className="w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
      <div className={`h-full ${color} transition-all duration-1000`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-6xl">
        <SectionHeader subtitle="Specialty" title="Technical Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <SkillBar skill="Next.js / React" percentage={92} color="bg-[#2c98f0]" />
          <SkillBar skill="Node.js / Express" percentage={88} color="bg-[#ec5453]" />
          <SkillBar skill="Python / ML" percentage={85} color="bg-[#f9bf3f]" />
          <SkillBar skill="MongoDB / MySQL" percentage={90} color="bg-[#a84cb8]" />
        </div>
      </div>
    </section>
  );
}
