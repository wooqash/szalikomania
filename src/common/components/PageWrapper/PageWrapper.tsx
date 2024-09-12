"use client";

import clsx from "clsx";
import React, { FC, PropsWithChildren, ReactNode, useState } from "react";
import Menu from "../Menu/Menu";

type Props = {};

const PageWrapper: FC<PropsWithChildren<Props>> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={clsx("pageWrapper", openMenu && "open")}>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {children}
    </div>
  );
};

export default PageWrapper;
