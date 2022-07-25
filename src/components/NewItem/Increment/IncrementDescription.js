import React from "react";
import { GlobalContext } from "../../../GlobalContext";
import styles from "./IncrementDescription.module.css";

const IncrementDescription = () => {
  const { increment } = React.useContext(GlobalContext);

  return (
    <>
      <h3 className={styles.title}>Adicionais</h3>
      <ul className={styles.itensList}>
        {increment.map(({ name }, index) => {
          return (
            <li className={styles.nameBox} key={index}>
              <p className={styles.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default IncrementDescription;
