"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, PropsWithChildren } from "react";
import styles from "./nav-link.module.scss";
import clsx from "clsx";
import { getLocales } from "@/lib/router";

type NavLinkProps = {
  href: string;
  //   isActive: boolean;
  //   activeClassName: string;
  //   nonActiveClassName: string;
  //   className: string;
};

const NavLink: FC<PropsWithChildren<NavLinkProps>> = ({
  children,
  href,
  //   isActive,
  //   activeClassName,
  //   nonActiveClassName,
  //   className,
  ...rest
}) => {
  const pathname = usePathname();
  const isActive = pathname.endsWith(href) || href === pathname;
  // (href.includes(pathname) &&
  //   pathname !== "/" &&
  //   href.includes(pathname) &&
  //   pathname !== "/en");

  //   const newClassName = `${isActive ? activeClassName : nonActiveClassName} ${className}`;
  //   const newClassName = `${isActive ? styles.activeLink : styles.inactiveLink} ${styles.link}`;
  return (
    <Link
      href={href}
      className={clsx(styles.link, isActive && styles.active)}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
