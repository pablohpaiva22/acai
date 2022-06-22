import React from "react";
import styles from "./IncrementDescription.module.css";

const IncrementDescription = ({ increment }) => {
  return (
    <>
      <h3 className={styles.title}>Adicionais</h3>
      <ul className={styles.itensList}>
        {increment.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default IncrementDescription;
