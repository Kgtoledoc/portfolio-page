import About from "@/components/about";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Services from "@/components/services";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
    </main>
  );
}
