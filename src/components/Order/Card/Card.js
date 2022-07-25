import React from "react";
import styles from "./Card.module.css";
import { GlobalContext } from "../../../GlobalContext";
import { useNavigate } from "react-router-dom";
import useSetGlobal from "../../../Hooks/useSetGlobal";

const Card = () => {
  const { finalInfo, setFinalInfo } = React.useContext(GlobalContext);
  const setGlobal = useSetGlobal();
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

    setGlobal.resetNewItem();
    setGlobal.setEditInfo(cardInfo);

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
