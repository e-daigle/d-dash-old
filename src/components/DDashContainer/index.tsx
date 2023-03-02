import styles from "./ddash-container.module.css";
import React from "react";

type Props = {
  children: React.ReactElement[];
  nav?: { component: React.ReactElement; position: "top" | "left" | "right" };
};

const DDashContainer = ({ children, nav }: Props) => {
  /*if (children.type !== DDashContainer) {
    throw new Error("Parent requires a Child component");
  }*/
  return (
    <div
      className={
        nav
          ? [styles.container, styles[nav.position]].join(" ")
          : styles.container
      }
    >
      {nav ? nav.component : null}
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DDashContainer;
