import React from "react";
import styles from "./IncrementList.module.css";

const IncrementList = ({ onClick, Increment_DB }) => {
  return (
    <ul className={styles.container}>
      {Increment_DB.map((item) => {
        return (
          <li onClick={onClick} key={item.name}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default IncrementList;
