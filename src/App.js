import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./Components/Order/Order";
import { GlobalStorage } from "./GlobalContext";
import NewItem from "./Components/NewItem/NewItem";
import Print from "./Components/Print/Print";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/acai" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/pedido" element={<Order />} />
          <Route path="/pedido/:id" element={<NewItem />} />
          <Route path="/pedido/imprimir" element={<Print />} />
        </Routes>
        <Footer />
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
