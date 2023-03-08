import React, { useState } from "react";
import { Column, RowMenuAction } from "../../../../types";
import DDashRowButton from "../DDashRowButton";
import styles from "./ddash-table-body.module.css";

type Props = {
  columns: Column[];
  data: any[];
  uniqueField: string;
  rowActions?: RowMenuAction[];
};

const DDashTableBody = ({ data, columns, uniqueField, rowActions }: Props) => {
  const buttons = !(rowActions == undefined || rowActions.length === 0);
  const [openID, setOpenID] = useState<number | string>(-1);

  const handleClick = (uniqueID: number | string) => {
    console.log(openID)
    if (uniqueID == openID) {
      setOpenID(-1);
      return;
    }
    setOpenID(uniqueID);
  };
  return (
    <tbody className={styles.container}>
      {data.map((row, idx) => (
        <tr key={row[uniqueField]}>
          {columns.map((column, j) => (
            <td key={j}>{row[column.field]}</td>
          ))}
          {buttons ? (
            <DDashRowButton
              uniqueID={row[uniqueField]}
              openID={openID}
              rowActions={rowActions}
              handleClick={() => handleClick(row[uniqueField])}
            />
          ) : null}
        </tr>
      ))}
    </tbody>
  );
};

export default DDashTableBody;
