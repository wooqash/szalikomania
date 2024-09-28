import { FC, useState } from "react";
import Icon from "../../../Icon/Icon";

import styles from "./nav-button.module.scss";
import clsx from "clsx";
import { MdExpandMore } from "react-icons/md";

type ButtonProps = {
  onClick: (item: string) => void;
  name: string;
  isActive: boolean;
  hasSubNav?: boolean;
};

const NavButton: FC<ButtonProps> = ({ onClick, name, isActive, hasSubNav }) => {
  const [pressed, setPressed] = useState(false);

  const handleOnClick = () => {
    setPressed(!pressed);
    onClick(name);
  };

  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={handleOnClick}
      className={clsx(styles.button, isActive && styles.active)}
    >
      <span>{name}</span>
      {hasSubNav && (
        <Icon>
          <MdExpandMore />
        </Icon>
      )}
    </button>
  );
};

export default NavButton;
