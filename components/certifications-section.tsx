import Image from 'next/image';

interface Certification {
  name: string;
  issuer: string;
  image: string;
}

interface CertificationsSectionProps {
  title: string;
  items: Certification[];
}

export function CertificationsSection({
  title,
  items,
}: CertificationsSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-base font-medium text-foreground mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((cert, idx) => (
          <div key={idx} className="group relative">
            <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-colors">
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{cert.name}</p>
            <p className="text-xs text-accent">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
