import K7 from "@/public/hero/k7.jpg";
import X5 from "@/public/hero/X5.jpg";
import ProgressSlider from "./profressSlider";

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
      <div className="">
        <ProgressSlider items={items} />
      </div>
    </div>
  );
}
