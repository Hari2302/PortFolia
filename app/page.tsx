import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { SkillsSection } from '@/components/skills-section'
import { ContactSection } from '@/components/contact-section'
import { ProjectsSection } from '@/components/projects-section'
import ConnectingDots from '@/components/Hero-background'

export default function Home() {
  return (
    <main>
      {/* <ConnectingDots /> */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      
    </main>
  )
}

