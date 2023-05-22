import React, { useState } from "react";
import { Column, RowMenuAction } from "../../../../types";
import DDashRowButton from "../DDashRowButton";
import styles from "./ddash-table-body.module.css";

type Props = {
  columns: Column[];
  data: { [key: string]: string | number }[];
  uniqueField: string;
  rowActions?: RowMenuAction[];
};

const DDashTableBody = ({ data, columns, uniqueField, rowActions }: Props) => {
  const buttons = !(rowActions == undefined || rowActions.length === 0);
  //Only used if rowActions is defined
  const [openID, setOpenID] = useState<number | string>(-1);
  const handleClick = (uniqueID: number | string) => {
    if (uniqueID == openID) {
      setOpenID(-1);
      return;
    }
    setOpenID(uniqueID);
  };

  //Using a unique field prevents weird behaviors when adding/deleting data
  return (
    <tbody className={styles.container}>
      {data.map((row, idx) => (
        <tr key={row[uniqueField]}>
          {columns.map((column, j) =>
            column.filter ? (
              <td key={j}>{column.filter(row[column.field].toString())}</td>
            ) : (
              <td key={j}>{row[column.field]}</td>
            )
          )}
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
