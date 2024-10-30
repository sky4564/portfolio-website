import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="프로젝트 1"
              description="프로젝트 설명입니다."
              imageUrl=""
              tags={["React", "TypeScript", "Tailwind"]}
              link="https://project1.com"
            />
            {/* 더 많은 프로젝트 카드 추가 */}
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}


