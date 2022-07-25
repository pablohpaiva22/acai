import React from "react";
import styles from "./Order.module.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import Card from "./Card/Card";
import Error from "../Utilities/Error";
import Button from "../Utilities/Button";

const Order = () => {
  const { finalInfo, reset, totalPedido } = React.useContext(GlobalContext);
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const handleNewItemClick = () => {
    let id = 1;

    if (finalInfo.length === 0) {
      reset();
      navigate(`/pedido/${id}`);
      return true;
    }

    const new_id = () => {
      const id_list = finalInfo.map((item) => {
        return item[0];
      });

      const biggest_id = Math.max(...id_list);
      id += biggest_id;
      return id;
    };

    new_id();
    reset();
    navigate(`/pedido/${id}`);
  };

  const handleEndClick = () => {
    setError(false);

    if (finalInfo.length === 0) {
      setError(true);
      return true;
    }

    setError(true);
    navigate("/pedido/imprimir");
  };

  return (
    <section className={`${styles.container} container`}>
      <Helmet>
        <title>AÇAÍ | Pedido</title>
      </Helmet>

      <div className={styles.cards}>
        <Card />

        <div className={styles.card}>
          <button onClick={handleNewItemClick}></button>
        </div>
      </div>

      <div className={styles.total}>
        <span>TOTAL: </span>
        <span>{`R$ ${totalPedido},00`}</span>
        {error && <Error>Insira pelo menos 1 item.</Error>}
      </div>

      <Button onClick={handleEndClick} />
    </section>
  );
};

export default Order;
