import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      Finalizar Pedido
    </button>
  );
};

export default Button;
