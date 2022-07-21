import React from "react";
import styles from "./Card.module.css";
import { GlobalContext } from "../../../GlobalContext";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const {
    globs,
    setGlobs,
    reset,
    setSize,
    setSizeNameList,
    setTotalSize,
    setTotal,
    setIncrementNameList,
    setIncrement,
    setTotalIncrement,
  } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  const handleDeleteClick = (e) => {
    e.preventDefault();

    const deleteItem = globs.filter((item) => {
      return item[0] !== +e.target.id;
    });

    setGlobs(deleteItem);
  };

  const handleEditClick = (e) => {
    e.preventDefault();

    reset();

    const targetInfo = globs.filter((item) => item[0] === +e.target.id);

    setSize([targetInfo[0][1]]);
    setSizeNameList(targetInfo[0][1].size);

    setIncrement(targetInfo[0][2].map((item) => item));
    setIncrementNameList(targetInfo[0][2].map((item) => item.name));

    const totalSize = targetInfo[0][1].price;
    setTotalSize(totalSize);

    if (targetInfo[0][2].length !== 0) {
      const incremento = targetInfo[0][2]
        .map((item) => item.price)
        .reduce((acc, item) => {
          return acc + item;
        });

      setTotalIncrement(incremento);
      setTotal(totalSize + incremento);
      navigate(`/pedido/${e.target.id}`);
    } else {
      const incremento = 0;
      setTotal(totalSize + incremento);
      navigate(`/pedido/${e.target.id}`);
    }
  };

  return (
    <>
      {globs.map((item, index) => {
        return (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <h3>{`ACAÍ ${item[0]}`}</h3>

              <div className={styles.deleteEdit}>
                <button
                  id={item[0]}
                  className={styles.edit}
                  onClick={handleEditClick}
                ></button>

                <button
                  id={item[0]}
                  className={styles.delete}
                  onClick={handleDeleteClick}
                ></button>
              </div>
            </div>

            <div>
              <h4>Tamanho</h4>

              <ul>
                <li>{item[1].size}</li>
              </ul>
            </div>

            <div className={styles.increment}>
              <h4>Adicionais</h4>

              {item[2].map(({ name }, index) => {
                return (
                  <ul key={index}>
                    <li>{name}</li>
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
