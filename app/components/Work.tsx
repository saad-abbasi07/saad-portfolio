import SectionHeader from './ui/SectionHeader';
import ProjectCard, { Project } from './ui/ProjectCard';

interface WorkProps {
  webProjects: Project[];
  mobileProjects?: Project[];
  mlProjects: Project[];
}

export default function Work({ webProjects, mobileProjects = [], mlProjects }: WorkProps) {
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

        {mobileProjects.length > 0 && (
          <div className="mb-20">
            <SectionHeader subtitle="Mobile Apps" title="Mobile Applications" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileProjects.map((project, index) => (
                <ProjectCard key={index} project={project} color="purple" />
              ))}
            </div>
          </div>
        )}

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
