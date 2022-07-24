import React from "react";
import styles from "./NewItem.module.css";
import IncrementList from "./NewItemComponents/IncrementList";
import IncrementDescription from "./NewItemComponents/IncrementDescription";
import SizeList from "./NewItemComponents/SizeList";
import SizeDescription from "./NewItemComponents/SizeDescription";
import { GlobalContext } from "../../GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../General/Button";
import { Helmet } from "react-helmet";

const NewItem = () => {
  const { showSize, showIncrement, total, createNewItem, size } =
    React.useContext(GlobalContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = React.useState(false);

  const handleSizeListClick = (e) => {
    showSize(e);
  };

  const handleIncrementListClick = (e) => {
    showIncrement(e);
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
    <section className={`${styles.home} container`}>
      <Helmet>
        <title>AÇAÍ | Novo</title>
      </Helmet>

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
        <span className={styles.totalValue}>{`R$ ${total},00`}</span>

        <Button onClick={handleOrderClick} />

        {error && <p className={styles.error}>Escolha um tamanho</p>}
      </div>
    </section>
  );
};

export default NewItem;
