import produtos from "../produtos/produtos.json";
import Filtros from "../Filtros/Filtros";
import { useState } from "react";
import { CardsContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Cards({ addProduto }) {
  const [valorMax, setValorMax] = useState("");
  const [valorMin, setValorMin] = useState("");
  const [buscaNome, setBuscaNome] = useState("");
  const [ordenaAlfabeto, setOrdenaAlfabeto] = useState("");

  return (
    <>
      <Filtros
        valorMin={valorMin}
        setValorMin={setValorMin}
        valorMax={valorMax}
        setValorMax={setValorMax}
        buscaNome={buscaNome}
        setBuscaNome={setBuscaNome}
        ordenaAlfabeto={ordenaAlfabeto}
        setOrdenaAlfabeto={setOrdenaAlfabeto}
      />

      <CardsContainer>
        <div className="cards">
          {produtos
            .filter((produto) => {
              if (valorMax === "" && valorMin === "") {
                return produto;
              } else if (produto.valor >= valorMin && valorMax === "") {
                return produto;
              } else if (produto.valor <= valorMax && valorMin === "") {
                return produto;
              } else if (
                produto.valor >= valorMin &&
                produto.valor <= valorMax
              ) {
                return produto;
              } //teste
            })
            .filter((produto) => {
              return produto.name
                .toLowerCase()
                .includes(buscaNome.toLocaleLowerCase());
            })

            .sort((a, b) => {
              if (ordenaAlfabeto === "Crescente") {
                return a.valor < b.valor ? -1 : 1;
              } else if (ordenaAlfabeto === "Decrescente") {
                return a.valor < b.valor ? 1 : -1;
              }
            })
            .map((produto) => (
              <div className="produtos" key={produto.id}>
                <img
                  className="atributo"
                  src={produto.imagem}
                  width="250px"
                  height="250px"
                />
                <p className="atributo">{produto.name}</p>
                <p className="atributo" id="valor_produto">
                  {" "}
                  R$:{produto.valor}
                </p>

                <button className="botao" onClick={() => addProduto(produto)}>
                <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                </button>
              </div>
            ))}
        </div>
      </CardsContainer>
    </> 
  );
}

export default Cards;
