import Link from "next/link";
import primaryMenus from "@/app/constants/menu.json";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function MegaMenu({
  activeTab,
  isExtended,
  extendler,
}: {
  activeTab: number;
  isExtended: boolean;
  extendler: (id: number) => void;
}) {
  const { menus } = primaryMenus;
  return (
    <div
      className={`${
        isExtended ? "top-[50px] opacity-100" : "-top-[400px] opacity-0"
      } absolute left-0 min-h-[200px] w-full bg-gray-950 text-gray-50 z-[5] border-t-gray-700 border-t-[1px] duration-300 rounded-b-lg shadow-2xl flex flex-col`}
    >
      <button
        type="button"
        name="close menu"
        aria-label="close menu button"
        onClick={() => extendler(activeTab)}
        className="h-8 w-8 rounded-lg bg-gray-500 flex item-center justify-center mr-auto m-4 shadow-white shadow-sm"
      >
        <XMarkIcon aria-label="close icon" className="h-8 w-8 text-black font-semibold" />
      </button>
      <div className="flex flex-row">
        <ul>
          {menus.length > 0 &&
            menus.map((menu) => (
              <li key={menu.id} className="drop">
                {menu.id === activeTab && menu?.megaMenus?.length > 0 && (
                  <ul className="flex flex-row gap-x-14 p-6">
                    {menu?.megaMenus.map((megaMenu) => (
                      <li key={megaMenu.id}>
                        {menu.id !== 1 ? (
                          <Link href={megaMenu.link}>
                            {megaMenu.megaMenuTitle}
                          </Link>
                        ) : (
                          <h3 className="font-bold text-white mb-2">
                            {megaMenu.megaMenuTitle}
                          </h3>
                        )}

                        {megaMenu.megamenuItems?.length > 0 && (
                          <ul className="flex flex-col gap-4">
                            {megaMenu.megamenuItems.map((megamenuItem) => (
                              <li
                                className="hover:underline text-gray-100 text-sm"
                                key={megamenuItem.id}
                              >
                                <Link
                                  className="hover:text-blue-600 py-1"
                                  href={megamenuItem.link}
                                >
                                  {megamenuItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
