import React from "react";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderManager from "./components/OrderManager/OrderManager";
import { GlobalStorage } from "./GlobalContext";
import NewItem from "./components/NewItem/NewItem";
import Print from "./components/Print/Print";
import About from "./components/About/About";
import Teste from "./components/Teste";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teste" element={<Teste testando="butão" />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/pedido" element={<OrderManager />} />
          <Route path="/pedido/:id" element={<NewItem />} />
          <Route path="/pedido/imprimir" element={<Print />} />
        </Routes>
        <Footer />
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
