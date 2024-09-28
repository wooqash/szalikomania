import { getHomeHref } from "@/lib/router";
import Link from "next/link";
import React from "react";
import styles from "./lang-switcher.module.scss";
import clsx from "clsx";
import { LangContext } from "../../PageWrapper/PageWrapper";

type LangSwitcherProps = {};

const getLocales = () => {
  return [
    { name: "PL", href: getHomeHref("pl") },
    { name: "EN", href: getHomeHref("en") },
  ];
};

function LangSwitcher({}: LangSwitcherProps) {
  const locales = getLocales();
  const pageLocale = React.useContext(LangContext);
  return (
    <ul className={styles.langSelectorList}>
      {locales.map((locale) => {
        return (
          <li
            key={locale.name}
            className={clsx(
              pageLocale === locale.name.toLowerCase() && "active",
            )}
          >
            <Link href={locale.href}>{locale.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default LangSwitcher;
