import Link from 'next/link';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const contactIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Email': Mail,
  'GitHub': Github,
  'LinkedIn': Linkedin,
  'Twitter': Twitter,
};

interface ContactLink {
  label: string;
  value: string;
  icon?: string;
}

interface ContactSectionProps {
  title: string;
  description: string;
  links: ContactLink[];
}

export function ContactSection({
  title,
  description,
  links,
}: ContactSectionProps) {
  return (
    <section>
      <h2 className="text-base font-medium text-foreground mb-4">{title}</h2>
      <p className="text-sm text-muted-foreground mb-4 text-pretty">{description}</p>

      <div className="grid grid-cols-2 gap-2">
        {links.map((link) => {
          const IconComponent = contactIcons[link.label];
          return (
            <Link
              key={link.label}
              href={
                link.label === 'Email'
                  ? `mailto:${link.value}`
                  : link.value.startsWith('http')
                    ? link.value
                    : `https://${link.value}`
              }
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors"
            >
              {IconComponent && <IconComponent className="h-3.5 w-3.5" />}
              {link.label.toLowerCase()}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
