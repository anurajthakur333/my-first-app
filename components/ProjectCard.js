import Link from "next/link";

export default function ProjectCard({ title, text, slug }) {
  return (
    <Link href={`/projects/${slug}`} className="rounded-2xl bg-white p-6 shadow hover:bg-lime-300">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-stone-600">{text}</p>
    </Link>
  );
}
