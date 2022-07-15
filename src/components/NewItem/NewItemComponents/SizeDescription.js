import React from "react";
import styles from "./SizeDescription.module.css";
import { GlobalContext } from "../../../GlobalContext";

const SizeDescription = () => {
  const { size } = React.useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Tamanho</h3>
      {size.map(({ size }, index) => {
        return (
          <p className={styles.size} key={index}>
            {size}
          </p>
        );
      })}
    </div>
  );
};

export default SizeDescription;
