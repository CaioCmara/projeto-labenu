import React from "react";
import { Container, PainelContainer } from "./Styles";

function Filtros(props) {
  function onChangeValorMax(event) {
    props.setValorMax(event.target.value);
  }

  const onChangeValorMin = (event) => {
    props.setValorMin(event.target.value);
  };

  const onChangeNome = (event) => {
    props.setBuscaNome(event.target.value);
  };

  const onChangeOrdenacao = (event) => {
    props.setOrdenaAlfabeto(event.target.value);
  }; //teste

  return (
    <>
      <PainelContainer>
        <div className="painel">
          <h1>
            <u>BE A CAPTAIN </u>
            Seja como eles...
          </h1>

          <img
            className="img"
            id="img1"
            src={
              "https://disneyplusbrasil.com.br/wp-content/uploads/2022/03/Han-Solo-Harrison-Ford.jpg"
            }
            width="400px"
            height="500px"
          />
          <img
            className="img"
            id="img2"
            src={
              "https://i.pinimg.com/736x/1b/ab/a8/1baba8fd4a7faf0070ec36bf2318d4db.jpg"
            }
            width="400px"
            height="600px"
          />
          <img
            className="img"
            id="img3"
            src={
              "https://w0.peakpx.com/wallpaper/253/776/HD-wallpaper-closeup-view-of-spike-spiegel-with-gun-cowboy-bebop.jpg"
            }
            width="400px"
            height="600px"
          />
          <img
            className="img"
            id="img4"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/1200px-Neil_Armstrong_pose.jpg"
            }
            width="460px"
            height="900px"
          />
        </div>
      </PainelContainer>
      <Container>
        <input
          className="pesquisa"
          type="text"
          placeholder="Encontre sua nave"
          value={props.buscaNome}
          onChange={onChangeNome}
        />
        <input
          className="valor"
          type="number"
          placeholder="Valor mínimo "
          value={props.valorMin}
          onChange={onChangeValorMin}
        />
        <input
          className="valor"
          type="number"
          placeholder="Valor máximo"
          value={props.valorMax}
          onChange={onChangeValorMax}
        />

        <select value={props.ordenaAlfabeto} onChange={onChangeOrdenacao}>
          <option value="">Ordenar</option>
          <option value="Crescente">Menor preço</option>
          <option value="Decrescente">Maior preço</option>
        </select>
      </Container>
    </>
  );
}

export default Filtros;
