import Link from "next/link";
import * as React from "react";

import styles from "./PolandMap.module.css";

import { voivodeships } from "./Voivodeships";

function PolandMap() {
  return (
    <div className={styles.map}>
      <svg
        // xmlnsMapsvg="http://mapsvg.com"
        // xmlnsDc="http://purl.org/dc/elements/1.1/"
        // xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        // xmlnsSvg="http://www.w3.org/2000/svg"
        // xmlns="http://www.w3.org/2000/svg"
        // mapsvgGeoViewBox="14.122232 54.834941 24.149724 49.002699"
        width="612.75696"
        height="577.23169"
      >
        {voivodeships.map((voivodeship) => (
          <Link href={voivodeship.href}>
            <path
              d={voivodeship.d}
              // title={voivodeship.title}
              id={voivodeship.id}
              className={`${voivodeship.color} ${voivodeship.hoverColor}`}
            />
          </Link>
        ))}
      </svg>
    </div>
  );
}

export default PolandMap;
