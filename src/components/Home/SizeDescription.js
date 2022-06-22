import React from "react";
import styles from "./SizeDescription.module.css";

const SizeDescription = ({ size }) => {
  return (
    <div className={styles.sizeContainer}>
      <h3 className={styles.title}>Tamanho</h3>
      {size.map((item, index) => {
        return (
          <p className={styles.size} key={index}>
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default SizeDescription;
