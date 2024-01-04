import { NewsItem } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function Slide({ item }: { item: NewsItem }) {
  const { imageSrc, title, detail, date, link, newsPriority } = item;
  return (
    <div className="flex flex-col justify-between px-4 py-2 mb-4 w-[250px] sm:w-[300px] min-h-[430px] sm:min-h-[430px] mx-auto bg-white border-gray-100 border-[1px] shadow-lg rounded-xl">
      <Image
        className="relative w-full h-[200px] object-cover rounded-xl"
        sizes="100vw"
        alt={title}
        src={imageSrc}
        quality={50}
        placeholder="blur"
        priority
      />
      <article className="py-2 flex flex-col">
        <h4 className="text-gray-900 text-sm sm:text-base font-medium">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-gray-800 font-normal py-1">
          {detail}
        </p>
        <span className="text-gray-600 text-xs sm:text-sm self-end">
          {date}
        </span>
      </article>
      {!newsPriority ? (
        <button className="bg-green-800 text-white h-8 sm:h-10 mx-auto rounded-lg hover:shadow-md duration-200">
          <Link className="px-6 py-2 min-h-10 text-xs sm:text-sm" href={link}>
            بیشتر بدانید
          </Link>
        </button>
      ) : (
        <button className="bg-green-800 text-white text-xs sm:text-sm px-4 py-2 h-8 sm:h-10 mx-auto rounded-lg hover:shadow-md duration-200">
          مشاهده ویدیو
        </button>
      )}
    </div>
  );
}
