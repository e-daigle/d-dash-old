import React from "react";
import styles from "./ddash-l-section.module.css";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const DDashLargeSection = ({ children }: Props) => {
  //Either two columns or one
  const isArray = Array.isArray(children);
  if (isArray) {
    return (
      <div className={styles.container}>
        {children.map((child, idx) => (
          <div className={styles.element} key={idx}>
            {child}
          </div>
        ))}
      </div>
    );
  }
  return <div className={styles.soloContainer}>{children}</div>;
};

export default DDashLargeSection;
