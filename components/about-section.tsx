interface AboutSectionProps {
  title: string;
  description: string;
}

export function AboutSection({ title, description }: AboutSectionProps) {
  return (
    <section>
      <h2 className="text-base font-medium text-foreground mb-4">{title}</h2>
      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
        {description}
      </p>
    </section>
  );
}
