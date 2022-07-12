import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pedido");
  };

  return (
    <div className={`${styles.container} container`}>
      <button onClick={handleClick}>Começar</button>
    </div>
  );
};

export default Home;
