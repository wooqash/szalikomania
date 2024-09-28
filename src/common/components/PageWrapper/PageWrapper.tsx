"use client";

import clsx from "clsx";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import MainNav from "../MainNav/MainNav";
import { RouteLocale } from "next-roots";
import { usePathname } from "next/navigation";

type PageWrapperProps = {
  locale: RouteLocale;
};

export const LangContext = React.createContext("pl");

const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({
  children,
  locale,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // hide sidebar on path change
    setOpenMenu(false);
  }, [pathname]);
  return (
    <LangContext.Provider value={locale}>
      <div className={clsx("pageWrapper", openMenu && "open")}>
        <MainNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
        {children}
      </div>
    </LangContext.Provider>
  );
};

export default PageWrapper;
