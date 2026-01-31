import Link from 'next/link';
import { ProjectCard } from './project-card';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
}

interface ProjectsSectionProps {
  title: string;
  items: Project[];
  githubUrl?: string;
}

export function ProjectsSection({ title, items, githubUrl = 'https://github.com/leiandelacruz?tab=repositories' }: ProjectsSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-base font-medium text-foreground mb-6">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {items.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            links={project.links}
          />
        ))}
      </div>

      <div className="text-center">
        <Link
          href={'https://github.com/leidc024?tab=repositories'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          view all projects
        </Link>
      </div>
    </section>
  );
}
