import React from "react";
import styles from "./AdditionalList.module.css";

const Additionals = ({ onClick, list }) => {
  return (
    <ul className={styles.additional}>
      {list.map((item) => {
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
