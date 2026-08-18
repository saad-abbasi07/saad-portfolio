import Image from 'next/image';
import { useState } from 'react';
import { FiGithub, FiZoomIn, FiExternalLink, FiSmartphone, FiLayers } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import ImageLightbox from './ImageLightbox';

export interface ProjectLink {
  label: string;
  url: string;
  type?: 'demo' | 'github' | 'apk' | 'webRepo' | 'mobileRepo' | 'backendRepo' | 'external' | 'api';
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  image: string;
  demo?: string;
  featured?: boolean;
  links?: ProjectLink[];
  architectureNote?: string;
}

interface ProjectCardProps {
  project: Project;
  color?: "blue" | "green" | "purple";
  onCaseStudy?: (projectTitle: string) => void;
  specialWidth?: boolean;
}

export default function ProjectCard({ project, color = "blue", onCaseStudy, specialWidth }: ProjectCardProps) {
  const isBlue = color === "blue";
  const isPurple = color === "purple";
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className={`rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group min-h-[400px] relative ${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
      } ${project.featured ? 'ring-2 ring-purple-500/30' : ''} ${specialWidth ? 'lg:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Featured Project Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <span className="text-xs px-3 py-1 bg-purple-500 text-white rounded-full font-medium shadow-md">
              Featured
            </span>
          </div>
        )}
        {/* Live Demo Badge */}
        {project.demo && (
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-[#A855F7] text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-md">
              Live Demo
            </span>
          </div>
        )}

        {/* Project Image Box */}
        <div 
          className="relative h-48 w-full shrink-0 overflow-hidden rounded-t-2xl cursor-pointer group bg-gradient-to-br from-purple-900/20 to-gray-900/40"
          onClick={() => setIsLightboxOpen(true)}
        >
          {imageError ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-purple-900/50 via-indigo-900/40 to-slate-900/60">
              <FiSmartphone className="text-3xl text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-purple-200 font-semibold px-3">{project.title}</span>
            </div>
          ) : (
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
              quality={80}
              onError={() => setImageError(true)}
            />
          )}

          {/* Zoom indicator */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
              <FiZoomIn className="text-sm text-gray-900" />
              <span className="text-xs font-medium text-gray-900">Click to zoom</span>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-3 flex flex-col flex-grow">
          <h3 className={`text-base sm:text-lg xl:text-xl font-bold tracking-tight uppercase ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>{project.title}</h3>

          <p className={`text-xs sm:text-sm leading-relaxed flex-grow ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>{project.description}</p>

          {/* Architecture Line / Note */}
          {project.architectureNote && (
            <div className={`p-2.5 rounded-lg border text-[11px] font-mono flex items-center gap-2 ${
              theme === 'dark' ? 'bg-purple-950/40 border-purple-800/40 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-800'
            }`}>
              <FiLayers className="shrink-0 text-purple-500 text-xs" />
              <span className="truncate">{project.architectureNote}</span>
            </div>
          )}

          <div className="mt-auto">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
              {project.technologies.map((tech: string, idx: number) => (
                <span key={idx} className={`px-2 py-1 text-[10px] sm:text-xs font-medium rounded ${
                  isPurple
                    ? theme === 'dark' ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-500/10 text-purple-600'
                    : isBlue 
                      ? theme === 'dark' ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-500/5 text-blue-600'
                      : theme === 'dark' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-500/5 text-emerald-600'
                }`}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex gap-2 flex-wrap mt-3 sm:mt-4">
              {/* Optional Case Study Button */}
              {onCaseStudy && (project.title === "TeamFlow Collaboration Platform" || project.title === "Ecommerce Estore NextJS") && (
                <button
                  onClick={() => onCaseStudy(project.title)}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-md hover:shadow-lg min-h-[40px] sm:min-h-[44px]"
                >
                  <span className="hidden sm:inline">Case Study</span>
                  <span className="sm:hidden">Study</span>
                </button>
              )}

              {/* Dynamic Links Array if available */}
              {project.links && project.links.length > 0 ? (
                project.links.map((link, idx) => {
                  let btnStyle = "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700";
                  let icon = <FiExternalLink className="text-xs sm:text-sm" />;

                  if (link.type === 'demo' || link.label.toLowerCase().includes('demo')) {
                    btnStyle = "bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-md hover:shadow-lg font-semibold";
                    icon = <FiExternalLink className="text-xs sm:text-sm" />;
                  } else if (link.type === 'api') {
                    btnStyle = "bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700 shadow-md hover:shadow-lg font-semibold";
                    icon = <FiExternalLink className="text-xs sm:text-sm" />;
                  } else if (link.type === 'apk' || link.label.toLowerCase().includes('apk')) {
                    btnStyle = "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-md hover:shadow-lg font-semibold";
                    icon = <FiSmartphone className="text-xs sm:text-sm" />;
                  } else if (link.type === 'webRepo' || link.type === 'mobileRepo' || link.type === 'backendRepo' || link.type === 'github') {
                    btnStyle = "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700";
                    icon = <FiGithub className="text-xs sm:text-sm" />;
                  }

                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 min-h-[38px] ${btnStyle}`}
                    >
                      {icon}
                      <span>{link.label}</span>
                    </a>
                  );
                })
              ) : (
                /* Fallback to single github and demo links */
                <>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 min-h-[40px] sm:min-h-[44px] ${
                        isPurple
                          ? 'text-purple-400 hover:text-purple-300'
                          : isBlue 
                            ? 'text-blue-400 hover:text-blue-300'
                            : theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
                      }`}
                    >
                      <FiGithub className="text-xs sm:text-sm" />
                      <span className="hidden sm:inline">GitHub</span>
                      <span className="sm:hidden">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-md hover:shadow-lg min-h-[40px] sm:min-h-[44px]"
                    >
                      <span className="hidden sm:inline">Live Demo</span>
                      <span className="sm:hidden">Demo</span>
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Lightbox */}
      {!imageError && (
        <ImageLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          imageSrc={project.image}
          imageAlt={project.title}
          title={project.title}
        />
      )}
    </div>
  );
}
