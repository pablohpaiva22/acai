import React from "react";
import styles from "./SizeList.module.css";

const SizeList = ({ onClick, sizeList_DB, sizeNameList }) => {
  return (
    <ul className={styles.container}>
      {sizeList_DB.map((item, index) => {
        return (
          <li
            className={sizeNameList.includes(item.name) ? styles.active : ""}
            onClick={onClick}
            key={index}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default SizeList;
