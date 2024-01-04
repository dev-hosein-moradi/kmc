import { StaticImageData } from "next/image";

export interface NewsItem {
    imageSrc: StaticImageData;
    title: string;
    detail: string;
    date: string;
    link: string;
    newsPriority: boolean;
}