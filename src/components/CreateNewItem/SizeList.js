import React from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./SizeList.module.css";
import { sizeList_DB } from "./database";

const SizeList = ({ onClick }) => {
  const { sizeNameList } = React.useContext(GlobalContext);

  return (
    <ul className={styles.container}>
      {sizeList_DB.map((item, index) => {
        return (
          <li
            className={sizeNameList.includes(item.size) ? styles.active : ""}
            key={index}
          >
            <span className={styles.size} onClick={onClick}>
              {item.size}
            </span>

            <span className={styles.price}>{`R$ ${item.price},00`}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SizeList;
