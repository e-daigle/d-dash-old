import React from "react";
import styles from "./ddash-s-section.module.css";

type Props = {
  children: React.ReactElement[];
};

const DDashSmallSection = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children.map((child, idx) => (
        <div className={styles.element} key={idx}>{child}</div>
      ))}
    </div>
  );
};

export default DDashSmallSection;
