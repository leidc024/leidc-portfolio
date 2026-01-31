import Link from 'next/link';
import { ExternalLink, Github, FolderOpen, Chrome, Cloud } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiPrisma,
  SiSupabase,
  SiGraphql,
  SiWebpack,
  SiDrizzle,
} from '@icons-pack/react-simple-icons';

const techIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Docker': SiDocker,
  'AWS': Cloud,
  'Prisma': SiPrisma,
  'Supabase': SiSupabase,
  'GraphQL': SiGraphql,
  'Webpack': SiWebpack,
  'Drizzle': SiDrizzle,
  'Chrome Extension': Chrome,
};

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  links?: {
    live?: string;
    github?: string;
  };
}

export function ProjectCard({
  name,
  description,
  technologies,
  links,
}: ProjectCardProps) {
  const hasLinks = links?.github || links?.live;
  
  const cardContent = (
    <>
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-sm font-medium text-accent">{name}</h3>
        <div className="flex gap-1.5">
          {links?.github && (
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View source code"
            >
              <Github className="h-3.5 w-3.5" />
            </Link>
          )}
          {links?.live && (
            <Link
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View live project"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          )}
          {!hasLinks && (
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          )}
        </div>
      </div>

      <p className="text-xs text-muted-foreground mb-4 leading-relaxed text-pretty">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => {
          const IconComponent = techIcons[tech];
          return (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] border border-border rounded text-muted-foreground"
            >
              {IconComponent && <IconComponent className="h-2.5 w-2.5" size={10} />}
              {tech.toLowerCase()}
            </span>
          );
        })}
      </div>
    </>
  );

  if (hasLinks) {
    return (
      <div className="border border-border rounded-lg p-5 hover:border-muted-foreground/50 transition-colors">
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href="#"
      className="block border border-border rounded-lg p-5 hover:border-muted-foreground/50 transition-colors cursor-pointer"
    >
      {cardContent}
    </Link>
  );
}
