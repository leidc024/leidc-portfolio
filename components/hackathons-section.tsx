import Image from 'next/image';

interface Award {
  name: string;
  achievement: string;
  image: string;
  date?: string;
}

interface AwardsSectionProps {
  title: string;
  items: Award[];
}

export function AwardsSection({
  title,
  items,
}: AwardsSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-base font-medium text-foreground mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((award, idx) => (
          <div key={idx} className="group relative">
            <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-colors">
              <Image
                src={award.image}
                alt={award.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{award.name}</p>
            <p className="text-xs text-accent">{award.achievement}</p>
            {award.date && (
              <p className="text-xs text-muted-foreground/60">{award.date}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
