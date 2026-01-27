import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  color: "blue" | "green";
}

export default function ProjectCard({ project, color }: ProjectCardProps) {
  const isBlue = color === "blue";
  const { theme } = useTheme();
  return (
    <div className={`rounded-xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group min-h-[400px] ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="relative h-48 w-full shrink-0 overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className={`text-base sm:text-lg font-bold mb-3 uppercase tracking-tight ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{project.title}</h3>
        <p className={`text-xs sm:text-sm mb-6 leading-relaxed flex-grow ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>{project.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {project.technologies.map((tech: string, idx: number) => (
              <span key={idx} className={`text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-1 rounded uppercase tracking-wider ${
                isBlue 
                  ? theme === 'dark' ? 'bg-blue-900 text-blue-300' : 'bg-blue-50 text-blue-700'
                  : theme === 'dark' ? 'bg-green-900 text-green-300' : 'bg-green-50 text-green-700'
              }`}>
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors ${
              isBlue 
                ? theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                : theme === 'dark' ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-800'
            }`}
          >
            <FiGithub className="text-sm sm:text-lg" />
            <span className="hidden sm:inline">Github Repo</span>
            <span className="sm:hidden">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}
