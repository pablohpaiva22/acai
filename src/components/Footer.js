import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerBG}>
      <div className={`${styles.footer} container`}>
        Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
