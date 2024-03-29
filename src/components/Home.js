import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    navigate("/pedido");
  };

  return (
    <section className={`${styles.container} container`}>
      <Helmet>
        <title>AÇAÍ</title>
      </Helmet>

      <p className={styles.message}>SEJA BEM VINDO!</p>

      <button onClick={handleClick} className={styles.button}></button>
    </section>
  );
};

export default Home;
