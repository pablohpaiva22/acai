import React from "react";
import styles from "./Home.module.css";
import AdditionalList from "./Home/AdditionalList";
import OrderDescription from "./Home/OrderDescription";
import SizeList from "./Home/SizeList";
import { sizeList_DB, AdditionalList_DB } from "./Home/databaseHome";

const Home = () => {
  const description = [];
  const totalDB = [];

  const [list, setList] = React.useState([]);
  const [soma, setSoma] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const showDescriptionData = (e, data) => {
    const filtrar = data.filter((item) => {
      return item.name === e.target.innerText;
    });

    const descriptionList = () => {
      description.push(...list, ...filtrar);
      setList(description);
    };

    const descriptionTotal = () => {
      totalDB.push(...soma, filtrar[0].price);
      setSoma(totalDB);

      const valorFinal = totalDB.reduce((acc, value) => {
        return acc + value;
      });

      setTotal(valorFinal);
    };

    descriptionList();
    descriptionTotal();
  };

  const handleSizeListClick = (e) => {
    showDescriptionData(e, sizeList_DB);
  };

  const handleAdditionalListClick = (e) => {
    showDescriptionData(e, AdditionalList_DB);
  };

  return (
    <main className={`${styles.home} container`}>
      <div className={styles.firstBox}>
        <h2 className={styles.firstBoxTitle}>ESCOLHA O TAMANHO</h2>

        <SizeList sizeList_DB={sizeList_DB} onClick={handleSizeListClick} />

        <h3 className={styles.firstBoxTitle}>ADICIONAIS</h3>

        <AdditionalList
          AdditionalList_DB={AdditionalList_DB}
          onClick={handleAdditionalListClick}
        />
      </div>

      <div className={styles.secondBox}>
        <h2 className={styles.secondBoxTitle}>Descrição do pedido</h2>

        <OrderDescription list={list} />

        <h3 className={styles.secondBoxSubtitle}>TOTAL</h3>

        <p className={styles.secondBoxTotal}>{`R$ ${total}`}</p>

        <button className={styles.secondBoxBtn}>Finalizar Pedido</button>
      </div>
    </main>
  );
};

export default Home;
