"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import news1 from "@/public/news/news1.webp";
import news2 from "@/public/news/news2.webp";
import news3 from "@/public/news/j7-video.webp";
import Slide from "./slide";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const newsItem = [
  {
    imageSrc: news1,
    title:
      "نمایش عمومی خودروهای برقی، پلاگین هیبرید و وارداتی کرمان موتور در دومین نمایشگاه تحول صنعت خودرو",
    detail:
      "کرمان موتور خودروهای برقی، پلاگین هیبرید و وارداتی این شرکت خودروسازی را در دومین نمایشگاه...",
    date: "۱۲ آذر ۱۴۰۲",
    link: "#",
    newsPriority: false,
  },
  {
    imageSrc: news2,
    title: "حضور شرکت کرمان موتور در هفدهمین نمایشگاه بین المللی اصفهان",
    detail:
      "شرکت کرمان موتور با مشارکت حداکثری نمایندگان فروش و خدمات پس از فروش استان در هفدهمین نمای...",
    date: "۱۲ آذر ۱۴۰۲",
    link: "#",
    newsPriority: false,
  },
  {
    imageSrc: news3,
    title: "مراسم رونمایی خودروی KMC J7",
    detail:
      "کرمان موتور خودروهای برقی، پلاگین هیبرید و وارداتی این شرکت خودروسازی را در دومین نمایشگاه...",
    date: "",
    link: "#",
    newsPriority: true,
  },
];

export default function Slides() {
  return (
    <div className="w-[100vw] px-1 h-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          type: "custom",
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          650: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="my-10 h-[470px] overflow-y-hidden"
      >
        {newsItem.map((item, i) => {
          return (
            <SwiperSlide
              key={i}
              className="min-w-[100px] min-h-[200px] h-auto flex items-center justify-center "
            >
              <Slide item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      
    </div>
  );
}
