import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/hero/HeroSection";
import AboutSection from "@/components/sections/about/AboutSection";
import SkillsSection from "@/components/sections/skills/SkillsSection";
import EducationSection from "@/components/sections/education/EducationSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import FAQSection from "@/components/sections/faq/FAQSection";
import Footer from "@/components/layout/Footer";

// Page-specific metadata (extends layout metadata)
export const metadata = {
  title: "Wanichanon Saelee - Full-Stack Developer | React & Next.js Expert",
  description:
    "Portfolio of Wanichanon Saelee, a passionate full-stack developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch for collaborations.",
  openGraph: {
    title: "Wanichanon Saelee - Full-Stack Developer Portfolio",
    description:
      "Explore my projects in React, Next.js, and modern web development. Open for freelance and full-time opportunities.",
    type: "website",
    url: "https://wanichanon.dev",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <article itemScope itemType="https://schema.org/ProfilePage">
        <meta itemProp="datePublished" content="2024-01-01" />
        <meta itemProp="dateModified" content="2026-02-02" />
        <meta itemProp="author" content="Wanichanon Saelee" />

        {/* Hero Section - Introduction */}
        <section id="home" aria-label="Introduction">
          <HeroSection />
        </section>

        {/* About Section - Biography */}
        <section id="about" aria-label="About Wanichanon Saelee">
          <AboutSection />
        </section>

        {/* Skills Section - Technical Expertise */}
        <section id="skills" aria-label="Technical Skills">
          <SkillsSection />
        </section>

        {/* Education Section - Academic Background */}
        <section id="education" aria-label="Education">
          <EducationSection />
        </section>

        {/* Projects Section - Portfolio */}
        <section id="projects" aria-label="Portfolio Projects">
          <ProjectsSection />
        </section>

        {/* FAQ Section - AEO Optimization */}
        <FAQSection />

        {/* Footer */}
        <Footer />
      </article>
    </>
  );
}
