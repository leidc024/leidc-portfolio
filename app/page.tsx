import { Header } from '@/components/header';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { EducationSection } from '@/components/education-section';
import { TechnologiesSection } from '@/components/technologies-section';
import { ContactSection } from '@/components/contact-section';
import { ProjectsSection } from '@/components/projects-section';
import { CertificationsSection } from '@/components/certifications-section';
import { AwardsSection } from '@/components/hackathons-section';
import BackToTopButton from '@/components/back-to-top';
import { Footer } from '@/components/footer';
import { portfolioData } from '@/lib/portfolio-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 min-h-screen shadow-sm">
        <Header
          name={portfolioData.name}
          title={portfolioData.title}
          company={portfolioData.company}
          location={portfolioData.location}
          avatar={portfolioData.avatar}
        />

        <div className="px-6 py-8">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 mb-12">
            {/* Left Column */}
            <div className="space-y-10">
              <AboutSection
                title={portfolioData.about.title}
                description={portfolioData.about.description}
              />

              <TechnologiesSection
                title={portfolioData.technologies.title}
                skills={portfolioData.technologies.skills}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              <ExperienceSection
                title={portfolioData.experience.title}
                items={portfolioData.experience.items}
              />

              <EducationSection
                title={portfolioData.education.title}
                items={portfolioData.education.items}
              />

              <ContactSection
                title={portfolioData.contact.title}
                description={portfolioData.contact.description}
                links={portfolioData.contact.links}
              />
            </div>
          </div>

          {/* Full Width Below */}
          <ProjectsSection
            title={portfolioData.projects.title}
            items={portfolioData.projects.items}
          />

          <CertificationsSection
            title={portfolioData.certifications.title}
            items={portfolioData.certifications.items}
          />

          <AwardsSection
            title={portfolioData.awards.title}
            items={portfolioData.awards.items}
          />
        </div>

        <Footer />
      </div>
      <BackToTopButton />
    </main>
  );
}
