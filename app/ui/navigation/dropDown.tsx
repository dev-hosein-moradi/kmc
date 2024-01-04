import { MenuItemSide } from "@/app/lib/definitions";
import MenuItem from "./menuItem";

export default function Dropdown({
    submenu,
    dropdown,
    depthLevel,
  }: {
    submenu: MenuItemSide[];
    dropdown: boolean;
    depthLevel: number;
  })  {
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
  