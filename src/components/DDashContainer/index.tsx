import styles from "./ddash-container.module.css";
import React from "react";
import { ConfirmationDialogProvider } from "../../context/DDashDialog";
import { DialogText } from "../../../types";

type Props = {
  children: React.ReactElement | React.ReactElement[];
  nav?: { component: React.ReactElement; position: "top" | "left" | "right" };
  defaultDialogText?: DialogText;
};

const DDashContainer = ({ children, nav, defaultDialogText }: Props) => {
  
  return (
    <div className={styles.container}>
      <ConfirmationDialogProvider defaultDialogText={defaultDialogText}>
        <div
          className={
            nav
              ? [styles.content, styles[nav.position]].join(" ")
              : styles.content
          }
        >
          {nav ? nav.component : null}
          <div className={styles.main}>{children}</div>
        </div>
      </ConfirmationDialogProvider>
    </div>
  );
};

export default DDashContainer;
