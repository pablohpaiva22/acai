import React from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./IncrementList.module.css";
import { IncrementList_DB } from "./homeDatabase";

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
