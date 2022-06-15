import React from "react";
import styles from "./OrderIncrement.module.css";

const Order = ({ increment }) => {
  return (
    <>
      <h3>Adicionais</h3>
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

export default Order;
