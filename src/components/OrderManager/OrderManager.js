import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import Button from "../General/Button";
import Card from "./Card/Card";
import styles from "./OrderManager.module.css";

const OrderManager = () => {
  const { globs, reset, totalPedido } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const [error, setError] = React.useState(false);

  const handleClick = () => {
    let id = 1;

    if (globs.length === 0) {
      reset();
      navigate(`/pedido/${id}`);
      return true;
    }

    const get_id = globs.map((item) => {
      return item[0];
    });

    const new_id = Math.max(...get_id);
    id += new_id;

    reset();
    navigate(`/pedido/${id}`);
  };

  const handleEndClick = () => {
    setError(false);

    if (globs.length === 0) {
      setError(true);
      return true;
    }

    navigate("/pedido/imprimir");
    setError(true);
  };

  return (
    <section className={`${styles.container} container`}>
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
