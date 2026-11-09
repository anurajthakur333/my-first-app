import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <main className="flex-1 bg-orange-50 p-12">
      <h1 className="text-7xl font-bold text-lime-600">My Projects</h1>
      <div className="mt-10 grid grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} title={p.title} text={p.text} slug={p.slug} />
        ))}
      </div>
    </main>
  );
}
