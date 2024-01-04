import {
  DocumentTextIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { lazy } from "react";
const ShortcutBox = lazy(() => import("./shortcutBox"));

export const item = [
  {
    text: "فروش اینترنتی",
    link: "#",
    Icon: (
      <GlobeAltIcon className="w-10 h-10 text-gray-600 group-hover:text-blue-600 duration-200" />
    ),
  },
  {
    text: "طرح های فروش",
    link: "#",
    Icon: (
      <DocumentTextIcon className="w-10 h-10 text-gray-600 group-hover:text-blue-600 duration-200" />
    ),
  },
  {
    text: "لیست نمایندگی ها",
    link: "#",
    Icon: (
      <MapPinIcon className="w-10 h-10 text-gray-600 group-hover:text-blue-600 duration-200" />
    ),
  },
  {
    text: "امداد کرمان موتور",
    link: "#",
    Icon: (
      <WrenchScrewdriverIcon className="w-10 h-10 text-gray-600 group-hover:text-blue-600 duration-200" />
    ),
  },
  {
    text: "پیگیری وضعیت خودرو",
    link: "#",
    Icon: (
      <MagnifyingGlassIcon className="w-10 h-10 text-gray-600 group-hover:text-blue-600 duration-200" />
    ),
  },
  {
    text: "صدای مشتری",
    link: "#",
    Icon: (
      <PhoneArrowDownLeftIcon className="w-10 h-10 text-gray-600 group-hover:text-blue-600 duration-200" />
    ),
  },
];

export interface Shortcut {
  text: string;
  link: string;
  Icon?: any;
}

export default function ShortcutsBox() {
  return (
    <section className="flex flex-row flex-wrap items-center justify-center gap-4 py-16 w-full h-auto">
      {item.map((item, index) => (
        <ShortcutBox item={item} key={index} />
      ))}
    </section>
  );
}
