import React from "react";
import styles from "./hero.module.scss";

type Props = {};

function Hero({}: Props) {
  return (
    <div className={styles.heroContainer}>
      <h1>Szalikomania</h1>
    </div>
  );
}

export default Hero;
