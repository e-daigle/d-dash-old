import { useConfirmationDialog } from "../../../context/DDashDialog";
import React, { useState } from "react";
import { RowMenuAction } from "../../../../types";
import styles from "./ddash-table-row-button.module.css";

type Props = {
  uniqueID: number | string;
  openID: number | string;
  rowActions: RowMenuAction[];
  handleClick: () => void;
};

const DDashRowButton = ({
  uniqueID,
  openID,
  rowActions,
  handleClick,
}: Props) => {
  const { getConfirmation } = useConfirmationDialog();

  const onClick = async (action: RowMenuAction) => {
    handleClick();
    console.log(uniqueID);
    // if action needs confirmation show dialog
    if (action.needsConfirmation) {
      const confirmed = await getConfirmation(
        action.dialogText && action.dialogText
      );
      if (!confirmed) return;
    }
    //Call this action's function if no confirmation is needed or user confirmed
    action.onClick(uniqueID);
  };

  return (
    <td className={styles.button}>
      <p onClick={handleClick}>&#8942;</p>
      {uniqueID == openID ? (
        <div className={styles.popup}>
          <ul>
            {rowActions.map((action, i) => (
              <li key={i} onClick={() => onClick(action)}>
                {action.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </td>
  );
};

export default DDashRowButton;
