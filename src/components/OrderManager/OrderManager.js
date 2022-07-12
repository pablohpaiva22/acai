import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import styles from "./OrderManager.module.css";

const OrderManager = () => {
  const {
    globs,
    setSize,
    setIncrement,
    setIncrementNameList,
    setSizeNameList,
    setTotal,
    setGlobs,
  } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const [totalPedido, setTotalPedido] = React.useState(0);

  React.useEffect(() => {
    if (globs.length !== 0) {
      const getTotal = globs
        .map((item) => {
          return item[3];
        })
        .reduce((acc, item) => {
          return acc + item;
        });

      setTotalPedido(getTotal);
    } else {
      setTotalPedido(0);
    }
  }, [globs]);

  const handleDeleteClick = (e) => {
    e.preventDefault();

    const deleteItem = globs.filter((item) => {
      return item[0] !== +e.target.id;
    });

    setGlobs(deleteItem);
  };

  const handleClick = () => {
    let id = 1;

    if (globs.length === 0) {
      setSize([]);
      setIncrement([]);
      setIncrementNameList("");
      setSizeNameList("");
      setTotal(0);
      navigate(`/pedido/${id}`);
      return true;
    }

    const get_id = globs.map((item) => {
      return item[0];
    });

    const new_id = Math.max(...get_id);

    id += new_id;

    setSize([]);
    setIncrement([]);
    setIncrementNameList("");
    setSizeNameList("");
    setTotal(0);

    navigate(`/pedido/${id}`);
  };

  return (
    <section className={`${styles.container} container`}>
      <div className={styles.itensList}>
        {globs.map((item, index) => {
          return (
            <div key={index} className={styles.descriptionList}>
              <div className={styles.header}>
                <h3>{`Item ${item[0]}`}</h3>
                <button id={item[0]} onClick={handleDeleteClick}>
                  trash
                </button>
              </div>

              <div className={styles.size}>
                <h4>Tamanho</h4>

                <ul>
                  <li>{item[1].size}</li>
                </ul>
              </div>

              <div className={styles.increment}>
                <h4>Adicionais</h4>

                {item[2].map((ops, index) => {
                  return (
                    <ul className={styles.incrementList} key={index}>
                      <li>{ops.name}</li>
                    </ul>
                  );
                })}
              </div>

              <span className={styles.totalText}>TOTAL</span>
              <span className={styles.totalValue}>{item[3]}</span>
            </div>
          );
        })}

        <div className={styles.newOrder}>
          <button onClick={handleClick}>novo pedido</button>
        </div>
      </div>

      <div className={styles.totalPedido}>{`Total: R$ ${totalPedido}`}</div>

      <button className={styles.EndOrder}>Finalizar Pedido</button>
    </section>
  );
};

export default OrderManager;
