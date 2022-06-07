import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <h1>AÇAÍ</h1>

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
