import React from "react";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderManager from "./components/OrderManager/OrderManager";
import { GlobalStorage } from "./GlobalContext";
import NewItem from "./components/CreateNewItem/NewItem";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedido" element={<OrderManager />} />
          <Route path="/pedido/:id" element={<NewItem />} />
        </Routes>
        <Footer />
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
