import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import Slides from "./slides";
import { NewsCard } from "../skeletons";
import { Suspense } from "react";

export default function News() {
  return (
    <section className="py-16 w-full h-auto flex flex-col items-center">
      <h3 className="font-semibold text-2xl text-gray-900 text-center">
        آخرین اخبار و اطلاعیه ها
      </h3>
      <div className="relative flex items-center justify-center mt-8">
        <span
          className={`relative inline-block h-[2px] w-24 bg-gray-200`}
        ></span>
        <GlobeEuropeAfricaIcon className="h-10 w-10 mx-2 text-green-600" />
        <span
          className={`relative inline-block h-[2px] w-24 bg-gray-200`}
        ></span>
      </div>

      <Suspense fallback={<NewsCard />}>
        <Slides />
      </Suspense>
    </section>
  );
}
