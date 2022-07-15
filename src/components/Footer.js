import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerBG}>
      <footer className={`${styles.footer} container`}>
        Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Footer;
