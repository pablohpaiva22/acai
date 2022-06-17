import React from "react";
import styles from "./IncrementList.module.css";

const IncrementList = ({ onClick, Increment_DB, target }) => {
  return (
    <ul className={styles.container}>
      {Increment_DB.map((item) => {
        return (
          <li
            className={target.includes(item.name) ? styles.active : ""}
            onClick={onClick}
            key={item.name}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default IncrementList;
