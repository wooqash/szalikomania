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
  getExchangeHref,
  getHomeHref,
  getPolishClubsHref,
  getRestOfWorldClubsHref,
  getRestOfWorldRepresentationHref,
  getRuchChorzowHref,
  getSpecialHref,
  getWidzewLodzHref,
} from "@/lib/router";
import { LangContext } from "../../PageWrapper/PageWrapper";
import React from "react";
import NavLink from "./NavLink/NavLink";
import { MdHomeFilled } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiPoland, GiEuropeanFlag } from "react-icons/gi";
import { IoMdGlobe } from "react-icons/io";
import { FaPassport, FaPhoneAlt } from "react-icons/fa";
import { RiExchangeFundsFill } from "react-icons/ri";
import { SiNextra } from "react-icons/si";
import WidzewLodz from "../../../../assets/icons/widzew-lodz.svg";
import RuchChorzow from "../../../../assets/icons/ruch-chorzow.svg";
import ElanaTorun from "../../../../assets/icons/elana-torun.svg";

const menuIcons = {
  home: <MdHomeFilled role="presentation" />,
  clubs: <FaPeopleGroup role="presentation" />,
  polish: <GiPoland role="presentation" />,
  europe: <GiEuropeanFlag role="presentation" />,
  world: <IoMdGlobe role="presentation" />,
  national: <FaPassport role="presentation" />,
  widzew: <WidzewLodz role="presentation" />,
  ruch: <RuchChorzow role="presentation" />,
  elana: <ElanaTorun role="presentation" />,
  exchanges: <RiExchangeFundsFill role="presentation" />,
  special: <SiNextra role="presentation" />,
  contact: <FaPhoneAlt role="presentation" />,
};

const getMenuItems = (locale: string = "pl") => {
  return [
    {
      name: "Home",
      href: getHomeHref(locale),
      icon: menuIcons.home,
    },
    {
      name: "Klubowe",
      icon: menuIcons.clubs,
      items: [
        {
          name: "Polskie",
          href: getPolishClubsHref(locale),
          icon: menuIcons.polish,
        },
        {
          name: "Europa",
          href: getEuropeanClubsHref(locale),
          icon: menuIcons.europe,
        },
        {
          name: "Reszta Świata",
          href: getRestOfWorldClubsHref(locale),
          icon: menuIcons.world,
        },
      ],
    },
    {
      name: "Reprezentacyjne",
      icon: menuIcons.national,
      items: [
        {
          name: "Europa",
          href: getEuropeanRepresentationHref(locale),
          icon: menuIcons.europe,
        },
        {
          name: "Reszta Świata",
          href: getRestOfWorldRepresentationHref(locale),
          icon: menuIcons.world,
        },
      ],
    },
    {
      name: "Elana Toruń",
      href: getElanaTorunHref(locale),
      icon: menuIcons.elana,
    },
    {
      name: "Ruch Chorzów",
      href: getRuchChorzowHref(locale),
      icon: menuIcons.ruch,
    },
    {
      name: "Widzew Łódź",
      href: getWidzewLodzHref(locale),
      icon: menuIcons.widzew,
    },
    {
      name: "Na wymianę",
      href: getExchangeHref(locale),
      icon: menuIcons.exchanges,
    },
    {
      name: "Specjalne",
      href: getSpecialHref(locale),
      icon: menuIcons.special,
    },
    {
      name: "Kontakt",
      href: getContactHref(locale),
      icon: menuIcons.contact,
    },
  ];
};

export type SubItem = {
  name: string;
  href?: string;
  icon?: JSX.Element;
};

export type Item = {
  name: string;
  href?: string;
  icon?: JSX.Element;
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
                <NavLink href={item.href} icon={item.icon}>
                  {item.name}
                </NavLink>
              )}
              {!item.items && !item.href && (
                <NavButton
                  onClick={handleButtonClick}
                  name={item.name}
                  icon={item.icon}
                  isActive={activeItem === item.name}
                  hasSubNav={!!item.items}
                />
              )}
              {item.items && (
                <>
                  <NavButton
                    onClick={handleButtonClick}
                    name={item.name}
                    icon={item.icon}
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
