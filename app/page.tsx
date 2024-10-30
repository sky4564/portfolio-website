import { ProjectSlider } from "@/components/ProjectSlider";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-10">프로젝트</h2>
          <ProjectSlider />
        </section>
        <Contact />
      </main>
    </div>
  );
}


