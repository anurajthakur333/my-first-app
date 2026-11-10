import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? project.title : "Not found" };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="flex-1 bg-orange-50 p-12">
      <h1 className="text-6xl font-bold text-lime-600">{project.title}</h1>
      <p className="mt-6 text-2xl text-stone-600">{project.about}</p>
      <Link href="/projects" className="mt-8 inline-block font-bold text-lime-700 hover:underline">
        Back to projects
      </Link>
    </main>
  );
}
