"use client";

import clsx from "clsx";
import Link from "next/link";

import { usePathname } from "next/navigation";

type NavItem = { name: string; href: string };
type NavProps = { items: NavItem[] };

const Nav = ({ items }: NavProps) => {
  const pageHref = usePathname();
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            item.href === pageHref
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "rounded-md px-3 py-2 text-sm font-medium"
          )}
          aria-current={item.href === pageHref ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Nav;
