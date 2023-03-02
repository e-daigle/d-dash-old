import React from "react";
import styles from "./ddash-s-section.module.css";

type Props = {
  children: React.ReactElement[];
};

const SmallSection = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children.map((child, idx) => (
        <div className={styles.element} key={idx}>{child}</div>
      ))}
    </div>
  );
};

export default SmallSection;
