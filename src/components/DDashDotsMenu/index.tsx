import React, { useState } from "react";
import { MenuAction } from "../../../types";
import styles from "./ddash-menu-dots.module.css";
import { useConfirmationDialog } from "../../context/DDashDialog";

type Props = {
  text?: string;
  actions: MenuAction[];
};

const DDashDotsMenu = ({ actions, text }: Props) => {
  const [click, setClick] = useState(false);
  const { getConfirmation } = useConfirmationDialog();

  const handleClick = async (action: MenuAction) => {
    setClick(!click);
    action.onClick();
    const confirmed = await getConfirmation();

    if (confirmed) alert("A Møøse once bit my sister... No realli!");
  };

  return (
    <div className={styles.container}>
      <div onClick={() => setClick(!click)} className={styles.button}>
        {text ? (
          <p>{text}</p>
        ) : (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width="4" height="4" x="3" y="10" rx="2"></rect>
            <rect width="4" height="4" x="10" y="10" rx="2"></rect>
            <rect width="4" height="4" x="17" y="10" rx="2"></rect>
          </svg>
        )}
      </div>
      {click ? (
        <div className={styles.popup}>
          <ul>
            {actions.map((action, i) => (
              <li key={i} onClick={() => handleClick(action)}>
                {action.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default DDashDotsMenu;
