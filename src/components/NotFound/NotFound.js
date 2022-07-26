import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={`${styles.container} container`}>
      <p className={styles.text}>Página não encontrada.</p>
    </div>
  );
};

export default NotFound;
