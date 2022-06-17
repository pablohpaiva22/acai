import React from "react";
import styles from "./Home.module.css";
import IncrementList from "./Home/IncrementList";
import OrderIncrement from "./Home/OrderIncrement";
import SizeList from "./Home/SizeList";
import { sizeList_DB, IncrementList_DB } from "./Home/databaseHome";
import OrderSize from "./Home/OrderSize";

const Home = () => {
  const [total, setTotal] = React.useState(0);

  const size_DB = [];
  const totalSize_DB = [];
  const [size, setSize] = React.useState([]);
  const [totalSize, setTotalSize] = React.useState(0);

  const increment_DB = [];
  const [increment, setIncrement] = React.useState([]);
  const [totalIncrement, setTotalIncrement] = React.useState(0);

  const [target, setTarget] = React.useState("");

  // --------------------------------------------------------------------------------------

  const showSize = (e, data) => {
    const getTarget = data.filter((item) => {
      return item.name === e.target.innerText;
    });

    size_DB.push(...getTarget);
    setSize(size_DB);

    totalSize_DB.push(getTarget[0].price);

    setTotalSize(totalSize_DB[0]);
    setTotal(totalSize_DB[0] + totalIncrement);
  };

  // ----------------------------------------------------------------------------------------

  const showIncrement = (e, data) => {
    const getTarget = data.filter((item) => {
      return item.name === e.target.innerText;
    });

    increment_DB.push(...increment, ...getTarget);

    //-----------------

    const tranformingToJson = increment_DB.map((item) => {
      return JSON.stringify(item);
    });

    const removingDuplicates = new Set(tranformingToJson);
    const tranformingToObject = Array.from(removingDuplicates).map(JSON.parse);

    setIncrement(tranformingToObject);

    const nameList = tranformingToObject.map((item) => item.name);
    setTarget(nameList);

    //---------

    const IncrementTotal = tranformingToObject.map((item) => {
      return item.price;
    });

    const finalValue = IncrementTotal.reduce((acc, value) => {
      return acc + value;
    });

    setTotalIncrement(finalValue);
    setTotal(finalValue + totalSize);
  };

  // --------------------------------------------------------------------------------------

  const handleSizeListClick = (e) => {
    showSize(e, sizeList_DB);
  };

  const handleIncrementListClick = (e) => {
    showIncrement(e, IncrementList_DB);
  };

  // --------------------------------------------------------------------------------------

  return (
    <main className={`${styles.home} container`}>
      <div className={styles.firstBox}>
        <h2 className={styles.firstBoxTitle}>ESCOLHA O TAMANHO</h2>

        <SizeList sizeList_DB={sizeList_DB} onClick={handleSizeListClick} />

        <h3 className={styles.firstBoxTitle}>ADICIONAIS</h3>

        <IncrementList
          target={target}
          Increment_DB={IncrementList_DB}
          onClick={handleIncrementListClick}
        />
      </div>

      <div className={styles.secondBox}>
        <h2 className={styles.secondBoxTitle}>Descrição do Pedido</h2>

        <OrderSize size={size} />

        <OrderIncrement increment={increment} />

        <h3 className={styles.secondBoxSubtitle}>TOTAL</h3>

        <p className={styles.secondBoxTotal}>{`R$ ${total}`}</p>

        <button className={styles.secondBoxBtn}>Finalizar Pedido</button>
      </div>
    </main>
  );
};

export default Home;
