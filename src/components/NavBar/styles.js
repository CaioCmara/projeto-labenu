import styled from "styled-components";
<style>
  {" "}
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');{" "}
</style>;

export const CarrinhoContainer = styled.div`
  margin-top: 0;
  background-color: #f3f3f3;
  width: 100%;
  padding: 25px;
  border-bottom: outset 8px #869da0;
  border-radius: 5px;
  position: sticky;

  :hover {
    background: #acadae;
    transition-timing-function: linear;
    transition: 0.6s;
    transform: scale(1.1);
  }
  .nav_box {
    width: 80%;
    margin: auto; //teste
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 60px;
  }

  .nav_title {
    margin-left: 80px;
    font-size: 50px;
    font-weight: bold;
    color: #183b6f;
    cursor: pointer;
    font-family: "Rubik Mono One";
    text-decoration: underline;
  }
  .cart {
    cursor: pointer;
  }
  .cart span:nth-child(1) {
    font-size: 2rem;
    color: #183b6f;
  }
  .cart span:nth-child(2) {
    margin-left: -3px;
    background-color: red;
    color: white;
    font-weight: bolx;
    border-radius: 5px;
    position: relative;
    top: -15px;
  }
`;
