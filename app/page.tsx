import dynamic from "next/dynamic";
import Hero from "./ui/hero/hero";

const Header = dynamic(() => import("./ui/navigation/header"));
const ShortcutsBox = dynamic(() => import("./ui/shrotcuts-box/shortcutsBox"));
const News = dynamic(() => import("./ui/news/news"));
const PartnershipBrand = dynamic(
  () => import("./ui/partnership-brand/partnershipBrand")
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Header />
      <Hero />
      <ShortcutsBox />
      <News />
      <PartnershipBrand />
    </main>
  );
}
