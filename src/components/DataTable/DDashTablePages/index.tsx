import React from "react";
import styles from "./ddash-table-pages.module.css";

type Props = {
  page: number;
  numOfPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const DDashTablePages = ({ page, setPage, numOfPage }: Props) => {
  const nextPage = () => {
    if (page + 1 <= numOfPage) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page - 1 >= 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={page == 1 ? styles.disabled : styles.enabled}
        onClick={previousPage}
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"></path>
        </svg>
      </button>
      <p>{page + " / " + numOfPage}</p>
      <button
        className={page == numOfPage ? styles.disabled : styles.enabled}
        onClick={nextPage}
      >
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          transform="matrix(-1, 0, 0, 1, 0, 0)"
        >
          <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"></path>
        </svg>
      </button>
    </div>
  );
};

export default DDashTablePages;
