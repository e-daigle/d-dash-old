import styles from "./ddash-container.module.css";
import React from "react";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const DDashContainer = ({ children }: Props) => {
  /*if (children.type !== DDashContainer) {
    throw new Error("Parent requires a Child component");
  }*/
  return <div className={styles.container}>{children}<div className={styles.main}></div></div>;
};

export default DDashContainer;
