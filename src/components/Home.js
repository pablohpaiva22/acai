import React from "react";
import styles from "./Home.module.css";
import IncrementList from "./Home/IncrementList";
import OrderIncrement from "./Home/OrderIncrement";
import SizeList from "./Home/SizeList";
import { sizeList_DB, IncrementList_DB } from "./Home/databaseHome";
import OrderSize from "./Home/OrderSize";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [total, setTotal] = React.useState(0);

  const size_DB = [];
  const totalSize_DB = [];
  const [size, setSize] = React.useState([]);
  const [totalSize, setTotalSize] = React.useState(0);

  const increment_DB = [];
  const [increment, setIncrement] = React.useState([]);
  const [totalIncrement, setTotalIncrement] = React.useState(0);

  const [nameList, setNameList] = React.useState("");
  const [sizeNameList, setSizeNameList] = React.useState("");

  // ----------------------------------------------------------------------------------

  const showSize = (e, data) => {
    const TargetObject = data.filter((item) => {
      return item.name === e.target.innerText;
    });

    size_DB.push(...TargetObject);
    setSize(size_DB);

    setSizeNameList(size_DB[0].name);

    totalSize_DB.push(TargetObject[0].price);

    setTotalSize(totalSize_DB[0]);
    setTotal(totalSize_DB[0] + totalIncrement);
  };

  // ----------------------------------------------------------------------------------

  const showIncrement = (e, data) => {
    const TargetObject = data.filter((item) => {
      return item.name === e.target.innerText;
    });

    increment_DB.push(...increment);

    const targetName = TargetObject.map((item) => item.name).toString();
    const incrementNameList = increment.map((item) => item.name);

    if (incrementNameList.includes(targetName)) {
      const removeExistentItem = increment_DB.filter((item) => {
        return item.name !== targetName;
      });

      setIncrement(removeExistentItem);

      const FinalNameList = removeExistentItem.map((item) => item.name);

      setNameList(FinalNameList);

      console.log(FinalNameList);

      const incrementTotal = removeExistentItem.map((item) => {
        return item.price;
      });

      let finalValue;

      if (incrementTotal.length === 0) {
        finalValue = 0;
      } else {
        finalValue = incrementTotal.reduce((acc, value) => {
          return acc + value;
        });
      }

      setTotalIncrement(finalValue);
      setTotal(finalValue + totalSize);
    } else {
      increment_DB.push(...TargetObject);

      setIncrement(increment_DB);

      const FinalNameList = increment_DB.map((item) => item.name);

      setNameList(FinalNameList);

      const incrementTotal = increment_DB.map((item) => {
        return item.price;
      });

      const finalValue = incrementTotal.reduce((acc, value) => {
        return acc + value;
      });

      setTotalIncrement(finalValue);
      setTotal(finalValue + totalSize);
    }
  };

  // ----------------------------------------------------------------------------------

  const handleSizeListClick = (e) => {
    showSize(e, sizeList_DB);
  };

  const handleIncrementListClick = (e) => {
    showIncrement(e, IncrementList_DB);
  };

  const handleOrderClick = (e) => {
    navigate("/pedido");
  };

  // ----------------------------------------------------------------------------------

  return (
    <main className={`${styles.home} container`}>
      <div className={styles.firstBox}>
        <h2 className={styles.firstBoxTitle}>ESCOLHA O TAMANHO</h2>

        <SizeList
          sizeNameList={sizeNameList}
          sizeList_DB={sizeList_DB}
          onClick={handleSizeListClick}
        />

        <h3 className={styles.firstBoxTitle}>ADICIONAIS</h3>

        <IncrementList
          nameList={nameList}
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

        <button onClick={handleOrderClick} className={styles.secondBoxBtn}>
          Finalizar Pedido
        </button>
      </div>
    </main>
  );
};

export default Home;
