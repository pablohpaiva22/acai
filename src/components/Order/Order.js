import React from "react";
import styles from "./Order.module.css";

const Order = () => {
  return (
    <section className={`${styles.content} container`}>
      <div className={styles.block}>
        <ul className={styles.itensList}>
          <li>block</li>
          <li>block</li>
          <li>block</li>
          <li>block</li>
          <li>block</li>
          <li>block</li>
          <li>block</li>
          <li>block</li>
          <li>block</li>
          <li>block</li>
        </ul>

        <div className={styles.newOrder}>Novo Pedido</div>
      </div>

      <button className={styles.button}>Finalizar Pedido</button>
    </section>
  );
};

export default Order;
