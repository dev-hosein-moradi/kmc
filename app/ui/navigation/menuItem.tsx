'use client'
import { MenuItemSide } from "@/app/lib/definitions";
import { ChevronDownIcon, LinkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import Dropdown from "./dropDown";
import Link from "next/link";

export default function MenuItem ({
    item,
    depthLevel,
  }: {
    item: MenuItemSide;
    depthLevel: number;
  })  {
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
                <ChevronDownIcon
                  aria-label="arrow down icon"
                  className="h-5 w-5 text-black font-semibold"
                />
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
  
  