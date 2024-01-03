import Header from "./ui/navigation/header";
import Hero from "./ui/hero/hero";
import ShortcutsBox from "./ui/shrotcuts-box/shortcutsBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Header />
      <Hero />
      <ShortcutsBox />
    </main>
  );
}
