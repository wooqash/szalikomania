import React from "react";
import Icon from "../../Icon/Icon";
import { SiFacebook } from "react-icons/si";
import styles from "./social-nav.module.scss";

type SocialNavProps = {};

function SocialNav({}: SocialNavProps) {
  return (
    <div className={styles.socialNav}>
      <a
        href="https://www.facebook.com/maciek.szalikomaniak.3"
        target="blank"
        rel="noopener noreferrer"
      >
        <Icon>
          <SiFacebook role="presentation" />
        </Icon>
      </a>
    </div>
  );
}

export default SocialNav;
