import Link from "next/link";
import { Shortcut } from "./shortcutsBox";

export default function ShortcutBox({ item }: { item: Shortcut }) {
  const { Icon, text, link } = item;
  return (
    <Link href={item.link}>
      <article className="group w-44 h-36 p-4 rounded-xl bg-white shadow-md flex flex-col items-center justify-around hover:text-blue-600 duration-200 border-[1px] border-gray-200">
        <div className="">{Icon}</div>
        <p className="text-center text-gray-900 group-hover:text-blue-600 duration-200">{text}</p>
      </article>
    </Link>
  );
}
