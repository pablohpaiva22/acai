import React from "react";
import styles from "./SizeList.module.css";

const acaiSize = ["1 litro", "750 ml", "500 ml", "400 ml", "300 ml"];

const Size = () => {
  return (
    <ul className={styles.size}>
      {acaiSize.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default Size;
