interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
}

interface ExperienceSectionProps {
  title: string;
  items: ExperienceItem[];
}

export function ExperienceSection({ title, items }: ExperienceSectionProps) {
  return (
    <section>
      <h2 className="text-base font-medium text-foreground mb-4">{title}</h2>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-foreground">{item.role}</h3>
              <p className="text-sm text-accent">{item.company}</p>
            </div>
            <p className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
