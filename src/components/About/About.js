import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={`${styles.container} container`}>
      <p>
        Sistema desenvolvido para auxiliar o lojista de açaí na emissão de novos
        pedidos.
      </p>
    </div>
  );
};

export default About;
