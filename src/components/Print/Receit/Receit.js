import React from "react";
import styles from "./Receit.module.css";
import { GlobalContext } from "../../../GlobalContext";
import Item from "./Item";

const Receit = () => {
  const { totalPedido } = React.useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <header className={styles.header}>AÇAÍ MANAGER</header>

      <Item />

      <div className={styles.totalPedido}>
        <span>Total</span>
        <span>{`R$ ${totalPedido},00`}</span>
      </div>

      <footer className={styles.footer}>
        <p>Telefone: (11) 9999-9999</p>
        <p>Avenida norte, 100 - Centro</p>
        <p>São Paulo</p>
      </footer>
    </div>
  );
};

export default Receit;
