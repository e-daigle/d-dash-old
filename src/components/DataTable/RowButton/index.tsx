import React, { useState } from "react";
import { RowAction } from "../../../../types";
import styles from "./ddash-table-row-button.module.css";

type Props = {
  idx: number;
  openID: number;
  rowActions: RowAction[];
  handleClick: () => void;
};

const RowButton = ({ idx, openID, rowActions, handleClick }: Props) => {
  return (
    <td className={styles.button}>
      <p onClick={handleClick}>&#8942;</p>
      {idx == openID ? (
        <div className={styles.popup}>
          <ul>
            {rowActions.map((action, i) => (
              <li key={i} onClick={() => action.onClick(idx)}>{action.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </td>
  );
};

export default RowButton;
