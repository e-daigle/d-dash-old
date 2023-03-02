import React, { useState } from "react";
import { Column, RowAction } from "../../../../types";
import RowButton from "../RowButton";
import styles from "./ddash-table-body.module.css";

type Props = {
  columns: Column[];
  data: any[];
  rowActions?: RowAction[];
};

const TableBody = ({ data, columns, rowActions }: Props) => {
  const buttons = !(rowActions == undefined || rowActions.length === 0);
  const [openID, setOpenID] = useState(-1);
  const handleClick = (idx: number) => {
    if (idx == openID) {
      setOpenID(-1);
      return;
    }
    setOpenID(idx);
  };
  return (
    <tbody className={styles.container}>
      {data.map((row, idx) => (
        <tr key={idx}>
          {columns.map((column, j) => (
            <td key={j}>{row[column.field]}</td>
          ))}
          {buttons ? (
            <RowButton
              idx={idx}
              openID={openID}
              rowActions={rowActions}
              handleClick={() => handleClick(idx)}
            />
          ) : null}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
