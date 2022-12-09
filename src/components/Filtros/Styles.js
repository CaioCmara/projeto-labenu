import styled from "styled-components";
<style>
  {" "}
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');{" "}
</style>;

export const Container = styled.header`
  margin-top: 10px;
  display: flex;
  gap: 16px;
  padding: 14px;
  border-bottom: none;
  justify-content: center;
  justify-items: center;
  background-color: #f3f3f3;
 
  .pesquisa { //teste
    width: 600px;
    border-radius: 10px;
    height: 40px;
    border: outset 1px black;
  }

  .valor {
    width: 100px;
    border-radius: 10px;
    border: solid 1px;
  }
`;

export const PainelContainer = styled.div`
  .img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    border: solid #183b6f 3px;
  }

  #img1 {
    grid-row: 1/4;
    grid-column: 3/4;
  }

  #img2 {
    grid-row: 2/7;
    grid-column: 1/2;
  }
  #img3 {
    grid-column: 3/4;
    grid-row: 4/7;
  }
  #img4 {
    grid-row: 1/7;
    grid-column: 2/3;
  }

  .painel {
    margin-top: 30px;
    padding: 40px;
    margin-left: 360px;
    justify-content: center;
    max-width: 60%;
    max-height: 40%;
    background-color: rgb(248, 240, 232, 0.9);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(6, 100px);
    grid-gap: 30px;
  }
  h1 {
    font-size: 35px;
    font-weight: bold;
    color: #183b6f;
    font-family: "Rubik Mono One";

    letter-spacing: 3px;
  }
`;
