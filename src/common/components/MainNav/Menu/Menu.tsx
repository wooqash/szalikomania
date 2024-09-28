import Link from "next/link";
import { FC, useRef, useState } from "react";

import styles from "./menu.module.scss";
import NavButton from "./NavButton/NavButton";
import SubMenu from "./SubMenu/SubMenu";
import {
  getContactHref,
  getElanaTorunHref,
  getEuropeanClubsHref,
  getEuropeanRepresentationHref,
  getHomeHref,
  getPolishClubsHref,
  getRestOfWorldClubsHref,
  getRestOfWorldRepresentationHref,
  getRuchChorzowHref,
  getWidzewLodzHref,
} from "@/lib/router";
import { LangContext } from "../../PageWrapper/PageWrapper";
import React from "react";
import NavLink from "./NavLink/NavLink";

const getMenuItems = (locale: string = "pl") => {
  return [
    {
      name: "Home",
      href: getHomeHref(locale),
    },
    {
      name: "Klubowe",
      items: [
        {
          name: "Polskie",
          href: getPolishClubsHref(locale),
        },
        {
          name: "Europa",
          href: getEuropeanClubsHref(locale),
        },
        {
          name: "Reszta Świata",
          href: getRestOfWorldClubsHref(locale),
        },
      ],
    },
    {
      name: "Reprezentacyjne",
      items: [
        {
          name: "Europa",
          href: getEuropeanRepresentationHref(locale),
        },
        {
          name: "Reszta Świata",
          href: getRestOfWorldRepresentationHref(locale),
        },
      ],
    },
    {
      name: "Elana Toruń",
      href: getElanaTorunHref(locale),
    },
    {
      name: "Ruch Chorzów",
      href: getRuchChorzowHref(locale),
    },
    {
      name: "Widzew Łódź",
      href: getWidzewLodzHref(locale),
    },
    {
      name: "Kontakt",
      href: getContactHref(locale),
    },
  ];
};

export type SubItem = {
  name: string;
  href?: string;
};

export type Item = {
  name: string;
  href?: string;
  items?: SubItem[];
};

type MenuProps = {};

export const Menu: FC<MenuProps> = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const locale = React.useContext(LangContext);
  const menuItems = getMenuItems(locale);

  const handleButtonClick = (item: string) => {
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <div className={styles.menu}>
      <nav className={styles.menuNav} aria-label="Menu główne">
        <h2 className="visually-hidden">Menu główne</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              {!item.items && item.href && (
                <NavLink href={item.href}>{item.name}</NavLink>
              )}
              {!item.items && !item.href && (
                <NavButton
                  onClick={handleButtonClick}
                  name={item.name}
                  isActive={activeItem === item.name}
                  hasSubNav={!!item.items}
                />
              )}
              {item.items && (
                <>
                  <NavButton
                    onClick={handleButtonClick}
                    name={item.name}
                    isActive={activeItem === item.name}
                    hasSubNav={!!item.items}
                  />

                  <SubMenu
                    item={item}
                    items={item.items}
                    activeItem={activeItem}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
