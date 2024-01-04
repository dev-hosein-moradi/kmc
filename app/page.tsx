import { lazy } from "react";
import Header from "./ui/navigation/header";
import Hero from "./ui/hero/hero";
const ShortcutsBox = lazy(() => import("./ui/shrotcuts-box/shortcutsBox"));
const News = lazy(() => import("./ui/news/news"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Header />
      <Hero />
      <ShortcutsBox />
      <News />
    </main>
  );
}
