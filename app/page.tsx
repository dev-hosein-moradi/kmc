import dynamic from "next/dynamic";
import Hero from "./ui/hero/hero";

const Header = dynamic(() => import("./ui/navigation/header"), {
  loading: () => <p>Loading...</p>,
});
const ShortcutsBox = dynamic(() => import("./ui/shrotcuts-box/shortcutsBox"), {
  loading: () => <p>Loading...</p>,
});
const News = dynamic(() => import("./ui/news/news"), {
  loading: () => <p>Loading...</p>,
});
const PartnershipBrand = dynamic(
  () => import("./ui/partnership-brand/partnershipBrand"),
  { loading: () => <p>Loading...</p> }
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
