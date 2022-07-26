import React from "react";
import styles from "./Receit.module.css";
import Item from "./Item";
import useTotal from "../../../Hooks/useTotal";

const Receit = () => {
  const { getTotal, totalOrder } = useTotal();

  React.useEffect(() => {
    getTotal();
  }, [getTotal]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>AÇAÍ</header>

      <Item />

      <div className={styles.totalPedido}>
        <span>Total</span>
        <span>{`R$ ${totalOrder},00`}</span>
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
