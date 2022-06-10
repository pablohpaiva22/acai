import React from "react";
import styles from "./Home.module.css";
import AdditionalList from "./Home/AdditionalList";
import OrderDescription from "./Home/OrderDescription";
import SizeList from "./Home/SizeList";

const itemsList = [
  { name: "Aveia", price: 1.5 },
  { name: "Beijinho", price: 1.0 },
  { name: "Bis", price: 2 },
  { name: "Chocolate Branco", price: 1.5 },
  { name: "Chocolate", price: 1.5 },
  { name: "Coco Ralado", price: 1.5 },
  { name: "Diamante Negro", price: 1.5 },
  { name: "Leite Ninho", price: 1.5 },
  { name: "Gotas de chocolate", price: 1.5 },
  { name: "Granola", price: 1.5 },
  { name: "Granulado", price: 1.5 },
  { name: "Iogurte", price: 1.5 },
  { name: "Leite Condensado", price: 1.5 },
  { name: "Leite em pó", price: 1.5 },
  { name: "Negresco", price: 1.5 },
  { name: "Nutella", price: 1.5 },
  { name: "Ouro Branco", price: 1.5 },
  { name: "Paçoca", price: 1.5 },
  { name: "Prestígio", price: 1.5 },
  { name: "Sensação", price: 1.5 },
  { name: "Sonha do Valsa", price: 1.5 },
  { name: "Space Ball", price: 1.5 },
  { name: "Sucrilhos", price: 1.5 },
  { name: "Ovo Maltini", price: 1.5 },
];

const Home = () => {
  const arrayDescription = [];
  const arrayTotal = [];

  const [target, setTarget] = React.useState([]);
  const [soma, setSoma] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const handleClick = (e) => {
    const filtrar = itemsList.filter((item) => {
      return item.name === e.target.innerText;
    });

    arrayDescription.push(...target, ...filtrar);
    setTarget(arrayDescription);

    arrayTotal.push(...soma, filtrar[0].price);
    setSoma(arrayTotal);

    const valorFinal = arrayTotal.reduce((acc, value) => {
      return acc + value;
    });

    setTotal(valorFinal);
  };

  return (
    <main className={`${styles.home} container`}>
      <div className={styles.choose}>
        <h2 className={styles.title}>ESCOLHA O TAMANHO</h2>

        <SizeList />

        <h3 className={styles.title}>ADICIONAIS</h3>

        <AdditionalList list={itemsList} onClick={handleClick} />
      </div>

      <div className={styles.description}>
        <h2 className={styles.titleDescription}>Descrição do pedido</h2>

        <OrderDescription itemsArray={target} />

        <h3 className={styles.total}>TOTAL</h3>

        <p className={styles.valor}>{`R$ ${total}`}</p>

        <button className={styles.btn}>Finalizar Pedido</button>
      </div>
    </main>
  );
};

export default Home;
