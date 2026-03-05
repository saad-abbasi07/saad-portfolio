import Image from 'next/image';
import { useState } from 'react';
import { FiGithub, FiZoomIn, FiExternalLink } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import ImageLightbox from './ImageLightbox';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
  demo?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  color: "blue" | "green";
  onCaseStudy?: (projectTitle: string) => void;
  specialWidth?: boolean;
}

export default function ProjectCard({ project, color, onCaseStudy, specialWidth }: ProjectCardProps) {
  const isBlue = color === "blue";
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
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
            <span className="text-xs px-3 py-1 bg-purple-500 text-white rounded-full font-medium">
              Featured
            </span>
          </div>
        )}
        {/* Live Demo Badge */}
        {project.demo && (
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-[#A855F7] text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              Live Demo
            </span>
          </div>
        )}
        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-t-2xl cursor-pointer group"
            onClick={() => setIsLightboxOpen(true)}
          >
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A"
        />
        {/* Zoom indicator */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
            <FiZoomIn className="text-sm" />
            <span className="text-xs font-medium">Click to zoom</span>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-3 flex flex-col flex-grow">
        <h3 className={`text-lg sm:text-xl font-bold tracking-tight uppercase ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{project.title}</h3>
        <p className={`text-sm leading-relaxed flex-grow ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>{project.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech: string, idx: number) => (
              <span key={idx} className={`px-2 py-1 text-xs font-medium rounded ${
                isBlue 
                  ? theme === 'dark' ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-500/5 text-blue-600'
                  : theme === 'dark' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-500/5 text-emerald-600'
              }`}>
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {onCaseStudy && (project.title === "TeamFlow Collaboration Platform" || project.title === "Ecommerce Estore NextJS") && (
              <button
                onClick={() => onCaseStudy(project.title)}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-md hover:shadow-lg min-h-[44px]"
              >
                <span className="hidden sm:inline">Case Study</span>
                <span className="sm:hidden">Study</span>
              </button>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 min-h-[44px] ${
                isBlue 
                  ? 'text-blue-400 hover:text-blue-300'
                  : theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
              }`}
            >
              <FiGithub className="text-sm" />
              <span className="hidden sm:inline">GitHub</span>
              <span className="sm:hidden">Code</span>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-md hover:shadow-lg min-h-[44px]"
              >
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
      </div>
      
      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={project.image}
        imageAlt={project.title}
        title={project.title}
      />
    </div>
  );
}
