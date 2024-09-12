import Link from "next/link";
import { FC } from "react";

import styles from "./menu.module.scss";

type MenuProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu: FC<MenuProps> = ({ openMenu, setOpenMenu }) => {
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <button className={styles.burger} onClick={toggleMenu}></button>
      <div className={styles.background}></div>
      <div className={styles.menu}>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
