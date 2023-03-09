import { Column } from "../../../../types";
import React from "react";
import styles from "./ddash-table-header.module.css";

type Props = {
  columns: Column[];
  order: string;
  orderBy: string;
  sort: (field: string) => void;
};

const DDashTableHeader = ({ columns, order, orderBy, sort }: Props) => {
  return (
    <thead className={styles.container}>
      <tr>
        {columns.map((column, idx) => (
          <th
            key={idx}
            onClick={() => (column.field !== "" ? sort(column.field) : "")}
          >
            {column.title}
            {orderBy === column.field ? (
              order === "descending" ? (
                <i> &#9650;</i>
              ) : (
                <i>&#9660;</i>
              )
            ) : null}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default DDashTableHeader;
