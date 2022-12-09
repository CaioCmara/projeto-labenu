import styled from "styled-components";
<style> @import url('https://fonts.googleapis.com/css2?family=Livvic:wght@100&display=swap'); </style>

export const CardsContainer = styled.header`
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2px;
    margin-top: 30px;
  }
  .produtos {
    text-align: center;
    padding: 60px;
    margin: 10px;
    border: 1px solid #cccccc; 
    border-radius: 5px;
    box-shadow: 0 10px 6px -6px #777;
    font-family: 'Livvic', sans-serif;
    font-size: 20px;
    color: black;
  }
  .produtos:hover {
    transition-timing-function: linear;
    transition: 0.6s;
    transform: scale(1.1);
  }

  .botao {
  
    margin-top: 10px;
    font-size: 20px;
    padding: 15px;
    border-radius: 100%;
    background-color: gray;
    color: white;
 
  }

  .botao:hover {
    transition-timing-function: linear;
    transition: 0.6s;
    transform: scale(1.1);
    border: lightgreen 2px solid;
    color: lightgreen;
  } //teste

  #valor_produto {
    font-weight: bold;
    font-size: 20px;
    color: #808080;
  }

  .atributo {
    margin-bottom: 10px;
  }
`;
