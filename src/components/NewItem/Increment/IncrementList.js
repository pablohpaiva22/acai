import React from "react";
import styles from "./IncrementList.module.css";
import { GlobalContext } from "../../../GlobalContext";
import { IncrementList_DB } from "../database";

const IncrementList = ({ onClick }) => {
  const { incrementNameList } = React.useContext(GlobalContext);

  return (
    <ul className={styles.container}>
      {IncrementList_DB.map((increment) => {
        return (
          <li
            className={
              incrementNameList.includes(increment.name)
                ? styles.active
                : undefined
            }
            key={increment.name}
          >
            <span className={styles.name} onClick={onClick}>
              {increment.name}
            </span>

            <span className={styles.price}>{`R$ ${increment.price},00`}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default IncrementList;
