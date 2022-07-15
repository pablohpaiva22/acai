import React from "react";
import styles from "./SizeList.module.css";
import { GlobalContext } from "../../../GlobalContext";
import { sizeList_DB } from "../database";

const SizeList = ({ onClick }) => {
  const { sizeNameList } = React.useContext(GlobalContext);

  return (
    <ul className={styles.container}>
      {sizeList_DB.map(({ size, price }, index) => {
        return (
          <li
            className={sizeNameList.includes(size) ? styles.active : undefined}
            key={index}
          >
            <span className={styles.size} onClick={onClick}>
              {size}
            </span>

            <span className={styles.price}>{`R$ ${price},00`}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SizeList;
