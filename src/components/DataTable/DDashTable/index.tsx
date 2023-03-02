import React, { useState } from "react";
import { Column, RowAction } from "../../../../types";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import styles from "./ddash-table.module.css";

type Props = {
  columns: Column[];
  data: any[];
  rowActions?: RowAction[];
  title?: string;
  button?: {
    name: string;
    onClick: () => void;
  };
};

const DDashTable = ({ data, columns, rowActions, title, button }: Props) => {
  const [order, setOrder] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [dataState, setDataState] = useState(data);

  const sort = (field: string) => {
    setOrderBy(field);
    let orderTemp = "descending";
    if (field === orderBy && order === "descending") {
      orderTemp = "ascending";
    }

    if (orderTemp === "descending") {
      setDataState(data.sort((a, b) => (a[field] > b[field] ? 1 : -1)));
    } else {
      setDataState(data.sort((a, b) => (a[field] < b[field] ? 1 : -1)));
    }

    setOrder(orderTemp);
  };
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        {title ? <h2>{title}</h2> : null}
        {button ? (
          <button onClick={button.onClick}>{button.name}</button>
        ) : null}
      </div>
      <table className={styles.table}>
        <TableHeader
          order={order}
          orderBy={orderBy}
          columns={columns}
          sort={sort}
        />
        <TableBody columns={columns} data={dataState} rowActions={rowActions} />
      </table>
    </div>
  );
};

export default DDashTable;
