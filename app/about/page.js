import Image from "next/image";

export const metadata = { title: "About" };

export default function About() {
  return (
    <main className="flex-1 bg-orange-50 p-12">
      <h1 className="text-6xl font-bold">About me</h1>
      <Image src="/desk.jpg" alt="My desk: a laptop, a lamp and books" width={768} height={512} className="mt-8 rounded-2xl" />
    </main>
  );
}
