import React from "react";
import styles from "./Print.module.css";
import { useNavigate } from "react-router-dom";
import Receit from "./Receit/Receit";
import { GlobalContext } from "../../GlobalContext";
import { Helmet } from "react-helmet";

const Print = () => {
  const navigate = useNavigate();
  const { finalInfo, setFinalInfo } = React.useContext(GlobalContext);
  const [btn, setBtn] = React.useState(false);

  React.useEffect(() => {
    setBtn(false);

    if (finalInfo.length > 3) {
      setBtn(true);
    }
  }, [finalInfo.length, setBtn]);

  const handleBackClick = () => {
    navigate("/pedido");
  };

  const handlePrintClick = () => {
    alert("Imprimindo...");

    setFinalInfo([]);
    navigate("/pedido");
  };

  return (
    <div className={`${styles.container} container`}>
      <Helmet>
        <title>AÇAÍ | Imprimir</title>
      </Helmet>

      <header className={styles.btnBox}>
        <button className={styles.button} onClick={handleBackClick}>
          Voltar
        </button>

        <button className={styles.button} onClick={handlePrintClick}>
          Imprimir
        </button>
      </header>

      <Receit />

      {btn && (
        <footer className={styles.btnBox}>
          <button className={styles.button} onClick={handleBackClick}>
            Voltar
          </button>

          <button className={styles.button} onClick={handlePrintClick}>
            Imprimir
          </button>
        </footer>
      )}
    </div>
  );
};

export default Print;
