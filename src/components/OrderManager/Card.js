import React from "react";
import styles from "./Card.module.css";
import { GlobalContext } from "../../GlobalContext";

const Card = () => {
  const { globs, setGlobs } = React.useContext(GlobalContext);

  const handleClick = (e) => {
    e.preventDefault();

    const deleteItem = globs.filter((item) => {
      return item[0] !== +e.target.id;
    });

    setGlobs(deleteItem);
  };

  return (
    <>
      {globs.map((item, index) => {
        return (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <h3>{`ACAÍ ${item[0]}`}</h3>
              <button
                className={styles.delete}
                id={item[0]}
                onClick={handleClick}
              ></button>
            </div>

            <div>
              <h4>Tamanho</h4>

              <ul>
                <li>{item[1].size}</li>
              </ul>
            </div>

            <div className={styles.increment}>
              <h4>Adicionais</h4>

              {item[2].map((ops, index) => {
                return (
                  <ul key={index}>
                    <li>{ops.name}</li>
                  </ul>
                );
              })}
            </div>

            <div className={styles.total}>
              <span className={styles.totalText}>TOTAL</span>
              <span className={styles.totalValue}>{`R$ ${item[3]},00`}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
