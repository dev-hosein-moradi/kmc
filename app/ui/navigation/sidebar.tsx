"use client";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { LinkIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";

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

export interface MenuItem {
  id?: number;
  title: string;
  url: string;
  submenu?: MenuItem[];
}

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
      className={`flex flex-col lg:hidden w-[100vw] h-[100vh] absolute top-0 bg-white duration-200 py-4 px-4 z-10  ${
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
        <XMarkIcon aria-label="close icon" className="h-9 w-9 text-black font-semibold" />
      </button>

      <ul className="overflow-y-auto my-6" dir="rtl">
        {menuItems.map((menu, index) => (
          <MenuItem key={index} item={menu} depthLevel={depthLevel} />
        ))}
      </ul>
    </aside>
  );
}

export const MenuItem = ({
  item,
  depthLevel,
}: {
  item: MenuItem;
  depthLevel: number;
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      className={`list-none px-2 py-3 rounded-lg mb-1 duration-200 shadow-sm ${
        depthLevel === 0 ? "bg-gray-100" : `bg-gray-50`
      }`}
    >
      {item?.submenu ? (
        <Fragment>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"} //aria-expanded attribute to indicate if a dropdown box is expanded or collapsed, which is beneficial for screen readers.
            onClick={() => setDropdown((prev) => !prev)}
            className="flex items-center justify-between w-full"
          >
            {item?.title}{" "}
            <span className="justify-self-start">
              <ChevronDownIcon aria-label="arrow down icon" className="h-5 w-5 text-black font-semibold" />
            </span>
          </button>
          <Dropdown
            submenu={item.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </Fragment>
      ) : (
        <Link
          className="hover:text-blue-500 flex items-center group"
          href={item?.url}
        >
          {item?.title}
          <LinkIcon className="h-3 w-3 text-blue-500 mr-1 opacity-0 group-hover:opacity-100" />
        </Link>
      )}
    </li>
  );
};

export const Dropdown = ({
  submenu,
  dropdown,
  depthLevel,
}: {
  submenu: MenuItem[];
  dropdown: boolean;
  depthLevel: number;
}) => {
  depthLevel = 1 + depthLevel;
  const dropdownClass = depthLevel > 1 ? `px-${depthLevel * 4}` : "px-2";
  return (
    <ul
      className={`${
        dropdown ? "block" : "hidden h-0"
      } ${dropdownClass} duration-300 ease-out`}
    >
      {submenu.map((submenu, index) => (
        <MenuItem item={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};
