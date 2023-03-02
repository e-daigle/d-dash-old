import React from "react";
import styles from "./ddash-s-card.module.css";
import { Color } from "../../../types";

type Icon = {
  component: React.ReactElement;
  type: "icon" | "image";
};

type Comment = {
  text: string;
  weight?: "normal" | "semibold" | "bold";
  color?: Color;
};

type Props = {
  title: string;
  value: string;
  image?: Icon;
  comment?: Comment | Comment[];
};

const SmallCard = ({ title, value, image, comment }: Props) => {
  return (
    <div className={styles.container}>
      {image ? (
        <div className={styles[image.type]}>{image.component}</div>
      ) : null}
      <div className={styles.text}>
        <h3>{title}</h3>
        <p className={styles.data}>{value}</p>
        {comment ? (
          <p className={styles.comment}>
            {Array.isArray(comment) ? (
              comment.map((span, idx) => (
                <span
                  key={idx}
                  className={span.weight ? styles[span.weight] : styles.normal}
                  style={{ color: span.color }}
                >
                  {span.text + " "}
                </span>
              ))
            ) : (
              <span
                className={
                  comment.weight ? styles[comment.weight] : styles.normal
                }
                style={{ color: comment.color }}
              >
                {comment.text}
              </span>
            )}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default SmallCard;
