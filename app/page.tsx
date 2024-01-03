import Image from "next/image";
import Header from "./ui/navigation/header";
import Hero from "./ui/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
    </main>
  );
}
