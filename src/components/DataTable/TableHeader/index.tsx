import { Column } from "../../../../types";
import React from "react";
import styles from "./ddash-table-header.module.css";

type Props = {
  columns: Column[];
  order: string;
  orderBy: string;
  sort: (field: string) => void;
};

const TableHeader = ({ columns, order, orderBy, sort }: Props) => {
  const columnWidth = 100 / columns.length;
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
                <i className="up-caret"> &#9650;</i>
              ) : (
                <i className="down-caret">&#9660;</i>
              )
            ) : null}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
