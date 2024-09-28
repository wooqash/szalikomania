import { FC, useRef } from "react";

import styles from "./sub-menu.module.scss";
import { Item, SubItem } from "../Menu";
import clsx from "clsx";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";

type SubMenuProps = {
  item: Item;
  items: SubItem[];
  activeItem: string;
};

const SubMenu: FC<SubMenuProps> = ({ item, items, activeItem }) => {
  const navRef = useRef<HTMLUListElement>(null);

  const isSubNavOpen = (item: string, items: SubItem[]) => {
    return (
      items.some((subItem) => subItem.name === activeItem) ||
      item === activeItem
    );
  };

  return (
    <div
      className={clsx(styles.subNav, isSubNavOpen(item.name, items) && "open")}
      style={{
        height: !isSubNavOpen(item.name, items)
          ? 0
          : navRef.current?.clientHeight,
      }}
    >
      <ul ref={navRef}>
        {items.map((item) => (
          <li key={item.name}>
            {item.href && <NavLink href={item.href}>{item.name}</NavLink>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
