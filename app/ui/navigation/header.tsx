"use client";

import Image from "next/image";
import Link from "next/link";
import { lazy, useState } from "react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import KMC_LOGO from "@/public/kmc-logo.png";
import { menuItems } from "./sidebar";

const MegaMenu = lazy(() => import("./megaMenu"));
const SideBar = lazy(() => import("./sidebar"));

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isExtended, setIsExtended] = useState(false);

  const toggler = () => {
    setIsOpen(!isOpen);
  };
  const extendler = (id: number) => {
    if (id === activeTab) {
      setIsExtended((prev) => !prev);
    }
    if (activeTab === 0) {
      setIsExtended(true);
    }
  };
  const activeTabHandler = (id: number) => {
    setActiveTab(id);
  };

  return (
    <header className="flex items-center justify-between bg-gray-950 relative z-[6]">
      {/* burger menu */}
      <button
        type="button"
        name="burger menu button"
        aria-label="open side menu"
        className="p-4 lg:hidden"
        onClick={toggler}
      >
        <Bars3Icon
          aria-label="burger menu icon"
          className="h-8 w-8 text-gray-50 font-semibold"
        />
      </button>
      {/* nav links for large screen */}
      <div className="lg:flex flex-row pr-4 hidden relative">
        <ul className="flex flex-row text-white">
          {menuItems.map((item, index) => {
            return item.submenu ? (
              <li
                className="border-l-[1px] border-gray-800 text-sm flex items-center ml-1 px-1 cursor-pointer"
                key={index}
                onClick={() => {
                  extendler(item.id);
                  activeTabHandler(item.id);
                }}
              >
                {item.title}
                <span className="mr-1">
                  <ChevronDownIcon
                    aria-label="arrow down icon"
                    className="h-3 w-3"
                  />
                </span>
              </li>
            ) : (
              <Link
                className="border-l-[1px] border-gray-800 last-of-type:border-none text-sm ml-1 px-1"
                key={index}
                href={item.url}
              >
                {item.title}
              </Link>
            );
          })}
        </ul>

        <MegaMenu
          isExtended={isExtended}
          extendler={extendler}
          activeTab={activeTab}
        />
      </div>
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
