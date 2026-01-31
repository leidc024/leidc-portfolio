import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiGo,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiFastapi,
  SiExpress,
  SiFlask,
  SiNodedotjs,
  SiSupabase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGit,
  SiPostman,
  SiLinux,
  SiMongoose,
  SiDrizzle,
} from '@icons-pack/react-simple-icons';
import { Coffee, Cloud } from 'lucide-react';

const techIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Python': SiPython,
  'Java': Coffee,
  'C++': SiCplusplus,
  'Go': SiGo,
  'HTML': SiHtml5,
  'CSS': SiCss,
  'React': SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Next.js': SiNextdotjs,
  'Fastapi': SiFastapi,
  'Express.js': SiExpress,
  'Flask': SiFlask,
  'Node.js': SiNodedotjs,
  'Supabase': SiSupabase,
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Drizzle': SiDrizzle,
  'Prisma': SiPrisma,
  'Docker': SiDocker,
  'AWS': Cloud,
  'Git': SiGit,
  'Postman': SiPostman,
  'Linux': SiLinux,
  'Mongoose': SiMongoose,
};

interface Skill {
  name: string;
  icon?: string;
}

interface TechnologiesSectionProps {
  title: string;
  skills: Skill[];
}

export function TechnologiesSection({
  title,
  skills,
}: TechnologiesSectionProps) {
  return (
    <section>
      <h2 className="text-base font-medium text-foreground mb-4">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          const IconComponent = techIcons[skill.name];
          return (
            <span
              key={skill.name}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors"
            >
              {IconComponent && <IconComponent className="h-3 w-3" size={12} />}
              {skill.name}
            </span>
          );
        })}
      </div>
    </section>
  );
}
