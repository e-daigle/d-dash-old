import React, { useEffect, useState } from "react";
import { Column, MenuAction, RowMenuAction } from "../../../../types";
import DDashDotsMenu from "../../DDashDotsMenu";
import DDashTableBody from "../DDashTableBody";
import DDashTableHeader from "../DDashTableHeader";
import DDashTablePages from "../DDashTablePages";
import styles from "./ddash-table.module.css";

type Props = {
  columns: Column[];
  data: any[];
  uniqueField: string;
  rowActions?: RowMenuAction[];
  title?: string;
  tableActions?: MenuAction[];
  numberPerPage?: number;
};

const DDashTable = ({
  data,
  columns,
  uniqueField,
  rowActions,
  title,
  tableActions,
  numberPerPage,
}: Props) => {
  const [order, setOrder] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(1);
  const [dataState, setDataState] = useState(
    numberPerPage ? data.slice(0, numberPerPage) : data
  );
  const [numOfPage, setNumOfPage] = useState(0);

  useEffect(() => {
    if (numberPerPage) setNumOfPage(Math.ceil(data.length / numberPerPage));
  }, [numberPerPage]);

  useEffect(() => {
    if (numberPerPage)
      setDataState(
        data.slice((page - 1) * numberPerPage, page * numberPerPage)
      );
  }, [page]);

  const sort = (field: string) => {
    setOrderBy(field);
    let orderTemp = "descending";
    if (field === orderBy && order === "descending") {
      orderTemp = "ascending";
    }
    let dataTemp;
    if (orderTemp === "descending") {
      dataTemp = data.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    } else {
      dataTemp = data.sort((a, b) => (a[field] < b[field] ? 1 : -1));
    }
    if (numberPerPage) {
      setDataState(
        dataTemp.slice((page - 1) * numberPerPage, page * numberPerPage)
      );
    }
    setOrder(orderTemp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        {title ? <h2>{title}</h2> : null}
        {/*tableActions ? (
          <button onClick={button.onClick}>{button.name}</button>
        ) : null*/}
        {tableActions ? <DDashDotsMenu actions={tableActions} /> : null}
      </div>
      <table className={styles.table}>
        <DDashTableHeader
          order={order}
          orderBy={orderBy}
          columns={columns}
          sort={sort}
        />
        <DDashTableBody
          columns={columns}
          data={dataState}
          rowActions={rowActions}
          uniqueField={uniqueField}
        />
      </table>
      {numberPerPage ? (
        <DDashTablePages setPage={setPage} page={page} numOfPage={numOfPage} />
      ) : null}
    </div>
  );
};

export default DDashTable;
