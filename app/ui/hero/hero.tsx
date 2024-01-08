import K7 from "@/public/hero/k7.webp";
import X5 from "@/public/hero/X5.webp";
import HeroSlider from "./heroSlider";

export default function Home() {
  const items = [
    {
      img: K7,
      desc: "k7",
    },
    {
      img: X5,
      desc: "X5",
    },
  ];

  return (
    <div className="relative w-[100vw] bg-gray-50 overflow-hidden z-0">
      <HeroSlider items={items} />
    </div>
  );
}
