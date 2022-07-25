import React from "react";
import styles from "./OrderManager.module.css";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import Button from "../Utilities/Button";
import Card from "./Card/Card";
import { Helmet } from "react-helmet";

const OrderManager = () => {
  const { finalInfo, reset, totalPedido } = React.useContext(GlobalContext);
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    let id = 1;

    if (finalInfo.length === 0) {
      reset();
      navigate(`/pedido/${id}`);
      return true;
    }

    const get_id = finalInfo.map((item) => {
      return item[0];
    });

    const new_id = Math.max(...get_id);
    id += new_id;

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

      <div className={styles.itensList}>
        <Card />

        <div className={styles.card}>
          <button onClick={handleClick}></button>
        </div>
      </div>

      <div className={styles.total}>
        <span>TOTAL: </span>
        <span>{`R$ ${totalPedido},00`}</span>
        {error && <p className={styles.error}>Insira pelo menos 1 item.</p>}
      </div>

      <Button onClick={handleEndClick} />
    </section>
  );
};

export default OrderManager;
