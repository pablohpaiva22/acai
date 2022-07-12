import React from "react";
import styles from "./NewItem.module.css";
import IncrementList from "./IncrementList";
import IncrementDescription from "./IncrementDescription";
import SizeList from "./SizeList";
import { sizeList_DB, IncrementList_DB } from "./homeDatabase";
import SizeDescription from "./SizeDescription";
import { GlobalContext } from "../../GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

const NewItem = () => {
  const { showSize, showIncrement, total, createNewItem, size } =
    React.useContext(GlobalContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = React.useState(false);

  const handleSizeListClick = (e) => {
    showSize(e, sizeList_DB);
  };

  const handleIncrementListClick = (e) => {
    showIncrement(e, IncrementList_DB);
  };

  const handleOrderClick = async (e) => {
    e.preventDefault();

    if (size.length === 0) {
      setError(true);
      return true;
    }

    createNewItem(id);

    navigate("/pedido");
  };

  return (
    <main className={`${styles.home} container`}>
      <div className={styles.firstBox}>
        <h2 className={styles.firstBoxTitle}>ESCOLHA O TAMANHO</h2>

        <SizeList onClick={handleSizeListClick} />

        <h2 className={styles.firstBoxTitle}>ADICIONAIS</h2>

        <IncrementList onClick={handleIncrementListClick} />
      </div>

      <div className={styles.secondBox}>
        <h2 className={styles.secondBoxTitle}>DESCRIÇÃO</h2>

        <SizeDescription />

        <IncrementDescription />

        <span className={styles.totalTitle}>TOTAL</span>

        <span className={styles.totalValue}>{`R$ ${total}`}</span>

        <button onClick={handleOrderClick} className={styles.secondBoxBtn}>
          Finalizar Pedido
        </button>
        {error && <p>Escolha um tamanho</p>}
      </div>
    </main>
  );
};

export default NewItem;
