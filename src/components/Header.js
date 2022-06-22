import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={`${styles.header} container`}>
      <h1 onClick={() => navigate("/")}>AÇAÍ</h1>

      <nav>
        <ul className={styles.nav}>
          <li>SOBRE</li>
          <li>SAIR</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
