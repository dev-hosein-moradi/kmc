import K7 from "@/public/hero/k7.webp";
import X5 from "@/public/hero/X5.webp";
import ProgressSlider from "./heroSlider";

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
    <div className="relative bg-slate-50 overflow-hidden z-0">
      <ProgressSlider items={items} />
    </div>
  );
}
