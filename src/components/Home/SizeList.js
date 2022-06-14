import React from "react";
import styles from "./SizeList.module.css";

const Size = ({ onClick, sizeList_DB }) => {
  return (
    <ul className={styles.size}>
      {sizeList_DB.map((item, index) => {
        return (
          <li onClick={onClick} key={index}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Size;
