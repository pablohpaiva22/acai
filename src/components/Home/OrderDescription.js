import React from "react";
import styles from "./OrderDescription.module.css";

const Description = ({ itemsArray }) => {
  return (
    <>
      <ul className={styles.itensList}>
        {itemsArray.map((item, index) => {
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

export default Description;
