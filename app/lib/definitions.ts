import { StaticImageData } from "next/image";

export interface NewsItem {
    imageSrc: StaticImageData;
    title: string;
    detail: string;
    date: string;
    link: string;
    newsPriority: boolean;
}

export interface MenuItemSide {
    id?: number;
    title: string;
    url: string;
    submenu?: MenuItemSide[];
  }