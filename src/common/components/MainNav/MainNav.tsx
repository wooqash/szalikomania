import React from "react";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import { Menu } from "./Menu";
import styles from "./main-nav.module.scss";
import SocialNav from "./SocialNav/SocialNav";

type MainNavProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function MainNav({ openMenu, setOpenMenu }: MainNavProps) {
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <button className={styles.burger} onClick={toggleMenu}></button>
      <div className={styles.background}></div>
      <div className={styles.mainNavWrapper}>
        <LangSwitcher />
        <hr />
        <Menu />
        <hr />
        <SocialNav />
      </div>
    </>
  );
}

export default MainNav;
