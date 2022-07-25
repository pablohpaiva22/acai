import React from "react";
import styles from "./Item.module.css";
import { GlobalContext } from "../../../GlobalContext";

const Item = () => {
  const { finalInfo } = React.useContext(GlobalContext);

  return (
    <div className={styles.itemBox}>
      {finalInfo.map((item, index) => {
        return (
          <div key={index} className={styles.item}>
            <h3 className={styles.title}>{`ACAÍ ${item[0]}`}</h3>

            <div className={styles.size}>
              <h4>Tamanho</h4>

              <span>{item[1].size}</span>
            </div>

            <div className={styles.increment}>
              <h4>Adicionais</h4>

              <ul>
                {item[2].map((ops, index) => {
                  return <li key={index}>{ops.name}</li>;
                })}
              </ul>
            </div>

            <div className={styles.total}>
              <h4>Total</h4>
              <span>{`R$ ${item[3]},00`}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
