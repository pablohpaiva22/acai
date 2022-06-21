import React from "react";
import styles from "./Order.module.css";

const Order = () => {
  return (
    <section className={`${styles.content} container`}>
      <ul className={styles.block}>
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
      <div className={styles.block}>Novo Pedido</div>
    </section>
  );
};

export default Order;
