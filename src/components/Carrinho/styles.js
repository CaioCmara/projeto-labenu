import styled from "styled-components";

export const CarrinhoContainer = styled.div`
 
 
  .carrinho {
    width: 60%;
    margin-top: 30px;
    margin: auto;
  }
  .carrinho_dentro img {
    width: 50px;
    height: 50px;
  }
  .cart_img {
    display: flex;
    width: 400px;
  } //teste
  .cart_img p {
    font-weight: bold;
    margin-left: 10px;
  }
  .carrinho_dentro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    border-bottom: 2px solid #869da0;
    padding-bottom: 5px;
  }
  .carrinho_dentro   button {
    padding: 5px 10px;
    font-weight: bold;
    margin-right: 5px;
     background-color: skyblue;
  }
  .carrinho_dentro   button {
    padding: 5px 10px;
    font-weight: bold;
    letter-spacing: 2px;
    border: none;
    outline: none;
    color: white;
    background-color: skyblue;
 
    border-radius: 5px;
    cursor: pointer;
  }
  .carrinho_dentro button:hover {
    background-color: #183b6f;
  }
  .carrinho_dentro   span {
    background-color: pink;
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 10px;
  }
  .valor_total{
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
  }
  .botao_voltar{
    font-size: 20px;
  }
  .botao_voltar:hover{
    background-color: orange;
  }

  `
