"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, PropsWithChildren } from "react";
import styles from "./nav-link.module.scss";
import clsx from "clsx";
import { getLocales } from "@/lib/router";
import Icon from "@/common/components/Icon/Icon";

type NavLinkProps = {
  href: string;
  icon?: JSX.Element;
};

const NavLink: FC<PropsWithChildren<NavLinkProps>> = ({
  children,
  href,
  icon,
  ...rest
}) => {
  const pathname = usePathname();
  const isActive = pathname.endsWith(href) || href === pathname;
  return (
    <>
      <Link
        href={href}
        className={clsx(styles.link, isActive && styles.active)}
        {...rest}
      >
        {icon && <Icon>{icon}</Icon>}
        {children}
      </Link>
    </>
  );
};

export default NavLink;
