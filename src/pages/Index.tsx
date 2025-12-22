import { Navbar } from '@/components/portfolio/Navbar';
import { FloatingElements } from '@/components/portfolio/FloatingElements';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { ResumeSection } from '@/components/portfolio/ResumeSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated Background Elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>
      

    </div>
  );
};

export default Index;
