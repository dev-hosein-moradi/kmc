"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import SideBar, { MenuItem, menuItems } from "./sidebar";
import KMC_LOGO from "@/public/kmc-logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => {
    setIsOpen(!isOpen);
  };

  const depthLevel: number = 0;
  return (
    <header className="flex items-center justify-between bg-gray-950 relative">
      {/* burger menu */}
      <button className="p-4 lg:hidden" onClick={toggler}>
        <Bars3Icon className="h-8 w-8 text-gray-50 font-semibold" />
      </button>
      {/* nav links for large screen */}
      <nav className="lg:flex flex-row pr-4 hidden">
        {menuItems.map((menu, index) => (
          <LargeMenuItem key={index} item={menu} depthLevel={depthLevel} />
        ))}
      </nav>
      {/* brand logo */}
      <Link href={"/"}>
        <Image
          alt="kerman motor logo"
          src={KMC_LOGO}
          width={55}
          height={55}
          quality={100}
          priority
          className="w-auto h-auto p-4"
        />
      </Link>

      {/* nav links for small screen */}
      <SideBar isOpen={isOpen} toggler={toggler} />
    </header>
  );
}

export const LargeMenuItem = ({
  item,
  depthLevel,
}: {
  item: MenuItem;
  depthLevel: number;
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  return (
    <li
      className={`list-none ml-2  border-l-gray-800  duration-200 shadow-sm text-xs   relative ${
        depthLevel > 0
          ? "py-4 px-2 bg-gray-200"
          : "px-1 py-2 bg-gray-950 text-gray-50 border-l-[1px] last-of-type:border-none"
      } `}
    >
      {item?.submenu ? (
        <Fragment>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"} //aria-expanded attribute to indicate if a dropdown box is expanded or collapsed, which is beneficial for screen readers.
            onClick={() => {
              setDropdown((prev) => !prev);
              setActiveTab(item.title);
            }}
            className={`flex items-center justify-between w-full ${
              depthLevel > 0 ? "bg-gray-200 text-gray-950" : "bg-gray-950"
            }`}
          >
            {item?.title}{" "}
            <span className="justify-self-start">
              <ChevronDownIcon
                className={`h-3 w-3  font-semibold ${
                  depthLevel > 0 ? "text-gray-950" : "text-gray-50 mr-1"
                }`}
              />
            </span>
          </button>
          <LargeDropdown
            submenu={item.submenu}
            parent={item}
            dropdown={dropdown}
            depthLevel={depthLevel}
            activeTab={activeTab}
          />
        </Fragment>
      ) : (
        <Link
          className="hover:text-blue-500 flex items-center group px-1"
          href={item?.url}
        >
          {item?.title}
        </Link>
      )}
    </li>
  );
};

export const LargeDropdown = ({
  submenu,
  parent,
  dropdown,
  depthLevel,
  activeTab,
}: {
  submenu: MenuItem[];
  parent: MenuItem;
  dropdown: boolean;
  depthLevel: number;
  activeTab: string;
}) => {
  depthLevel = 1 + depthLevel;
  const dropdownClass =
    depthLevel > 1 ? `right-[15em] -top-10 rounded-lg` : "top-10 right-0";

  return (
    <ul
      className={`${
        dropdown ? "block" : "hidden"
      } ${dropdownClass} w-[15em] duration-300 ease-out absolute py-2`}
    >
      {activeTab === parent.title
        ? submenu.map((submenu, index) => (
            <LargeMenuItem item={submenu} key={index} depthLevel={depthLevel} />
          ))
        : null}
    </ul>
  );
};
