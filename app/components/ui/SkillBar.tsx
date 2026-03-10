import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
  icon?: React.ReactNode;
  projects?: { title: string; link: string }[];
}

const SkillBar = ({ skill, percentage, color, icon, projects }: SkillBarProps) => (
  <div className="w-full">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        <span className="text-[12px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">{skill}</span>
      </div>
      <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400">{percentage}%</span>
    </div>
    <div className="w-full h-[6px] bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div className={`h-full ${color} transition-all duration-1000 ease-out`} style={{ width: `${percentage}%` }}></div>
    </div>
    {projects && projects.length > 0 && (
      <div className="mt-2 flex flex-wrap gap-1">
        <span className="text-[10px] text-gray-500 dark:text-gray-400">Used in:</span>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
          >
            {project.title}
            <FiExternalLink className="w-2 h-2" />
          </a>
        ))}
      </div>
    )}
  </div>
);

export default SkillBar;
