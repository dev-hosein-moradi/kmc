import Link from "next/link";
import { Shortcut } from "./shortcutsBox";

export default function ShortcutBox({ item }: { item: Shortcut }) {
  const { Icon, text, link } = item;
  return (
    <Link href={link}>
      <article className="group w-36 h-28 sm:w-44 sm:h-36 p-2 rounded-xl bg-white shadow-md flex flex-col items-center justify-around hover:text-blue-600 duration-200 border-[1px] border-gray-200">
        <div>{Icon}</div>
        <p className="text-center text-gray-900 group-hover:text-blue-600 duration-200 text-sm sm:text-base">{text}</p>
      </article>
    </Link>
  );
}
