import React from "react";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./components/Order/Order";
import { GlobalStorage } from "./GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pedido" element={<Order />} />
        </Routes>
        <Footer />
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
