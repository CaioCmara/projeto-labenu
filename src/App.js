import Navbar from "./components/NavBar/Navbar";
import Cards from "./components/Cards.js/Cards";
import { useState } from "react";
import CarrinhoData from "./components/Carrinho/CarrinhoData";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);

  function addProduto(produto) {
    
    setCart([...cart, produto]);
    console.log(produto);
  }

  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Cards addProduto={addProduto} />
      ) : (
        <CarrinhoData setShow={setShow} cart={cart} setCart={setCart} />
      )}
      <Footer/> 
    </>
  );
}

export default App;
