import SectionHeader from './ui/SectionHeader';
import ProjectCard from './ui/ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
}

interface WorkProps {
  webProjects: Project[];
  mlProjects: Project[];
}

export default function Work({ webProjects, mlProjects }: WorkProps) {
  return (
    <section id="work" className="py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#f2f3f7]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionHeader subtitle="My Work" title="Web Development Projects" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} project={project} color="blue" />
            ))}
          </div>
        </div>
        <div>
          <SectionHeader subtitle="AI & ML" title="Machine Learning Projects" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlProjects.map((project, index) => (
              <ProjectCard key={index} project={project} color="green" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
