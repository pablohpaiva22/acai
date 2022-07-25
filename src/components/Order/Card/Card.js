import React from "react";
import styles from "./Card.module.css";
import { GlobalContext } from "../../../GlobalContext";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const {
    finalInfo,
    setFinalInfo,
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

    const deleteItem = finalInfo.filter((item) => {
      return item[0] !== +e.target.id;
    });

    setFinalInfo(deleteItem);
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    const cardInfo = finalInfo.filter((item) => item[0] === +e.target.id);

    const setEditInfo = () => {
      setSize([cardInfo[0][1]]);
      setSizeNameList(cardInfo[0][1].size);

      setIncrement(cardInfo[0][2].map((item) => item));
      setIncrementNameList(cardInfo[0][2].map((item) => item.name));

      const totalSize = cardInfo[0][1].price;
      setTotalSize(totalSize);

      if (cardInfo[0][2].length !== 0) {
        const incremento = cardInfo[0][2]
          .map((item) => item.price)
          .reduce((acc, item) => {
            return acc + item;
          });

        setTotalIncrement(incremento);
        setTotal(totalSize + incremento);
      } else {
        const incremento = 0;
        setTotal(totalSize + incremento);
      }
    };

    reset();
    setEditInfo();
    navigate(`/pedido/${e.target.id}`);
  };

  return (
    <>
      {finalInfo.map((item, index) => {
        return (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <h3>{`AÇAÍ ${item[0]}`}</h3>

              <div className={styles.containerDeleteEdit}>
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
