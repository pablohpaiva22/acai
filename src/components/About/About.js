import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={`${styles.container} container`}>
      <p>
        Sistema desenvolvido para auxiliar o lojista de açaí na emissão de novos
        pedidos.
      </p>
    </section>
  );
};

export default About;
