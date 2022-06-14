import React from "react";
import styles from "./AdditionalList.module.css";

const Additionals = ({ onClick, AdditionalList_DB }) => {
  return (
    <ul className={styles.additional}>
      {AdditionalList_DB.map((item) => {
        return (
          <li onClick={onClick} key={item.name}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Additionals;
