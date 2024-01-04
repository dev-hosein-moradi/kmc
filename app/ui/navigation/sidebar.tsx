"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";

const NotificationButtonFloat = dynamic(() =>
  import("../buttons/buttons").then((mod) => mod.NotificationButtonFloat)
);
const MenuItem = dynamic(() => import("./menuItem"));

export const menuItems = [
  {
    id: 1,
    title: "کرمان موتور",
    url: "#",
    submenu: [
      {
        title: "درباره ما",
        url: "#",
        submenu: [
          {
            title: "تاریخچه",
            url: "#",
          },
          {
            title: "منشور مشتری مداری",
            url: "#",
          },
          {
            title: "شرکای تجاری",
            url: "#",
          },
        ],
      },
      {
        title: "اخبار و رویدادها",
        url: "#",
        submenu: [
          {
            title: "اخبار",
            url: "#",
          },
          {
            title: "گالری فیلم",
            url: "#",
          },
          {
            title: "استخدام",
            url: "#",
          },
        ],
      },
      {
        title: "سایر خدمات",
        url: "#",
        submenu: [
          {
            title: "مرکز آزمون خودرویی",
            url: "#",
          },
          {
            title: "امداد کرمان موتور",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "HYUNDAI",
    url: "#",
  },
  {
    id: 6,
    title: "محصولات",
    url: "#",
  },
  {
    id: 2,
    title: "نمایندگی ها",
    url: "#",
    submenu: [
      {
        title: "فروش و خدمات پس از فروش",
        url: "#",
      },
      {
        title: "قطعات یدکی",
        url: "#",
      },
      {
        title: "درخواست اخذ نمایندگی",
        url: "#",
      },
    ],
  },
  {
    id: 5,
    title: "فروش",
    url: "#",
  },
  {
    id: 3,
    title: "خدمات پس از فروش",
    url: "#",
    submenu: [
      {
        title: "نوبت دهی اینترنتی",
        url: "#",
      },
      {
        title: "کنترل فاکتور",
        url: "#",
      },

      {
        title: "سوابق و تعمیرات",
        url: "#",
      },
      {
        title: "وضعیت خودرو",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "ارتباط با مشتریان",
    url: "#",
    submenu: [
      {
        title: "صدای مشتری",
        url: "#",
      },
      {
        title: "سوالات متداول",
        url: "#",
      },
      {
        title: "استاندارد قراردادها",
        url: "#",
      },
    ],
  },
  {
    id: 8,
    title: "فروشگاه قطعات",
    url: "#",
  },
  {
    id: 9,
    title: "تماس با ما",
    url: "#",
  },
  {
    id: 10,
    title: "خبرنامه",
    url: "#",
  },
];

export default function SideBar({
  isOpen,
  toggler,
}: {
  isOpen: boolean;
  toggler: () => void;
}) {
  const depthLevel: number = 0;
  return (
    <aside
      className={`flex flex-col lg:hidden w-[100vw] h-[100vh] fixed top-0 bg-white duration-200 py-4 px-4 z-[100]  ${
        isOpen ? "left-0" : "left-[100vw]"
      }`}
    >
      <button
        type="button"
        name="close sidebar menu"
        aria-label="close sidebar menu"
        onClick={toggler}
        className="bg-gray-100 h-10 w-10 rounded-lg shadow-md flex items-center justify-center"
      >
        <XMarkIcon
          aria-label="close icon"
          className="h-9 w-9 text-black font-semibold"
        />
      </button>

      <ul className="overflow-y-auto my-6" dir="rtl">
        {menuItems.map((menu, index) => (
          <MenuItem key={index} item={menu} depthLevel={depthLevel} />
        ))}
      </ul>

      <NotificationButtonFloat isOpen={isOpen} />
    </aside>
  );
}
