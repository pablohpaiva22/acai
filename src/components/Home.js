import React from "react";
import styles from "./Home.module.css";
import IncrementList from "./Home/IncrementList";
import IncrementDescription from "./Home/IncrementDescription";
import SizeList from "./Home/SizeList";
import { sizeList_DB, IncrementList_DB } from "./Home/homeDatabase";
import SizeDescription from "./Home/SizeDescription";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

const Home = () => {
  const navigate = useNavigate();
  const { showSize, showIncrement, total } = React.useContext(GlobalContext);

  const handleSizeListClick = (e) => {
    showSize(e, sizeList_DB);
  };

  const handleIncrementListClick = (e) => {
    showIncrement(e, IncrementList_DB);
  };

  const handleOrderClick = (e) => {
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
      </div>
    </main>
  );
};

export default Home;
