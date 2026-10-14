import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Index() {
  return (
    <main className="w-full overflow-x-clip">
      <HeroSection />
      <ProjectsSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
