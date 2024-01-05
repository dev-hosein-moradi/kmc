import { BrandLogo } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function PartnershipCard({ item }: { item: BrandLogo }) {
  return (
    <Link href={"/"} className="mx-10 hover:scale-105 duration-300">
      <Image
        className="w-auto min-w-[150px] h-auto object-cover"
        alt={`partner logo`}
        src={item.imageSrc}
        quality={50}
      />
    </Link>
  );
}
