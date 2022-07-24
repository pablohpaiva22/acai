import React from "react";
import styles from "./About.module.css";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <section className={`${styles.container} container`}>
      <Helmet>
        <title>AÇAÍ | Sobre</title>
      </Helmet>
      <p>
        Sistema desenvolvido para auxiliar o lojista de açaí na emissão de novos
        pedidos.
      </p>
    </section>
  );
};

export default About;
