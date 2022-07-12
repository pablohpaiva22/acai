import React from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./SizeList.module.css";
import { sizeList_DB } from "./homeDatabase";

const SizeList = ({ onClick }) => {
  const { sizeNameList } = React.useContext(GlobalContext);

  return (
    <ul className={styles.container}>
      {sizeList_DB.map((item, index) => {
        return (
          <li
            className={sizeNameList.includes(item.size) ? styles.active : ""}
            onClick={onClick}
            key={index}
          >
            {item.size}
          </li>
        );
      })}
    </ul>
  );
};

export default SizeList;
