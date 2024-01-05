import dynamic from "next/dynamic";

import arman from "@/public/partnership/arman.webp";
import bamkhodro from "@/public/partnership/bamkhodro.webp";
import kadec from "@/public/partnership/kadec.webp";
import kaic from "@/public/partnership/kaic.webp";
import khodrosazanbam from "@/public/partnership/khodrosazanbam.webp";
import ktl from "@/public/partnership/ktl.webp";
import negin from "@/public/partnership/negin.webp";
import sigma from "@/public/partnership/sigma.webp";
import vkmc from "@/public/partnership/vkmc.webp";

const PartnershipCard = dynamic(() => import("./partnershipCard"));

const cardItem = [
  {
    imageSrc: arman,
  },
  {
    imageSrc: bamkhodro,
  },
  {
    imageSrc: kadec,
  },
  {
    imageSrc: kaic,
  },
  {
    imageSrc: khodrosazanbam,
  },
  {
    imageSrc: ktl,
  },
  {
    imageSrc: negin,
  },
  {
    imageSrc: sigma,
  },
  {
    imageSrc: vkmc,
  },
];

export default function PartnershipBrand() {
  return (
    <div className="group py-10 flex flex-row overflow-x-hidden bg-white whitespace-nowrap relative">
      <div className="flex flex-row animate-[brandSlide_50s_infinite_linear] group-hover:[animation-play-state:paused]">
        {cardItem.map((item, index) => (
          <PartnershipCard key={index} item={item} />
        ))}
      </div>
      <div className="flex flex-row animate-[brandSlide_50s_infinite_linear] group-hover:[animation-play-state:paused]">
        {cardItem.map((item, index) => (
          <PartnershipCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
