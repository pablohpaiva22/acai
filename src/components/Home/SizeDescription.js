import React from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./SizeDescription.module.css";

const SizeDescription = () => {
  const { size } = React.useContext(GlobalContext);

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
