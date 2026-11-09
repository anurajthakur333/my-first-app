import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 bg-black p-6 font-bold text-white">
      <Link href="/" className="hover:text-lime-300">Home</Link>
      <Link href="/about" className="hover:text-lime-300">About</Link>
      <Link href="/contact" className="hover:text-lime-300">Contact</Link>
      <Link href="/projects" className="hover:text-lime-300">Projects</Link>
    </nav>
  );
}
