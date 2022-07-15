import React from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./IncrementList.module.css";
import { IncrementList_DB } from "./database";

const IncrementList = ({ onClick }) => {
  const { incrementNameList } = React.useContext(GlobalContext);

  return (
    <ul className={styles.container}>
      {IncrementList_DB.map((item) => {
        return (
          <li
            className={
              incrementNameList.includes(item.name) ? styles.active : ""
            }
            key={item.name}
          >
            <span className={styles.name} onClick={onClick}>
              {item.name}
            </span>

            <span className={styles.price}>{`R$ ${item.price},00`}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default IncrementList;
