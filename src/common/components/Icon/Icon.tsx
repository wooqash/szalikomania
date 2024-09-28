import { FC, PropsWithChildren } from "react";
import styles from "./icon.module.scss";

type IconProps = {};

const Icon: FC<PropsWithChildren<IconProps>> = ({ children }) => (
  <span className={styles.icon}>{children}</span>
);

export default Icon;
